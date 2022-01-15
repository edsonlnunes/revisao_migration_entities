import "dotenv/config";
import express from "express";
import cors from "cors";

import Database from "./connections/database";

// classes (entidades do banco)
import { User } from "./entities/User";
import { ProfileData } from "./entities/ProfileData";
import { Address } from "./entities/Address";
import { Purchase } from "./entities/Purchase";
import { PurchaseProduct } from "./entities/PurchaseProduct";

const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

app.post("/users", async (req, res) => {
  const { userBody, addressBody } = req.body;

  const profile = await ProfileData.create({
    name: userBody.name,
    email: userBody.email,
    document: userBody.document,
    phoneNumber: userBody.phoneNumber,
  }).save();

  if (addressBody) {
    await Address.create({
      street: addressBody.street,
      city: addressBody.city,
      state: addressBody.state,
      zipCode: addressBody.zipCode,
      uidProfileData: profile.uid,
    }).save();
  }

  await User.create({
    username: userBody.username,
    password: userBody.password,
    uidProfileData: profile.uid,
  }).save();

  return res.status(200).send("OK");
});

app.post("/purchases", async (req, res) => {
  const { uidUser, productsBody } = req.body;

  const purchase = await Purchase.create({
    date: new Date(),
    uidUser,
    amount: 100,
  }).save();

  for (const uidProduct of productsBody) {
    await PurchaseProduct.create({
      uidProduct: uidProduct,
      uidPurchase: purchase.uid,
    }).save();
  }

  return res.status(200).send("OK");
});

app.get("/users/:uid", async (req, res) => {
  const { uid } = req.params;

  /// === PODE SER FEITO ASSIM:
  const user = await User.findOne({
    where: {
      uid,
    },
    relations: [
      "profile",
      "profile.addresses",
      "purchases",
      "purchases.purchasesProducts",
      "purchases.purchasesProducts.product",
    ],
  });
  return res.status(200).json(user);

  /// === OU PODE SER FEITO ASSIM:
  // const user = await User.findOne({
  //   where: {
  //     uid,
  //   },
  //   relations: ["profile", "profile.addresses"],
  // });

  // const profile = await ProfileData.findOne({
  //   where: { uid: user?.uidProfileData },
  // });

  // const addresses = await Address.find({
  //   where: { uidProfileData: profile?.uid },
  // });

  // return res.status(200).json({ ...user, profile: { ...profile, addresses } });
});

/**
 * Este é o arquivo que abre a conexão do banco e inicia a aplicação e o servidor.
 */
new Database()
  .openConnection()
  .then(() => {
    app.listen(process.env.PORT || "3333", () =>
      console.log("server is running")
    );
  })
  .catch((err) => {
    console.log(err);
  });

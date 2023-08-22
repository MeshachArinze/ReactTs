// Requiring module
import bcrypt from "bcryptjs";

const saltRound = 12;
// const hashedPassword: undefined;

export async function HashPassword(password: string) {
  const hashPassword = await bcrypt
    .genSalt(saltRound)
    .then((salt) => {
      console.log("salt", salt);
      return bcrypt.hash(password, 12);
    })
    .then((hash) => {
      console.log("hash", hash);
    })
    .catch((err) => console.error(err));

  return hashPassword;
}

export async function verifyPassword(password: string, hashedPassword: string) {
  const isValid = await bcrypt.compare(password, hashedPassword);
  return isValid;
}

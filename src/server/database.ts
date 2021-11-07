import mongoose from "mongoose";

export const connect = async (
  dbUser: string,
  dbPassword: string,
  dbHost: string,
  dbPort: string,
  dbName: string
) => {
    try {
      await mongoose.connect(`mongodb://${dbUser}:${dbPassword}@${dbHost}:${dbPort}/${dbName}?authSource=admin`)
      console.log("database conected");
    } catch (e) {
        console.log(e);
    }
};

import mongoose from "mongoose";

const dbConnect = async () => {
    if (mongoose.connection.readyState >= 1) return;

    return mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
};

export default dbConnect;

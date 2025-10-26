import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    console.log('Mongo URI:', process.env.MONGODB_URI);

    if (!process.env.MONGODB_URI) {
      throw new Error('❌ MONGODB_URI is missing in environment variables.');
    }

    await mongoose.connect(process.env.MONGODB_URI);

    console.log('✅ MongoDB connected successfully.');

    mongoose.connection.on('disconnected', () => {
      console.log('⚠️ MongoDB disconnected.');
    });

    mongoose.connection.on('error', (err) => {
      console.error('❌ MongoDB connection error:', err);
    });
  } catch (error) {
    console.error('🚨 Error connecting to MongoDB:', error.message);
    process.exit(1);
  }
};

export default connectDB;

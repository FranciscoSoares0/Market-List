import mongoose from "mongoose";

const Schema = mongoose.Schema;

interface MarketList {
  title:String,
  items:[String],
}

const MarketListSchema = new Schema<MarketList>({
  title: String,
  items: [String],
});

const MarketListModel = mongoose.model<MarketList>("MarketList", MarketListSchema);

export default MarketListModel;
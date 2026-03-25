import Footer from "../components/Footer";
import Header from "../components/Header";
import { mediaData } from "../data/mediaData";
import MediaList from "../components/Media/MediaL";
export default function Media() {
  return (
    <div>
      <Header />
      <MediaList items={mediaData} />
      <Footer />
    </div>
  );
}

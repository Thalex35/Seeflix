import Footer from "../components/Footer";
import Header from "../components/Header";
import { mediaData } from "../data/mediaData";
import MediaList from "../components/Media/Medialist";
export default function Media() {
  return (
    <div>
      <Header />
      <MediaList items={mediaData} />
      <Footer />
    </div>
  );
}

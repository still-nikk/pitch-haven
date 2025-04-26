import { incrementViews } from "@/app/(actions)/action";
import Ping from "./Ping";
import { client } from "@/sanity/lib/client";
import { STARTUP_VIEWS_QUERY } from "@/sanity/lib/queries";

type StartupViews = {
  _id: string;
  views: number;
};

const View = async ({ id }: { id: string }) => {
  if (!id) {
    console.error("ID is undefined!");
    return null;
  }

  const { views: totalViews } = await client
    .withConfig({ useCdn: false })
    .fetch<StartupViews>(STARTUP_VIEWS_QUERY, { id });

  // Asynchronously update the view count without blocking rendering
  incrementViews(id);

  return (
    <div className="view-container">
      <div className="absolute -top-2 -right-2">
        <Ping />
      </div>
      <p className="view-text">
        <span className="font-black">
          {totalViews > 1 ? `${totalViews} views` : `${totalViews} view`}
        </span>
      </p>
    </div>
  );
};

export default View;

import { client } from "@/sanity/lib/client";
import { STARTUP_VIEWS_QUERY } from "@/sanity/lib/queries";
import Ping from "./Ping";
import { IncrementViews } from "./IncrementViews";

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

      {/* Add IncrementViews to update view count safely */}
      <IncrementViews id={id} />
    </div>
  );
};

export default View;

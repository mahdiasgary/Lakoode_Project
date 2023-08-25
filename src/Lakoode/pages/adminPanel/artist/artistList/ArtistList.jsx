import React, { useEffect, useState } from "react";
import "react-tooltip/dist/react-tooltip.css";
import { useGetArtisitListInAdminPanelQuery } from "../../../../redux/services/movieDatabase";
import AdminListItems from "../../../../common/adminPanel/AdminListItems";
import { adminArtistListTd, adminArtistListTh } from "../../../../constans";

const ArtistList = () => {
  const ArtistListInAdminPanelQuery = useGetArtisitListInAdminPanelQuery(
    {},
    { refetchOnMountOrArgChange: true }
  );
  const [search, setSearch] = useState("");
  const [thAndTdAdminArtistList, ] = useState([
    adminArtistListTh,
    adminArtistListTd,
  ]);

  return (
    <div className=" w-full">
      <div className="flex justify-center mt-20 mb-2">
        <div className="flex justify-between  min-w-[90vw] max-w-[90vw] md:min-w-[70vw] md:max-w-[70vw]">
          <div className="text-[23px] font-bold ">Artist List</div>
          <div>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              placeholder="search here .."
              className="h-[45px] w-[220px] rounded-2xl px-2 dark:bg-transparent border-2 dark:border-border outline-btn "
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full">
        <div className="dark:bg-[#1c1d21] bg-white  bg-opacity-40 overflow-x-auto min-w-[90vw] max-w-[90vw] md:min-w-[70vw] md:max-w-[70vw] rounded-2xl">
          <AdminListItems
            dataQuery={ArtistListInAdminPanelQuery}
            thAndTdAdminList={thAndTdAdminArtistList}
            search={search}
          />
        </div>
      </div>
    </div>
  );
};

export default ArtistList;

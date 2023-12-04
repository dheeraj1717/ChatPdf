import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { AiOutlineArrowRight } from "react-icons/ai";

const ChatPanel = () => {
  return (
    <div className="relative w-[40vw] border-2">
      <div className="absolute top-0">
        <div className="font-semibold text-[20px] ml-2">Chat</div>
      </div>

      <Tabs>
        <TabList className="flex gap-10 font-semibold">
          <Tab className="text-20px">Title 1</Tab>
          <Tab className="text-20px">Title 2</Tab>
        </TabList>

        <TabPanel>
          <div>Chat 1</div>
     
        </TabPanel>
        <TabPanel>
          <div>Chat 2</div>
        
        </TabPanel>
      </Tabs>
      <div className="bottom-2 flex justify-center w-full absolute">
                <input
                  className="border border-[#456fb8] p-2 text-[13px] focus:border-2 rounded-md rounded-r-none focus:outline-none  w-[90%]"
                  type="text"
                  placeholder="Ask any question..."
                />
                <button className="bg-[#1561e5] w-[40px] text-[20px] font-bold rounded-r-md">
                  <AiOutlineArrowRight className="text-white mx-auto" />
                </button>
              </div>
     
    </div>
  );
};

export default ChatPanel;
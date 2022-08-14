import React from "react";
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@mui/lab";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

import SquareCorner from "../../../../components/SquareCorner";
import { AboutInfo } from "../../../../utils/about";

interface IProps {
  title: string;
  info: AboutInfo[];
}

const AboutTab = ({ title, info }: IProps) => {
  return (
    <div className="text-white">
      <p className="text-2xl font-bold tracking-wider pl-1 text-white">
        {title}
      </p>
      <div>
        <Timeline>
          {info.map((element, i) => (
            <TimelineItem key={i}>
              <TimelineOppositeContent
                style={{
                  maxWidth: "1px",
                  paddingLeft: "0px",
                  paddingRight: "0px",
                }}
              />
              <TimelineSeparator>
                <TimelineDot sx={{ backgroundColor: "white" }} />
                <TimelineConnector sx={{ backgroundColor: "white" }} />
              </TimelineSeparator>
              <TimelineContent>
                <div className="w-full">
                  <div className="flex flex-col sm:flex-row justify-between mb-4">
                    <div>
                      <p className="text-2xl font-bold">{element.company}</p>
                      <p className="text-sm uppercase tracking-wider">
                        {element.title}
                      </p>
                    </div>
                    <div className="opacity-75">{element.date}</div>
                  </div>
                  {element.points && (
                    <SquareCorner className={`p-1 flex flex-col gap-4 ${i !== info.length - 1 ? "mb-12" : ""}`}>
                      <>
                        {element.points.map((point, j) => (
                          <div className="flex" key={j}>
                            <IoMdCheckmarkCircleOutline className="text-[#7cc5c3] min-w-[1.5rem] text-2xl mt-[2px] mr-1" />
                            {point}
                          </div>
                        ))}
                      </>
                    </SquareCorner>
                  )}
                </div>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    </div>
  );
};

export default AboutTab;

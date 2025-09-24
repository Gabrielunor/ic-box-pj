import { Button } from "@/components/ui/button";
import { useICBoxPJStore } from "@/lib/store";
import { HelpTopics } from "@/lib/store/types";
import { cn } from "@/lib/utils";
import { ReactNode, useEffect, useState } from "react";
import Recommendation from "./Topics/Recomendation";
import topics from "./Topics/topics.json";
import CloseIcon from "@/assets/icons/close.png";

const Help = () => {
  const isHelpActive = useICBoxPJStore((state) => state.isHelpActive);
  const helpTopic = useICBoxPJStore((state) => state.helpTopic);
  const setHelpTopic = useICBoxPJStore((state) => state.setHelpTopic);
  const toggleHelpActive = useICBoxPJStore((state) => state.toggleHelpActive);
  const version = useICBoxPJStore((state) => state.version);

  const [currentHelpTopic, setCurrentHelpTopic] = useState<ReactNode>();

  const handleClose = () => {
    toggleHelpActive();
  };

  useEffect(() => {
    setCurrentHelpTopic(
      {
        recommendation: <Recommendation variation={version} />,
      }[helpTopic!]
    );
  }, [helpTopic, version]);

  return (
    <div
      className={cn("absolute w-screen h-screen top-0 left-0 bg-black/60", {
        hidden: isHelpActive === false,
      })}
    >
      <div className="m-auto bg-white flex flex-col w-full h-full">
        <header className="p-8 h-[90px] border-broder border-b-[1px] flex justify-between">
          <p className="font-bold">
            AJUDA INTERCONNECT BOX - {version.toUpperCase()} PJ
          </p>
          <button onClick={handleClose} className="text-muted-foreground">
            <img src={CloseIcon} width={24} height={24} alt="Fechar/Close" />
          </button>
        </header>

        <div className="flex h-[490px]">
          {/* Menus */}
          <div className="flex flex-col help-menus overflow-y-auto overflow-x-hidden">
            {topics.map(({ title, topicId }, index) => (
              <Button
                key={index}
                variant={"ghost"}
                className={cn(
                  "font-medium items-left justify-start w-72 p-8 border-b-[1px]  rounded-none hover:bg-primary/15",
                  {
                    "bg-primary/20 text-primary": helpTopic === topicId,
                  }
                )}
                onClick={() => setHelpTopic(topicId as HelpTopics)}
              >
                {title}
              </Button>
            ))}
          </div>

          {/* Content */}
          <div className="w-3/4 p-8 overflow-y-auto overflow-x-hidden border-l-[1px] border-border">
            {currentHelpTopic}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;

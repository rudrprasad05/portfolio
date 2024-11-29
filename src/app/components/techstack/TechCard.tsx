import { Card, CardContent } from "@/components/ui/card";
import { TechStackType } from "@/types";
import React from "react";

const TechCard = (props: TechStackType) => {
  return (
    <Card className="flex items-center justify-start">
      <CardContent className="flex flex-row items-center p-4 gap-3">
        <div className="w-8 h-8">
          {React.cloneElement(props.icon, {
            className: "w-full h-full",
          })}
        </div>
        <div>
          <h3>{props.name}</h3>
          <p className="text-sm text-muted-foreground/70">{props.desc}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default TechCard;

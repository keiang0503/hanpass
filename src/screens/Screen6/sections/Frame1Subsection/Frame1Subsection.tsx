import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const Frame1Subsection = (): JSX.Element => {
  return (
    <section className="flex flex-col items-start gap-2.5 pt-8 pb-0 px-6 w-full">
      <Card className="w-full bg-blue-light border-0 rounded-2xl overflow-hidden">
        <CardContent className="flex items-center p-0">
          <div className="flex items-center justify-center gap-2 flex-1">
            <div className="flex flex-col items-start justify-center gap-1 px-4 py-3 flex-1">
              <h3 className="w-full text-title-16-SB-style text-primary-dark">
                궁금한 사항이 있으세요?
              </h3>

              <p className="w-full text-caption-title-13-r-style text-gray-dark">
                고객센터로 이동 &gt;
              </p>
            </div>
          </div>

          <div className="inline-flex items-center gap-2.5 px-4 py-22">
            <div className="w-10 h-10 aspect-[1] bg-[url(https://c.animaapp.com/emBHvnWi/img/free-icon-consulting-services-14274100-1-3@2x.png)] bg-cover bg-[50%_50%]" />
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

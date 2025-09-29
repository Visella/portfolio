"use client";

import { useEffect, useState } from "react";
import { Navbar } from "@/components/navbar";
import { BackgroundGrid } from "@/components/background-grid";
import { profile } from "@/data/profile";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { CenterTimeline } from "@/components/center-timeline";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function AboutPage() {
  const parse = (s: string) =>
    s
      .split(",")
      .map((x) => x.trim())
      .filter(Boolean);
  const skills = {
    Languages: parse(profile.skills.languages),
    Frontend: parse(profile.skills.frontend),
    Backend: parse(profile.skills.backend),
    Databases: parse(profile.skills.databases),
    Tools: parse(profile.skills.tools),
    AI: parse(profile.skills.ai),
  };
  const [viewImg, setViewImg] = useState<string | null>(null);
  useEffect(() => {
    const handler = (e: Event) => {
      // @ts-ignore
      setViewImg(e.detail as string);
    };
    window.addEventListener("open-achievement", handler as any);
    return () => window.removeEventListener("open-achievement", handler as any);
  }, []);

  const educationItems = (profile.education || []).map((e: any) => ({
    title: e.school,
    location: e.location,
    date: e.date,
    bullets: [
      e.degree ? `${e.degree}${e.gpa ? ` · GPA ${e.gpa}` : ""}` : "",
    ].filter(Boolean),
  }));

  return (
    <main className="min-h-[100dvh]">
      <BackgroundGrid />
      <Navbar />
      <section className="mx-auto w-full max-w-6xl px-4 pb-24 pt-24">
        {/* Centered page title */}
        <h1 className="text-center text-3xl font-semibold text-primary">
          About
        </h1>
        <p className="mt-2 text-center text-muted-foreground">
          Skills, journey, and achievements.
        </p>

        {/* Two-column: Skills beside Journey */}
        <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Journey */}
          <Card className="border-border/60 bg-card/60 backdrop-blur lg:col-span-2">
            <CardHeader>
              <CardTitle>Journey</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="experience" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger
                    value="experience"
                    className="data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:font-semibold"
                  >
                    Experience
                  </TabsTrigger>
                  <TabsTrigger
                    value="education"
                    className="data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:font-semibold"
                  >
                    Education
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="experience" className="mt-4">
                  <CenterTimeline items={profile.experience} />
                </TabsContent>

                <TabsContent value="education" className="mt-4">
                  <CenterTimeline items={educationItems} />
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          {/* Skills */}
          <Card className="border-border/60 bg-card/60 backdrop-blur lg:col-span-1">
            <CardHeader>
              <CardTitle>Skills</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {Object.entries(skills).map(([group, list]) => (
                <div key={group}>
                  <p className="mb-2 text-sm font-semibold text-primary">
                    {group}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {list.map((item) => (
                      <span key={group + item} className="chip">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Achievements */}
        <div className="mt-6 grid grid-cols-1 gap-6">
          <Card className="border-border/60 bg-card/60 backdrop-blur">
            <CardHeader>
              <CardTitle>Achievements</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {profile.achievements.map((a, i) => (
                <div
                  key={i}
                  className="grid grid-cols-[100px_1fr] gap-3 md:grid-cols-[140px_1fr]"
                >
                  <Image
                    src={a.image || "/placeholder.jpg"}
                    alt={`${a.title} image`}
                    width={140}
                    height={90}
                    className="h-[90px] w-full rounded-md border border-border/60 object-cover cursor-pointer img-hover"
                    onClick={() =>
                      (window as any).dispatchEvent(
                        new CustomEvent("open-achievement", {
                          detail: a.image || "/placeholder.jpg",
                        })
                      )
                    }
                  />
                  <div>
                    <p className="font-medium text-primary">{a.title}</p>
                    <p className="text-xs text-muted-foreground">
                      {a.place} · {a.date}
                    </p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </section>

      <Dialog open={!!viewImg} onOpenChange={() => setViewImg(null)}>
        <DialogContent className="w-[95vw] max-w-[95vw] h-[95vh] max-h-[95vh] p-0 bg-black/90 border border-white/10">
          {viewImg && (
            <div className="relative h-full w-full">
              <Image
                src={viewImg || "/placeholder.svg"}
                alt="Achievement full view"
                fill
                sizes="95vw"
                className="object-contain"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </main>
  );
}

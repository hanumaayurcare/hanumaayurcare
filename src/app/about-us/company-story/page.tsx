"use client";
import { useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ReactFlow,
  Node,
  Edge,
  ConnectionLineType,
  EdgeTypes,
  getBezierPath,
  EdgeProps,
  BaseEdge,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Calendar, Target, Eye, Sparkles, Leaf, ArrowRight, History } from "lucide-react";

// Milestone data
const milestones = [
  {
    id: "1",
    date: "1995",
    title: "Founded in Kerala",
    description: "Founded as a small traditional pharmacy by Dr. Rajesh Verma.",
  },
  {
    id: "2",
    date: "2005",
    title: "GMP Certification",
    description: "Achieved world-class manufacturing standards.",
  },
  {
    id: "3",
    date: "2012",
    title: "National Reach",
    description: "Expanded across India to serve millions of families.",
  },
  {
    id: "4",
    date: "2020",
    title: "Global Wellness",
    description: "Taking authentic Ayurveda to the international stage.",
  },
];

// Custom edge with button
const ButtonEdge: React.FC<EdgeProps> = ({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  markerEnd,
}) => {
  const [edgePath, labelX, labelY] = getBezierPath({
    sourceX,
    sourceY,
    targetX,
    targetY,
  });

  return (
    <>
      <BaseEdge
        path={edgePath}
        markerEnd={markerEnd}
        style={{ stroke: "#064e3b", strokeWidth: 3, opacity: 0.3 }}
      />
      <foreignObject width={40} height={40} x={labelX - 20} y={labelY - 20}>
        <div
          className="w-10 h-10 flex items-center justify-center bg-[#3f6b4c] rounded-full text-white shadow-lg cursor-default border-2 border-white"
        >
          <Leaf className="w-5 h-5" />
        </div>
      </foreignObject>
    </>
  );
};

const edgeTypes: EdgeTypes = {
  buttonedge: ButtonEdge,
};

// Nodes from milestones
const initialNodes: Node[] = milestones.map((milestone, index) => ({
  id: milestone.id,
  type: "default",
  data: {
    label: (
      <div className="p-1">
        <Badge variant="secondary" className="mb-2 bg-green-100 text-green-900 border-green-200">
          {milestone.date}
        </Badge>
        <p className="font-bold text-green-950 text-sm leading-tight">{milestone.title}</p>
        <p className="text-[10px] text-green-800/60 mt-1 line-clamp-2">{milestone.description}</p>
      </div>
    ),
  },
  position: { x: 300, y: 100 + index * 180 },
  style: {
    background: "#fff",
    border: "2px solid #e8f1ea",
    borderRadius: "16px",
    padding: "16px",
    width: 200,
    boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.05)",
  },
}));

// Edges connecting milestones
const initialEdges: Edge[] = milestones.slice(0, -1).map((_, index) => ({
  id: `e${milestones[index].id}-${milestones[index + 1].id}`,
  source: milestones[index].id,
  target: milestones[index].id === milestones[index + 1].id ? "" : milestones[index + 1].id,
  type: "buttonedge",
  animated: true,
}));

// Main component
const CompanyStory = () => {
  const [nodes] = useState<Node[]>(initialNodes);
  const [edges] = useState<Edge[]>(initialEdges);

  return (
    <div className="bg-[#fcfdfc] min-h-screen">
      {/* Unified Hero Section */}
      <section className="relative bg-[#f3f6f3] py-24 overflow-hidden border-b border-green-100">
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#e8f1ea] rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-800 text-sm font-medium mb-6">
              <History className="w-4 h-4" />
              <span>Our Legacy & Vision</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-green-950 mb-8 tracking-tight">
              Crafting <span className="text-[#3f6b4c]">A Legacy of Healing</span>
            </h1>
            <p className="text-xl text-green-900/70 max-w-3xl mx-auto leading-relaxed">
              From our humble beginnings in 1995 to becoming a global name in authentic Ayurveda, 
              discover the dedication behind every Hanuman Ayurcare formulation.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-16">
            <section>
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-green-100 rounded-2xl">
                  <Sparkles className="w-8 h-8 text-[#3f6b4c]" />
                </div>
                <h2 className="text-4xl font-bold text-green-950">Our Roots</h2>
              </div>
              <p className="text-xl text-green-900/80 leading-relaxed mb-6">
                Founded in 1995 by Dr. Rajesh Verma, our company began as a small
                pharmacy in Kerala, preparing traditional Ayurvedic formulations
                using time-honored methods passed down through generations.
              </p>
              <p className="text-lg text-green-700/70 leading-relaxed">
                What started with just ten formulations has now grown into a legacy of
                well-being, serving millions of people globally while staying true to our 
                original commitment of purity and authenticity.
              </p>
            </section>

            <Separator className="bg-green-100/50" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-green-100 shadow-sm hover:shadow-xl hover:border-green-300 transition-all duration-500 bg-white">
                <CardHeader className="pb-4">
                  <div className="p-3 bg-green-50 w-fit rounded-2xl mb-4">
                    <Eye className="w-6 h-6 text-[#3f6b4c]" />
                  </div>
                  <CardTitle className="text-2xl text-green-950">Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-green-800/70 leading-relaxed">
                    To make authentic Ayurvedic wellness accessible worldwide while
                    maintaining the highest standards of purity, efficacy, and
                    traditional wisdom.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-green-100 shadow-sm hover:shadow-xl hover:border-green-300 transition-all duration-500 bg-white">
                <CardHeader className="pb-4">
                  <div className="p-3 bg-amber-50 w-fit rounded-2xl mb-4">
                    <Target className="w-6 h-6 text-amber-700" />
                  </div>
                  <CardTitle className="text-2xl text-green-950">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {[
                      "Preserving ancient knowledge with modern standards",
                      "Ethical and sustainable ingredient sourcing",
                      "Global education on genuine Ayurveda",
                      "Innovative tradition-based products"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-green-500 mt-2 shrink-0" />
                        <span className="text-green-800/70 text-sm leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Milestones Timeline */}
            <section className="pt-12">
              <div className="flex items-center gap-4 mb-10">
                <div className="p-3 bg-green-100 rounded-2xl">
                  <Calendar className="w-8 h-8 text-[#3f6b4c]" />
                </div>
                <h3 className="text-4xl font-bold text-green-950">Milestones</h3>
              </div>
              
              <Card className="border-green-100 overflow-hidden bg-white shadow-2xl shadow-green-900/5 border-2">
                <div className="h-[700px] w-full bg-[#f8fafc]/30">
                  <ReactFlow
                    nodes={nodes}
                    edges={edges}
                    edgeTypes={edgeTypes}
                    connectionLineType={ConnectionLineType.Bezier}
                    fitView
                    nodesDraggable={false}
                    nodesConnectable={false}
                    zoomOnScroll={false}
                  />
                </div>
              </Card>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 space-y-10">
            <Card className="bg-[#3f6b4c] text-white border-none shadow-2xl relative overflow-hidden">
              <div className="absolute -bottom-10 -right-10 opacity-10">
                <Leaf className="w-40 h-40" />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">Core Values</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 relative z-10">
                <p className="text-green-50/80 text-lg italic leading-relaxed">
                  "Ayurveda is not just a medicine, it's a way of life that celebrates
                  the harmony between nature and humans."
                </p>
                <Separator className="bg-white/20" />
                <div className="space-y-4">
                   <div className="flex justify-between items-center bg-white/10 p-3 rounded-xl border border-white/5">
                    <span className="text-sm uppercase tracking-wider font-medium">Established</span>
                    <span className="font-bold text-[#f2d29b] text-lg">1995</span>
                  </div>
                  <div className="flex justify-between items-center bg-white/10 p-3 rounded-xl border border-white/5">
                    <span className="text-sm uppercase tracking-wider font-medium">Experts</span>
                    <span className="font-bold text-[#f2d29b] text-lg">50+ Vaidyas</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl group border-4 border-white">
              <Image 
                src="/images/traditional-prep.jpg" 
                alt="Traditional preparation"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-950/80 via-transparent to-transparent flex flex-col justify-end p-8">
                <Badge className="w-fit mb-4 bg-[#f2d29b] text-green-950 hover:bg-[#f2d29b]">Legacy</Badge>
                <p className="text-white text-lg font-bold">Authentic preparation methods preserved for decades.</p>
              </div>
            </div>

            <Button asChild className="w-full h-16 rounded-2xl bg-[#3f6b4c] hover:bg-[#2d4d37] text-xl font-bold shadow-xl transition-all group">
              <Link href="/about-us/heritage">
                Explore Our Heritage
                <ArrowRight className="w-6 h-6 ml-2 group-hover:translate-x-2 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyStory;

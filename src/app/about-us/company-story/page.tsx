"use client";
import { useState, useCallback } from "react";
import Image from "next/image";
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
import { Calendar, Target, Eye, Sparkles } from "lucide-react";

// Milestone data
const milestones = [
  {
    id: "1",
    date: "1995",
    title: "Founded in Kerala",
    description: "Founded as a small Ayurvedic pharmacy in Kerala.",
  },
  {
    id: "2",
    date: "2005",
    title: "First GMP Certification",
    description: "First GMP certification achieved.",
  },
  {
    id: "3",
    date: "2012",
    title: "National Expansion",
    description: "Expanded to national distribution.",
  },
  {
    id: "4",
    date: "2020",
    title: "International Expansion",
    description: "Began expanding internationally.",
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

  const handleClick = useCallback(() => {
    alert(`Edge ${id} clicked! 🎉`);
  }, [id]);

  return (
    <>
      <BaseEdge
        path={edgePath}
        markerEnd={markerEnd}
        style={{ stroke: "#b91c1c", strokeWidth: 2 }}
      />
      <foreignObject width={40} height={40} x={labelX - 20} y={labelY - 20}>
        <div
          role="button"
          tabIndex={0}
          onClick={handleClick}
          onKeyDown={(e) => e.key === "Enter" && handleClick()}
          className="w-10 h-10 flex items-center justify-center bg-amber-600 rounded-full text-white text-xs cursor-pointer shadow-lg hover:bg-amber-700 transition"
        >
          ✨
        </div>
      </foreignObject>
    </>
  );
};

const edgeTypes: EdgeTypes = {
  buttonedge: ButtonEdge,
};

// Styling for milestone nodes
// const nodeStyle = {
//   background: "#f8fafc",
//   border: "1px solid #ddd",
//   borderRadius: "8px",
//   padding: "15px",
//   width: 220,
// };

// Nodes from milestones
const initialNodes: Node[] = milestones.map((milestone, index) => ({
  id: milestone.id,
  type: "default",
  data: {
    label: (
      <div className="p-1">
        <Badge variant="outline" className="mb-2 border-amber-200 text-amber-900 bg-amber-50">
          {milestone.date}
        </Badge>
        <p className="font-bold text-amber-950 text-sm leading-tight">{milestone.title}</p>
        <p className="text-[10px] text-amber-900/60 mt-1 line-clamp-2">{milestone.description}</p>
      </div>
    ),
  },
  position: { x: 300, y: 100 + index * 180 },
  style: {
    background: "#fff",
    border: "1px solid #fde68a",
    borderRadius: "12px",
    padding: "12px",
    width: 200,
    boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
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
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[32rem] overflow-hidden">
        <Image
          src="/images/about-history.jpg"
          alt="Our History"
          fill
          priority
          className="object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-amber-950/80 via-amber-950/20 to-transparent" />
        
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <div className="max-w-3xl transform transition-all duration-700 translate-y-0 opacity-100">
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 drop-shadow-2xl tracking-tighter">
              Our <span className="text-amber-400">Story</span>
            </h1>
            <p className="text-xl md:text-2xl text-amber-50 font-medium leading-relaxed drop-shadow-lg max-w-2xl mx-auto">
              A journey of healing, tradition, and innovation spanning over three decades.
            </p>
            <div className="mt-10">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white rounded-full px-8 py-6 text-lg shadow-xl shadow-amber-950/20">
                Explore Our Heritage
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-12">
            <section>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-amber-100 rounded-lg">
                  <Sparkles className="w-6 h-6 text-amber-700" />
                </div>
                <h2 className="text-3xl font-bold text-amber-950">Our Humble Beginnings</h2>
              </div>
              <p className="text-lg text-amber-900/80 leading-relaxed">
                Founded in 1995 by Dr. Rajesh Verma, our company began as a small
                pharmacy in Kerala, preparing traditional Ayurvedic formulations
                using time-honored methods passed down through generations. What
                started with just ten formulations has now grown into a legacy of
                well-being.
              </p>
            </section>

            <Separator className="bg-amber-100" />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-amber-100 shadow-sm hover:shadow-md transition-all">
                <CardHeader className="pb-2">
                  <div className="p-2 bg-lime-100 w-fit rounded-lg mb-4">
                    <Eye className="w-5 h-5 text-lime-700" />
                  </div>
                  <CardTitle className="text-2xl text-amber-950">Our Vision</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-amber-900/70 leading-relaxed">
                    To make authentic Ayurvedic wellness accessible worldwide while
                    maintaining the highest standards of purity, efficacy, and
                    traditional wisdom.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-amber-100 shadow-sm hover:shadow-md transition-all">
                <CardHeader className="pb-2">
                  <div className="p-2 bg-amber-100 w-fit rounded-lg mb-4">
                    <Target className="w-5 h-5 text-amber-700" />
                  </div>
                  <CardTitle className="text-2xl text-amber-950">Our Mission</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {[
                      "Preserving ancient knowledge with modern standards",
                      "Ethical and sustainable ingredient sourcing",
                      "Global education on genuine Ayurveda",
                      "Innovative tradition-based products"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                        <span className="text-amber-900/70 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Milestones Timeline */}
            <section className="pt-8">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-2 bg-amber-100 rounded-lg">
                  <Calendar className="w-6 h-6 text-amber-700" />
                </div>
                <h3 className="text-3xl font-bold text-amber-950">Our Growth Journey</h3>
              </div>
              
              <Card className="border-amber-100 overflow-hidden bg-amber-50/30">
                <div className="h-[600px] w-full">
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

          {/* Sidebar/Callouts */}
          <div className="lg:col-span-4 space-y-8">
            <Card className="bg-amber-900 text-amber-50 border-none">
              <CardHeader>
                <CardTitle className="text-xl">Legacy of Trust</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-amber-50/80 text-sm italic">
                  "Ayurveda is not just a medicine, it's a way of life that celebrates
                  the harmony between nature and humans."
                </p>
                <Separator className="bg-amber-800" />
                <div className="flex justify-between items-center text-xs">
                  <span>ESTABLISHED</span>
                  <span className="font-bold text-amber-400">1995</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span>EXPERTS</span>
                  <span className="font-bold text-amber-400">50+ VAIDYAS</span>
                </div>
              </CardContent>
            </Card>

            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl">
              <Image 
                src="/images/traditional-prep.jpg" 
                alt="Traditional preparation"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <p className="text-white text-sm font-medium">Authentic preparation methods preserved since 1995.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyStory;

"use client"

import { motion } from "framer-motion"
import { skills } from "@/data/skills"

const SIZE = 52
const HALF = SIZE / 2

// Staggered bottom offsets — creates the "scattered on floor" depth illusion
const floorOffsets = [8, 32, 4, 20, 12, 28, 0]

const face: React.CSSProperties = {
  position: "absolute",
  width: SIZE,
  height: SIZE,
}

function Cube({ skill, index }: { skill: (typeof skills)[0]; index: number }) {
  return (
    <motion.div
      style={{ marginBottom: floorOffsets[index % floorOffsets.length] }}
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
    >
      <motion.div
        style={{ width: SIZE, height: SIZE, perspective: 320 }}
        animate={{ y: [0, -8, 0] }}
        whileHover={{ scale: 1.18 }}
        transition={{
          y: {
            duration: 3 + index * 0.25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.4,
            repeatType: "mirror",
          },
          scale: { type: "spring", stiffness: 350, damping: 22 },
        }}
      >
        <div
          style={{
            width: SIZE,
            height: SIZE,
            transformStyle: "preserve-3d",
            transform: "rotateX(-14deg) rotateY(22deg)",
            position: "relative",
          }}
        >
          {/* Front */}
          <div
            style={{
              ...face,
              transform: `translateZ(${HALF}px)`,
              background: "hsl(var(--card))",
              border: "1px solid hsl(var(--border))",
              borderRadius: 6,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <skill.icon style={{ color: skill.color, width: 22, height: 22 }} />
          </div>
          {/* Right */}
          <div
            style={{
              ...face,
              transform: `rotateY(90deg) translateZ(${HALF}px)`,
              background: "hsl(var(--muted) / 0.6)",
              border: "1px solid hsl(var(--border))",
              borderRadius: 6,
            }}
          />
          {/* Top */}
          <div
            style={{
              ...face,
              transform: `rotateX(90deg) translateZ(${HALF}px)`,
              background: "hsl(var(--muted) / 0.4)",
              border: "1px solid hsl(var(--border))",
              borderRadius: 6,
            }}
          />
        </div>
      </motion.div>
    </motion.div>
  )
}

export function SkillCubes() {
  return (
    <div className="flex items-end justify-between w-full px-2">
      {skills.map((skill, i) => (
        <Cube key={skill.name} skill={skill} index={i} />
      ))}
    </div>
  )
}

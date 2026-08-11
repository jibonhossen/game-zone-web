# Remove 3D scene from the hero

The hero previously rendered an animated three.js background (particle field, glow rings, drifting camera) via `@react-three/fiber`. We removed it and uninstalled the 3D stack (`three`, `@react-three/fiber`, `@react-three/drei`, `@types/three`).

We decided to drop the 3D effect for a calmer, lighter design: the hero now uses a flat sage canvas with a CSS-only lime radial glow and faint grid pattern. This shrinks the client bundle (the scene was loaded dynamically with `ssr: false`, adding a full WebGL payload) and speeds up first contentful paint. The visual depth was deemed worthwhile, but not at the cost of load time on low-end Android devices — the primary audience.

If 3D is ever desired again, note: (1) the packages must be reinstalled, and (2) this design deliberately left the static headline and single-CTA layout, so a future 3D layer should sit *behind* that structure, not replace it.
import React from "react";
import Particles from "react-particles-js"
import ParticleConfig from "../public/particle-config"

export default function ParticleBackground() {
    return (
        <Particles params={ParticleConfig} height="400px"></Particles>
    );
}

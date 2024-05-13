import React, { useCallback} from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import particlesConfig from "src/config/particles-config";

const ParticlesBackground = () => {
    const particlesInit = useCallback(async (engine) => {
        console.log("engine");
        await loadSlim(engine);
    }, []); 

    const particlesLoaded= useCallback(async (container) => {
        await console.log(container);
    }, [])

    return (
        <div>
            <Particles
                id="tsparticles"
                init={particlesInit}
                loaded={particlesLoaded}
                options={particlesConfig}
            />
        </div>
    );
};

export default ParticlesBackground;
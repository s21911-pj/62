import React from "react";

export default function Instructions({steps }) {

    const instr = steps.split('.');
    return (
        <div className="instructions">
            <h3>How to make dish:</h3>
            {instr.map((s, i) => (
                <p key={i}>{s}</p>
            ))}
        </div>
    );
}
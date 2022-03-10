import React from "react";
import { v4 as uuuidv4 } from 'uuid';

function chillHop() {
    return [
        {
            name: "Test song",
            cover: "",
            artist: "Test artist name",
            color: ["#205950", "#2ab3bf"],
            id: uuuidv4(),
            active: false,
            audio: 'https://mp3.chillhop.com/serve.php/?mp3=31516',
        }
    ]
}

export default chillHop;
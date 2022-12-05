import { Preset, Settings, generate_from_preset_str, default_settings } from "./text.js";
const KEY = "Bearer <your auth token here>";

async function test_text_gen() {
    let prompt = "I looked upon the battlefield, and felt a weariness deep within my heart. There was no going back now, not with the fall of Rome behind us and only Barbarians in front. I drew my sword, Icebreaker, and readied myself.";
    let genesis = {
        "presetVersion": 3,
        "name": "Genesis",
        "id": "a60a28c6-9643-49a1-91af-3b12c1654a47",
        "remoteId": "",
        "parameters": {
            "textGenerationSettingsVersion": 3,
            "temperature": 0.63,
            "max_length": 40,
            "min_length": 1,
            "top_k": 0,
            "top_p": 0.975,
            "top_a": 1,
            "typical_p": 1,
            "tail_free_sampling": 0.975,
            "repetition_penalty": 2.975,
            "repetition_penalty_range": 2048,
            "repetition_penalty_slope": 0.09,
            "repetition_penalty_frequency": 0,
            "repetition_penalty_presence": 0,
            "order": [
                {
                    "id": "top_p",
                    "enabled": true
                },
                {
                    "id": "top_k",
                    "enabled": true
                },
                {
                    "id": "tfs",
                    "enabled": true
                },
                {
                    "id": "temperature",
                    "enabled": true
                },
                {
                    "id": "top_a",
                    "enabled": false
                },
                {
                    "id": "typical_p",
                    "enabled": false
                }
            ]
        },
        "model": "euterpe-v2"
    };
    let preset = new Preset(genesis);
    preset.parameters.min_length = 40;
    preset.parameters.max_length = 200;
    let settings = default_settings();

    let text = await generate_from_preset_str(KEY, prompt, preset, settings);
    console.log(text);
}

test_text_gen();
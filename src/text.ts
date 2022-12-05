import fetch from "node-fetch";

const GPT2_BRACKETS: number[][] = [
    [58],
    [60],
    [90],
    [92],
    [685],
    [1391],
    [1782],
    [2361],
    [3693],
    [4083],
    [4357],
    [4895],
    [5512],
    [5974],
    [7131],
    [8183],
    [8351],
    [8762],
    [8964],
    [8973],
    [9063],
    [11208],
    [11709],
    [11907],
    [11919],
    [12878],
    [12962],
    [13018],
    [13412],
    [14631],
    [14692],
    [14980],
    [15090],
    [15437],
    [16151],
    [16410],
    [16589],
    [17241],
    [17414],
    [17635],
    [17816],
    [17912],
    [18083],
    [18161],
    [18477],
    [19629],
    [19779],
    [19953],
    [20520],
    [20598],
    [20662],
    [20740],
    [21476],
    [21737],
    [22133],
    [22241],
    [22345],
    [22935],
    [23330],
    [23785],
    [23834],
    [23884],
    [25295],
    [25597],
    [25719],
    [25787],
    [25915],
    [26076],
    [26358],
    [26398],
    [26894],
    [26933],
    [27007],
    [27422],
    [28013],
    [29164],
    [29225],
    [29342],
    [29565],
    [29795],
    [30072],
    [30109],
    [30138],
    [30866],
    [31161],
    [31478],
    [32092],
    [32239],
    [32509],
    [33116],
    [33250],
    [33761],
    [34171],
    [34758],
    [34949],
    [35944],
    [36338],
    [36463],
    [36563],
    [36786],
    [36796],
    [36937],
    [37250],
    [37913],
    [37981],
    [38165],
    [38362],
    [38381],
    [38430],
    [38892],
    [39850],
    [39893],
    [41832],
    [41888],
    [42535],
    [42669],
    [42785],
    [42924],
    [43839],
    [44438],
    [44587],
    [44926],
    [45144],
    [45297],
    [46110],
    [46570],
    [46581],
    [46956],
    [47175],
    [47182],
    [47527],
    [47715],
    [48600],
    [48683],
    [48688],
    [48874],
    [48999],
    [49074],
    [49082],
    [49146],
    [49946],
    [10221],
    [4841],
    [1427],
    [2602, 834],
    [29343],
    [37405],
    [35780],
    [2602],
    [50256],
];
const PILE_BRACKETS: number[][] = [
    [60],
    [62],
    [544],
    [683],
    [696],
    [880],
    [905],
    [1008],
    [1019],
    [1084],
    [1092],
    [1181],
    [1184],
    [1254],
    [1447],
    [1570],
    [1656],
    [2194],
    [2470],
    [2479],
    [2498],
    [2947],
    [3138],
    [3291],
    [3455],
    [3725],
    [3851],
    [3891],
    [3921],
    [3951],
    [4207],
    [4299],
    [4622],
    [4681],
    [5013],
    [5032],
    [5180],
    [5218],
    [5290],
    [5413],
    [5456],
    [5709],
    [5749],
    [5774],
    [6038],
    [6257],
    [6334],
    [6660],
    [6904],
    [7082],
    [7086],
    [7254],
    [7444],
    [7748],
    [8001],
    [8088],
    [8168],
    [8562],
    [8605],
    [8795],
    [8850],
    [9014],
    [9102],
    [9259],
    [9318],
    [9336],
    [9502],
    [9686],
    [9793],
    [9855],
    [9899],
    [9955],
    [10148],
    [10174],
    [10943],
    [11326],
    [11337],
    [11661],
    [12004],
    [12084],
    [12159],
    [12520],
    [12977],
    [13380],
    [13488],
    [13663],
    [13811],
    [13976],
    [14412],
    [14598],
    [14767],
    [15640],
    [15707],
    [15775],
    [15830],
    [16079],
    [16354],
    [16369],
    [16445],
    [16595],
    [16614],
    [16731],
    [16943],
    [17278],
    [17281],
    [17548],
    [17555],
    [17981],
    [18022],
    [18095],
    [18297],
    [18413],
    [18736],
    [18772],
    [18990],
    [19181],
    [20095],
    [20197],
    [20481],
    [20629],
    [20871],
    [20879],
    [20924],
    [20977],
    [21375],
    [21382],
    [21391],
    [21687],
    [21810],
    [21828],
    [21938],
    [22367],
    [22372],
    [22734],
    [23405],
    [23505],
    [23734],
    [23741],
    [23781],
    [24237],
    [24254],
    [24345],
    [24430],
    [25416],
    [25896],
    [26119],
    [26635],
    [26842],
    [26991],
    [26997],
    [27075],
    [27114],
    [27468],
    [27501],
    [27618],
    [27655],
    [27720],
    [27829],
    [28052],
    [28118],
    [28231],
    [28532],
    [28571],
    [28591],
    [28653],
    [29013],
    [29547],
    [29650],
    [29925],
    [30522],
    [30537],
    [30996],
    [31011],
    [31053],
    [31096],
    [31148],
    [31258],
    [31350],
    [31379],
    [31422],
    [31789],
    [31830],
    [32214],
    [32666],
    [32871],
    [33094],
    [33376],
    [33440],
    [33805],
    [34368],
    [34398],
    [34417],
    [34418],
    [34419],
    [34476],
    [34494],
    [34607],
    [34758],
    [34761],
    [34904],
    [34993],
    [35117],
    [35138],
    [35237],
    [35487],
    [35830],
    [35869],
    [36033],
    [36134],
    [36320],
    [36399],
    [36487],
    [36586],
    [36676],
    [36692],
    [36786],
    [37077],
    [37594],
    [37596],
    [37786],
    [37982],
    [38475],
    [38791],
    [39083],
    [39258],
    [39487],
    [39822],
    [40116],
    [40125],
    [41000],
    [41018],
    [41256],
    [41305],
    [41361],
    [41447],
    [41449],
    [41512],
    [41604],
    [42041],
    [42274],
    [42368],
    [42696],
    [42767],
    [42804],
    [42854],
    [42944],
    [42989],
    [43134],
    [43144],
    [43189],
    [43521],
    [43782],
    [44082],
    [44162],
    [44270],
    [44308],
    [44479],
    [44524],
    [44965],
    [45114],
    [45301],
    [45382],
    [45443],
    [45472],
    [45488],
    [45507],
    [45564],
    [45662],
    [46265],
    [46267],
    [46275],
    [46295],
    [46462],
    [46468],
    [46576],
    [46694],
    [47093],
    [47384],
    [47389],
    [47446],
    [47552],
    [47686],
    [47744],
    [47916],
    [48064],
    [48167],
    [48392],
    [48471],
    [48664],
    [48701],
    [49021],
    [49193],
    [49236],
    [49550],
    [49694],
    [49806],
    [49824],
    [50001],
    [50256],
    [0],
    [1],
];

export enum TextTokenizer {
    Gpt2,
    Pile,
    Gpt2Genji,
}
function tokenizer_to_brackets(tokenizer: TextTokenizer): number[][] {
    switch (tokenizer) {
        case TextTokenizer.Gpt2: return GPT2_BRACKETS;
        case TextTokenizer.Pile: return PILE_BRACKETS;
        case TextTokenizer.Gpt2Genji: return [];
    }
}

export enum Model {
    Sigurd = "6b-v4",
    Euterpe = "euterpe-v2",
    Krake = "krake-v2",

    Genji = "genji-jp-6b-v2",
    Snek = "genji-python-6b",

    HypeBot = "hypebot",
    Inline = "infillmodel",
}

export function model_tokenizer(model: Model): TextTokenizer {
    switch (model) {
        case Model.Sigurd:
        case Model.Euterpe:
        // TODO: is snek using gpt2 correct?
        case Model.Snek:
        case Model.HypeBot:
        case Model.Inline:
            return TextTokenizer.Gpt2;
        case Model.Krake:
            return TextTokenizer.Pile;
        case Model.Genji:
            return TextTokenizer.Gpt2Genji;
    }
}

export function model_repetition_penalty(_model: Model, penalty: number): number {
    // The penalties in the presets for the models what is sent over the network
    // to NovelAI, except for on one of the old models.
    // We require the model, but that is for if future models don't need this, or have an 
    // alternative version
    return (((penalty - 1.0) * (1.0 - 1.525)) / (1.0 - 8.0)) + 1.0;
}

export class Preset {
    public presetVersion: number;
    public name: string;
    public id: string;
    public remoteId: string;
    public parameters: PresetParameters;
    public model: Model;

    /**
     * Construct the preset from an object, likely parsed from json
     */
    constructor(data: { [key: string]: any }) {
        this.presetVersion = data.presetVersion;
        this.name = data.name;
        this.id = data.id;
        this.remoteId = data.remoteId;
        this.parameters = new PresetParameters(data);
        this.model = data.model;
    }

    as_settings(): { [key: string]: any } {
        const p = this.parameters;
        let data: { [key: string]: any } = {
            temperature: p.temperature,
            max_length: p.max_length,
            min_length: p.min_length,
            top_k: p.top_k,
            top_a: p.top_a,
            top_p: p.top_p,
            tail_free_sampling: p.tail_free_sampling,
            repetition_penalty_range: p.repetition_penalty_range,
            repetition_penalty_frequency: p.repetition_penalty_frequency,
            order: [],
        };
        // TODO: Should we keep `order` as a field if it is empty?
        for (let i = 0; i < p.order.length; i++) {
            let entry = p.order[i];
            if (entry.enabled) {
                let id = order_id_as_id(entry.id);
                data.order.push(id);
            } else {
                // Remove any disabled entries from the data
                let key = entry.id as string;
                delete data[key];
            }
        }

        if (p.length_penalty !== undefined) {
            data.length_penalty = p.length_penalty;
        }

        if (p.diversity_penalty !== undefined) {
            data.diversity_penalty = p.diversity_penalty;
        }

        if (p.eos_token_id !== undefined) {
            data.eos_token_id = p.eos_token_id;
        }

        data.repetition_penalty = model_repetition_penalty(this.model, p.repetition_penalty);

        return data;
    }
}

export class PresetParameters {
    public textGenerationSettingsVersion: number;

    public temperature: number;

    public max_length: number;
    public min_length: number;

    public top_k: number;
    public top_a: number;
    public top_p: number;
    public tail_free_sampling: number;
    public repetition_penalty: number;
    public repetition_penalty_range: number;
    public repetition_penalty_frequency: number;

    public length_penalty?: number;
    public diversity_penalty?: number;
    public order: Order[];
    public eos_token_id?: number;

    constructor(data: { [key: string]: any }) {
        this.textGenerationSettingsVersion = data.textGenerationSettingsVersion;
        this.temperature = data.temperature;
        this.max_length = data.max_length;
        this.min_length = data.min_length;
        this.top_k = data.top_k;
        this.top_a = data.top_a;
        this.top_p = data.top_p;
        this.tail_free_sampling = data.tail_free_sampling;
        this.repetition_penalty = data.repetition_penalty;
        this.repetition_penalty_range = data.repetition_penalty_range;
        this.repetition_penalty_frequency = data.repetition_penalty_frequency;

        // Only initialize optional fields if they are present in the data object.
        if (data.length_penalty !== undefined) {
            this.length_penalty = data.length_penalty;
        }
        if (data.diversity_penalty !== undefined) {
            this.diversity_penalty = data.diversity_penalty;
        }

        if (data.order !== undefined) {
            this.order = data.order;
        } else {
            this.order = [];
        }

        if (data.eos_token_id !== undefined) {
            this.eos_token_id = data.eos_token_id;
        }
    }
}

export interface Order {
    id: OrderId,
    enabled: boolean,
}
export enum OrderId {
    Temperature = "temperature",
    TopK = "top_k",
    TopP = "top_p",
    Tfs = "tfs",
    TopA = "top_a",
    TypicalP = "typical_p",
}
export function order_id_as_id(o: OrderId): number {
    if (o == OrderId.Temperature) {
        return 0;
    } else if (o == OrderId.TopK) {
        return 1;
    } else if (o == OrderId.TopP) {
        return 2;
    } else if (o == OrderId.Tfs) {
        return 3;
    } else if (o == OrderId.TopA) {
        return 4;
    } else if (o == OrderId.TypicalP) {
        return 5;
    } else {
        throw new Error("Invalid OrderId");
    }
}

export interface Settings {
    generate_until_sentence: boolean,
    num_logprobs: number,
    ban_brackets: boolean,
    bias_dinkus_asterism: boolean,
    // Note: only bans ambiguous genji tokens when the genji model is enabled
    ban_ambiguous_genji_tokens: boolean,
}
export function default_settings(): Settings {
    return {
        generate_until_sentence: false,
        num_logprobs: 10,
        ban_brackets: true,
        bias_dinkus_asterism: false,
        ban_ambiguous_genji_tokens: true,
    };
}
interface RealizedSettings {
    generate_until_sentence: boolean,
    num_logprobs: number,
    bad_word_ids: number[][],
    logit_bias_exp: number[],
    return_full_text: boolean,
    use_string: boolean,
    use_cache: boolean,
}
function settings_into_realized(settings: Settings, tokenizer: TextTokenizer): RealizedSettings {
    let realized: RealizedSettings = {
        generate_until_sentence: settings.generate_until_sentence,
        num_logprobs: settings.num_logprobs,
        bad_word_ids: [],
        logit_bias_exp: [],
        return_full_text: false,
        // FIXME: We currently limit ourselves to getting strings from the api
        // because tokenizers are annoying
        use_string: true,
        use_cache: false,
    };

    if (settings.ban_brackets) {
        realized.bad_word_ids = tokenizer_to_brackets(tokenizer);
    }

    // TODO: ban ambiguous genji tokens

    if (settings.bias_dinkus_asterism) {
        // TODO
    }

    return realized
}

export type Prefix = KrakePrefix | EuterpePrefix | string;
export enum KrakePrefix {
    NineteenthCenturyRomance = "theme_19thcenturyromance",
    // TODO: fill this out
}
export enum EuterpePrefix {
    // TODO: Fill this out
}

export async function generate_from_preset_str(
    api_header: string,
    prompt: string,
    preset: Preset,
    settings: Settings,
    prefix?: Prefix,
): Promise<string> {
    let params: any = {};

    let preset_params = preset.as_settings();
    let realized = settings_into_realized(settings, model_tokenizer(preset.model));

    Object.assign(params, preset_params);
    Object.assign(params, realized);

    if (prefix) {
        params["prefix"] = prefix;
    } else {
        params["prefix"] = "vanilla";
    }

    // TODO: nai-api does a no_logprobs setting
    // TODO: support bad_words parameter
    // TODO: support biases parameter

    // Delete options that return an unknown error

    let rep_slope = params["repetition_penalty_slope"];
    if (typeof rep_slope === "number") {
        if (rep_slope === 0.0) {
            delete params["repetition_penalty_slope"];
        }
    }

    let bad = params["bad_word_ids"];
    if (Array.isArray(bad)) {
        if (bad.length === 0) {
            delete params["bad_word_ids"];
        }
    } else {
        delete params["bad_word_ids"];
    }

    // TODO: make this configurable
    delete params["num_logprobs"];

    return await generate_str(api_header, prompt, preset.model, params);
}

const TEXT_API_URL = "https://api.novelai.net/ai/generate";
async function generate_str(api_header: string, prompt: string, model: Model, params: object): Promise<string> {
    let body = JSON.stringify({
        input: prompt,
        model: model,
        parameters: params,
    });
    let resp = await fetch(TEXT_API_URL, {
        method: "POST",
        body,
        headers: {
            'Authorization': api_header,
            'Content-Type': 'application/json',
            'accept': 'application/json',
        }
    });

    let data: any = await resp.json();
    if (data.statusCode === 401) {
        throw new Error(data.message);
    } else if (data.error) {
        throw new Error(data.error);
    } else {
        return data.output;
    }
}
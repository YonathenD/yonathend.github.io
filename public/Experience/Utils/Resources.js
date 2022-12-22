import * as THREE from "three";

import {EventEmitter} from "events";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader.js";
import Experience from "../Experience.js";

export default class Resources extends EventEmitter {
    constructor(assets) {
        super();
        this.experience = new Experience();
        this.renderer = this.experience.renderer;

        this.assets = assets;
        
        this.items = {};
        this.queue = this.assets.length;
        this.loaded = 0;

        this.setLoaders();
        this.startLoading();
    }

    //Set up view loaders
    setLoaders() {
        this.loaders = {};
        this.loaders.gltfLoader = new GLTFLoader();
        this.loaders.dracoLoader = new DRACOLoader();
        this.loaders.dracoLoader.setDecoderPath("/draco/");
        this.loaders.gltfLoader.setDRACOLoader(this.loaders.dracoLoader);
    }

    //Start loading my room glb model from assets.js
    startLoading() {
        for(const asset of this.assets) {
            if (asset.type==="glbModel") {
               this.loaders.gltfLoader.load(asset.path, (file) => {
                    this.singleAssetLoaded(asset, file);
               });
            }
        }
    }

    //Load each solid within my room glb model
    singleAssetLoaded(asset, file) {
        this.items[asset.name] = file;
        this.loaded++;
        
        if (this.loaded === this.queue) {
            this.emit("ready");
        }
    }

}
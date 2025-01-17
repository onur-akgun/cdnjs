"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var browser_util_1 = require("./browser_util");
var contrib = require("./contrib");
exports.contrib = contrib;
var xhr_dataset = require("./data/xhr-dataset");
exports.xhr_dataset = xhr_dataset;
var environment = require("./environment");
exports.environment = environment;
var environment_1 = require("./environment");
var gpgpu_util = require("./kernels/webgl/gpgpu_util");
exports.gpgpu_util = gpgpu_util;
var webgl_util = require("./kernels/webgl/webgl_util");
exports.webgl_util = webgl_util;
var conv_util = require("./ops/conv_util");
exports.conv_util = conv_util;
var test_util = require("./test_util");
exports.test_util = test_util;
var util = require("./util");
exports.util = util;
var version_1 = require("./version");
exports.version_core = version_1.version;
var checkpoint_loader_1 = require("./data/checkpoint_loader");
exports.CheckpointLoader = checkpoint_loader_1.CheckpointLoader;
var dataset_1 = require("./data/dataset");
exports.InMemoryDataset = dataset_1.InMemoryDataset;
var input_provider_1 = require("./data/input_provider");
exports.InCPUMemoryShuffledInputProviderBuilder = input_provider_1.InCPUMemoryShuffledInputProviderBuilder;
exports.InGPUMemoryShuffledInputProviderBuilder = input_provider_1.InGPUMemoryShuffledInputProviderBuilder;
var xhr_dataset_1 = require("./data/xhr-dataset");
exports.XhrDataset = xhr_dataset_1.XhrDataset;
var doc_1 = require("./doc");
exports.doc = doc_1.doc;
var environment_2 = require("./environment");
exports.ENV = environment_2.ENV;
exports.Environment = environment_2.Environment;
var backend_cpu_1 = require("./kernels/backend_cpu");
exports.MathBackendCPU = backend_cpu_1.MathBackendCPU;
var backend_webgl_1 = require("./kernels/backend_webgl");
exports.MathBackendWebGL = backend_webgl_1.MathBackendWebGL;
var gpgpu_context_1 = require("./kernels/webgl/gpgpu_context");
exports.GPGPUContext = gpgpu_context_1.GPGPUContext;
var adadelta_optimizer_1 = require("./optimizers/adadelta_optimizer");
exports.AdadeltaOptimizer = adadelta_optimizer_1.AdadeltaOptimizer;
var adagrad_optimizer_1 = require("./optimizers/adagrad_optimizer");
exports.AdagradOptimizer = adagrad_optimizer_1.AdagradOptimizer;
var adam_optimizer_1 = require("./optimizers/adam_optimizer");
exports.AdamOptimizer = adam_optimizer_1.AdamOptimizer;
var adamax_optimizer_1 = require("./optimizers/adamax_optimizer");
exports.AdamaxOptimizer = adamax_optimizer_1.AdamaxOptimizer;
var momentum_optimizer_1 = require("./optimizers/momentum_optimizer");
exports.MomentumOptimizer = momentum_optimizer_1.MomentumOptimizer;
var optimizer_1 = require("./optimizers/optimizer");
exports.Optimizer = optimizer_1.Optimizer;
var rmsprop_optimizer_1 = require("./optimizers/rmsprop_optimizer");
exports.RMSPropOptimizer = rmsprop_optimizer_1.RMSPropOptimizer;
var sgd_optimizer_1 = require("./optimizers/sgd_optimizer");
exports.SGDOptimizer = sgd_optimizer_1.SGDOptimizer;
var tensor_1 = require("./tensor");
exports.Tensor = tensor_1.Tensor;
exports.TensorBuffer = tensor_1.TensorBuffer;
exports.variable = tensor_1.variable;
exports.Variable = tensor_1.Variable;
var types_1 = require("./types");
exports.Rank = types_1.Rank;
var weights_loader_1 = require("./weights_loader");
exports.loadWeights = weights_loader_1.loadWeights;
__export(require("./ops/ops"));
__export(require("./train"));
__export(require("./globals"));
exports.setBackend = environment_1.Environment.setBackend;
exports.getBackend = environment_1.Environment.getBackend;
exports.memory = environment_1.Environment.memory;
exports.nextFrame = browser_util_1.BrowserUtil.nextFrame;

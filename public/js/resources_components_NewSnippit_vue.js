"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([
    ["resources_components_NewSnippit_vue"],
    {
        /***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/NewSnippit.vue?vue&type=script&lang=js":
            /*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/NewSnippit.vue?vue&type=script&lang=js ***!
  \*************************************************************************************************************************************************************************************************/
            /***/ (
                __unused_webpack_module,
                __webpack_exports__,
                __webpack_require__
            ) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                        /* harmony export */ default: () =>
                            __WEBPACK_DEFAULT_EXPORT__,
                        /* harmony export */
                    }
                );
                /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
                    {
                        name: "newSnippit",
                        data: function data() {
                            return {
                                imgFile: "",
                            };
                        },
                        props: [
                            "img",
                            "title",
                            "command",
                            "alt",
                            "isModal",
                            "id",
                        ],
                        emits: ["modalChange", "imgFile"],
                        methods: {
                            dropFile: function dropFile(e) {
                                e.preventDefault();

                                if (this.id === "snippit") {
                                    this.imgFile = e.dataTransfer.files;
                                    e.currentTarget.classList.remove(
                                        "onFileHover"
                                    );
                                    this.$emit("modalChange", this.id);
                                    this.$emit("imgFile", this.imgFile);
                                }
                            },
                            onHover: function onHover(e) {
                                e.preventDefault();

                                if (this.id === "snippit") {
                                    e.currentTarget.classList.add(
                                        "onFileHover"
                                    );
                                }
                            },
                            onLeave: function onLeave(e) {
                                e.preventDefault();
                                e.currentTarget.classList.remove("onFileHover");
                            },
                            onClick: function onClick(e) {
                                if (this.id === "note")
                                    this.$emit("modalChange", "note");
                            },
                        },
                    };

                /***/
            },

        /***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/NewSnippit.vue?vue&type=template&id=13d8130a":
            /*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/NewSnippit.vue?vue&type=template&id=13d8130a ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
            /***/ (
                __unused_webpack_module,
                __webpack_exports__,
                __webpack_require__
            ) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                        /* harmony export */ render: () => /* binding */ render,
                        /* harmony export */
                    }
                );
                /* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ =
                    __webpack_require__(
                        /*! vue */ "./node_modules/vue/dist/vue.esm-bundler.js"
                    );

                var _hoisted_1 = ["src", "alt"];
                var _hoisted_2 = {
                    class: "noPointer",
                };
                var _hoisted_3 = {
                    class: "noPointer",
                };
                function render(_ctx, _cache, $props, $setup, $data, $options) {
                    return (
                        (0, vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(),
                        (0,
                        vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(
                            "div",
                            {
                                onClick:
                                    _cache[0] ||
                                    (_cache[0] = function () {
                                        return (
                                            $options.onClick &&
                                            $options.onClick.apply(
                                                $options,
                                                arguments
                                            )
                                        );
                                    }),
                                onDrop:
                                    _cache[1] ||
                                    (_cache[1] = function () {
                                        return (
                                            $options.dropFile &&
                                            $options.dropFile.apply(
                                                $options,
                                                arguments
                                            )
                                        );
                                    }),
                                onDragleave:
                                    _cache[2] ||
                                    (_cache[2] = function () {
                                        return (
                                            $options.onLeave &&
                                            $options.onLeave.apply(
                                                $options,
                                                arguments
                                            )
                                        );
                                    }),
                                onDragenter:
                                    _cache[3] ||
                                    (_cache[3] = function () {
                                        return (
                                            $options.onHover &&
                                            $options.onHover.apply(
                                                $options,
                                                arguments
                                            )
                                        );
                                    }),
                                class: "main-card",
                            },
                            [
                                (0,
                                vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(
                                    "img",
                                    {
                                        class: "noPointer",
                                        src: $props.img,
                                        alt: $props.alt,
                                    },
                                    null,
                                    8,
                                    /* PROPS */
                                    _hoisted_1
                                ),
                                (0,
                                vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(
                                    "h2",
                                    _hoisted_2,
                                    (0,
                                    vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(
                                        $props.title
                                    ),
                                    1
                                    /* TEXT */
                                ),
                                (0,
                                vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(
                                    "p",
                                    _hoisted_3,
                                    (0,
                                    vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(
                                        $props.command
                                    ),
                                    1
                                    /* TEXT */
                                ),
                            ],
                            32
                            /* HYDRATE_EVENTS */
                        )
                    );
                }

                /***/
            },

        /***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/NewSnippit.vue?vue&type=style&index=0&id=13d8130a&lang=css":
            /*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/NewSnippit.vue?vue&type=style&index=0&id=13d8130a&lang=css ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************/
            /***/ (module, __webpack_exports__, __webpack_require__) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                        /* harmony export */ default: () =>
                            __WEBPACK_DEFAULT_EXPORT__,
                        /* harmony export */
                    }
                );
                /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ =
                    __webpack_require__(
                        /*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js"
                    );
                /* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default =
                    /*#__PURE__*/ __webpack_require__.n(
                        _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__
                    );
                // Imports

                var ___CSS_LOADER_EXPORT___ =
                    _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(
                        function (i) {
                            return i[1];
                        }
                    );
                // Module
                ___CSS_LOADER_EXPORT___.push([
                    module.id,
                    "\n.main-card {\n    /* Position & Layout */\n    cursor: pointer;\n    display: flex;\n    flex-direction: column;\n    align-content: center;\n    align-items: center;\n\n    /* Box Model */\n    margin: 2em;\n    border-radius: 15px;\n    width: 28em;\n    padding: 1.5em;\n\n    /* Background */\n    background-color: #313131;\n}\n.main-card img {\n    margin: 1em;\n    height: 5.5em;\n}\n#imgInput {\n    display: none;\n}\n.onFileHover {\n    background-color: #464646;\n}\n.noPointer {\n    pointer-events: none;\n}\n",
                    "",
                ]);
                // Exports
                /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
                    ___CSS_LOADER_EXPORT___;

                /***/
            },

        /***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/NewSnippit.vue?vue&type=style&index=0&id=13d8130a&lang=css":
            /*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/NewSnippit.vue?vue&type=style&index=0&id=13d8130a&lang=css ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
            /***/ (
                __unused_webpack_module,
                __webpack_exports__,
                __webpack_require__
            ) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                        /* harmony export */ default: () =>
                            __WEBPACK_DEFAULT_EXPORT__,
                        /* harmony export */
                    }
                );
                /* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ =
                    __webpack_require__(
                        /*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
                    );
                /* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default =
                    /*#__PURE__*/ __webpack_require__.n(
                        _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__
                    );
                /* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NewSnippit_vue_vue_type_style_index_0_id_13d8130a_lang_css__WEBPACK_IMPORTED_MODULE_1__ =
                    __webpack_require__(
                        /*! !!../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./NewSnippit.vue?vue&type=style&index=0&id=13d8130a&lang=css */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/NewSnippit.vue?vue&type=style&index=0&id=13d8130a&lang=css"
                    );

                var options = {};

                options.insert = "head";
                options.singleton = false;

                var update =
                    _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(
                        _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NewSnippit_vue_vue_type_style_index_0_id_13d8130a_lang_css__WEBPACK_IMPORTED_MODULE_1__[
                            "default"
                        ],
                        options
                    );

                /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
                    _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NewSnippit_vue_vue_type_style_index_0_id_13d8130a_lang_css__WEBPACK_IMPORTED_MODULE_1__[
                        "default"
                    ].locals || {};

                /***/
            },

        /***/ "./resources/components/NewSnippit.vue":
            /*!*********************************************!*\
  !*** ./resources/components/NewSnippit.vue ***!
  \*********************************************/
            /***/ (
                __unused_webpack_module,
                __webpack_exports__,
                __webpack_require__
            ) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                        /* harmony export */ default: () =>
                            __WEBPACK_DEFAULT_EXPORT__,
                        /* harmony export */
                    }
                );
                /* harmony import */ var _NewSnippit_vue_vue_type_template_id_13d8130a__WEBPACK_IMPORTED_MODULE_0__ =
                    __webpack_require__(
                        /*! ./NewSnippit.vue?vue&type=template&id=13d8130a */ "./resources/components/NewSnippit.vue?vue&type=template&id=13d8130a"
                    );
                /* harmony import */ var _NewSnippit_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ =
                    __webpack_require__(
                        /*! ./NewSnippit.vue?vue&type=script&lang=js */ "./resources/components/NewSnippit.vue?vue&type=script&lang=js"
                    );
                /* harmony import */ var _NewSnippit_vue_vue_type_style_index_0_id_13d8130a_lang_css__WEBPACK_IMPORTED_MODULE_2__ =
                    __webpack_require__(
                        /*! ./NewSnippit.vue?vue&type=style&index=0&id=13d8130a&lang=css */ "./resources/components/NewSnippit.vue?vue&type=style&index=0&id=13d8130a&lang=css"
                    );
                /* harmony import */ var _Applications_MAMP_htdocs_TermProject_snippit_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ =
                    __webpack_require__(
                        /*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js"
                    );

                const __exports__ = /*#__PURE__*/ (0,
                _Applications_MAMP_htdocs_TermProject_snippit_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__[
                    "default"
                ])(
                    _NewSnippit_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[
                        "default"
                    ],
                    [
                        [
                            "render",
                            _NewSnippit_vue_vue_type_template_id_13d8130a__WEBPACK_IMPORTED_MODULE_0__.render,
                        ],
                        ["__file", "resources/components/NewSnippit.vue"],
                    ]
                );
                /* hot reload */
                if (false) {
                }

                /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ =
                    __exports__;

                /***/
            },

        /***/ "./resources/components/NewSnippit.vue?vue&type=script&lang=js":
            /*!*********************************************************************!*\
  !*** ./resources/components/NewSnippit.vue?vue&type=script&lang=js ***!
  \*********************************************************************/
            /***/ (
                __unused_webpack_module,
                __webpack_exports__,
                __webpack_require__
            ) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                        /* harmony export */ default: () =>
                            /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NewSnippit_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__[
                                "default"
                            ],
                        /* harmony export */
                    }
                );
                /* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NewSnippit_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ =
                    __webpack_require__(
                        /*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./NewSnippit.vue?vue&type=script&lang=js */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/NewSnippit.vue?vue&type=script&lang=js"
                    );

                /***/
            },

        /***/ "./resources/components/NewSnippit.vue?vue&type=template&id=13d8130a":
            /*!***************************************************************************!*\
  !*** ./resources/components/NewSnippit.vue?vue&type=template&id=13d8130a ***!
  \***************************************************************************/
            /***/ (
                __unused_webpack_module,
                __webpack_exports__,
                __webpack_require__
            ) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(
                    __webpack_exports__,
                    {
                        /* harmony export */ render: () =>
                            /* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NewSnippit_vue_vue_type_template_id_13d8130a__WEBPACK_IMPORTED_MODULE_0__.render,
                        /* harmony export */
                    }
                );
                /* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NewSnippit_vue_vue_type_template_id_13d8130a__WEBPACK_IMPORTED_MODULE_0__ =
                    __webpack_require__(
                        /*! -!../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./NewSnippit.vue?vue&type=template&id=13d8130a */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/NewSnippit.vue?vue&type=template&id=13d8130a"
                    );

                /***/
            },

        /***/ "./resources/components/NewSnippit.vue?vue&type=style&index=0&id=13d8130a&lang=css":
            /*!*****************************************************************************************!*\
  !*** ./resources/components/NewSnippit.vue?vue&type=style&index=0&id=13d8130a&lang=css ***!
  \*****************************************************************************************/
            /***/ (
                __unused_webpack_module,
                __webpack_exports__,
                __webpack_require__
            ) => {
                __webpack_require__.r(__webpack_exports__);
                /* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_use_1_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_use_2_node_modules_vue_loader_dist_index_js_ruleSet_0_use_0_NewSnippit_vue_vue_type_style_index_0_id_13d8130a_lang_css__WEBPACK_IMPORTED_MODULE_0__ =
                    __webpack_require__(
                        /*! -!../../node_modules/style-loader/dist/cjs.js!../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!../../node_modules/vue-loader/dist/stylePostLoader.js!../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!../../node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./NewSnippit.vue?vue&type=style&index=0&id=13d8130a&lang=css */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./resources/components/NewSnippit.vue?vue&type=style&index=0&id=13d8130a&lang=css"
                    );

                /***/
            },
    },
]);

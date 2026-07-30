(globalThis.wpRiseJsonp=globalThis.wpRiseJsonp||[]).push([["defaultVendors-node_modules_pnpm_articulate_design-system_1_35_0__articulate_design-system-to-aec6c6"],{57267(eu){var nc="Expected a function",ia=NaN,Ha="[object Symbol]",cc=/^\s+|\s+$/g,qi=/^[-+]0x[0-9a-f]+$/i,Oo=/^0b[01]+$/i,bt=/^0o[0-7]+$/i,Xr=parseInt,Gt=typeof globalThis=="object"&&globalThis&&globalThis.Object===Object&&globalThis,sa=typeof self=="object"&&self&&self.Object===Object&&self,ic=Gt||sa||Function("return this")(),sc=Object.prototype,ve=sc.toString,Va=Math.max,lc=Math.min,No=function(){return ic.Date.now()};function Bo(Mr,Ae,la){var Ua,ot,vr,Vr,Ce,Ga,da=0,hc=!1,$t=!1,Sa=!0;if(typeof Mr!="function")throw new TypeError(nc);Ae=uc(Ae)||0,tt(la)&&(hc=!!la.leading,$t="maxWait"in la,vr=$t?Va(uc(la.maxWait)||0,Ae):vr,Sa="trailing"in la?!!la.trailing:Sa);function ea(te){var ua=Ua,ct=ot;return Ua=ot=void 0,da=te,Vr=Mr.apply(ct,ua),Vr}function Ho(te){return da=te,Ce=setTimeout(nt,Ae),hc?ea(te):Vr}function Vo(te){var ua=te-Ga,ct=te-da,pc=Ae-ua;return $t?lc(pc,vr-ct):pc}function Kt(te){var ua=te-Ga,ct=te-da;return Ga===void 0||ua>=Ae||ua<0||$t&&ct>=vr}function nt(){var te=No();if(Kt(te))return i(te);Ce=setTimeout(nt,Vo(te))}function i(te){return Ce=void 0,Sa&&Ua?ea(te):(Ua=ot=void 0,Vr)}function s(){Ce!==void 0&&clearTimeout(Ce),da=0,Ua=Ga=ot=Ce=void 0}function Wt(){return Ce===void 0?Vr:i(No())}function yt(){var te=No(),ua=Kt(te);if(Ua=arguments,ot=this,Ga=te,ua){if(Ce===void 0)return Ho(Ga);if($t)return Ce=setTimeout(nt,Ae),ea(Ga)}return Ce===void 0&&(Ce=setTimeout(nt,Ae)),Vr}return yt.cancel=s,yt.flush=Wt,yt}function tt(Mr){var Ae=typeof Mr;return!!Mr&&(Ae=="object"||Ae=="function")}function Fo(Mr){return!!Mr&&typeof Mr=="object"}function dc(Mr){return typeof Mr=="symbol"||Fo(Mr)&&ve.call(Mr)==Ha}function uc(Mr){if(typeof Mr=="number")return Mr;if(dc(Mr))return ia;if(tt(Mr)){var Ae=typeof Mr.valueOf=="function"?Mr.valueOf():Mr;Mr=tt(Ae)?Ae+"":Ae}if(typeof Mr!="string")return Mr===0?Mr:+Mr;Mr=Mr.replace(cc,"");var la=Oo.test(Mr);return la||bt.test(Mr)?Xr(Mr.slice(2),la?2:8):qi.test(Mr)?ia:+Mr}eu.exports=Bo},9630(eu,nc,ia){"use strict";ia.r(nc),ia.d(nc,{ARC_DROPDOWN_SUBMENU_OMIT_KEYS:()=>Sh,ARC_MENU_DELAY_MS:()=>200,Arc:()=>d2,ArcAbstractFlexLayouts:()=>la,ArcAbstractGapSizes:()=>dc,ArcAbstractIconSizes:()=>Fo,ArcAbstractOrientations:()=>Ua,ArcAbstractPopoverActions:()=>tt,ArcAbstractPopoverModes:()=>Bo,ArcAbstractTextLayouts:()=>Ae,ArcAbstractTextOverflows:()=>Mr,ArcAbstractTextSizes:()=>uc,ArcAvatar:()=>Kc,ArcAvatarBaseSizes:()=>hn,ArcAvatarColors:()=>lh,ArcAvatarColorsReserved:()=>Bm,ArcAvatarOverflow:()=>Qm,ArcAvatarOverflowSizes:()=>qm,ArcAvatarPile:()=>ab,ArcAvatarPileSizes:()=>eb,ArcAvatarSizes:()=>Fm,ArcAvatarText:()=>Wc,ArcAvatarTextGapSizes:()=>ob,ArcAvatarTextOverflows:()=>nb,ArcAvatarTextSizes:()=>cb,ArcBadge:()=>xb,ArcBadgeColors:()=>gb,ArcBadgeContrasts:()=>bb,ArcBadgeCount:()=>Ib,ArcBadgeCountColors:()=>vb,ArcBadgeCountContrasts:()=>Eb,ArcBadgeCountShapes:()=>_b,ArcBadgeCountSizes:()=>Sb,ArcBadgeCountVariants:()=>zb,ArcBadgeLayouts:()=>mb,ArcBadgeSizes:()=>fb,ArcBadgeVariants:()=>$b,ArcBanner:()=>Xb,ArcBannerActionPlacements:()=>Hb,ArcBannerAlignments:()=>Vb,ArcBannerDefaults:()=>ut,ArcBannerDensities:()=>Bb,ArcBannerLayouts:()=>Fb,ArcBannerSchemes:()=>Ub,ArcBannerVariants:()=>Kb,ArcBarDensities:()=>Ho,ArcBarDeprecatedSizes:()=>Vo,ArcButton:()=>Lr,ArcButtonHierarchies:()=>Fu,ArcButtonLayouts:()=>kf,ArcButtonPopoverActions:()=>Cf,ArcButtonSchemes:()=>Es,ArcButtonShadows:()=>Af,ArcButtonShapes:()=>xf,ArcButtonSizes:()=>wf,ArcButtonVariants:()=>Bu,ArcCard:()=>h1,ArcCardActionArea:()=>yn,ArcCardBody:()=>pl,ArcCardFooter:()=>gl,ArcCardHeader:()=>hl,ArcCardLayout:()=>$1,ArcCardLayoutGaps:()=>d1,ArcCardLayoutModes:()=>l1,ArcCardMedia:()=>dl,ArcCardMediaElement:()=>ul,ArcCardMenu:()=>vl,ArcCardSelectionContext:()=>$n,ArcCardSelectionToggle:()=>ri,ArcCardSizes:()=>s1,ArcCardTitle:()=>Qc,ArcCardValueContext:()=>ll,ArcCardVariants:()=>i1,ArcCheckbox:()=>nl,ArcCheckboxBar:()=>C1,ArcCheckboxBarDensities:()=>w1,ArcCheckboxBarLayouts:()=>x1,ArcCheckboxBarOption:()=>tp,ArcCheckboxBarSizes:()=>A1,ArcCheckboxBarVariants:()=>k1,ArcCheckboxLayouts:()=>D$,ArcCheckboxSizes:()=>O$,ArcCheckboxVariants:()=>N$,ArcChip:()=>B1,ArcChipDefaults:()=>kl,ArcChipSizes:()=>D1,ArcChipVariants:()=>M1,ArcColorAllTools:()=>K1,ArcColorGradientTools:()=>di,ArcColorPalette:()=>Dn,ArcColorPaletteAddFlows:()=>U1,ArcColorPicker:()=>La,ArcColorPickerDefaults:()=>Je,ArcColorPickerModes:()=>F1,ArcColorPickerPanels:()=>H1,ArcColorSimpleTools:()=>op,ArcColorSolidTools:()=>Al,ArcColorSwatch:()=>Mn,ArcColorSwatchKinds:()=>V1,ArcColorUnsetTogglePlacements:()=>G1,ArcColorValueFormats:()=>y2,ArcDropdownMenu:()=>ho,ArcIcon:()=>zr,ArcIconAvatar:()=>ng,ArcIconAvatarColors:()=>Iw,ArcIconAvatarSizes:()=>Pw,ArcIconAvatarText:()=>jw,ArcIconAvatarVariants:()=>Tw,ArcIconText:()=>le,ArcIconTextVariants:()=>$m,ArcInputAction:()=>cg,ArcLabel:()=>Et,ArcLabelContent:()=>_t,ArcLabelLayouts:()=>P$,ArcLink:()=>Ow,ArcLinkVariants:()=>Dw,ArcModal:()=>nk,ArcModalAlert:()=>ik,ArcModalAlertDefaults:()=>Qa,ArcModalAlertVariants:()=>Hw,ArcModalBackdropColors:()=>Vw,ArcModalBodyPaddings:()=>Uw,ArcModalCloseReasons:()=>Kw,ArcModalCommonDefaults:()=>He,ArcModalCommonVariants:()=>Bw,ArcModalConfirm:()=>pg,ArcModalConfirmDefaults:()=>mt,ArcModalConfirmVariants:()=>Fw,ArcModalSchemes:()=>Nw,ArcModalSizes:()=>Gw,ArcNavList:()=>vk,ArcNavListDensities:()=>gk,ArcNavListHierarchies:()=>hk,ArcNavListOrientations:()=>pk,ArcPopover:()=>ga,ArcPopoverActions:()=>Gv,ArcPopoverAnchors:()=>$c,ArcPopoverBoundaries:()=>ms,ArcPopoverButton:()=>an,ArcPopoverDefaults:()=>De,ArcPopoverDensities:()=>Su,ArcPopoverModes:()=>vs,ArcPopoverSchemes:()=>fs,ArcPopoverVariants:()=>Cu,ArcPopoverVariantsWithOutline:()=>Kv,ArcRadio:()=>H0,ArcRadioBar:()=>X0,ArcRadioBarDensities:()=>Zx,ArcRadioBarLayouts:()=>Yx,ArcRadioBarOption:()=>xd,ArcRadioBarSizes:()=>Qx,ArcRadioBarVariants:()=>Jx,ArcRadioLayouts:()=>Wx,ArcRadioSizes:()=>Xx,ArcSVGGradientDef:()=>$u,ArcSearch:()=>wg,ArcSearchLayouts:()=>Ik,ArcSearchSizes:()=>Pk,ArcSearchVariants:()=>Rk,ArcSelect:()=>Gk,ArcSelectLayouts:()=>Dk,ArcSelectSizes:()=>Ok,ArcSelectVariants:()=>Nk,ArcSlider:()=>ld,ArcSliderLabelPlacements:()=>Ox,ArcSliderLayouts:()=>Lx,ArcSliderSizes:()=>Mx,ArcSliderVariants:()=>Dx,ArcSpinner:()=>Ac,ArcSpinnerColors:()=>gf,ArcSpinnerSizes:()=>pf,ArcSwitch:()=>qk,ArcSwitchLabelPositions:()=>jo,ArcSwitchSizes:()=>Kk,ArcSwitchStates:()=>we,ArcSystemAIGradients:()=>lc,ArcSystemAlignments:()=>ic,ArcSystemColors:()=>Va,ArcSystemDensities:()=>bt,ArcSystemGradients:()=>No,ArcSystemHierarchies:()=>Gt,ArcSystemLayouts:()=>sa,ArcSystemLineHeights:()=>sc,ArcSystemSchemes:()=>Ha,ArcSystemShadows:()=>cc,ArcSystemShapes:()=>Oo,ArcSystemSizes:()=>ve,ArcSystemSurfaces:()=>qi,ArcSystemVariants:()=>Xr,ArcTextAlignments:()=>o2,ArcTextBodyElements:()=>Ig,ArcTextBodySizes:()=>a2,ArcTextBodyVariants:()=>t2,ArcTextElements:()=>Pg,ArcTextHeadingElements:()=>Tg,ArcTextHeadingSizes:()=>Qk,ArcTextHeadingVariants:()=>e2,ArcTextInput:()=>zo,ArcTextInputLayouts:()=>Tx,ArcTextInputSizes:()=>Ix,ArcTextInputTypes:()=>Rx,ArcTextInputVariants:()=>Px,ArcTextKinds:()=>Yk,ArcTextLineHeights:()=>n2,ArcTextSchemes:()=>Zk,ArcTextSubheadingSizes:()=>r2,ArcTextTitleSizes:()=>Jk,ArcToast:()=>qg,ArcToastDefaults:()=>Vg,ArcToastPlacements:()=>Hg,ArcToastPopoverActions:()=>h2,ArcToastPopoverModes:()=>Fg,ArcToastProgressBarVariants:()=>p2,ArcToastSchemes:()=>Dg,ArcToastSeverities:()=>Og,ArcToastSizes:()=>Ng,ArcToastVariants:()=>Bg,ArcTooltip:()=>co,ArcTooltipDefaults:()=>fa,COLOR_DEFAULTS:()=>We,DEFAULT_COLOR_PICKER_LABELS:()=>pe,DEFAULT_ICON_AVATAR_DESCRIPTIONS:()=>Ed,DEFAULT_ICON_AVATAR_LABELS:()=>zd,DeprecatedButtonVariants:()=>_s,EPS_LOOSE:()=>1e-4,EPS_MID:()=>hi,EPS_STRICT:()=>1e-10,GRADIENT_DEFAULTS:()=>nr,IS_FLOATING:()=>zu,SLIDER_TOKENS:()=>E0,SLIDER_TOKENS_REGEX:()=>_0,SVGLogoArticulate:()=>ts,SVGLogoProductAI:()=>os,SVGLogoProductPeek:()=>ns,SVGLogoProductReach:()=>cs,SVGLogoProductReview:()=>is,SVGLogoProductRise:()=>ss,SVGLogoProductStoryline:()=>ls,SVGLogoProductStudio:()=>ds,StorageType:()=>tc,adoptStyles:()=>Cr,adoptThemeTokens:()=>yv,anchorNameRegistry:()=>Zo,appendGradientStop:()=>Dp,appendUniqueColorValue:()=>sy,arcGradientsEqual:()=>$i,arcGradientsSemanticEqual:()=>ht,arcGradientsVisuallyEqual:()=>hy,assignRef:()=>Ce,averageGradientColor:()=>$p,bindDelegatedEvents:()=>nh,buildDefaultGradientStops:()=>Ip,buildStopFieldBackground:()=>Bp,canonicalizeToHsv:()=>bi,clamp:()=>Ga,clampIt:()=>ar,colorValueEquals:()=>xo,compositeRgbaOver:()=>gi,computeEvenlyDistributedStopAt:()=>Rp,computeNextStopAt:()=>Nl,computeStopAtBetween:()=>In,createArcCardSelectionStore:()=>Dh,createEmptyRect:()=>x2,css:()=>d,cssFeatures:()=>yc,decodeDeprecatedButtonVariant:()=>_f,densityFromDeprecatedSize:()=>Kt,deprecatedSizeFromDensity:()=>nt,didElementRectChange:()=>$t,distributeGradientStopPositions:()=>jp,encodeDeprecatedButtonVariant:()=>Tf,expandHex3To6:()=>Tl,expandShortHex:()=>_l,extractTextFromReactNode:()=>Zt,formatAlphaCss:()=>fi,formatAlphaPercent:()=>zl,formatAnchorName:()=>$s,getArcColorAs:()=>Sp,getArcColorData:()=>Ra,getArcColorParts:()=>Cp,getArcColorValue:()=>_n,getArcContrastColor:()=>wo,getArcGradientData:()=>ko,getArcGradientMeridianColor:()=>yi,getColorName:()=>$o,getCssColor:()=>Br,getElementByIdScoped:()=>ea,getGradientName:()=>Op,getGradientStopKeyboardDelta:()=>Up,getPlainLabel:()=>zg,getPreferredAnchorForTooltipId:()=>Bs,getRenderedContrastBasis:()=>_p,getResolvedHierarchy:()=>Gu,getResolvedScheme:()=>Ku,getResolvedShape:()=>Hu,getResolvedVariant:()=>Uu,getSelectedColorMeta:()=>Dl,getShadowRootOrDocument:()=>Sa,getSortedStopEntries:()=>ya,getSvgGradientCoords:()=>bu,handlePopover:()=>Pu,handleToast:()=>Ug,hasBaseSelectSupport:()=>kg,hasEmptyValueOption:()=>Sg,hasMatchingColorValue:()=>Ml,hasNativeAnchorPositioning:()=>bs,hexAfterChannelNudge:()=>kp,hslToRgbaData:()=>up,hsvDeltaOK:()=>Q1,hsvToRgbaData:()=>Ge,iconAvatarDefaults:()=>Io,iconAvatarVariantMap:()=>Di,interpolateGradientStopColor:()=>Lp,isArcColorGradient:()=>oe,isArcColorPickerGradientChange:()=>W1,isArcColorPickerSolidChange:()=>cp,isArcColorPickerUnsetChange:()=>X1,isArcColorSwatchGradientDetails:()=>np,isDeprecatedButtonVariant:()=>Ts,isDifferent:()=>da,isGroupLegendItem:()=>Ag,isHexLike:()=>xp,isHsvLike:()=>mi,isNumber:()=>bc,isObject:()=>mu,isRgbaLike:()=>wp,isSame:()=>hc,isSelectGroup:()=>Ki,isSelectedColorMatch:()=>Tp,isString:()=>At,joinArray:()=>Yo,logError:()=>Uv,logMessage:()=>Vv,logSkippedTopLevelItem:()=>Cg,logWarning:()=>Au,makeHtmlId:()=>xv,makeRandomColor:()=>Tn,mapDeprecated:()=>ot,mergeRgbaFromHexDraft:()=>yp,noTailAnchors:()=>Eu,noop:()=>vo,normalizeAnchorName:()=>Jo,normalizeByte:()=>$e,normalizeColorValue:()=>yo,normalizeHexInput:()=>Pt,normalizeHue:()=>Cl,normalizeUnit:()=>dp,oklchToRgbaData:()=>gp,parseAlphaInput:()=>mp,parseByte:()=>zn,parseCssColorToRgba:()=>Zr,parseHexStringToRgba:()=>bp,percentsFromValue:()=>lp,pickFromList:()=>vr,pickFromListByKeys:()=>Vr,positionTryNameFor:()=>Tu,relativeLuminance:()=>vp,renderableOption:()=>Ro,resolveColorPickerLabels:()=>ui,resolveFallbackAnchors:()=>_u,resolveGradientAngleFromPointerDrag:()=>Hp,resolveGradientData:()=>Np,resolveGradientStopAtFromPointer:()=>Fp,resolveIconAvatarDescriptions:()=>Sw,resolveIconAvatarLabels:()=>_d,resolveInsertedGradientStop:()=>Mp,resolvePointerAngleDeg:()=>Bl,resolveTailMetrics:()=>Iu,rgbaBytesEqual:()=>fp,rgbaDeltaOK:()=>vi,rgbaEchoDeltaOK:()=>J1,rgbaToHslData:()=>hp,rgbaToHsvData:()=>pi,rgbaToOklchData:()=>pp,roundGradientStopsForCommit:()=>Rt,roundIt:()=>$a,shareAdoptedStyles:()=>$v,shouldSortStopAtAdjacent:()=>uy,shouldSortStopAtNeighborPositions:()=>Ol,snapGradientAngle:()=>Vp,snapIt:()=>sp,snapToStep:()=>R0,sortGradientStops:()=>Pp,splitString:()=>Nu,stepGradientAngleBySnap:()=>gy,stepToNextSnap:()=>j0,syncAnchorName:()=>Ru,toHEX:()=>Ke,toHSL:()=>jl,toLinearChannel:()=>It,toLinearGradientCss:()=>Za,toOKLCH:()=>Ll,toOpaqueRgbHexNoHash:()=>bo,toPx:()=>Qo,toRGB:()=>Pa,unbindDelegatedEvents:()=>jm,useArcCardIsActive:()=>Nh,useArcCardIsSelected:()=>sl,useArcCardSelection:()=>il,useArcCardValue:()=>Bh,useIsoLayoutEffect:()=>ha,useShiftSnap:()=>L0,useStableId:()=>Nr,useStorage:()=>$2});const Ha=["auto","light","dark","inverse"],cc=["none","sm","md","lg","xl"],qi=["primary","secondary","inset","raised","floating"],Oo=["circle","round","pill","square","narrow"],bt=["compact","comfortable"],Xr=["inherit","common","disabled","neutral","outline","solid","plain","critical","ai","alpha","primary","secondary","tertiary","inverse","critical-primary","critical-secondary","ai-primary","ai-secondary","primary-inverse","secondary-inverse","tertiary-inverse","overlay-light","overlay-dark","brand-black","brand-blue","brand","info","success","warning","error","processing"],Gt=["primary","secondary","tertiary","plain","link-style"],sa=["hug","fill","icon","gutter","inline"],ic=["inherit","start","left","justify","center","between","around","evenly","stretch","end","right"],sc=["inherit","tight","standard","loose"],ve=["inherit","xxl","xl","lg","md","sm","xs","xxs","custom","fullscreen"],Va=["blue","orange","mint","red","yellow","green","maroon","purple","neutral","white","black","mono","mono-inverse","overlay-light","overlay-dark","ai","brand"],lc=["ai","ai-50","ai-100","ai-200","ai-300","ai-400","ai-500","ai-600"],No=[...lc],Bo=["","auto","manual"],tt=["toggle","show","hide"],Fo=["inherit","xl","lg","md","sm","xs"],dc=["inherit","lg","md","sm"],uc=["inherit","md","sm"],Mr=["inherit","wrap","truncate"],Ae=["gutter","inline"],la=["hug","fill"],Ua=["horizontal","vertical"],ot=(r,e)=>e[r]||r,vr=(r,e)=>r.filter(a=>e.includes(a)),Vr=(r,e)=>e.filter(a=>r.includes(a)),Ce=(r,e)=>{r&&(typeof r=="function"?r(e):r.current=e)},Ga=(r,e=0,a=100)=>Math.min(Math.max(r,e),a),da=(r,e)=>r!==e,hc=(r,e)=>r===e,$t=({a:r,b:e})=>da(r?.top,e?.top)||da(r?.left,e?.left)||da(r?.width,e?.width)||da(r?.height,e?.height);function Sa(r){if(!(r instanceof Node))return null;const e=r.getRootNode();return e instanceof ShadowRoot||e instanceof Document?e:null}function ea(r,e){if(typeof document>"u")return null;const a=e==null?document:Sa(e)??document,t=a.getElementById(r);return t||(a!==document?document.getElementById(r):null)}const Ho=Vr(bt,["comfortable","compact"]),Vo=["lg","md"],Kt=r=>{switch(r){case"lg":return"comfortable";case"md":return"compact";default:return}},nt=r=>{switch(r){case"comfortable":return"lg";case"compact":return"md";default:return r}};var i=ia(35745),s=ia(49860);/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Wt=globalThis,yt=Wt.ShadowRoot&&(Wt.ShadyCSS===void 0||Wt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,te=Symbol(),ua=new WeakMap;class ct{constructor(e,a,t){if(this._$cssResult$=!0,t!==te)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=a}get styleSheet(){let e=this.o;const a=this.t;if(yt&&e===void 0){const t=a!==void 0&&a.length===1;t&&(e=ua.get(a)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),t&&ua.set(a,e))}return e}toString(){return this.cssText}}const pc=r=>new ct(typeof r=="string"?r:r+"",void 0,te),d=(r,...e)=>{const a=r.length===1?r[0]:e.reduce(((t,o,n)=>t+(c=>{if(c._$cssResult$===!0)return c.cssText;if(typeof c=="number")return c;throw Error("Value passed to 'css' function must be a 'css' function result: "+c+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+r[n+1]),r[0]);return new ct(a,r,te)},Jg=(r,e)=>{if(yt)r.adoptedStyleSheets=e.map((a=>a instanceof CSSStyleSheet?a:a.styleSheet));else for(const a of e){const t=document.createElement("style"),o=Wt.litNonce;o!==void 0&&t.setAttribute("nonce",o),t.textContent=a.cssText,r.appendChild(t)}},au=yt?r=>r:r=>r instanceof CSSStyleSheet?(e=>{let a="";for(const t of e.cssRules)a+=t.cssText;return pc(a)})(r):r;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Qg,defineProperty:rv,getOwnPropertyDescriptor:ev,getOwnPropertyNames:av,getOwnPropertySymbols:tv,getPrototypeOf:ov}=Object,gc=globalThis,tu=gc.trustedTypes,nv=tu?tu.emptyScript:"",cv=gc.reactiveElementPolyfillSupport,Uo=(r,e)=>r,Yi={toAttribute(r,e){switch(e){case Boolean:r=r?nv:null;break;case Object:case Array:r=r==null?r:JSON.stringify(r)}return r},fromAttribute(r,e){let a=r;switch(e){case Boolean:a=r!==null;break;case Number:a=r===null?null:Number(r);break;case Object:case Array:try{a=JSON.parse(r)}catch{a=null}}return a}},ou=(r,e)=>!Qg(r,e),nu={attribute:!0,type:String,converter:Yi,reflect:!1,useDefault:!1,hasChanged:ou};Symbol.metadata??=Symbol("metadata"),gc.litPropertyMetadata??=new WeakMap;class Xt extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,a=nu){if(a.state&&(a.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((a=Object.create(a)).wrapped=!0),this.elementProperties.set(e,a),!a.noAccessor){const t=Symbol(),o=this.getPropertyDescriptor(e,t,a);o!==void 0&&rv(this.prototype,e,o)}}static getPropertyDescriptor(e,a,t){const{get:o,set:n}=ev(this.prototype,e)??{get(){return this[a]},set(c){this[a]=c}};return{get:o,set(c){const l=o?.call(this);n?.call(this,c),this.requestUpdate(e,l,t)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??nu}static _$Ei(){if(this.hasOwnProperty(Uo("elementProperties")))return;const e=ov(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Uo("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Uo("properties"))){const a=this.properties,t=[...av(a),...tv(a)];for(const o of t)this.createProperty(o,a[o])}const e=this[Symbol.metadata];if(e!==null){const a=litPropertyMetadata.get(e);if(a!==void 0)for(const[t,o]of a)this.elementProperties.set(t,o)}this._$Eh=new Map;for(const[a,t]of this.elementProperties){const o=this._$Eu(a,t);o!==void 0&&this._$Eh.set(o,a)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const a=[];if(Array.isArray(e)){const t=new Set(e.flat(1/0).reverse());for(const o of t)a.unshift(au(o))}else e!==void 0&&a.push(au(e));return a}static _$Eu(e,a){const t=a.attribute;return t===!1?void 0:typeof t=="string"?t:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise((e=>this.enableUpdating=e)),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach((e=>e(this)))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){const e=new Map,a=this.constructor.elementProperties;for(const t of a.keys())this.hasOwnProperty(t)&&(e.set(t,this[t]),delete this[t]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return Jg(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach((e=>e.hostConnected?.()))}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach((e=>e.hostDisconnected?.()))}attributeChangedCallback(e,a,t){this._$AK(e,t)}_$ET(e,a){const t=this.constructor.elementProperties.get(e),o=this.constructor._$Eu(e,t);if(o!==void 0&&t.reflect===!0){const n=(t.converter?.toAttribute!==void 0?t.converter:Yi).toAttribute(a,t.type);this._$Em=e,n==null?this.removeAttribute(o):this.setAttribute(o,n),this._$Em=null}}_$AK(e,a){const t=this.constructor,o=t._$Eh.get(e);if(o!==void 0&&this._$Em!==o){const n=t.getPropertyOptions(o),c=typeof n.converter=="function"?{fromAttribute:n.converter}:n.converter?.fromAttribute!==void 0?n.converter:Yi;this._$Em=o;const l=c.fromAttribute(a,n.type);this[o]=l??this._$Ej?.get(o)??l,this._$Em=null}}requestUpdate(e,a,t){if(e!==void 0){const o=this.constructor,n=this[e];if(t??=o.getPropertyOptions(e),!((t.hasChanged??ou)(n,a)||t.useDefault&&t.reflect&&n===this._$Ej?.get(e)&&!this.hasAttribute(o._$Eu(e,t))))return;this.C(e,a,t)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,a,{useDefault:t,reflect:o,wrapped:n},c){t&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,c??a??this[e]),n!==!0||c!==void 0)||(this._$AL.has(e)||(this.hasUpdated||t||(a=void 0),this._$AL.set(e,a)),o===!0&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(a){Promise.reject(a)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[o,n]of this._$Ep)this[o]=n;this._$Ep=void 0}const t=this.constructor.elementProperties;if(t.size>0)for(const[o,n]of t){const{wrapped:c}=n,l=this[o];c!==!0||this._$AL.has(o)||l===void 0||this.C(o,void 0,n,l)}}let e=!1;const a=this._$AL;try{e=this.shouldUpdate(a),e?(this.willUpdate(a),this._$EO?.forEach((t=>t.hostUpdate?.())),this.update(a)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(a)}willUpdate(e){}_$AE(e){this._$EO?.forEach((a=>a.hostUpdated?.())),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach((a=>this._$ET(a,this[a]))),this._$EM()}updated(e){}firstUpdated(e){}}Xt.elementStyles=[],Xt.shadowRootOptions={mode:"open"},Xt[Uo("elementProperties")]=new Map,Xt[Uo("finalized")]=new Map,cv?.({ReactiveElement:Xt}),(gc.reactiveElementVersions??=[]).push("2.1.1");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Zi=globalThis,vc=Zi.trustedTypes,cu=vc?vc.createPolicy("lit-html",{createHTML:r=>r}):void 0,iu="$lit$",it=`lit$${Math.random().toFixed(9).slice(2)}$`,su="?"+it,iv=`<${su}>`,xt=document,Go=()=>xt.createComment(""),Ko=r=>r===null||typeof r!="object"&&typeof r!="function",Ji=Array.isArray,sv=r=>Ji(r)||typeof r?.[Symbol.iterator]=="function",Qi=`[ 	
\f\r]`,Wo=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,lu=/-->/g,du=/>/g,wt=RegExp(`>|${Qi}(?:([^\\s"'>=/]+)(${Qi}*=${Qi}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),uu=/'/g,hu=/"/g,pu=/^(?:script|style|textarea|title)$/i,rs=r=>(e,...a)=>({_$litType$:r,strings:e,values:a}),k2=rs(1),A2=rs(2),C2=rs(3),qt=Symbol.for("lit-noChange"),fe=Symbol.for("lit-nothing"),gu=new WeakMap,kt=xt.createTreeWalker(xt,129);function vu(r,e){if(!Ji(r)||!r.hasOwnProperty("raw"))throw Error("invalid template strings array");return cu!==void 0?cu.createHTML(e):e}const lv=(r,e)=>{const a=r.length-1,t=[];let o,n=e===2?"<svg>":e===3?"<math>":"",c=Wo;for(let l=0;l<a;l++){const u=r[l];let h,p,v=-1,g=0;for(;g<u.length&&(c.lastIndex=g,p=c.exec(u),p!==null);)g=c.lastIndex,c===Wo?p[1]==="!--"?c=lu:p[1]!==void 0?c=du:p[2]!==void 0?(pu.test(p[2])&&(o=RegExp("</"+p[2],"g")),c=wt):p[3]!==void 0&&(c=wt):c===wt?p[0]===">"?(c=o??Wo,v=-1):p[1]===void 0?v=-2:(v=c.lastIndex-p[2].length,h=p[1],c=p[3]===void 0?wt:p[3]==='"'?hu:uu):c===hu||c===uu?c=wt:c===lu||c===du?c=Wo:(c=wt,o=void 0);const f=c===wt&&r[l+1].startsWith("/>")?" ":"";n+=c===Wo?u+iv:v>=0?(t.push(h),u.slice(0,v)+iu+u.slice(v)+it+f):u+it+(v===-2?l:f)}return[vu(r,n+(r[a]||"<?>")+(e===2?"</svg>":e===3?"</math>":"")),t]};class Xo{constructor({strings:e,_$litType$:a},t){let o;this.parts=[];let n=0,c=0;const l=e.length-1,u=this.parts,[h,p]=lv(e,a);if(this.el=Xo.createElement(h,t),kt.currentNode=this.el.content,a===2||a===3){const v=this.el.content.firstChild;v.replaceWith(...v.childNodes)}for(;(o=kt.nextNode())!==null&&u.length<l;){if(o.nodeType===1){if(o.hasAttributes())for(const v of o.getAttributeNames())if(v.endsWith(iu)){const g=p[c++],f=o.getAttribute(v).split(it),b=/([.?@])?(.*)/.exec(g);u.push({type:1,index:n,name:b[2],strings:f,ctor:b[1]==="."?uv:b[1]==="?"?hv:b[1]==="@"?pv:fc}),o.removeAttribute(v)}else v.startsWith(it)&&(u.push({type:6,index:n}),o.removeAttribute(v));if(pu.test(o.tagName)){const v=o.textContent.split(it),g=v.length-1;if(g>0){o.textContent=vc?vc.emptyScript:"";for(let f=0;f<g;f++)o.append(v[f],Go()),kt.nextNode(),u.push({type:2,index:++n});o.append(v[g],Go())}}}else if(o.nodeType===8)if(o.data===su)u.push({type:2,index:n});else{let v=-1;for(;(v=o.data.indexOf(it,v+1))!==-1;)u.push({type:7,index:n}),v+=it.length-1}n++}}static createElement(e,a){const t=xt.createElement("template");return t.innerHTML=e,t}}function Yt(r,e,a=r,t){if(e===qt)return e;let o=t!==void 0?a._$Co?.[t]:a._$Cl;const n=Ko(e)?void 0:e._$litDirective$;return o?.constructor!==n&&(o?._$AO?.(!1),n===void 0?o=void 0:(o=new n(r),o._$AT(r,a,t)),t!==void 0?(a._$Co??=[])[t]=o:a._$Cl=o),o!==void 0&&(e=Yt(r,o._$AS(r,e.values),o,t)),e}class dv{constructor(e,a){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=a}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){const{el:{content:a},parts:t}=this._$AD,o=(e?.creationScope??xt).importNode(a,!0);kt.currentNode=o;let n=kt.nextNode(),c=0,l=0,u=t[0];for(;u!==void 0;){if(c===u.index){let h;u.type===2?h=new qo(n,n.nextSibling,this,e):u.type===1?h=new u.ctor(n,u.name,u.strings,this,e):u.type===6&&(h=new gv(n,this,e)),this._$AV.push(h),u=t[++l]}c!==u?.index&&(n=kt.nextNode(),c++)}return kt.currentNode=xt,o}p(e){let a=0;for(const t of this._$AV)t!==void 0&&(t.strings!==void 0?(t._$AI(e,t,a),a+=t.strings.length-2):t._$AI(e[a])),a++}}class qo{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,a,t,o){this.type=2,this._$AH=fe,this._$AN=void 0,this._$AA=e,this._$AB=a,this._$AM=t,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode;const a=this._$AM;return a!==void 0&&e?.nodeType===11&&(e=a.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,a=this){e=Yt(this,e,a),Ko(e)?e===fe||e==null||e===""?(this._$AH!==fe&&this._$AR(),this._$AH=fe):e!==this._$AH&&e!==qt&&this._(e):e._$litType$!==void 0?this.$(e):e.nodeType!==void 0?this.T(e):sv(e)?this.k(e):this._(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==fe&&Ko(this._$AH)?this._$AA.nextSibling.data=e:this.T(xt.createTextNode(e)),this._$AH=e}$(e){const{values:a,_$litType$:t}=e,o=typeof t=="number"?this._$AC(e):(t.el===void 0&&(t.el=Xo.createElement(vu(t.h,t.h[0]),this.options)),t);if(this._$AH?._$AD===o)this._$AH.p(a);else{const n=new dv(o,this),c=n.u(this.options);n.p(a),this.T(c),this._$AH=n}}_$AC(e){let a=gu.get(e.strings);return a===void 0&&gu.set(e.strings,a=new Xo(e)),a}k(e){Ji(this._$AH)||(this._$AH=[],this._$AR());const a=this._$AH;let t,o=0;for(const n of e)o===a.length?a.push(t=new qo(this.O(Go()),this.O(Go()),this,this.options)):t=a[o],t._$AI(n),o++;o<a.length&&(this._$AR(t&&t._$AB.nextSibling,o),a.length=o)}_$AR(e=this._$AA.nextSibling,a){for(this._$AP?.(!1,!0,a);e!==this._$AB;){const t=e.nextSibling;e.remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}}class fc{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,a,t,o,n){this.type=1,this._$AH=fe,this._$AN=void 0,this.element=e,this.name=a,this._$AM=o,this.options=n,t.length>2||t[0]!==""||t[1]!==""?(this._$AH=Array(t.length-1).fill(new String),this.strings=t):this._$AH=fe}_$AI(e,a=this,t,o){const n=this.strings;let c=!1;if(n===void 0)e=Yt(this,e,a,0),c=!Ko(e)||e!==this._$AH&&e!==qt,c&&(this._$AH=e);else{const l=e;let u,h;for(e=n[0],u=0;u<n.length-1;u++)h=Yt(this,l[t+u],a,u),h===qt&&(h=this._$AH[u]),c||=!Ko(h)||h!==this._$AH[u],h===fe?e=fe:e!==fe&&(e+=(h??"")+n[u+1]),this._$AH[u]=h}c&&!o&&this.j(e)}j(e){e===fe?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}}class uv extends fc{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===fe?void 0:e}}class hv extends fc{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==fe)}}class pv extends fc{constructor(e,a,t,o,n){super(e,a,t,o,n),this.type=5}_$AI(e,a=this){if((e=Yt(this,e,a,0)??fe)===qt)return;const t=this._$AH,o=e===fe&&t!==fe||e.capture!==t.capture||e.once!==t.once||e.passive!==t.passive,n=e!==fe&&(t===fe||o);o&&this.element.removeEventListener(this.name,this,t),n&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}}class gv{constructor(e,a,t){this.element=e,this.type=6,this._$AN=void 0,this._$AM=a,this.options=t}get _$AU(){return this._$AM._$AU}_$AI(e){Yt(this,e)}}const S2=null,vv=Zi.litHtmlPolyfillSupport;vv?.(Xo,qo),(Zi.litHtmlVersions??=[]).push("3.3.1");const fv=(r,e,a)=>{const t=a?.renderBefore??e;let o=t._$litPart$;if(o===void 0){const n=a?.renderBefore??null;t._$litPart$=o=new qo(e.insertBefore(Go(),n),n,void 0,a??{})}return o._$AI(r),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const es=globalThis;class mc extends Xt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){const a=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=fv(a,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return qt}}mc._$litElement$=!0,mc.finalized=!0,es.litElementHydrateSupport?.({LitElement:mc});const mv=es.litElementPolyfillSupport;mv?.({LitElement:mc});const z2=null;(es.litElementVersions??=[]).push("4.2.1");const bv=`@charset "UTF-8";
@layer arc-theme, arc-components, arc-utils;
@layer arc-theme {
  :root,
  ::backdrop {
    --arc-color-mono-black: #000000;
    --arc-color-mono-white: #ffffff;
    --arc-color-light-neutral-0: #ffffff;
    --arc-color-light-neutral-50: #f7f7f7;
    --arc-color-light-neutral-100: #ededed;
    --arc-color-light-neutral-200: #e6e6e6;
    --arc-color-light-neutral-300: #c6c6c6;
    --arc-color-light-neutral-400: #b0b0b0;
    --arc-color-light-neutral-500: #9b9b9b;
    --arc-color-light-neutral-600: #737373;
    --arc-color-light-neutral-700: #636363;
    --arc-color-light-neutral-800: #4b4b4b;
    --arc-color-light-neutral-900: #212121;
    --arc-color-light-neutral-1000: #000000;
    --arc-color-light-blue-50: #f0fbff;
    --arc-color-light-blue-100: #ddf4fd;
    --arc-color-light-blue-200: #99e4ff;
    --arc-color-light-blue-300: #53d1ff;
    --arc-color-light-blue-400: #00aff0;
    --arc-color-light-blue-500: #0098eb;
    --arc-color-light-blue-600: #0075cf;
    --arc-color-light-blue-700: #0065b2;
    --arc-color-light-blue-800: #005394;
    --arc-color-light-blue-900: #00335b;
    --arc-color-light-purple-50: #f1f0ff;
    --arc-color-light-purple-100: #e9e7fe;
    --arc-color-light-purple-200: #b2a8ff;
    --arc-color-light-purple-300: #9789fa;
    --arc-color-light-purple-400: #8676ff;
    --arc-color-light-purple-500: #7565f1;
    --arc-color-light-purple-600: #4e3bd5;
    --arc-color-light-purple-700: #3120b4;
    --arc-color-light-purple-800: #16068e;
    --arc-color-light-purple-900: #0c0064;
    --arc-color-light-mint-50: #f0fff9;
    --arc-color-light-mint-100: #d9fdef;
    --arc-color-light-mint-200: #9df1d1;
    --arc-color-light-mint-300: #6de3b6;
    --arc-color-light-mint-400: #44bf90;
    --arc-color-light-mint-500: #0f9f68;
    --arc-color-light-mint-600: #008451;
    --arc-color-light-mint-700: #006e44;
    --arc-color-light-mint-800: #005937;
    --arc-color-light-mint-900: #00442a;
    --arc-color-light-orange-50: #fff6f0;
    --arc-color-light-orange-100: #fdeadd;
    --arc-color-light-orange-200: #fac39e;
    --arc-color-light-orange-300: #fd9e5e;
    --arc-color-light-orange-400: #ff6602;
    --arc-color-light-orange-500: #e95d00;
    --arc-color-light-orange-600: #c24e00;
    --arc-color-light-orange-700: #a84300;
    --arc-color-light-orange-800: #933b00;
    --arc-color-light-orange-900: #662900;
    --arc-color-light-maroon-50: #ffeff3;
    --arc-color-light-maroon-100: #fedde5;
    --arc-color-light-maroon-200: #ffa8be;
    --arc-color-light-maroon-300: #fe8fab;
    --arc-color-light-maroon-400: #f27195;
    --arc-color-light-maroon-500: #e05580;
    --arc-color-light-maroon-600: #c73868;
    --arc-color-light-maroon-700: #aa1a53;
    --arc-color-light-maroon-800: #841a42;
    --arc-color-light-maroon-900: #5d132d;
    --arc-color-light-green-50: #f6fff0;
    --arc-color-light-green-100: #e7fdd9;
    --arc-color-light-green-200: #bfeea0;
    --arc-color-light-green-300: #8dd65c;
    --arc-color-light-green-400: #74bb44;
    --arc-color-light-green-500: #57a225;
    --arc-color-light-green-600: #358201;
    --arc-color-light-green-700: #2c6d00;
    --arc-color-light-green-800: #235800;
    --arc-color-light-green-900: #1b4300;
    --arc-color-light-yellow-50: #fffaf0;
    --arc-color-light-yellow-100: #fdf2dd;
    --arc-color-light-yellow-200: #ffdb94;
    --arc-color-light-yellow-300: #ffc960;
    --arc-color-light-yellow-400: #ffb629;
    --arc-color-light-yellow-500: #eb9b00;
    --arc-color-light-yellow-600: #9e6900;
    --arc-color-light-yellow-700: #805400;
    --arc-color-light-yellow-800: #604000;
    --arc-color-light-yellow-900: #3e2900;
    --arc-color-light-red-50: #fff0f0;
    --arc-color-light-red-100: #fde2e2;
    --arc-color-light-red-200: #ff9999;
    --arc-color-light-red-300: #ff6161;
    --arc-color-light-red-400: #ff0000;
    --arc-color-light-red-500: #eb0000;
    --arc-color-light-red-600: #b80000;
    --arc-color-light-red-700: #990000;
    --arc-color-light-red-800: #7a0000;
    --arc-color-light-red-900: #520000;
    --arc-color-dark-neutral-0: #000000;
    --arc-color-dark-neutral-50: #1c1c1c;
    --arc-color-dark-neutral-100: #2a2a2a;
    --arc-color-dark-neutral-200: #3d3d3d;
    --arc-color-dark-neutral-300: #515151;
    --arc-color-dark-neutral-400: #666666;
    --arc-color-dark-neutral-500: #7b7b7b;
    --arc-color-dark-neutral-600: #939393;
    --arc-color-dark-neutral-700: #aeaeae;
    --arc-color-dark-neutral-800: #d0d0d0;
    --arc-color-dark-neutral-900: #ededed;
    --arc-color-dark-neutral-1000: #ffffff;
    --arc-color-dark-blue-50: #002542;
    --arc-color-dark-blue-100: #093a63;
    --arc-color-dark-blue-200: #0f4d7a;
    --arc-color-dark-blue-300: #146192;
    --arc-color-dark-blue-400: #1974aa;
    --arc-color-dark-blue-500: #1e88c7;
    --arc-color-dark-blue-600: #0ca1f7;
    --arc-color-dark-blue-700: #3ab1f5;
    --arc-color-dark-blue-800: #70cbfa;
    --arc-color-dark-blue-900: #b9e6fd;
    --arc-color-dark-purple-50: #161041;
    --arc-color-dark-purple-100: #221c5a;
    --arc-color-dark-purple-200: #2d2773;
    --arc-color-dark-purple-300: #39328c;
    --arc-color-dark-purple-400: #463da6;
    --arc-color-dark-purple-500: #5449c0;
    --arc-color-dark-purple-600: #6556da;
    --arc-color-dark-purple-700: #7a6ef0;
    --arc-color-dark-purple-800: #a193f9;
    --arc-color-dark-purple-900: #d3c9ff;
    --arc-color-dark-mint-50: #04291b;
    --arc-color-dark-mint-100: #0b3425;
    --arc-color-dark-mint-200: #134434;
    --arc-color-dark-mint-300: #1b5444;
    --arc-color-dark-mint-400: #246554;
    --arc-color-dark-mint-500: #2f7766;
    --arc-color-dark-mint-600: #14b290;
    --arc-color-dark-mint-700: #52a895;
    --arc-color-dark-mint-800: #84d0bd;
    --arc-color-dark-mint-900: #d6fff2;
    --arc-color-dark-orange-50: #251104;
    --arc-color-dark-orange-100: #3a1a08;
    --arc-color-dark-orange-200: #50240d;
    --arc-color-dark-orange-300: #672f14;
    --arc-color-dark-orange-400: #7f3c1d;
    --arc-color-dark-orange-500: #984b27;
    --arc-color-dark-orange-600: #d55913;
    --arc-color-dark-orange-700: #d1764d;
    --arc-color-dark-orange-800: #eba883;
    --arc-color-dark-orange-900: #ffdcc9;
    --arc-color-dark-maroon-50: #2a0914;
    --arc-color-dark-maroon-100: #40101f;
    --arc-color-dark-maroon-200: #56162b;
    --arc-color-dark-maroon-300: #6c1e39;
    --arc-color-dark-maroon-400: #822647;
    --arc-color-dark-maroon-500: #993057;
    --arc-color-dark-maroon-600: #b13d69;
    --arc-color-dark-maroon-700: #d05886;
    --arc-color-dark-maroon-800: #e891b5;
    --arc-color-dark-maroon-900: #ffd6e7;
    --arc-color-dark-green-50: #132904;
    --arc-color-dark-green-100: #1b340a;
    --arc-color-dark-green-200: #264411;
    --arc-color-dark-green-300: #31551a;
    --arc-color-dark-green-400: #3e6625;
    --arc-color-dark-green-500: #4c7831;
    --arc-color-dark-green-600: #55a722;
    --arc-color-dark-green-700: #72a65b;
    --arc-color-dark-green-800: #a0d092;
    --arc-color-dark-green-900: #e2fcd9;
    --arc-color-dark-yellow-50: #2e2005;
    --arc-color-dark-yellow-100: #3a2907;
    --arc-color-dark-yellow-200: #51390d;
    --arc-color-dark-yellow-300: #684a14;
    --arc-color-dark-yellow-400: #7f5c1c;
    --arc-color-dark-yellow-500: #976f25;
    --arc-color-dark-yellow-600: #d99d0f;
    --arc-color-dark-yellow-700: #d1a049;
    --arc-color-dark-yellow-800: #eccc86;
    --arc-color-dark-yellow-900: #fff7d9;
    --arc-color-dark-red-50: #250404;
    --arc-color-dark-red-100: #3a0809;
    --arc-color-dark-red-200: #500d0e;
    --arc-color-dark-red-300: #671416;
    --arc-color-dark-red-400: #7e1d1f;
    --arc-color-dark-red-500: #97292b;
    --arc-color-dark-red-600: #d4423f;
    --arc-color-dark-red-700: #d86466;
    --arc-color-dark-red-800: #e88987;
    --arc-color-dark-red-900: #ffd6d6;
    --arc-color-alpha-black-0: rgb(0 0 0 / 0%);
    --arc-color-alpha-black-3: rgb(0 0 0 / 3%);
    --arc-color-alpha-black-5: rgb(0 0 0 / 5%);
    --arc-color-alpha-black-7: rgb(0 0 0 / 7%);
    --arc-color-alpha-black-10: rgb(0 0 0 / 10%);
    --arc-color-alpha-black-15: rgb(0 0 0 / 15%);
    --arc-color-alpha-black-20: rgb(0 0 0 / 20%);
    --arc-color-alpha-black-25: rgb(0 0 0 / 25%);
    --arc-color-alpha-black-30: rgb(0 0 0 / 30%);
    --arc-color-alpha-black-40: rgb(0 0 0 / 40%);
    --arc-color-alpha-black-50: rgb(0 0 0 / 50%);
    --arc-color-alpha-black-60: rgb(0 0 0 / 60%);
    --arc-color-alpha-black-70: rgb(0 0 0 / 70%);
    --arc-color-alpha-black-80: rgb(0 0 0 / 80%);
    --arc-color-alpha-black-90: rgb(0 0 0 / 90%);
    --arc-color-alpha-black-95: rgb(0 0 0 / 95%);
    --arc-color-alpha-black-100: rgb(0 0 0 / 100%);
    --arc-color-alpha-white-0: rgb(255 255 255 / 0%);
    --arc-color-alpha-white-3: rgb(255 255 255 / 3%);
    --arc-color-alpha-white-5: rgb(255 255 255 / 5%);
    --arc-color-alpha-white-7: rgb(255 255 255 / 7%);
    --arc-color-alpha-white-10: rgb(255 255 255 / 10%);
    --arc-color-alpha-white-15: rgb(255 255 255 / 15%);
    --arc-color-alpha-white-20: rgb(255 255 255 / 20%);
    --arc-color-alpha-white-25: rgb(255 255 255 / 25%);
    --arc-color-alpha-white-30: rgb(255 255 255 / 30%);
    --arc-color-alpha-white-40: rgb(255 255 255 / 40%);
    --arc-color-alpha-white-50: rgb(255 255 255 / 50%);
    --arc-color-alpha-white-60: rgb(255 255 255 / 60%);
    --arc-color-alpha-white-70: rgb(255 255 255 / 70%);
    --arc-color-alpha-white-80: rgb(255 255 255 / 80%);
    --arc-color-alpha-white-90: rgb(255 255 255 / 90%);
    --arc-color-alpha-white-95: rgb(255 255 255 / 95%);
    --arc-color-alpha-white-100: rgb(255 255 255 / 100%);
    --arc-gradient-ai-50: linear-gradient(60deg, light-dark(#fbf2ff, #210125), light-dark(#f4fbff, #00223b));
    --arc-gradient-ai-100: linear-gradient(60deg, light-dark(#efccff, #540160), light-dark(#d2f1fe, #02497d));
    --arc-gradient-ai-200: linear-gradient(60deg, light-dark(#9c15ff, #ad44cb), light-dark(#1eb4fb, #169cfe));
    --arc-gradient-ai-300: linear-gradient(60deg, light-dark(#680278, #ad44cb), light-dark(#0179d0, #71bdfe));
    --arc-gradient-ai-400: linear-gradient(60deg, light-dark(#5d3668, #c778de), light-dark(#36648c, #84daff));
    --arc-gradient-ai-500: linear-gradient(60deg, light-dark(#37003f, #e3a7ff), light-dark(#004273, #b7eaff));
    --arc-gradient-ai-600: linear-gradient(60deg, light-dark(#27002c, #f9ebff), light-dark(#012a48, #c2edff));
    --arc-color-overlay-subtle: light-dark(var(--arc-color-alpha-white-70), var(--arc-color-alpha-black-70));
    --arc-color-overlay-stark: light-dark(var(--arc-color-alpha-black-50), var(--arc-color-alpha-black-50));
    --arc-color-shadow-sm: light-dark(var(--arc-color-alpha-black-25), var(--arc-color-alpha-black-60));
    --arc-color-shadow-md: light-dark(var(--arc-color-alpha-black-15), var(--arc-color-alpha-black-50));
    --arc-color-shadow-lg: light-dark(rgb(0 0 0 / 12%), var(--arc-color-alpha-black-40));
    --arc-color-shadow-xl: light-dark(var(--arc-color-alpha-black-15), var(--arc-color-alpha-black-40));
    --arc-color-bg-primary: light-dark(var(--arc-color-light-neutral-0), var(--arc-color-dark-neutral-100));
    --arc-color-bg-secondary-subtle: light-dark(var(--arc-color-alpha-black-3), var(--arc-color-alpha-white-3));
    --arc-color-bg-secondary: light-dark(var(--arc-color-alpha-black-5), var(--arc-color-alpha-white-10));
    --arc-color-bg-tertiary: light-dark(var(--arc-color-light-neutral-200), var(--arc-color-dark-neutral-300));
    --arc-color-bg-mono-inverse: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-bg-mono: light-dark(var(--arc-color-light-neutral-0), var(--arc-color-dark-neutral-0));
    --arc-color-bg-disabled: light-dark(var(--arc-color-alpha-black-5), var(--arc-color-alpha-white-15));
    --arc-color-bg-hover-subtle: light-dark(var(--arc-color-alpha-black-3), var(--arc-color-alpha-white-3));
    --arc-color-bg-hover-default: light-dark(var(--arc-color-alpha-black-7), var(--arc-color-alpha-white-15));
    --arc-color-bg-hover-stark: light-dark(var(--arc-color-alpha-black-15), var(--arc-color-alpha-white-30));
    --arc-color-bg-selected-subtle: light-dark(var(--arc-color-light-blue-50), var(--arc-color-dark-blue-50));
    --arc-color-bg-selected-default: light-dark(var(--arc-color-light-blue-100), var(--arc-color-dark-blue-200));
    --arc-color-bg-selected-stark: light-dark(var(--arc-color-light-blue-200), var(--arc-color-dark-blue-400));
    --arc-color-bg-theme-muted: light-dark(var(--arc-color-alpha-black-5), var(--arc-color-alpha-white-5));
    --arc-color-bg-theme-subtle: light-dark(var(--arc-color-alpha-black-10), var(--arc-color-alpha-white-15));
    --arc-color-bg-theme-mid: light-dark(var(--arc-color-light-neutral-500), var(--arc-color-dark-neutral-300));
    --arc-color-bg-theme-stark: light-dark(var(--arc-color-light-neutral-700), var(--arc-color-alpha-white-50));
    --arc-color-bg-theme-heavy: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-bg-success-muted: light-dark(var(--arc-color-light-green-50), var(--arc-color-dark-green-50));
    --arc-color-bg-success-subtle: light-dark(var(--arc-color-light-green-100), var(--arc-color-dark-green-100));
    --arc-color-bg-success-mid: light-dark(var(--arc-color-light-green-400), var(--arc-color-dark-green-400));
    --arc-color-bg-success-stark: light-dark(var(--arc-color-light-green-600), var(--arc-color-dark-green-600));
    --arc-color-bg-success-heavy: light-dark(var(--arc-color-light-green-800), var(--arc-color-dark-green-800));
    --arc-color-bg-warning-muted: light-dark(var(--arc-color-light-yellow-50), var(--arc-color-dark-yellow-50));
    --arc-color-bg-warning-subtle: light-dark(var(--arc-color-light-yellow-100), var(--arc-color-dark-yellow-100));
    --arc-color-bg-warning-mid: light-dark(var(--arc-color-light-yellow-400), var(--arc-color-dark-yellow-400));
    --arc-color-bg-warning-stark: light-dark(var(--arc-color-light-yellow-600), var(--arc-color-dark-yellow-600));
    --arc-color-bg-warning-heavy: light-dark(var(--arc-color-light-yellow-700), var(--arc-color-dark-yellow-700));
    --arc-color-bg-critical-muted: light-dark(var(--arc-color-light-red-50), var(--arc-color-dark-red-50));
    --arc-color-bg-critical-subtle: light-dark(var(--arc-color-light-red-100), var(--arc-color-dark-red-100));
    --arc-color-bg-critical-mid: light-dark(var(--arc-color-light-red-500), var(--arc-color-dark-red-600));
    --arc-color-bg-critical-stark: light-dark(var(--arc-color-light-red-600), var(--arc-color-dark-red-700));
    --arc-color-bg-critical-heavy: light-dark(var(--arc-color-light-red-800), var(--arc-color-dark-red-800));
    --arc-color-bg-info-muted: light-dark(var(--arc-color-light-purple-50), var(--arc-color-dark-purple-50));
    --arc-color-bg-info-subtle: light-dark(var(--arc-color-light-purple-100), var(--arc-color-dark-purple-100));
    --arc-color-bg-info-mid: light-dark(var(--arc-color-light-purple-500), var(--arc-color-dark-purple-500));
    --arc-color-bg-info-stark: light-dark(var(--arc-color-light-purple-600), var(--arc-color-dark-purple-700));
    --arc-color-bg-info-heavy: light-dark(var(--arc-color-light-purple-800), var(--arc-color-dark-purple-800));
    --arc-color-bg-brand-muted: light-dark(var(--arc-color-light-blue-50), var(--arc-color-dark-blue-50));
    --arc-color-bg-brand-subtle: light-dark(var(--arc-color-light-blue-100), var(--arc-color-dark-blue-100));
    --arc-color-bg-brand-mid: light-dark(var(--arc-color-light-blue-500), var(--arc-color-dark-blue-400));
    --arc-color-bg-brand-stark: light-dark(var(--arc-color-light-blue-600), var(--arc-color-dark-blue-600));
    --arc-color-bg-brand-heavy: light-dark(var(--arc-color-light-blue-800), var(--arc-color-dark-blue-800));
    --arc-color-bg-neutral-muted: light-dark(var(--arc-color-alpha-black-7), var(--arc-color-alpha-white-15));
    --arc-color-bg-neutral-subtle: light-dark(var(--arc-color-alpha-black-10), var(--arc-color-alpha-white-25));
    --arc-color-bg-neutral-mid: light-dark(var(--arc-color-light-neutral-300), var(--arc-color-dark-neutral-400));
    --arc-color-bg-neutral-stark: light-dark(var(--arc-color-light-neutral-600), var(--arc-color-dark-neutral-600));
    --arc-color-bg-neutral-heavy: light-dark(var(--arc-color-light-neutral-800), var(--arc-color-dark-neutral-800));
    --arc-color-bg-orange-muted: light-dark(var(--arc-color-light-orange-50), var(--arc-color-dark-orange-50));
    --arc-color-bg-orange-subtle: light-dark(var(--arc-color-light-orange-100), var(--arc-color-dark-orange-100));
    --arc-color-bg-orange-mid: light-dark(var(--arc-color-light-orange-400), var(--arc-color-dark-orange-400));
    --arc-color-bg-orange-stark: light-dark(var(--arc-color-light-orange-600), var(--arc-color-dark-orange-600));
    --arc-color-bg-orange-heavy: light-dark(var(--arc-color-light-orange-800), var(--arc-color-dark-orange-800));
    --arc-color-bg-mint-muted: light-dark(var(--arc-color-light-mint-50), var(--arc-color-dark-mint-50));
    --arc-color-bg-mint-subtle: light-dark(var(--arc-color-light-mint-100), var(--arc-color-dark-mint-100));
    --arc-color-bg-mint-mid: light-dark(var(--arc-color-light-mint-400), var(--arc-color-dark-mint-400));
    --arc-color-bg-mint-stark: light-dark(var(--arc-color-light-mint-600), var(--arc-color-dark-mint-600));
    --arc-color-bg-mint-heavy: light-dark(var(--arc-color-light-mint-800), var(--arc-color-dark-mint-800));
    --arc-color-bg-maroon-muted: light-dark(var(--arc-color-light-maroon-50), var(--arc-color-dark-maroon-50));
    --arc-color-bg-maroon-subtle: light-dark(var(--arc-color-light-maroon-100), var(--arc-color-dark-maroon-100));
    --arc-color-bg-maroon-mid: light-dark(var(--arc-color-light-maroon-400), var(--arc-color-dark-maroon-400));
    --arc-color-bg-maroon-stark: light-dark(var(--arc-color-light-maroon-600), var(--arc-color-dark-maroon-700));
    --arc-color-bg-maroon-heavy: light-dark(var(--arc-color-light-maroon-800), var(--arc-color-dark-maroon-800));
    --arc-color-bg-blue-muted: light-dark(var(--arc-color-light-blue-50), var(--arc-color-dark-blue-50));
    --arc-color-bg-blue-subtle: light-dark(var(--arc-color-light-blue-100), var(--arc-color-dark-blue-100));
    --arc-color-bg-blue-mid: light-dark(var(--arc-color-light-blue-500), var(--arc-color-dark-blue-400));
    --arc-color-bg-blue-stark: light-dark(var(--arc-color-light-blue-600), var(--arc-color-dark-blue-600));
    --arc-color-bg-blue-heavy: light-dark(var(--arc-color-light-blue-800), var(--arc-color-dark-blue-800));
    --arc-color-bg-purple-muted: light-dark(var(--arc-color-light-purple-50), var(--arc-color-dark-purple-50));
    --arc-color-bg-purple-subtle: light-dark(var(--arc-color-light-purple-100), var(--arc-color-dark-purple-100));
    --arc-color-bg-purple-mid: light-dark(var(--arc-color-light-purple-500), var(--arc-color-dark-purple-500));
    --arc-color-bg-purple-stark: light-dark(var(--arc-color-light-purple-600), var(--arc-color-dark-purple-700));
    --arc-color-bg-purple-heavy: light-dark(var(--arc-color-light-purple-800), var(--arc-color-dark-purple-800));
    --arc-color-bg-green-muted: light-dark(var(--arc-color-light-green-50), var(--arc-color-dark-green-50));
    --arc-color-bg-green-subtle: light-dark(var(--arc-color-light-green-100), var(--arc-color-dark-green-100));
    --arc-color-bg-green-mid: light-dark(var(--arc-color-light-green-400), var(--arc-color-dark-green-400));
    --arc-color-bg-green-stark: light-dark(var(--arc-color-light-green-600), var(--arc-color-dark-green-600));
    --arc-color-bg-green-heavy: light-dark(var(--arc-color-light-green-800), var(--arc-color-dark-green-800));
    --arc-color-bg-yellow-muted: light-dark(var(--arc-color-light-yellow-50), var(--arc-color-dark-yellow-50));
    --arc-color-bg-yellow-subtle: light-dark(var(--arc-color-light-yellow-100), var(--arc-color-dark-yellow-100));
    --arc-color-bg-yellow-mid: light-dark(var(--arc-color-light-yellow-400), var(--arc-color-dark-yellow-400));
    --arc-color-bg-yellow-stark: light-dark(var(--arc-color-light-yellow-600), var(--arc-color-dark-yellow-600));
    --arc-color-bg-yellow-heavy: light-dark(var(--arc-color-light-yellow-700), var(--arc-color-dark-yellow-700));
    --arc-color-bg-red-muted: light-dark(var(--arc-color-light-red-50), var(--arc-color-dark-red-50));
    --arc-color-bg-red-subtle: light-dark(var(--arc-color-light-red-100), var(--arc-color-dark-red-100));
    --arc-color-bg-red-mid: light-dark(var(--arc-color-light-red-500), var(--arc-color-dark-red-600));
    --arc-color-bg-red-stark: light-dark(var(--arc-color-light-red-600), var(--arc-color-dark-red-700));
    --arc-color-bg-red-heavy: light-dark(var(--arc-color-light-red-800), var(--arc-color-dark-red-800));
    --arc-color-fg-primary: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-fg-secondary: light-dark(var(--arc-color-light-neutral-700), var(--arc-color-dark-neutral-700));
    --arc-color-fg-on-hover-subtle: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-fg-on-hover-default: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-fg-on-hover-stark: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-fg-disabled: light-dark(var(--arc-color-alpha-black-40), var(--arc-color-alpha-white-40));
    --arc-color-fg-on-selected-subtle: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-fg-on-selected-default: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-fg-on-selected-stark: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-fg-on-theme-muted: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-fg-on-theme-subtle: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-fg-on-theme-mid: light-dark(var(--arc-color-light-neutral-100), var(--arc-color-dark-neutral-800));
    --arc-color-fg-on-theme-stark: light-dark(var(--arc-color-light-neutral-0), var(--arc-color-dark-neutral-0));
    --arc-color-fg-on-theme-heavy: light-dark(var(--arc-color-light-neutral-0), var(--arc-color-dark-neutral-0));
    --arc-color-fg-on-muted: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-fg-on-subtle: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-fg-on-mid: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-fg-on-stark: light-dark(var(--arc-color-light-neutral-0), var(--arc-color-dark-neutral-0));
    --arc-color-fg-on-heavy: light-dark(var(--arc-color-light-neutral-0), var(--arc-color-dark-neutral-0));
    --arc-color-fg-on-mono-inverse: light-dark(var(--arc-color-light-neutral-0), var(--arc-color-dark-neutral-0));
    --arc-color-fg-on-mono: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-fg-success-subtle: light-dark(var(--arc-color-light-green-300), var(--arc-color-dark-green-400));
    --arc-color-fg-success-mid: light-dark(var(--arc-color-light-green-400), var(--arc-color-dark-green-600));
    --arc-color-fg-success-stark: light-dark(var(--arc-color-light-green-600), var(--arc-color-dark-green-800));
    --arc-color-fg-warning-subtle: light-dark(var(--arc-color-light-yellow-300), var(--arc-color-dark-yellow-400));
    --arc-color-fg-warning-mid: light-dark(var(--arc-color-light-yellow-500), var(--arc-color-dark-yellow-600));
    --arc-color-fg-warning-stark: light-dark(var(--arc-color-light-yellow-600), var(--arc-color-dark-yellow-800));
    --arc-color-fg-critical-subtle: light-dark(var(--arc-color-light-red-300), var(--arc-color-dark-red-500));
    --arc-color-fg-critical-mid: light-dark(var(--arc-color-light-red-500), var(--arc-color-dark-red-700));
    --arc-color-fg-critical-stark: light-dark(var(--arc-color-light-red-600), var(--arc-color-dark-red-800));
    --arc-color-fg-info-subtle: light-dark(var(--arc-color-light-purple-300), var(--arc-color-dark-purple-400));
    --arc-color-fg-info-mid: light-dark(var(--arc-color-light-purple-500), var(--arc-color-dark-purple-600));
    --arc-color-fg-info-stark: light-dark(var(--arc-color-light-purple-600), var(--arc-color-dark-purple-800));
    --arc-color-fg-brand-subtle: light-dark(var(--arc-color-light-blue-300), var(--arc-color-dark-blue-400));
    --arc-color-fg-brand-mid: light-dark(var(--arc-color-light-blue-500), var(--arc-color-dark-blue-600));
    --arc-color-fg-brand-stark: light-dark(var(--arc-color-light-blue-600), var(--arc-color-dark-blue-800));
    --arc-color-fg-orange-subtle: light-dark(var(--arc-color-light-orange-300), var(--arc-color-dark-orange-400));
    --arc-color-fg-orange-mid: light-dark(var(--arc-color-light-orange-400), var(--arc-color-dark-orange-600));
    --arc-color-fg-orange-stark: light-dark(var(--arc-color-light-orange-700), var(--arc-color-dark-orange-800));
    --arc-color-fg-mint-subtle: light-dark(var(--arc-color-light-mint-300), var(--arc-color-dark-mint-400));
    --arc-color-fg-mint-mid: light-dark(var(--arc-color-light-mint-500), var(--arc-color-dark-mint-600));
    --arc-color-fg-mint-stark: light-dark(var(--arc-color-light-mint-700), var(--arc-color-dark-mint-800));
    --arc-color-fg-maroon-subtle: light-dark(var(--arc-color-light-maroon-300), var(--arc-color-dark-maroon-400));
    --arc-color-fg-maroon-mid: light-dark(var(--arc-color-light-maroon-500), var(--arc-color-dark-maroon-600));
    --arc-color-fg-maroon-stark: light-dark(var(--arc-color-light-maroon-700), var(--arc-color-dark-maroon-800));
    --arc-color-fg-neutral-subtle: light-dark(var(--arc-color-light-neutral-300), var(--arc-color-dark-neutral-400));
    --arc-color-fg-neutral-mid: light-dark(var(--arc-color-light-neutral-500), var(--arc-color-dark-neutral-600));
    --arc-color-fg-neutral-stark: light-dark(var(--arc-color-light-neutral-700), var(--arc-color-dark-neutral-800));
    --arc-color-fg-blue-subtle: light-dark(var(--arc-color-light-blue-300), var(--arc-color-dark-blue-400));
    --arc-color-fg-blue-mid: light-dark(var(--arc-color-light-blue-500), var(--arc-color-dark-blue-600));
    --arc-color-fg-blue-stark: light-dark(var(--arc-color-light-blue-600), var(--arc-color-dark-blue-800));
    --arc-color-fg-purple-subtle: light-dark(var(--arc-color-light-purple-300), var(--arc-color-dark-purple-400));
    --arc-color-fg-purple-mid: light-dark(var(--arc-color-light-purple-500), var(--arc-color-dark-purple-600));
    --arc-color-fg-purple-stark: light-dark(var(--arc-color-light-purple-600), var(--arc-color-dark-purple-800));
    --arc-color-fg-green-subtle: light-dark(var(--arc-color-light-green-300), var(--arc-color-dark-green-400));
    --arc-color-fg-green-mid: light-dark(var(--arc-color-light-green-400), var(--arc-color-dark-green-600));
    --arc-color-fg-green-stark: light-dark(var(--arc-color-light-green-600), var(--arc-color-dark-green-800));
    --arc-color-fg-yellow-subtle: light-dark(var(--arc-color-light-yellow-300), var(--arc-color-dark-yellow-400));
    --arc-color-fg-yellow-mid: light-dark(var(--arc-color-light-yellow-500), var(--arc-color-dark-yellow-600));
    --arc-color-fg-yellow-stark: light-dark(var(--arc-color-light-yellow-600), var(--arc-color-dark-yellow-800));
    --arc-color-fg-red-subtle: light-dark(var(--arc-color-light-red-300), var(--arc-color-dark-red-500));
    --arc-color-fg-red-mid: light-dark(var(--arc-color-light-red-500), var(--arc-color-dark-red-700));
    --arc-color-fg-red-stark: light-dark(var(--arc-color-light-red-600), var(--arc-color-dark-red-800));
    --arc-color-fg-theme-muted: light-dark(var(--arc-color-alpha-black-10), var(--arc-color-alpha-white-10));
    --arc-color-fg-theme-subtle: light-dark(var(--arc-color-alpha-black-25), var(--arc-color-alpha-white-25));
    --arc-color-fg-theme-mid: light-dark(var(--arc-color-light-neutral-500), var(--arc-color-dark-neutral-300));
    --arc-color-fg-theme-stark: light-dark(var(--arc-color-light-neutral-700), var(--arc-color-alpha-white-50));
    --arc-color-fg-theme-heavy: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-fg-brand-heavy: light-dark(var(--arc-color-light-blue-700), var(--arc-color-dark-blue-900));
    --arc-color-border-muted: light-dark(var(--arc-color-alpha-black-3), var(--arc-color-alpha-white-5));
    --arc-color-border-subtle: light-dark(var(--arc-color-alpha-black-5), var(--arc-color-alpha-white-10));
    --arc-color-border-mid: light-dark(var(--arc-color-alpha-black-10), var(--arc-color-alpha-white-15));
    --arc-color-border-stark: light-dark(var(--arc-color-alpha-black-30), var(--arc-color-alpha-white-30));
    --arc-color-border-on-stark: light-dark(var(--arc-color-light-neutral-500), var(--arc-color-dark-neutral-600));
    --arc-color-border-heavy: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-border-theme-heavy: light-dark(var(--arc-color-light-neutral-1000), var(--arc-color-dark-neutral-1000));
    --arc-color-border-selected: light-dark(var(--arc-color-light-blue-500), var(--arc-color-dark-blue-500));
    --arc-color-border-focus: light-dark(var(--arc-color-light-blue-600), var(--arc-color-dark-blue-700));
    --arc-color-border-success-subtle: light-dark(var(--arc-color-light-green-200), var(--arc-color-dark-green-300));
    --arc-color-border-success-mid: light-dark(var(--arc-color-light-green-400), var(--arc-color-dark-green-400));
    --arc-color-border-success-stark: light-dark(var(--arc-color-light-green-600), var(--arc-color-dark-green-600));
    --arc-color-border-warning-subtle: light-dark(var(--arc-color-light-yellow-200), var(--arc-color-dark-yellow-300));
    --arc-color-border-warning-mid: light-dark(var(--arc-color-light-yellow-400), var(--arc-color-dark-yellow-400));
    --arc-color-border-warning-stark: light-dark(var(--arc-color-light-yellow-600), var(--arc-color-dark-yellow-600));
    --arc-color-border-critical-subtle: light-dark(var(--arc-color-light-red-200), var(--arc-color-dark-red-300));
    --arc-color-border-critical-mid: light-dark(var(--arc-color-light-red-500), var(--arc-color-dark-red-500));
    --arc-color-border-critical-stark: light-dark(var(--arc-color-light-red-600), var(--arc-color-dark-red-800));
    --arc-color-border-info-subtle: light-dark(var(--arc-color-light-purple-200), var(--arc-color-dark-purple-300));
    --arc-color-border-info-mid: light-dark(var(--arc-color-light-purple-500), var(--arc-color-dark-purple-500));
    --arc-color-border-info-stark: light-dark(var(--arc-color-light-purple-600), var(--arc-color-dark-purple-600));
    --arc-color-border-brand-subtle: light-dark(var(--arc-color-light-blue-200), var(--arc-color-dark-blue-200));
    --arc-color-border-brand-mid: light-dark(var(--arc-color-light-blue-500), var(--arc-color-dark-blue-600));
    --arc-color-border-brand-stark: light-dark(var(--arc-color-light-blue-600), var(--arc-color-dark-blue-700));
    --arc-color-border-orange-subtle: light-dark(var(--arc-color-light-orange-200), var(--arc-color-dark-orange-200));
    --arc-color-border-orange-mid: light-dark(var(--arc-color-light-orange-400), var(--arc-color-dark-orange-400));
    --arc-color-border-orange-stark: light-dark(var(--arc-color-light-orange-600), var(--arc-color-dark-orange-600));
    --arc-color-border-mint-subtle: light-dark(var(--arc-color-light-mint-200), var(--arc-color-dark-mint-200));
    --arc-color-border-mint-mid: light-dark(var(--arc-color-light-mint-400), var(--arc-color-dark-mint-400));
    --arc-color-border-mint-stark: light-dark(var(--arc-color-light-mint-600), var(--arc-color-dark-mint-600));
    --arc-color-border-maroon-subtle: light-dark(var(--arc-color-light-maroon-200), var(--arc-color-dark-maroon-200));
    --arc-color-border-maroon-mid: light-dark(var(--arc-color-light-maroon-400), var(--arc-color-dark-maroon-400));
    --arc-color-border-maroon-stark: light-dark(var(--arc-color-light-maroon-600), var(--arc-color-dark-maroon-600));
    --arc-color-border-blue-subtle: light-dark(var(--arc-color-light-blue-200), var(--arc-color-dark-blue-200));
    --arc-color-border-blue-mid: light-dark(var(--arc-color-light-blue-500), var(--arc-color-dark-blue-500));
    --arc-color-border-blue-stark: light-dark(var(--arc-color-light-blue-600), var(--arc-color-dark-blue-600));
    --arc-color-border-purple-subtle: light-dark(var(--arc-color-light-purple-200), var(--arc-color-dark-purple-300));
    --arc-color-border-purple-mid: light-dark(var(--arc-color-light-purple-500), var(--arc-color-dark-purple-500));
    --arc-color-border-purple-stark: light-dark(var(--arc-color-light-purple-600), var(--arc-color-dark-purple-600));
    --arc-color-border-green-subtle: light-dark(var(--arc-color-light-green-200), var(--arc-color-dark-green-300));
    --arc-color-border-green-mid: light-dark(var(--arc-color-light-green-400), var(--arc-color-dark-green-400));
    --arc-color-border-green-stark: light-dark(var(--arc-color-light-green-600), var(--arc-color-dark-green-600));
    --arc-color-border-yellow-subtle: light-dark(var(--arc-color-light-yellow-200), var(--arc-color-dark-yellow-300));
    --arc-color-border-yellow-mid: light-dark(var(--arc-color-light-yellow-400), var(--arc-color-dark-yellow-400));
    --arc-color-border-yellow-stark: light-dark(var(--arc-color-light-yellow-600), var(--arc-color-dark-yellow-600));
    --arc-color-border-red-subtle: light-dark(var(--arc-color-light-red-200), var(--arc-color-dark-red-300));
    --arc-color-border-red-mid: light-dark(var(--arc-color-light-red-500), var(--arc-color-dark-red-500));
    --arc-color-border-red-stark: light-dark(var(--arc-color-light-red-600), var(--arc-color-dark-red-800));
    --arc-color-border-disabled: light-dark(var(--arc-color-alpha-black-10), var(--arc-color-alpha-white-15));
    --arc-color-border-theme-subtle: light-dark(var(--arc-color-alpha-black-10), var(--arc-color-alpha-white-15));
    --arc-color-border-theme-mid: light-dark(var(--arc-color-alpha-black-15), var(--arc-color-alpha-white-25));
    --arc-color-border-theme-stark: light-dark(var(--arc-color-light-neutral-700), var(--arc-color-alpha-white-50));
    --arc-color-border-hover: light-dark(var(--arc-color-alpha-black-15), var(--arc-color-alpha-white-20));
    --arc-color-alpha-muted: light-dark(var(--arc-color-alpha-black-3), var(--arc-color-alpha-white-3));
    --arc-color-alpha-subtle: light-dark(var(--arc-color-alpha-black-7), var(--arc-color-alpha-white-15));
    --arc-color-alpha-mid: light-dark(var(--arc-color-alpha-black-15), var(--arc-color-alpha-white-30));
    --arc-color-alpha-stark: light-dark(var(--arc-color-alpha-black-30), var(--arc-color-alpha-white-60));
    --arc-color-alpha-heavy: light-dark(var(--arc-color-alpha-black-60), var(--arc-color-alpha-white-70));
  }
}
/*
  A NOTE ON USING ARC TOKENS (CSS VARIABLES) --------------------------\u2022

  Tokens with \`--arc-internal-\` prefixes are internal only
    - NOT FOR CONSUMER USE
    - These are System/Internal things and are not intended to be
      access or modified by consumers of the design system.
    - Please reach out to #design-system in Slack for guidance or help,
      or to request something new.


  OVERRIDES, BE CAUTIOUS \u2022 These are available for acute adjustments,
                           but not needed in most cases.
  ---------------------------------------------------------------------\u2022
  --arc-font-size-base          \u2022 Override if your app's \`rem\` size
                                  isn't effectively 16px. For instance,
                                  set to 1 if your \`rem\` is 10px.

  --arc-font-variation-settings \u2022 Research \`font-variation-settings\`
                                  before using this token.

  --arc-font-size-mono          \u2022 Controls size of monospace fonts.
  --arc-line-height-title       \u2022 Various text adjustment overrides...
  --arc-line-height-heading
  --arc-line-height-subheading
  --arc-line-height-body
  --arc-line-height-mono
  --arc-letter-spacing-title
  --arc-letter-spacing-heading
  ---------------------------------------------------------------------\u2022
*/
@layer arc-theme {
  :root,
  ::backdrop {
    --arc-internal-font-size: var(--arc-font-size-base, 0.625);
    --arc-internal-font-body: Inter, system-ui, sans-serif;
    --arc-internal-font-expressive: "GT Walsheim", system-ui, sans-serif;
    --arc-internal-font-mono: "Roboto Mono", monospace;
    --arc-internal-font-size-mono: 0.875em;
    --arc-internal-letter-spacing: -0.015em;
    --arc-internal-font-vs: "opsz" 24;
    --arc-font-family-expressive: var(--arc-internal-font-expressive);
    --arc-font-family-title: var(--arc-internal-font-expressive);
    --arc-font-family-heading: var(--arc-internal-font-expressive);
    --arc-font-family-subheading: var(--arc-internal-font-body);
    --arc-font-family-body: var(--arc-internal-font-body);
    --arc-font-family-mono: var(--arc-internal-font-mono);
    --arc-line-height-tight: 1.2;
    --arc-line-height-standard: 1.4;
    --arc-line-height-loose: 1.6;
    --arc-line-height-title: var(--arc-line-height-tight);
    --arc-line-height-heading: var(--arc-line-height-tight);
    --arc-line-height-subheading: var(--arc-line-height-tight);
    --arc-line-height-body: var(--arc-line-height-standard);
    --arc-line-height-mono: var(--arc-line-height-standard);
    --arc-letter-spacing-heading: var(--arc-internal-letter-spacing);
    --arc-letter-spacing-title: var(--arc-internal-letter-spacing);
    --arc-font-weight-400: 400;
    --arc-font-weight-500: 500;
    --arc-font-weight-600: 600;
    --arc-font-weight-title: var(--arc-font-weight-600);
    --arc-font-weight-heading: var(--arc-font-weight-600);
    --arc-font-weight-subheading: var(--arc-font-weight-600);
    --arc-font-weight-bold: var(--arc-font-weight-600);
    --arc-font-weight-body: var(--arc-font-weight-400);
    --arc-font-weight-normal: var(--arc-font-weight-400);
    --arc-font-size-08: calc(0.8rem * var(--arc-internal-font-size));
    --arc-font-size-10: calc(1rem * var(--arc-internal-font-size));
    --arc-font-size-12: calc(1.2rem * var(--arc-internal-font-size));
    --arc-font-size-14: calc(1.4rem * var(--arc-internal-font-size));
    --arc-font-size-16: calc(1.6rem * var(--arc-internal-font-size));
    --arc-font-size-18: calc(1.8rem * var(--arc-internal-font-size));
    --arc-font-size-20: calc(2rem * var(--arc-internal-font-size));
    --arc-font-size-24: calc(2.4rem * var(--arc-internal-font-size));
    --arc-font-size-28: calc(2.8rem * var(--arc-internal-font-size));
    --arc-font-size-32: calc(3.2rem * var(--arc-internal-font-size));
    --arc-font-size-40: calc(4rem * var(--arc-internal-font-size));
    --arc-font-size-title-lg: var(--arc-font-size-40);
    --arc-font-size-title-md: var(--arc-font-size-32);
    --arc-font-size-title-sm: var(--arc-font-size-28);
    --arc-font-size-heading-lg: var(--arc-font-size-24);
    --arc-font-size-heading-md: var(--arc-font-size-20);
    --arc-font-size-heading-sm: var(--arc-font-size-18);
    --arc-font-size-subheading-lg: var(--arc-font-size-16);
    --arc-font-size-subheading-md: var(--arc-font-size-14);
    --arc-font-size-subheading-sm: var(--arc-font-size-12);
    --arc-font-size-body-lg: var(--arc-font-size-16);
    --arc-font-size-body-md: var(--arc-font-size-14);
    --arc-font-size-body-sm: var(--arc-font-size-12);
    --arc-font-size-body-xs: var(--arc-font-size-10);
    --arc-font-size-mono-lg: var(--arc-font-size-14);
    --arc-font-size-mono-md: var(--arc-font-size-12);
    --arc-font-size-mono-sm: var(--arc-font-size-10);
  }
  [data-arc-theme~=font-family] {
    font-family: var(--arc-font-family-body);
    font-size: var(--arc-font-size-16);
    font-weight: var(--arc-font-weight-body);
    line-height: var(--arc-line-height-body, var(--arc-line-height-standard));
    font-variation-settings: var(--arc-font-variation-settings, var(--arc-internal-font-vs));
  }
  [data-arc-theme~=font-family] :where(h1, h2, h3) {
    font-family: var(--arc-font-family-heading);
    font-weight: var(--arc-font-weight-heading);
    letter-spacing: var(--arc-letter-spacing-heading);
    line-height: var(--arc-internal-line-height, var(--arc-line-height-heading));
  }
  [data-arc-theme~=font-family] :where(h4, h5, h6) {
    font-family: var(--arc-font-family-subheading);
    font-weight: var(--arc-font-weight-subheading);
    line-height: var(--arc-internal-line-height, var(--arc-line-height-subheading));
    font-variation-settings: var(--arc-font-variation-settings, var(--arc-internal-font-vs));
  }
  [data-arc-theme~=font-family] :where(h1) {
    font-size: var(--arc-font-size-24);
  }
  [data-arc-theme~=font-family] :where(h2) {
    font-size: var(--arc-font-size-20);
  }
  [data-arc-theme~=font-family] :where(h3) {
    font-size: var(--arc-font-size-18);
  }
  [data-arc-theme~=font-family] :where(h4) {
    font-size: var(--arc-font-size-16);
  }
  [data-arc-theme~=font-family] :where(h5) {
    font-size: var(--arc-font-size-14);
  }
  [data-arc-theme~=font-family] :where(h6) {
    font-size: var(--arc-font-size-12);
  }
  [data-arc-theme~=font-family] :where(b, strong) {
    font-weight: var(--arc-font-weight-600);
  }
  [data-arc-theme~=font-family] :where(i, em) {
    font-style: italic;
  }
  [data-arc-theme~=font-family] :where(u) {
    text-decoration: underline;
  }
  [data-arc-theme~=font-family] :where(pre, code) {
    font-family: var(--arc-font-family-mono);
    font-size: var(--arc-font-size-mono, var(--arc-internal-font-size-mono));
  }
}
@layer arc-utils {
  .arc-font-title-lg {
    font-size: var(--arc-font-size-40);
  }
  .arc-font-title-md {
    font-size: var(--arc-font-size-32);
  }
  .arc-font-title-sm {
    font-size: var(--arc-font-size-28);
  }
  :is(.arc-font-title, .arc-font-title-lg, .arc-font-title-md, .arc-font-title-sm) {
    font-family: var(--arc-font-family-title);
    font-weight: var(--arc-font-weight-title);
    letter-spacing: var(--arc-letter-spacing-title);
    line-height: var(--arc-internal-line-height, var(--arc-line-height-title));
  }
  .arc-font-heading-lg {
    font-size: var(--arc-font-size-24);
  }
  .arc-font-heading-md {
    font-size: var(--arc-font-size-20);
  }
  .arc-font-heading-sm {
    font-size: var(--arc-font-size-18);
  }
  :is(.arc-font-heading, .arc-font-heading-lg, .arc-font-heading-md, .arc-font-heading-sm) {
    font-family: var(--arc-font-family-heading);
    font-weight: var(--arc-font-weight-heading);
    letter-spacing: var(--arc-letter-spacing-heading);
    line-height: var(--arc-internal-line-height, var(--arc-line-height-heading));
  }
  .arc-font-subheading-lg {
    font-size: var(--arc-font-size-16);
  }
  .arc-font-subheading-md {
    font-size: var(--arc-font-size-14);
  }
  .arc-font-subheading-sm {
    font-size: var(--arc-font-size-12);
  }
  :is(.arc-font-subheading, .arc-font-subheading-lg, .arc-font-subheading-md, .arc-font-subheading-sm) {
    font-family: var(--arc-font-family-subheading);
    font-weight: var(--arc-font-weight-subheading);
    line-height: var(--arc-internal-line-height, var(--arc-line-height-subheading));
    font-variation-settings: var(--arc-font-variation-settings, var(--arc-internal-font-vs));
  }
  .arc-font-body-lg {
    font-size: var(--arc-font-size-16);
  }
  .arc-font-body-md {
    font-size: var(--arc-font-size-14);
  }
  .arc-font-body-sm {
    font-size: var(--arc-font-size-12);
  }
  /** @deprecated - 'xsm' is not a valid size value in our sizing names */
  :is(.arc-font-body-xsm),
  :is(.arc-font-body-xs) {
    font-size: var(--arc-font-size-10);
  }
  /** @deprecated - 'xsm' is not a valid size value in our sizing names */
  :is(.arc-font-body-xsm),
  :is(.arc-font-body, .arc-font-body-lg, .arc-font-body-md, .arc-font-body-sm) {
    font-family: var(--arc-font-family-body);
    line-height: var(--arc-internal-line-height, var(--arc-line-height-body));
    font-variation-settings: var(--arc-font-variation-settings, var(--arc-internal-font-vs));
  }
  .arc-font-mono-lg {
    font-size: var(--arc-font-size-14);
  }
  .arc-font-mono-md {
    font-size: var(--arc-font-size-12);
  }
  .arc-font-mono-sm {
    font-size: var(--arc-font-size-10);
  }
  :is(.arc-font-mono, .arc-font-mono-lg, .arc-font-mono-md, .arc-font-mono-sm) {
    font-family: var(--arc-font-family-mono);
    line-height: var(--arc-internal-line-height, var(--arc-line-height-mono));
  }
  .arc-line-height-loose {
    --arc-internal-line-height: var(--arc-line-height-loose);
    line-height: var(--arc-internal-line-height);
  }
  .arc-line-height-standard {
    --arc-internal-line-height: var(--arc-line-height-standard);
    line-height: var(--arc-internal-line-height);
  }
  .arc-line-height-tight {
    --arc-internal-line-height: var(--arc-line-height-tight);
    line-height: var(--arc-internal-line-height);
  }
}
@layer arc-theme {
  :root,
  ::backdrop {
    --arc-internal-space: 0.8rem * var(--arc-internal-font-size);
    --arc-internal-size: 0.8rem * var(--arc-internal-font-size);
    --arc-space-0: 0;
    --arc-space-0-25: calc(0.25 * var(--arc-internal-space));
    --arc-space-0-5: calc(0.5 * var(--arc-internal-space));
    --arc-space-0-75: calc(0.75 * var(--arc-internal-space));
    --arc-space-1: calc(var(--arc-internal-space));
    --arc-space-1-25: calc(1.25 * var(--arc-internal-space));
    --arc-space-1-5: calc(1.5 * var(--arc-internal-space));
    --arc-space-1-75: calc(1.75 * var(--arc-internal-space));
    --arc-space-2: calc(2 * var(--arc-internal-space));
    --arc-space-2-5: calc(2.5 * var(--arc-internal-space));
    --arc-space-3: calc(3 * var(--arc-internal-space));
    --arc-space-4: calc(4 * var(--arc-internal-space));
    --arc-space-5: calc(5 * var(--arc-internal-space));
    --arc-space-6: calc(6 * var(--arc-internal-space));
    --arc-space-7: calc(7 * var(--arc-internal-space));
    --arc-space-8: calc(8 * var(--arc-internal-space));
    --arc-space-9: calc(9 * var(--arc-internal-space));
    --arc-space-10: calc(10 * var(--arc-internal-space));
    --arc-space-11: calc(11 * var(--arc-internal-space));
    --arc-space-12: calc(12 * var(--arc-internal-space));
    --arc-size-0: 0;
    --arc-size-0-25: calc(0.25 * var(--arc-internal-size));
    --arc-size-0-5: calc(0.5 * var(--arc-internal-size));
    --arc-size-0-75: calc(0.75 * var(--arc-internal-size));
    --arc-size-1: calc(var(--arc-internal-size));
    --arc-size-1-25: calc(1.25 * var(--arc-internal-size));
    --arc-size-1-5: calc(1.5 * var(--arc-internal-size));
    --arc-size-1-75: calc(1.75 * var(--arc-internal-size));
    --arc-size-2: calc(2 * var(--arc-internal-size));
    --arc-size-2-25: calc(2.25 * var(--arc-internal-size));
    --arc-size-2-5: calc(2.5 * var(--arc-internal-size));
    --arc-size-2-75: calc(2.75 * var(--arc-internal-size));
    --arc-size-3: calc(3 * var(--arc-internal-size));
    --arc-size-3-25: calc(3.25 * var(--arc-internal-size));
    --arc-size-3-5: calc(3.5 * var(--arc-internal-size));
    --arc-size-3-75: calc(3.75 * var(--arc-internal-size));
    --arc-size-4: calc(4 * var(--arc-internal-size));
    --arc-size-4-25: calc(4.25 * var(--arc-internal-size));
    --arc-size-4-5: calc(4.5 * var(--arc-internal-size));
    --arc-size-4-75: calc(4.75 * var(--arc-internal-size));
    --arc-size-5: calc(5 * var(--arc-internal-size));
    --arc-size-6: calc(6 * var(--arc-internal-size));
    --arc-size-7: calc(7 * var(--arc-internal-size));
    --arc-size-8: calc(8 * var(--arc-internal-size));
    --arc-size-9: calc(9 * var(--arc-internal-size));
    --arc-size-10: calc(10 * var(--arc-internal-size));
    --arc-size-11: calc(11 * var(--arc-internal-size));
    --arc-size-12: calc(12 * var(--arc-internal-size));
    --arc-size-13: calc(13 * var(--arc-internal-size));
    --arc-size-14: calc(14 * var(--arc-internal-size));
    --arc-size-15: calc(15 * var(--arc-internal-size));
    --arc-size-16: calc(16 * var(--arc-internal-size));
    --arc-size-17: calc(17 * var(--arc-internal-size));
    --arc-size-18: calc(18 * var(--arc-internal-size));
    --arc-size-19: calc(19 * var(--arc-internal-size));
    --arc-size-20: calc(20 * var(--arc-internal-size));
    --arc\u2022space\u202216m: min(-16px, -1rem);
    --arc\u2022space\u202214m: min(-14px, -0.875rem);
    --arc\u2022space\u202212m: min(-12px, -0.75rem);
    --arc\u2022space\u202210m: min(-10px, -0.625rem);
    --arc\u2022space\u20228m: min(-8px, -0.5rem);
    --arc\u2022space\u20226m: min(-6px, -0.375rem);
    --arc\u2022space\u20225m: min(-5px, -0.3125rem);
    --arc\u2022space\u20224m: min(-4px, -0.25rem);
    --arc\u2022space\u20223m: min(-3px, -0.1875rem);
    --arc\u2022space\u20222m: min(-2px, -0.125rem);
    --arc\u2022space\u20221m: min(-1px, -0.0625rem);
    --arc\u2022space\u20220: 0px;
    --arc\u2022space\u20221: max(1px, 0.0625rem);
    --arc\u2022space\u20222: max(2px, 0.125rem);
    --arc\u2022space\u20223: max(3px, 0.1875rem);
    --arc\u2022space\u20224: max(4px, 0.25rem);
    --arc\u2022space\u20225: max(5px, 0.3125rem);
    --arc\u2022space\u20226: max(6px, 0.375rem);
    --arc\u2022space\u20228: max(8px, 0.5rem);
    --arc\u2022space\u202210: max(10px, 0.625rem);
    --arc\u2022space\u202212: max(12px, 0.75rem);
    --arc\u2022space\u202214: max(14px, 0.875rem);
    --arc\u2022space\u202216: max(16px, 1rem);
    --arc\u2022space\u202218: max(18px, 1.125rem);
    --arc\u2022space\u202220: max(20px, 1.25rem);
    --arc\u2022space\u202224: max(24px, 1.5rem);
    --arc\u2022space\u202232: max(32px, 2rem);
    --arc\u2022space\u202240: max(40px, 2.5rem);
    --arc\u2022space\u202248: max(48px, 3rem);
    --arc\u2022space\u202256: max(56px, 3.5rem);
    --arc\u2022space\u202264: max(64px, 4rem);
    --arc\u2022space\u202272: max(72px, 4.5rem);
    --arc\u2022space\u202280: max(80px, 5rem);
    --arc\u2022space\u202288: max(88px, 5.5rem);
    --arc\u2022space\u202296: max(96px, 6rem);
    --arc\u2022size\u202216m: min(-16px, -1rem);
    --arc\u2022size\u202212m: min(-12px, -0.75rem);
    --arc\u2022size\u202210m: min(-10px, -0.625rem);
    --arc\u2022size\u20228m: min(-8px, -0.5rem);
    --arc\u2022size\u20226m: min(-6px, -0.375rem);
    --arc\u2022size\u20224m: min(-4px, -0.25rem);
    --arc\u2022size\u20223m: min(-3px, -0.1875rem);
    --arc\u2022size\u20222m: min(-2px, -0.125rem);
    --arc\u2022size\u20221m: min(-1px, -0.0625rem);
    --arc\u2022size\u20220: 0px;
    --arc\u2022size\u20221: max(1px, 0.0625rem);
    --arc\u2022size\u20222: max(2px, 0.125rem);
    --arc\u2022size\u20223: max(3px, 0.1875rem);
    --arc\u2022size\u20224: max(4px, 0.25rem);
    --arc\u2022size\u20225: max(5px, 0.3125rem);
    --arc\u2022size\u20226: max(6px, 0.375rem);
    --arc\u2022size\u20228: max(8px, 0.5rem);
    --arc\u2022size\u202210: max(10px, 0.625rem);
    --arc\u2022size\u202212: max(12px, 0.75rem);
    --arc\u2022size\u202214: max(14px, 0.875rem);
    --arc\u2022size\u202215: max(15px, 0.9375rem);
    --arc\u2022size\u202216: max(16px, 1rem);
    --arc\u2022size\u202218: max(18px, 1.125rem);
    --arc\u2022size\u202220: max(20px, 1.25rem);
    --arc\u2022size\u202222: max(22px, 1.375rem);
    --arc\u2022size\u202224: max(24px, 1.5rem);
    --arc\u2022size\u202225: max(25px, 1.5625rem);
    --arc\u2022size\u202226: max(26px, 1.625rem);
    --arc\u2022size\u202228: max(28px, 1.75rem);
    --arc\u2022size\u202230: max(30px, 1.875rem);
    --arc\u2022size\u202232: max(32px, 2rem);
    --arc\u2022size\u202234: max(34px, 2.125rem);
    --arc\u2022size\u202236: max(36px, 2.25rem);
    --arc\u2022size\u202238: max(38px, 2.375rem);
    --arc\u2022size\u202240: max(40px, 2.5rem);
    --arc\u2022size\u202242: max(42px, 2.625rem);
    --arc\u2022size\u202244: max(44px, 2.75rem);
    --arc\u2022size\u202246: max(46px, 2.875rem);
    --arc\u2022size\u202248: max(48px, 3rem);
    --arc\u2022size\u202250: max(50px, 3.125rem);
    --arc\u2022size\u202252: max(52px, 3.25rem);
    --arc\u2022size\u202254: max(54px, 3.375rem);
    --arc\u2022size\u202256: max(56px, 3.5rem);
    --arc\u2022size\u202258: max(58px, 3.625rem);
    --arc\u2022size\u202260: max(60px, 3.75rem);
    --arc\u2022size\u202264: max(64px, 4rem);
    --arc\u2022size\u202268: max(68px, 4.25rem);
    --arc\u2022size\u202272: max(72px, 4.5rem);
    --arc\u2022size\u202276: max(76px, 4.75rem);
    --arc\u2022size\u202280: max(80px, 5rem);
    --arc\u2022size\u202288: max(88px, 5.5rem);
    --arc\u2022size\u202296: max(96px, 6rem);
    --arc\u2022size\u2022104: max(104px, 6.5rem);
    --arc\u2022size\u2022112: max(112px, 7rem);
    --arc\u2022size\u2022120: max(120px, 7.5rem);
    --arc\u2022size\u2022128: max(128px, 8rem);
    --arc\u2022size\u2022136: max(136px, 8.5rem);
    --arc\u2022size\u2022144: max(144px, 9rem);
    --arc\u2022size\u2022152: max(152px, 9.5rem);
    --arc\u2022size\u2022160: max(160px, 10rem);
  }
}
@layer arc-theme {
  :root,
  ::backdrop {
    --arc-alpha-0: 0%;
    --arc-alpha-3: 3%;
    --arc-alpha-5: 5%;
    --arc-alpha-10: 10%;
    --arc-alpha-20: 20%;
    --arc-alpha-25: 25%;
    --arc-alpha-30: 30%;
    --arc-alpha-40: 40%;
    --arc-alpha-50: 50%;
    --arc-alpha-60: 60%;
    --arc-alpha-70: 70%;
    --arc-alpha-80: 80%;
    --arc-alpha-90: 90%;
    --arc-alpha-95: 95%;
    --arc-alpha-100: 100%;
    --arc-border-radius-none: 0px;
    --arc-border-radius-sm: max(2px, 0.125em);
    --arc-border-radius-md: max(4px, 0.25em);
    --arc-border-radius-lg: max(8px, 0.5em);
    --arc-border-radius-xl: max(16px, 1em);
    --arc-border-radius-circle: 50%;
    --arc-border-radius-pill: 100vh;
    --arc-border-width-none: 0px;
    --arc-border-width-sm: max(1px, 0.0625em);
    --arc-border-width-md: max(2px, 0.125em);
    --arc-border-width-lg: max(3px, 0.1875em);
    --arc-border-width-xl: max(4px, 0.25em);
    /* dynamic shadow tokens */
    --arc-shadow-none: none;
    --arc-shadow-sm: 0 0 max(4px, 0.25em) 0 var(--arc-color-shadow-sm);
    --arc-shadow-md: 0 max(2px, 0.125em) max(6px, 0.375em) 0 var(--arc-color-shadow-md);
    --arc-shadow-lg: 0 max(6px, 0.375em) max(18px, 1.125em) 0 var(--arc-color-shadow-lg);
    --arc-shadow-xl: 0 max(12px, 0.75em) max(48px, 3em) 0 var(--arc-color-shadow-xl);
    /* static light shadow tokens (primitive alpha colors) */
    --arc-shadow-light-none: none;
    --arc-shadow-light-sm: 0 0 max(4px, 0.25em) 0 var(--arc-color-alpha-black-25);
    --arc-shadow-light-md: 0 max(2px, 0.125em) max(6px, 0.375em) 0 var(--arc-color-alpha-black-15);
    --arc-shadow-light-lg: 0 max(6px, 0.375em) max(18px, 1.125em) 0 var(--arc-color-alpha-black-15);
    --arc-shadow-light-xl: 0 max(12px, 0.75em) max(48px, 3em) 0 var(--arc-color-alpha-black-15);
    /* static dark shadow tokens (primitive alpha colors) */
    --arc-shadow-dark-none: none;
    --arc-shadow-dark-sm: 0 0 max(4px, 0.25em) 0 var(--arc-color-alpha-black-60);
    --arc-shadow-dark-md: 0 max(2px, 0.125em) max(6px, 0.375em) 0 var(--arc-color-alpha-black-50);
    --arc-shadow-dark-lg: 0 max(6px, 0.375em) max(18px, 1.125em) 0 var(--arc-color-alpha-black-40);
    --arc-shadow-dark-xl: 0 max(12px, 0.75em) max(48px, 3em) 0 var(--arc-color-alpha-black-40);
    /* surface shadow tokens */
    --arc-surface-raised-shadow: var(--arc-shadow-md);
    --arc-surface-floating-shadow: var(--arc-shadow-lg);
  }
}
@layer arc-utils {
  /* Gradients -----------------------------------------------------\u2022 */
  [arc-gradient] {
    background-clip: text;
    color: transparent;
    /** @note: line-height mitigation strategy for gradient icons
     * stops icon geometry clipping issues
     */
  }
  [arc-gradient][arc-icon] {
    --arc-icon-height: 1.5lh;
    --arc-icon-max-height: none;
    --arc-icon-margin-block: -0.5lh;
  }
  :is([arc-gradient], [arc-gradient=ai], [arc-gradient=ai-200]) {
    background-image: var(--arc-gradient-ai-200);
  }
  [arc-gradient=ai-50] {
    background-image: var(--arc-gradient-ai-50);
  }
  [arc-gradient=ai-100] {
    background-image: var(--arc-gradient-ai-100);
  }
  [arc-gradient=ai-300] {
    background-image: var(--arc-gradient-ai-300);
  }
  [arc-gradient=ai-400] {
    background-image: var(--arc-gradient-ai-400);
  }
  [arc-gradient=ai-500] {
    background-image: var(--arc-gradient-ai-500);
  }
  [arc-gradient=ai-600] {
    background-image: var(--arc-gradient-ai-600);
  }
  /* Shadows -------------------------------------------------------\u2022 */
  [arc-shadow=sm] {
    box-shadow: var(--arc-shadow-sm);
  }
  [arc-shadow=md] {
    box-shadow: var(--arc-shadow-md);
  }
  [arc-shadow=lg] {
    box-shadow: var(--arc-shadow-lg);
  }
  [arc-shadow=xl] {
    box-shadow: var(--arc-shadow-xl);
  }
  /* Light Shadows -------------------------------------------------\u2022 */
  [arc-shadow=light-sm] {
    box-shadow: var(--arc-shadow-light-sm);
  }
  [arc-shadow=light-md] {
    box-shadow: var(--arc-shadow-light-md);
  }
  [arc-shadow=light-lg] {
    box-shadow: var(--arc-shadow-light-lg);
  }
  [arc-shadow=light-xl] {
    box-shadow: var(--arc-shadow-light-xl);
  }
  /* Dark Shadows --------------------------------------------------\u2022 */
  [arc-shadow=dark-sm] {
    box-shadow: var(--arc-shadow-dark-sm);
  }
  [arc-shadow=dark-md] {
    box-shadow: var(--arc-shadow-dark-md);
  }
  [arc-shadow=dark-lg] {
    box-shadow: var(--arc-shadow-dark-lg);
  }
  [arc-shadow=dark-xl] {
    box-shadow: var(--arc-shadow-dark-xl);
  }
  /* Surfaces ------------------------------------------------------\u2022 */
  [arc-surface=primary] {
    color: var(--arc-surface-primary-color, var(--arc-color-fg-primary));
    background: var(--arc-surface-primary-background, var(--arc-color-bg-primary));
  }
  [arc-surface=secondary] {
    color: var(--arc-surface-secondary-color, var(--arc-color-fg-primary));
    background: var(--arc-surface-secondary-background, var(--arc-color-bg-secondary));
  }
  [arc-surface=inset] {
    color: var(--arc-surface-inset-color, var(--arc-color-fg-primary));
    background: var(--arc-surface-inset-background, var(--arc-color-bg-tertiary));
  }
  [arc-surface=raised] {
    color: var(--arc-surface-raised-color, var(--arc-color-fg-primary));
    background: var(--arc-surface-raised-background, var(--arc-color-bg-primary));
    box-shadow: var(--arc-surface-raised-box-shadow, var(--arc-surface-raised-shadow));
    z-index: var(--arc-surface-raised-z-index, 1);
  }
  [arc-surface=floating] {
    color: var(--arc-surface-floating-color, var(--arc-color-fg-primary));
    background: var(--arc-surface-floating-background, var(--arc-color-bg-primary));
    box-shadow: var(--arc-surface-floating-box-shadow, var(--arc-surface-floating-shadow));
    z-index: var(--arc-surface-floating-z-index, 2);
  }
  /* Scheme (proximity via inheritance) ----------------------------\u2022 */
  :root:not([arc-scheme]) {
    --arc\u2022color\u2022scheme: light;
    --arc\u2022color\u2022scheme\u2022inverse: dark;
  }
  [arc-scheme=light] {
    --arc\u2022color\u2022scheme: light;
    --arc\u2022color\u2022scheme\u2022inverse: dark;
    --arc\u2022color\u2022scheme\u2022inverse\u2022nested: light;
  }
  [arc-scheme=dark] {
    --arc\u2022color\u2022scheme: dark;
    --arc\u2022color\u2022scheme\u2022inverse: light;
    --arc\u2022color\u2022scheme\u2022inverse\u2022nested: dark;
  }
  [arc-scheme=inverse] {
    --arc\u2022color\u2022scheme: var(--arc\u2022color\u2022scheme\u2022inverse);
  }
  [arc-scheme=inverse] [arc-scheme=inverse] {
    --arc\u2022color\u2022scheme: var(--arc\u2022color\u2022scheme\u2022inverse\u2022nested);
  }
  :root:not([arc-scheme]),
  [arc-scheme] {
    color-scheme: var(--arc\u2022color\u2022scheme, light);
  }
}
:root,
::backdrop {
  /* @deprecated background variables - please update all instances */
  --arc-color-alpha-white-03: var(--arc-color-alpha-white-3);
  --arc-color-alpha-white-05: var(--arc-color-alpha-white-5);
  --arc-color-alpha-black-03: var(--arc-color-alpha-black-3);
  --arc-color-alpha-black-05: var(--arc-color-alpha-black-5);
  --arc-color-neutral-000: var(--arc-color-light-neutral-0);
  --arc-color-neutral-050: var(--arc-color-light-neutral-50);
  --arc-color-neutral-100: var(--arc-color-light-neutral-100);
  --arc-color-neutral-200: var(--arc-color-light-neutral-200);
  --arc-color-neutral-300: var(--arc-color-light-neutral-300);
  --arc-color-neutral-400: var(--arc-color-light-neutral-400);
  --arc-color-neutral-500: var(--arc-color-light-neutral-500);
  --arc-color-neutral-600: var(--arc-color-light-neutral-600);
  --arc-color-neutral-700: var(--arc-color-light-neutral-700);
  --arc-color-neutral-800: var(--arc-color-light-neutral-800);
  --arc-color-neutral-900: var(--arc-color-light-neutral-900);
  --arc-color-blue-050: var(--arc-color-light-blue-50);
  --arc-color-blue-100: var(--arc-color-light-blue-100);
  --arc-color-blue-200: var(--arc-color-light-blue-200);
  --arc-color-blue-300: var(--arc-color-light-blue-300);
  --arc-color-blue-400: var(--arc-color-light-blue-400);
  --arc-color-blue-500: var(--arc-color-light-blue-500);
  --arc-color-blue-600: var(--arc-color-light-blue-600);
  --arc-color-blue-700: var(--arc-color-light-blue-700);
  --arc-color-blue-800: var(--arc-color-light-blue-800);
  --arc-color-blue-900: var(--arc-color-light-blue-900);
  --arc-color-purple-050: var(--arc-color-light-purple-50);
  --arc-color-purple-100: var(--arc-color-light-purple-100);
  --arc-color-purple-200: var(--arc-color-light-purple-200);
  --arc-color-purple-300: var(--arc-color-light-purple-300);
  --arc-color-purple-400: var(--arc-color-light-purple-400);
  --arc-color-purple-500: var(--arc-color-light-purple-500);
  --arc-color-purple-600: var(--arc-color-light-purple-600);
  --arc-color-purple-700: var(--arc-color-light-purple-700);
  --arc-color-purple-800: var(--arc-color-light-purple-800);
  --arc-color-purple-900: var(--arc-color-light-purple-900);
  --arc-color-maroon-050: var(--arc-color-light-maroon-50);
  --arc-color-maroon-100: var(--arc-color-light-maroon-100);
  --arc-color-maroon-200: var(--arc-color-light-maroon-200);
  --arc-color-maroon-300: var(--arc-color-light-maroon-300);
  --arc-color-maroon-400: var(--arc-color-light-maroon-400);
  --arc-color-maroon-500: var(--arc-color-light-maroon-500);
  --arc-color-maroon-600: var(--arc-color-light-maroon-600);
  --arc-color-maroon-700: var(--arc-color-light-maroon-700);
  --arc-color-maroon-800: var(--arc-color-light-maroon-800);
  --arc-color-maroon-900: var(--arc-color-light-maroon-900);
  --arc-color-red-050: var(--arc-color-light-red-50);
  --arc-color-red-100: var(--arc-color-light-red-100);
  --arc-color-red-200: var(--arc-color-light-red-200);
  --arc-color-red-300: var(--arc-color-light-red-300);
  --arc-color-red-400: var(--arc-color-light-red-400);
  --arc-color-red-500: var(--arc-color-light-red-500);
  --arc-color-red-600: var(--arc-color-light-red-600);
  --arc-color-red-700: var(--arc-color-light-red-700);
  --arc-color-red-800: var(--arc-color-light-red-800);
  --arc-color-red-900: var(--arc-color-light-red-900);
  --arc-color-orange-050: var(--arc-color-light-orange-50);
  --arc-color-orange-100: var(--arc-color-light-orange-100);
  --arc-color-orange-200: var(--arc-color-light-orange-200);
  --arc-color-orange-300: var(--arc-color-light-orange-300);
  --arc-color-orange-400: var(--arc-color-light-orange-400);
  --arc-color-orange-500: var(--arc-color-light-orange-500);
  --arc-color-orange-600: var(--arc-color-light-orange-600);
  --arc-color-orange-700: var(--arc-color-light-orange-700);
  --arc-color-orange-800: var(--arc-color-light-orange-800);
  --arc-color-orange-900: var(--arc-color-light-orange-900);
  --arc-color-yellow-050: var(--arc-color-light-yellow-50);
  --arc-color-yellow-100: var(--arc-color-light-yellow-100);
  --arc-color-yellow-200: var(--arc-color-light-yellow-200);
  --arc-color-yellow-300: var(--arc-color-light-yellow-300);
  --arc-color-yellow-400: var(--arc-color-light-yellow-400);
  --arc-color-yellow-500: var(--arc-color-light-yellow-500);
  --arc-color-yellow-600: var(--arc-color-light-yellow-600);
  --arc-color-yellow-700: var(--arc-color-light-yellow-700);
  --arc-color-yellow-800: var(--arc-color-light-yellow-800);
  --arc-color-yellow-900: var(--arc-color-light-yellow-900);
  --arc-color-green-050: var(--arc-color-light-green-50);
  --arc-color-green-100: var(--arc-color-light-green-100);
  --arc-color-green-200: var(--arc-color-light-green-200);
  --arc-color-green-300: var(--arc-color-light-green-300);
  --arc-color-green-400: var(--arc-color-light-green-400);
  --arc-color-green-500: var(--arc-color-light-green-500);
  --arc-color-green-600: var(--arc-color-light-green-600);
  --arc-color-green-700: var(--arc-color-light-green-700);
  --arc-color-green-800: var(--arc-color-light-green-800);
  --arc-color-green-900: var(--arc-color-light-green-900);
  --arc-color-mint-050: var(--arc-color-light-mint-50);
  --arc-color-mint-100: var(--arc-color-light-mint-100);
  --arc-color-mint-200: var(--arc-color-light-mint-200);
  --arc-color-mint-300: var(--arc-color-light-mint-300);
  --arc-color-mint-400: var(--arc-color-light-mint-400);
  --arc-color-mint-500: var(--arc-color-light-mint-500);
  --arc-color-mint-600: var(--arc-color-light-mint-600);
  --arc-color-mint-700: var(--arc-color-light-mint-700);
  --arc-color-mint-800: var(--arc-color-light-mint-800);
  --arc-color-mint-900: var(--arc-color-light-mint-900);
  --arc-gradient-ai-050: var(--arc-gradient-ai-50);
  --arc-color-ai-purple-050: #fbf2ff;
  --arc-color-ai-purple-100: #efccff;
  --arc-color-ai-purple-200: #9c15ff;
  --arc-color-ai-purple-300: #680278;
  --arc-color-ai-purple-400: #5d3668;
  --arc-color-ai-purple-500: #37003f;
  --arc-color-ai-purple-600: #27002c;
  --arc-color-ai-blue-050: #f4fbff;
  --arc-color-ai-blue-100: #d2f1fe;
  --arc-color-ai-blue-200: #1eb4fb;
  --arc-color-ai-blue-300: #0179d0;
  --arc-color-ai-blue-400: #36648c;
  --arc-color-ai-blue-500: #004273;
  --arc-color-ai-blue-600: #012a48;
  /* @deprecated background variables - please update all instances */
  --arc-color-background-primary: var(--arc-color-bg-primary);
  --arc-color-background-primary-hover: var(--arc-color-bg-hover-default);
  --arc-color-background-primary-selected-subtle: var(--arc-color-bg-selected-subtle);
  --arc-color-background-primary-selected: var(--arc-color-bg-selected-default);
  --arc-color-background-primary-selected-stark: var(--arc-color-bg-selected-stark);
  --arc-color-background-secondary: var(--arc-color-bg-secondary);
  --arc-color-background-secondary-hover: var(--arc-color-bg-hover-default);
  --arc-color-background-tertiary: var(--arc-color-bg-tertiary);
  --arc-color-background-inverse: var(--arc-color-light-neutral-1000);
  --arc-color-overlay-dark: var(--arc-color-overlay-stark);
  --arc-color-overlay-light: var(--arc-color-overlay-subtle);
  /* @deprecated foreground variables - please update all instances */
  --arc-color-text-primary: var(--arc-color-fg-primary);
  --arc-color-icon-primary: var(--arc-color-fg-primary);
  --arc-color-text-secondary: var(--arc-color-fg-secondary);
  --arc-color-icon-secondary: var(--arc-color-fg-secondary);
  --arc-color-icon-primary-hover: var(--arc-color-fg-on-hover-default);
  --arc-color-text-primary-hover: var(--arc-color-fg-on-hover-default);
  --arc-color-text-secondary-hover: var(--arc-color-fg-on-hover-stark);
  --arc-color-icon-secondary-hover: var(--arc-color-fg-on-hover-stark);
  --arc-color-text-disabled: var(--arc-color-fg-disabled);
  --arc-color-icon-disabled: var(--arc-color-fg-disabled);
  --arc-color-text-inverse: var(--arc-color-dark-neutral-1000);
  --arc-color-icon-inverse: var(--arc-color-dark-neutral-1000);
  --arc-color-text-inverse-secondary: var(--arc-color-dark-neutral-700);
  --arc-color-icon-inverse-secondary: var(--arc-color-dark-neutral-700);
  --arc-color-text-inverse-hover: var(--arc-color-dark-neutral-700);
  --arc-color-icon-inverse-hover: var(--arc-color-dark-neutral-700);
  --arc-color-text-inverse-disabled: var(--arc-color-alpha-white-30);
  --arc-color-icon-inverse-disabled: var(--arc-color-alpha-white-30);
  --arc-color-text-info: var(--arc-color-fg-info-stark);
  --arc-color-icon-info: var(--arc-color-fg-info-stark);
  --arc-color-text-brand: var(--arc-color-fg-brand-stark);
  --arc-color-icon-brand: var(--arc-color-fg-brand-mid);
  --arc-color-text-success: var(--arc-color-fg-success-stark);
  --arc-color-icon-success: var(--arc-color-fg-success-stark);
  --arc-color-text-warning: var(--arc-color-fg-warning-stark);
  --arc-color-icon-warning: var(--arc-color-fg-warning-stark);
  --arc-color-text-critical: var(--arc-color-fg-critical-mid);
  --arc-color-icon-critical: var(--arc-color-fg-critical-mid);
  /* @deprecated border variable - please update all instances */
  --arc-color-border-orange: var(--arc-color-border-orange-mid);
  --arc-color-border-mint: var(--arc-color-border-mint-mid);
  --arc-color-border-maroon: var(--arc-color-border-maroon-mid);
  --arc-color-border-standard: var(--arc-color-border-mid);
  --arc-color-border-full: var(--arc-color-border-heavy);
  --arc-color-border-focus-inverse: var(--arc-color-light-blue-300);
  --arc-border-width-standard: var(--arc-border-width-sm);
  /* @deprecated color variables - please update all instances */
  --arc-color-info-light: var(--arc-color-bg-info-muted);
  --arc-color-info-medium: var(--arc-color-bg-info-subtle);
  --arc-color-info-root: var(--arc-color-bg-info-mid);
  --arc-color-info-dark: var(--arc-color-bg-info-stark);
  --arc-color-info-heavy: var(--arc-color-bg-info-heavy);
  --arc-color-border-info: var(--arc-color-border-info-mid);
  --arc-color-brand-light: var(--arc-color-bg-brand-muted);
  --arc-color-brand-medium: var(--arc-color-bg-brand-subtle);
  --arc-color-brand-root: var(--arc-color-bg-brand-mid);
  --arc-color-brand-dark: var(--arc-color-bg-brand-stark);
  --arc-color-brand-heavy: var(--arc-color-bg-brand-heavy);
  --arc-color-border-brand: var(--arc-color-border-brand-mid);
  --arc-color-success-light: var(--arc-color-bg-success-muted);
  --arc-color-success-medium: var(--arc-color-bg-success-subtle);
  --arc-color-success-root: var(--arc-color-bg-success-mid);
  --arc-color-success-dark: var(--arc-color-bg-success-stark);
  --arc-color-success-heavy: var(--arc-color-bg-success-heavy);
  --arc-color-border-success: var(--arc-color-border-success-mid);
  --arc-color-warning-light: var(--arc-color-bg-warning-muted);
  --arc-color-warning-medium: var(--arc-color-bg-warning-subtle);
  --arc-color-warning-root: var(--arc-color-bg-warning-mid);
  --arc-color-warning-dark: var(--arc-color-bg-warning-stark);
  --arc-color-warning-heavy: var(--arc-color-bg-warning-heavy);
  --arc-color-border-warning: var(--arc-color-border-warning-mid);
  --arc-color-critical-light: var(--arc-color-bg-critical-muted);
  --arc-color-critical-medium: var(--arc-color-bg-critical-subtle);
  --arc-color-critical-root: var(--arc-color-bg-critical-mid);
  --arc-color-critical-dark: var(--arc-color-bg-critical-stark);
  --arc-color-critical-heavy: var(--arc-color-bg-critical-heavy);
  --arc-color-border-critical: var(--arc-color-border-critical-mid);
  /** @deprecated - old alpha leading zeros */
  --arc-alpha-03: var(--arc-alpha-3);
  --arc-alpha-05: var(--arc-alpha-5);
}

/*# sourceMappingURL=theme.css.map */
`,as={};function Cr(r,e){if(typeof document<"u"&&e?.styleSheet){const a=as[r];as[r]=e.styleSheet,document.adoptedStyleSheets=[...document.adoptedStyleSheets.filter(t=>t!==a),e.styleSheet]}}function $v(r){const e=Object.values(as),a=document.adoptedStyleSheets.filter(t=>e.includes(t));if(r.adoptedStyleSheets){const t=a.filter(o=>!r.adoptedStyleSheets.includes(o));r.adoptedStyleSheets=[...r.adoptedStyleSheets,...t]}}function yv(r){if(typeof CSSStyleSheet<"u"){const e=new CSSStyleSheet;e.replaceSync(bv),r.adoptedStyleSheets&&(r.adoptedStyleSheets.includes(e)||(r.adoptedStyleSheets=[...r.adoptedStyleSheets,e]))}}const Zt=r=>typeof r=="string"?r:typeof r=="number"?r.toString():Array.isArray(r)?r.map(Zt).join(""):(0,s.isValidElement)(r)?Zt(r.props.children):"",fu={},xv=(r="id")=>{const e=(fu[r]??0)+1;return fu[r]=e,`${r}-${e}`},Nr=(r,e="id")=>{const a=(0,s.useId)();return r??`${e}-${a}`},At=r=>typeof r=="string",bc=r=>typeof r=="number",mu=r=>r!==null&&typeof r=="object",wv=["#9c15ff","#1eb4fb"],bu=({angle:r=60,width:e,height:a})=>{const t=(r-90)*Math.PI/180,o=e/2,n=a/2,c=Math.sqrt(e*e+a*a)/2,l=Math.cos(t)*c,u=Math.sin(t)*c;return{x1:o-l,y1:n-u,x2:o+l,y2:n+u}},kv=(r,e)=>{const a=At(r)?r:r.color,t=At(r)?e.toString():r.offset?.toString()??e.toString();return(0,i.jsx)("stop",{offset:t,stopColor:a},`${a}-${e}`)},$u=({id:r,angle:e=60,width:a,height:t,stops:o=wv})=>{const{x1:n,y1:c,x2:l,y2:u}=bu({angle:e,width:a,height:t});return(0,i.jsx)("defs",{children:(0,i.jsx)("linearGradient",{gradientUnits:"userSpaceOnUse",id:r,x1:n,x2:l,y1:c,y2:u,children:o.map(kv)})})},ts=r=>(0,i.jsx)("svg",{...r,viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M16.2362 2V4.04215H3.7443V2H16.2362ZM13.8453 11.7538C13.8453 9.47528 12.1743 7.75773 9.96905 7.75773C7.79316 7.75773 6.15147 9.47528 6.15147 11.7538C6.15147 14.0323 7.7899 15.753 9.96905 15.753C12.1775 15.753 13.8453 14.0355 13.8453 11.7569V11.7538ZM9.96905 18C6.29153 18 3.5 15.3213 3.5 11.7538C3.5 8.20209 6.27524 5.50758 9.96905 5.49183C13.6922 5.49183 16.5 8.17057 16.5 11.738V17.6754H13.8485V16.3581C13.8485 16.3581 12.3925 18 9.97231 18H9.96905Z",fill:"var(--arc-color-logo-articulate, #000000)"})}),os=r=>{const e=Nr(void 0,"arc-ai-gradient");return(0,i.jsxs)("svg",{...r,viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:[(0,i.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.25 10C17.25 14.0041 14.0041 17.25 10 17.25C5.99594 17.25 2.75 14.0041 2.75 10C2.75 5.99594 5.99594 2.75 10 2.75C14.0041 2.75 17.25 5.99594 17.25 10ZM18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM11.8524 12.87V8.17199H12.6444V12.87H11.8524ZM11.8524 7.28999V6.29999H12.6444V7.28999H11.8524ZM6.5 11.511C6.5 11.211 6.584 10.953 6.752 10.737C6.926 10.515 7.163 10.344 7.463 10.224C7.763 10.104 8.111 10.044 8.507 10.044C8.717 10.044 8.939 10.062 9.173 10.098C9.407 10.128 9.614 10.176 9.794 10.242V9.89999C9.794 9.53999 9.686 9.25799 9.47 9.05399C9.254 8.84399 8.948 8.73899 8.552 8.73899C8.294 8.73899 8.045 8.78699 7.805 8.88299C7.571 8.97299 7.322 9.10499 7.058 9.27899L6.77 8.72099C7.076 8.51099 7.382 8.35499 7.688 8.25299C7.994 8.14499 8.312 8.09099 8.642 8.09099C9.242 8.09099 9.716 8.25899 10.064 8.59499C10.412 8.92499 10.586 9.38699 10.586 9.98099V11.97C10.586 12.066 10.604 12.138 10.64 12.186C10.682 12.228 10.748 12.252 10.838 12.258V12.87C10.76 12.882 10.691 12.891 10.631 12.897C10.577 12.903 10.532 12.906 10.496 12.906C10.31 12.906 10.169 12.855 10.073 12.753C9.983 12.651 9.932 12.543 9.92 12.429L9.902 12.132C9.698 12.396 9.431 12.6 9.101 12.744C8.771 12.888 8.444 12.96 8.12 12.96C7.808 12.96 7.529 12.897 7.283 12.771C7.037 12.639 6.845 12.465 6.707 12.249C6.569 12.027 6.5 11.781 6.5 11.511ZM9.56 11.844C9.632 11.76 9.689 11.676 9.731 11.592C9.773 11.502 9.794 11.427 9.794 11.367V10.782C9.608 10.71 9.413 10.656 9.209 10.62C9.005 10.578 8.804 10.557 8.606 10.557C8.204 10.557 7.877 10.638 7.625 10.8C7.379 10.956 7.256 11.172 7.256 11.448C7.256 11.598 7.295 11.745 7.373 11.889C7.457 12.027 7.577 12.141 7.733 12.231C7.895 12.321 8.093 12.366 8.327 12.366C8.573 12.366 8.807 12.318 9.029 12.222C9.251 12.12 9.428 11.994 9.56 11.844Z",fill:`url(#${e})`}),$u({id:e,width:640,height:640,stops:["var(--arc-color-logo-ai-purple, #9c15ff)","var(--arc-color-logo-ai-blue, #1eb4fb)"]})]})},ns=r=>(0,i.jsx)("svg",{...r,viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10 18C5.582 18 2 14.418 2 10C2 5.582 5.582 2 10 2C14.418 2 18 5.582 18 10C18 14.418 14.418 18 10 18ZM10 17.272C14.016 17.272 17.272 14.016 17.272 10C17.272 5.984 14.016 2.728 10 2.728C5.984 2.728 2.728 5.984 2.728 10C2.728 14.016 5.984 17.272 10 17.272ZM11.3493 8.65067L13.3747 7.51C13.4276 7.48023 13.4874 7.46481 13.5481 7.46529C13.6088 7.46576 13.6683 7.48211 13.7207 7.51271C13.7732 7.54331 13.8167 7.58709 13.847 7.63971C13.8772 7.69233 13.8932 7.75196 13.8933 7.81267V12.14C13.8934 12.2014 13.8772 12.2616 13.8464 12.3147C13.8156 12.3678 13.7713 12.4118 13.7181 12.4423C13.6648 12.4727 13.6044 12.4886 13.5431 12.4882C13.4817 12.4878 13.4215 12.4712 13.3687 12.44L11.3433 11.2453C11.2911 11.2146 11.2479 11.1707 11.2178 11.1181C11.1878 11.0655 11.172 11.0059 11.172 10.9453V8.95333C11.172 8.828 11.24 8.712 11.3493 8.65067ZM7.20267 7.46333H9.93867C10.3227 7.46333 10.634 7.77467 10.634 8.15867V11.592C10.634 11.9767 10.3227 12.288 9.93867 12.288H7.202C7.0177 12.288 6.84094 12.2148 6.71056 12.0846C6.58018 11.9543 6.50684 11.7776 6.50667 11.5933V8.16C6.50667 7.77533 6.818 7.464 7.202 7.464L7.20267 7.46333Z",fill:"var(--arc-color-logo-peek, #497add)"})}),cs=r=>(0,i.jsx)("svg",{...r,viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.25 10C17.25 14.0041 14.0041 17.25 10 17.25C5.99594 17.25 2.75 14.0041 2.75 10C2.75 5.99594 5.99594 2.75 10 2.75C14.0041 2.75 17.25 5.99594 17.25 10ZM18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM11.7343 12.569C11.3803 12.569 11.0563 12.506 10.7623 12.38C10.4743 12.248 10.2223 12.071 10.0063 11.849C9.79627 11.621 9.63127 11.36 9.51127 11.066C9.39727 10.772 9.34027 10.46 9.34027 10.13C9.34027 9.68601 9.44227 9.28101 9.64627 8.91501C9.85027 8.54901 10.1323 8.25501 10.4923 8.03301C10.8583 7.81101 11.2753 7.70001 11.7433 7.70001C12.2173 7.70001 12.6283 7.81401 12.9763 8.04201C13.3303 8.26401 13.6033 8.55801 13.7953 8.92401C13.9933 9.28401 14.0923 9.67401 14.0923 10.094C14.0923 10.154 14.0893 10.214 14.0833 10.274C14.0833 10.328 14.0803 10.37 14.0743 10.4H10.1773C10.2013 10.706 10.2853 10.979 10.4293 11.219C10.5793 11.453 10.7713 11.639 11.0053 11.777C11.2393 11.909 11.4913 11.975 11.7613 11.975C12.0493 11.975 12.3193 11.903 12.5713 11.759C12.8293 11.615 13.0063 11.426 13.1023 11.192L13.7863 11.381C13.6843 11.609 13.5313 11.813 13.3273 11.993C13.1293 12.173 12.8923 12.314 12.6163 12.416C12.3463 12.518 12.0523 12.569 11.7343 12.569ZM10.1503 9.85101H13.3543C13.3303 9.54501 13.2433 9.27501 13.0933 9.04101C12.9433 8.80701 12.7513 8.62401 12.5173 8.49201C12.2833 8.36001 12.0253 8.29401 11.7433 8.29401C11.4673 8.29401 11.2123 8.36001 10.9783 8.49201C10.7443 8.62401 10.5523 8.80701 10.4023 9.04101C10.2583 9.27501 10.1743 9.54501 10.1503 9.85101ZM8.984 8.47401C8.588 8.48001 8.237 8.58201 7.931 8.78001C7.631 8.97201 7.418 9.23901 7.292 9.58101V12.479H6.5V7.78101H7.238V8.87001C7.4 8.54601 7.613 8.28501 7.877 8.08701C8.147 7.88301 8.429 7.76901 8.723 7.74501H8.876C8.918 7.74501 8.954 7.74801 8.984 7.75401V8.47401Z",fill:"var(--arc-color-logo-reach, #0081de)"})}),is=r=>(0,i.jsx)("svg",{...r,viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.25 10C17.25 14.0041 14.0041 17.25 10 17.25C5.99594 17.25 2.75 14.0041 2.75 10C2.75 5.99594 5.99594 2.75 10 2.75C14.0041 2.75 17.25 5.99594 17.25 10ZM18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM9.38402 8.46899C8.98802 8.47499 8.63702 8.57699 8.33102 8.77499C8.03102 8.96699 7.81802 9.23399 7.69202 9.57599V12.474H6.90002V7.77599H7.63802V8.86499C7.80002 8.54099 8.01302 8.27999 8.27702 8.08199C8.54702 7.87799 8.82902 7.76399 9.12302 7.73999H9.27602C9.31802 7.73999 9.35402 7.74299 9.38402 7.74899V8.46899ZM11.5195 12.474L9.67455 7.77599H10.5025L11.9785 11.718L13.4545 7.77599H14.2285L12.3835 12.474H11.5195Z",fill:"var(--arc-color-logo-review, #35b062)"})}),ss=r=>(0,i.jsx)("svg",{...r,viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10 18C5.582 18 2 14.418 2 10C2 5.582 5.582 2 10 2C14.418 2 18 5.582 18 10C18 14.418 14.418 18 10 18ZM10 17.272C14.016 17.272 17.272 14.016 17.272 10C17.272 5.984 14.016 2.728 10 2.728C5.984 2.728 2.728 5.984 2.728 10C2.728 14.016 5.984 17.272 10 17.272ZM9.29467 8.48267C8.90667 8.49467 8.564 8.59467 8.268 8.78267C7.97067 8.97067 7.76067 9.232 7.63733 9.56733V12.406H6.86133V7.804H7.584V8.87067C7.74267 8.55333 7.95133 8.296 8.21067 8.09933C8.46867 7.90267 8.74467 7.79267 9.03867 7.76867H9.18867C9.23 7.76867 9.26533 7.772 9.29467 7.77733V8.48267ZM11.6747 12.494C11.3035 12.4941 10.9347 12.4363 10.5813 12.3227C10.2233 12.208 9.91467 12.042 9.656 11.824L9.99067 11.304C10.2613 11.51 10.532 11.664 10.802 11.7667C11.0727 11.87 11.3573 11.9213 11.6573 11.9213C11.992 11.9213 12.258 11.8547 12.4553 11.7227C12.5492 11.6632 12.6258 11.5803 12.6776 11.482C12.7294 11.3838 12.7546 11.2737 12.7507 11.1627C12.7507 11.0513 12.724 10.956 12.6707 10.876C12.6092 10.7892 12.5278 10.7183 12.4333 10.6693C12.3044 10.6014 12.1682 10.5482 12.0273 10.5107C11.8627 10.464 11.672 10.4133 11.454 10.3607C11.2142 10.3005 10.9763 10.2329 10.7407 10.158C10.566 10.1052 10.3997 10.028 10.2467 9.92867C10.1259 9.85011 10.0285 9.7405 9.96467 9.61133C9.90168 9.46686 9.87162 9.31019 9.87667 9.15267C9.87261 8.94053 9.91923 8.73049 10.0127 8.54C10.104 8.36067 10.2287 8.21133 10.388 8.09067C10.5561 7.96556 10.746 7.87287 10.948 7.81733C11.173 7.7542 11.4057 7.72301 11.6393 7.72467C11.986 7.72467 12.3093 7.78067 12.6093 7.892C12.9093 8.004 13.162 8.15067 13.3673 8.33267L13.0147 8.8C12.824 8.63151 12.6026 8.50136 12.3627 8.41667C12.1249 8.33193 11.8744 8.28864 11.622 8.28867C11.34 8.28867 11.1 8.34867 10.9033 8.46933C10.7067 8.59 10.608 8.78267 10.608 9.04733C10.608 9.15267 10.6273 9.24067 10.6653 9.31133C10.7106 9.38903 10.776 9.45306 10.8547 9.49667C10.9433 9.55 11.056 9.59667 11.1947 9.638C11.3327 9.67867 11.4987 9.72333 11.6927 9.77C11.998 9.84067 12.264 9.91267 12.4907 9.986C12.7167 10.0593 12.9047 10.146 13.0547 10.246C13.2047 10.346 13.316 10.4633 13.3893 10.5993C13.4627 10.734 13.5 10.8987 13.5 11.0927C13.5 11.5213 13.3353 11.8627 13.0067 12.1153C12.6767 12.368 12.2333 12.494 11.6747 12.494Z",fill:"var(--arc-color-logo-rise, #ff6600)"})}),ls=r=>(0,i.jsx)("svg",{...r,viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M17.25 10C17.25 14.0041 14.0041 17.25 10 17.25C5.99594 17.25 2.75 14.0041 2.75 10C2.75 5.99594 5.99594 2.75 10 2.75C14.0041 2.75 17.25 5.99594 17.25 10ZM18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM11.2815 6.29999H12.0735V11.655C12.0735 11.913 12.1095 12.072 12.1815 12.132C12.2535 12.192 12.3405 12.222 12.4425 12.222C12.5685 12.222 12.6885 12.21 12.8025 12.186C12.9165 12.156 13.0125 12.126 13.0905 12.096L13.2165 12.744C13.0845 12.798 12.9285 12.843 12.7485 12.879C12.5685 12.915 12.4095 12.933 12.2715 12.933C11.9655 12.933 11.7225 12.846 11.5425 12.672C11.3685 12.498 11.2815 12.255 11.2815 11.943V6.29999ZM8.48 12.96C8.09 12.96 7.724 12.897 7.382 12.771C7.04 12.639 6.746 12.444 6.5 12.186L6.806 11.628C7.076 11.88 7.346 12.06 7.616 12.168C7.886 12.276 8.162 12.33 8.444 12.33C8.768 12.33 9.032 12.27 9.236 12.15C9.44 12.024 9.542 11.841 9.542 11.601C9.542 11.427 9.488 11.298 9.38 11.214C9.278 11.13 9.131 11.061 8.939 11.007C8.747 10.947 8.519 10.881 8.255 10.809C7.931 10.713 7.658 10.611 7.436 10.503C7.214 10.395 7.046 10.26 6.932 10.098C6.818 9.93599 6.761 9.73199 6.761 9.48599C6.761 9.18599 6.839 8.93399 6.995 8.72999C7.151 8.51999 7.364 8.36099 7.634 8.25299C7.91 8.14499 8.222 8.09099 8.57 8.09099C8.918 8.09099 9.233 8.14499 9.515 8.25299C9.797 8.36099 10.04 8.51999 10.244 8.72999L9.884 9.27899C9.698 9.08699 9.494 8.94599 9.272 8.85599C9.05 8.75999 8.801 8.71199 8.525 8.71199C8.363 8.71199 8.204 8.73299 8.048 8.77499C7.892 8.81099 7.763 8.87999 7.661 8.98199C7.559 9.07799 7.508 9.21599 7.508 9.39599C7.508 9.54599 7.547 9.66599 7.625 9.75599C7.709 9.83999 7.829 9.91199 7.985 9.97199C8.147 10.032 8.342 10.098 8.57 10.17C8.924 10.272 9.23 10.374 9.488 10.476C9.752 10.578 9.956 10.71 10.1 10.872C10.244 11.034 10.316 11.259 10.316 11.547C10.316 11.991 10.148 12.339 9.812 12.591C9.476 12.837 9.032 12.96 8.48 12.96Z",fill:"var(--arc-color-logo-storyline, #c560b3)"})}),ds=r=>(0,i.jsx)("svg",{...r,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 640 640",children:(0,i.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M320 576C178.6 576 64 461.4 64 320C64 178.6 178.6 64 320 64C461.4 64 576 178.6 576 320C576 461.4 461.4 576 320 576zM320 87.3C191.5 87.3 87.3 191.5 87.3 320C87.3 448.5 191.5 552.7 320 552.7C448.5 552.7 552.7 448.5 552.7 320C552.7 191.5 448.5 87.3 320 87.3zM267.5 259C278.1 258.9 288.6 260.7 298.5 264.4C307.4 267.6 315.6 272.3 322.8 278.5L311.5 293.5C305.4 288.1 298.3 283.9 290.6 281.2C283 278.5 275 277.1 266.9 277.1C258.8 276.8 250.9 278.9 243.9 282.9C237.6 286.8 233.9 293.9 234.4 301.4C234.3 304.3 234.9 307.2 236.2 309.9C237.7 312.4 239.7 314.4 242.3 315.8C245.7 317.7 249.4 319.3 253.2 320.3C257.6 321.6 262.9 323 269.1 324.5C278.9 326.8 287.4 329.1 294.6 331.4C301 333.3 307 336.1 312.7 339.7C317.1 342.5 320.8 346.4 323.4 351C325.9 355.9 327.1 361.3 326.9 366.8C327.3 379.6 321.4 391.9 311.1 399.5C298.6 408.2 283.7 412.4 268.5 411.6C256.6 411.6 244.8 409.7 233.5 406.1C222.7 402.8 212.6 397.4 203.9 390.2L214.6 373.6C222.5 379.8 231.2 384.7 240.6 388.4C249.3 391.7 258.6 393.4 268 393.3C277 393.8 285.8 391.6 293.5 387C299.6 383.1 303.2 376.3 303 369.1C303.1 365.9 302.2 362.7 300.5 359.9C298.5 357.1 295.9 354.8 292.9 353.3C288.8 351.1 284.4 349.4 279.9 348.2C274.6 346.7 268.5 345.1 261.6 343.4C252.8 341.1 245.1 339 238.7 336.9C233.1 335.2 227.8 332.7 222.9 329.6C219 327.1 215.9 323.6 213.9 319.4C211.9 314.8 210.9 309.8 211.1 304.7C211 297.9 212.5 291.2 215.5 285.1C218.3 279.4 222.4 274.5 227.5 270.7C232.9 266.7 239 263.7 245.4 262C252.6 260 260.1 259 267.5 259zM432.5 401.5C431 402.3 429 403.1 426.6 404.2C424.2 405.3 421.4 406.3 418.3 407.3C415 408.4 411.6 409.2 408.1 409.8C404.3 410.5 400.5 410.8 396.7 410.8C388.3 411 380 408.4 373.3 403.3C366.4 397.6 362.7 388.9 363.4 380L363.4 281L343.4 281L343.4 261.5L363.4 261.5L363.4 212.4L388.2 212.4L388.2 261.5L421.2 261.5L421.2 281L388.2 281L388.2 372.4C388.2 376.9 390.1 381.3 393.6 384.2C396.8 386.7 400.8 388 404.9 387.9C409.5 388 414 387.1 418.3 385.5C421.2 384.4 424 383.2 426.6 381.7z",fill:"var(--arc-color-logo-studio, #dc424a)"})});var Av;const yu="fa-width-auto",us="fa-fw",hs="arc-fw",ps="arc-aw",Cv=new RegExp(`(${yu}|${us}|${hs}|${ps})`,"gi"),Sv=r=>typeof r=="number"?`calc(${r/10}rem * var(--arc-internal-font-size))`:r,zv={"arc-svg logo-articulate":(0,i.jsx)(ts,{}),"arc-svg product-ai":(0,i.jsx)(os,{}),"arc-svg product-peek":(0,i.jsx)(ns,{}),"arc-svg product-reach":(0,i.jsx)(cs,{}),"arc-svg product-review":(0,i.jsx)(is,{}),"arc-svg product-rise":(0,i.jsx)(ss,{}),"arc-svg product-storyline":(0,i.jsx)(ls,{}),"arc-svg product-studio":(0,i.jsx)(ds,{})},E2=r=>r&&r.length>0&&r?.includes("arc-svg")?zv[r]:Av("span",{className:r}),xu=r=>{const e=r.includes(yu),a=r.includes(us),t=r.includes(hs),o=r.includes(ps);return{hasFaAutoWidth:e,hasFaFixedWidth:a,hasArcFixedWidth:t,hasArcAutoWidth:o}},Ev=r=>((0,s.isValidElement)(r)&&r.type===zr?r.props.icon:r)??void 0,_v=r=>r.replace(Cv,"").trim(),Tv=r=>{const{hasFaFixedWidth:e,hasArcFixedWidth:a,hasArcAutoWidth:t}=xu(r);return!e&&!a&&!t?`${r} ${ps}`:r},Iv=r=>r&&`${_v(r)} ${hs}`,wu=(r,e)=>{if(typeof r=="string")return e(r);if((0,s.isValidElement)(r)&&r.type===zr){const a=r.props.icon;return typeof a=="string"?(0,s.cloneElement)(r,{icon:e(a)}):r}return r},gs=r=>wu(r,Tv),ku=r=>wu(r,Iv),Pv=r=>{const e=Ev(r);if(typeof e!="string")return e;const{hasArcFixedWidth:a,hasFaFixedWidth:t}=xu(e);return a&&!t?`${e} ${us}`:e},Rv=d`--arc•icon`,Ka=d`${Rv}•fg`,jv=d`
@layer arc-components {

[arc-icon] {
  ${Ka}: currentcolor;

  color: var(--arc-icon-color, var(${Ka}));
  opacity: var(--arc-icon-opacity, 1);

  &:not([hidden]) {
    /* hand-off to actual interior FontAwesome icon node */
    --fa-display: var(--arc-icon-display, inline-flex);
    --fa-line-height: var(--arc-icon-fa-line-height, 1);

    flex: none;
    align-self: var(--arc-icon-align-self, unset);
    display: var(--fa-display);
    align-items: center;
    justify-content: center;
    height: var(--arc-icon-height, auto);
    max-height: var(--arc-icon-max-height, none);
    margin-block: var(--arc-icon-margin-block, unset);
  }

  &:has(svg) {
    align-self: var(--arc-icon-svg-align-self, center);

    svg {
      font-size: var(--arc-icon-size, 1em);
      width: 1em;
      height: 1em;
      fill: var(--arc-icon-color, var(${Ka}));
    }
  }

  [class|=fa] {
    font-size: var(--arc-icon-size, 1em);
    align-items: center;
    justify-content: center;

    /* fix for FontAwesome line-height oddities in certain cases */
    line-height: normal !important;

    &[class*='fa-stack-'] {
      font-size: var(--arc-icon-stack-size, inherit);
    }
  }

  /* Explicit opt-in via Arc’s helper class */
  .arc-aw {
    --fa-width: var(--arc-icon-fa-width, auto);
  }
}

/* utility icon colorization */
[arc-icon] {
  &[arc-icon-status=brand],
  &[arc-icon-status=announcement] {
    ${Ka}: var(--arc-color-fg-brand-mid);
  }

  &[arc-icon-status=info] {
    ${Ka}: var(--arc-color-fg-info-mid);
  }

  &[arc-icon-status=success] {
    ${Ka}: var(--arc-color-fg-success-mid);
  }

  &[arc-icon-status=warning] {
    ${Ka}: var(--arc-color-fg-warning-mid);
  }

  &[arc-icon-status=error],
  &[arc-icon-status=critical] {
    ${Ka}: var(--arc-color-fg-critical-mid);
  }

  &[arc-icon-status=processing] {
    ${Ka}: var(--arc-color-fg-brand-mid);
  }

  &[arc-icon-status] {
    --fa-primary-color: var(--arc-icon-color, currentcolor);
    --fa-secondary-color: color-mix(in srgb, currentcolor 20%, transparent);
    --fa-secondary-opacity: 1;
  }
}

}
`,Lv=r=>(0,i.jsx)(zr,{...r,icon:"fa-kit fa-articulate arc-aw",color:r?.color||"var(--arc-color-logo-articulate, #000000)","aria-label":r?.["aria-label"]||"Articulate Logo"}),Mv=r=>(0,i.jsx)(zr,{...r,icon:"fa-kit fa-product-badge-ai arc-aw","aria-label":r?.["aria-label"]||"Articulate AI Logo",gradient:r?.gradient||"ai"}),Dv=r=>(0,i.jsx)(zr,{...r,icon:"fa-kit fa-product-badge-peek arc-aw",color:r?.color||"var(--arc-color-logo-peek, #497add)","aria-label":r?.["aria-label"]||"Articulate Peek Logo"}),Ov=r=>(0,i.jsx)(zr,{...r,icon:"fa-kit fa-product-badge-reach arc-aw",color:r?.color||"var(--arc-color-logo-reach, #0081de)","aria-label":r?.["aria-label"]||"Articulate Reach Logo"}),Nv=r=>(0,i.jsx)(zr,{...r,icon:"fa-kit fa-product-badge-review arc-aw",color:r?.color||"var(--arc-color-logo-review, #35b062)","aria-label":r?.["aria-label"]||"Articulate Review Logo"}),Bv=r=>(0,i.jsx)(zr,{...r,icon:"fa-kit fa-product-badge-rise arc-aw",color:r?.color||"var(--arc-color-logo-rise, #ff6602)","aria-label":r?.["aria-label"]||"Articulate Rise Logo"}),Fv=r=>(0,i.jsx)(zr,{...r,icon:"fa-kit fa-product-badge-storyline arc-aw",color:r?.color||"var(--arc-color-logo-storyline, #c560b3)","aria-label":r?.["aria-label"]||"Articulate Storyline Logo"}),Hv=r=>(0,i.jsx)(zr,{...r,icon:"fa-kit fa-product-badge-studio arc-aw",color:r?.color||"var(--arc-color-logo-studio, #dc424a)","aria-label":r?.["aria-label"]||"Articulate Studio Logo"}),zr=({children:r,icon:e="fa-regular fa-circle-dashed",color:a,size:t,style:o,gradient:n,...c})=>{const l={...o,"--arc-icon-size":Sv(t),"--arc-icon-color":a},u=!!(c["aria-label"]||c["aria-labelledby"]),h=Pv(e),p=typeof h=="string"&&h.length>0?(0,i.jsx)("span",{className:h}):h;return(0,i.jsx)("span",{"aria-hidden":!u||void 0,...c,"arc-icon":"",style:l,"arc-gradient":n,children:r||p})};Cr("ArcIcon",jv),zr.Articulate=Lv,zr.AI=Mv,zr.Peek=Dv,zr.Reach=Ov,zr.Review=Nv,zr.Rise=Bv,zr.Storyline=Fv,zr.Studio=Hv,zr.SVGArticulate=ts,zr.SVGAI=os,zr.SVGPeek=ns,zr.SVGReach=cs,zr.SVGReview=is,zr.SVGRise=ss,zr.SVGStoryline=ls,zr.SVGStudio=ds;const Vv=(...r)=>console.log(...r),Au=(...r)=>console.warn(...r),Uv=(...r)=>console.error(...r),ha=typeof window>"u"?s.useEffect:s.useLayoutEffect,Yo=(r,e=1/0,a=" ")=>[...r].flat(e)?.filter(Boolean)?.join(a),vs=[...Bo],fs=[...Ha],Gv=[...tt],Cu=vr(Xr,["common"]),Kv=vr(Xr,["ai","brand"]),Su=Vr(bt,["compact","comfortable"]),$c=["nw-corner","top-start","top-center","top-end","ne-corner","left-start","right-start","left-center","center","right-center","left-end","right-end","sw-corner","bottom-start","bottom-center","bottom-end","se-corner"],ms=["ignore","flip"],De={popover:vs[0],anchorAt:$c[13],boundary:ms[0],tryFallbacks:!1,fallbackAnchors:[],variant:Cu[0],scheme:fs[0],density:Su[0],isInverse:!1,hasTail:!1,tailSize:8,offset:0},bs=()=>typeof CSS>"u"||typeof CSS.supports!="function"?!1:CSS.supports("position-anchor","--anchor-name")&&CSS.supports("container-type","anchored"),Wv=()=>typeof CSS>"u"||typeof CSS.supports!="function"?!1:CSS.supports("container-type","anchored"),yc={canAnchor:bs(),canAnchoredContainers:Wv()},zu=!yc.canAnchor,Eu=["center","nw-corner","ne-corner","se-corner","sw-corner"],_u=r=>{if(!Array.isArray(r)||r.length===0)return[];const e=new Set;return r.filter(a=>!$c.includes(a)||e.has(a)?!1:(e.add(a),!0))},Tu=r=>`--js\u2022try-${r}`,Iu=({canHaveTail:r,tailSize:e})=>{if(!r)return{cssTailVar:"",floatingTailPx:0};const a=Math.abs(Number(e||De.tailSize)),t=a>0?a:De.tailSize;return{cssTailVar:t===De.tailSize?"":`${t}px`,floatingTailPx:t}},Pu=(r,e="toggle",a=document)=>{const t=a.getElementById(r);({toggle:()=>t?.togglePopover(),show:()=>t?.showPopover(),hide:()=>t?.hidePopover()})[e]()},Zo=new WeakMap,$s=r=>{const e=String(r??"").trim();if(e==="none")return"none";let a=e.replace(/[^\w-]/g,"-");for(;a.startsWith("-");)a=a.slice(1);for(;a.endsWith("-");)a=a.slice(0,-1);return a?`--${a}`:"--"},Jo=r=>{const e=$s(r);return e==="none"?null:e},Ru=(r,e)=>{const a=Jo(e);if(!a)return()=>{};let t=Zo.get(r);return t||(t=new Set,Zo.set(r,t)),t.has(a)?()=>{}:(t.add(a),r.style.setProperty("anchor-name",Yo([...t],1/0,", ")),()=>{const o=Zo.get(r);if(o){if(o.delete(a),o.size===0){Zo.delete(r),r.style.removeProperty("anchor-name");return}r.style.setProperty("anchor-name",Yo([...o],1/0,", "))}})},Qo=r=>`${Math.round(r*100)/100}px`,Xv=[{test:(r,e,a)=>r==="y"&&e.includes("top")&&a.includes("top"),value:-1},{test:(r,e,a)=>r==="y"&&e.includes("top")&&a.includes("bottom"),value:-1},{test:(r,e,a)=>r==="y"&&e.includes("bottom")&&a.includes("top"),value:1},{test:(r,e,a)=>r==="x"&&e.includes("left")&&a.includes("left"),value:-1},{test:(r,e,a)=>r==="x"&&e.includes("left")&&a.includes("right"),value:-1},{test:(r,e,a)=>r==="x"&&e.includes("right")&&a.includes("left"),value:1}],ys=(r,e,a)=>Xv.find(t=>t.test(r,e,a))?.value||0;let xs;const qv=()=>typeof window<"u"&&typeof CSS<"u"&&typeof CSS.supports=="function"&&!(CSS.supports("position-anchor","--anchor-name")&&CSS.supports("container-type","anchored")),ws=()=>(xs||(xs=ia.e("defaultVendors-node_modules_pnpm_floating-ui_dom_1_7_6_node_modules_floating-ui_dom_dist_floa-2134bb").then(ia.bind(ia,22251))),xs);qv()&&ws().catch(()=>{});const ju=r=>r==="start"||r==="end"?r:"center",Yv=r=>{const e=r.split("-")[0];return e==="top"||e==="right"||e==="bottom"||e==="left"?e:null},Lu=r=>{const e=Yv(r),a=ju(r.split("-")[1]);switch(e){case"top":return{block:"start",inline:a};case"bottom":return{block:"end",inline:a};case"left":return{block:a,inline:"start"};case"right":return{block:a,inline:"end"};default:return{block:"center",inline:"center"}}},Mu=(r,e)=>r!=="center"&&e!=="center"&&r!==e,Du=(r,e)=>{const a=Lu(r),t=Lu(e),o=Mu(a.block,t.block),n=Mu(a.inline,t.inline);return o&&n?"flip-block-inline":o?"flip-block":n?"flip-inline":""},ks={...{"top-start":"top-start","top-end":"top-end","right-start":"right-start","right-end":"right-end","bottom-start":"bottom-start","bottom-end":"bottom-end","left-start":"left-start","left-end":"left-end"},...{"top-center":"top","right-center":"right","bottom-center":"bottom","left-center":"left",center:"bottom","nw-corner":"top-start","ne-corner":"top-end","sw-corner":"bottom-start","se-corner":"bottom-end"}},As=r=>r.split("-")[0],Zv=r=>r.split("-")[1],Jv=r=>r==="x"?"y":"x",Qv=r=>r==="y"?"height":"width",Cs=r=>["top","bottom"].includes(As(r))?"y":"x",rf=r=>Jv(Cs(r)),ef=(r,e,a,t)=>{const o=Cs(a),n=rf(a),c=Qv(n),l=As(a),u=o==="y",h=r.x+r.width/2-e.width/2,p=r.y+r.height/2-e.height/2,v=r[c]/2-e[c]/2;let g;switch(l){case"top":g={x:h,y:r.y-e.height};break;case"bottom":g={x:h,y:r.y+r.height};break;case"right":g={x:r.x+r.width,y:p};break;case"left":g={x:r.x-e.width,y:p};break;default:g={x:r.x,y:r.y}}switch(Zv(a)){case"start":g[n]-=v*(t&&u?-1:1);break;case"end":g[n]+=v*(t&&u?-1:1);break;default:break}return g},af=(r,e,a,t)=>{const o=As(r),n=Cs(r)==="y",c=o==="left"||o==="top"?-1:1,l=a&&n?-1:1,u=e,h=0;return n?{x:t.x+h*l,y:t.y+u*c}:{x:t.x+u*c,y:t.y+h*l}},Ou=r=>({x:r.x,y:r.y,width:r.width,height:r.height}),tf=({anchorEl:r,popoverEl:e,placement:a,offsetPx:t,tailOffset:o,getTailModifier:n})=>{const c=getComputedStyle(e).direction==="rtl",l=Ou(r.getBoundingClientRect()),u=Ou(e.getBoundingClientRect());let h=ef(l,u,a,c);h=af(a,t,c,h);const p=h.x+o*n("x",a,a),v=h.y+o*n("y",a,a);e.style.setProperty("left",Qo(p)),e.style.setProperty("top",Qo(v))},of=({anchorEl:r,popoverEl:e,anchorAt:a,tryFallbacks:t,fallbackAnchors:o,offsetPx:n,tailSizePx:c,hasTail:l,isOpen:u})=>{const h=o.join("|");ha(()=>{if(!(u&&!bs()&&!!r&&!!e))return;const v=r,g=e,f=ks[a];let b=!0,$;const x=l?Math.max(0,c)*Math.SQRT1_2:0;return tf({anchorEl:v,popoverEl:g,placement:f,offsetPx:n,tailOffset:x,getTailModifier:ys}),(async()=>{try{const{autoUpdate:k,computePosition:w,flip:E,offset:_,shift:I,limitShift:C}=await ws();if(!b)return;const S=[_(n)];t&&(o.length?S.push(E({fallbackPlacements:o.map(D=>ks[D]),fallbackStrategy:"initialPlacement"})):S.push(E({fallbackStrategy:"bestFit"}))),S.push(I({crossAxis:!t,limiter:C()}));const T=async()=>{try{const D=await w(v,g,{placement:f,strategy:"fixed",middleware:S});if(!b||!v.isConnected||!g.isConnected)return;const N=D.x+x*ys("x",D.placement,f),H=D.y+x*ys("y",D.placement,f);if(g.style.setProperty("left",Qo(N)),g.style.setProperty("top",Qo(H)),!l||!t){delete g.dataset.fallbacks,delete g.dataset.resolvedAt;return}if(o.length){const R=[a,...o].find(M=>ks[M]===D.placement);delete g.dataset.fallbacks,R&&R!==a?g.dataset.resolvedAt=R:delete g.dataset.resolvedAt;return}delete g.dataset.resolvedAt;const J=Du(f,D.placement);J?g.dataset.fallbacks=J:delete g.dataset.fallbacks}catch{}};await T(),$=k(v,g,T)}catch{}})(),()=>{b=!1,$?.()}},[a,r,h,l,u,n,e,c,t])},xc=1,Jt=2,nf=[{test:(r,e)=>e.top>=r.bottom+xc,value:"bottom"},{test:(r,e)=>e.bottom<=r.top-xc,value:"top"},{test:(r,e)=>e.left>=r.right+xc,value:"right"},{test:(r,e)=>e.right<=r.left-xc,value:"left"}],rn=r=>{delete r.dataset.fallbacks,delete r.dataset.resolvedAt},wc=r=>({x:r.left+r.width/2,y:r.top+r.height/2}),cf=(r,e,a,t)=>{const o=wc(e),n=wc(a);if(r==="top"||r==="bottom"){const h=Math.abs(t==="rtl"?a.right-e.right:a.left-e.left),p=Math.abs(t==="rtl"?a.left-e.left:a.right-e.right),v=Math.abs(n.x-o.x);return Math.abs(h-p)<=Jt&&v<=Jt||v+Jt<Math.min(h,p)?"center":h<=p?"start":"end"}const c=Math.abs(a.top-e.top),l=Math.abs(a.bottom-e.bottom),u=Math.abs(n.y-o.y);return Math.abs(c-l)<=Jt&&u<=Jt||u+Jt<Math.min(c,l)?"center":c<=l?"start":"end"},sf=(r,e,a,t)=>{const o=nf.find(u=>u.test(e,a));let n;if(o)n=o.value;else{const u=wc(e),h=wc(a),p=h.y-u.y,v=h.x-u.x,g=Math.min(e.height,a.height)*.1;Math.abs(p)>g?n=p>=0?"bottom":"top":n=v>=0?"right":"left"}if(ju(r.split("-")[1])==="center")return n;const l=cf(n,e,a,t);return`${n}-${l}`},lf=({anchorEl:r,popoverEl:e,anchorAt:a,tryFallbacks:t,fallbackAnchors:o,isOpen:n,hasTail:c})=>{const l=o.join("|");ha(()=>{if(!e||!yc.canAnchor)return;if(!c||!t||!n||yc.canAnchoredContainers||!r){rn(e);return}const u=a;if(u==="center"||u.includes("corner")){rn(e);return}const h=r,p=e;let v=!0,g;const f=()=>{const $=h.getBoundingClientRect(),x=p.getBoundingClientRect(),A=getComputedStyle(h).direction==="rtl"?"rtl":"ltr",y=sf(u,$,x,A);if(o.length){const E=y.split("-")[0],_=[u,...o],I=_.find(C=>C===y)??_.find(C=>C.split("-")[0]===E);delete p.dataset.fallbacks,I&&I!==u?p.dataset.resolvedAt=I:delete p.dataset.resolvedAt;return}delete p.dataset.resolvedAt;const k=Du(u,y);u===y?rn(p):k?p.dataset.fallbacks=k:rn(p)};return(async()=>{try{const{autoUpdate:x}=await ws();if(!v)return;g=x(h,p,f),f()}catch{}})(),()=>{v=!1,g?.(),rn(p)}},[a,r,l,c,n,e,t])},Nu=(r,e=" ")=>r.split(e).map(a=>a.trim()).filter(Boolean),Z=d`--arc•input•mask`,m=d`--arc•size`,j=d`--arc•space`,jr=r=>d`max(${r}px, ${r/16}em)`,se=d`--arc•spinner`,Qt=d`${se}•w`,kc=d`${se}•fg`,Ss=d`${se}•fs`,zs=d`${se}•bg`,df=d`
  &[data-size=inherit] {
    ${Qt}: 1.25em;
    ${Ss}: 1em;
    ${se}•thickness: clamp(0.0625em, 4px, 0.125em);
  }

  &:not([data-size=inherit]) {
    ${Ss}: initial;
  }

  &[data-size=xs] {
    ${Qt}: ${jr(14)};
    ${se}•thickness: ${jr(2)};
  }

  &[data-size=sm] {
    ${Qt}: ${jr(20)};
    ${se}•thickness: ${jr(2)};
  }

  &[data-size=md] {
    ${Qt}: ${jr(32)};
    ${se}•thickness: ${jr(3)};
  }

  &[data-size=lg] {
    ${Qt}: ${jr(48)};
    ${se}•thickness: ${jr(4)};
  }
`,uf=d`
  &[data-color=brand] {
    ${kc}: var(--arc-color-fg-brand-mid);
  }

  &[data-color=ai] {
    ${zs}: var(--arc-spinner-color, var(--arc-gradient-ai-200));
  }

  &[data-color=neutral] {
    ${kc}: var(--arc-color-fg-neutral-mid);
  }

  &[data-color=white] {
    ${kc}: var(--arc-color-alpha-white-90);
  }
`,hf=d`
@layer arc-components {

  [arc-spinner] {
    ${df}
    ${uf}

    /** The half-pixel offsets (0.5px) are an affordance for low-resolution displays; they keep the mask sharp. */
    ${se}•ring: radial-gradient(
      farthest-side,
      transparent calc(100% - var(${se}•thickness) - 0.5px),
      black calc(100% - var(${se}•thickness) + 0.5px)
    ) border-box;

    font-size: var(${Ss});
    flex: none;
    display: flex;
    align-items: center;
    justify-content: center;

    position: var(--arc-spinner-position, relative);
    inset: var(--arc-spinner-inset, 0);
    translate: var(--arc-spinner-translate, 0);
    width: var(--arc-spinner-size, var(${Qt}));

    aspect-ratio: 1 / 1;
    pointer-events: none;

    color: var(--arc-spinner-color, var(${kc}));
    border-radius: var(--arc-border-radius-circle);

    [arc-spinner-circle] {
      position: relative;
      display: block;
      width: 100%;
      height: 100%;
      border-radius: var(--arc-border-radius-circle);
      opacity: var(--arc-spinner-opacity, 1);
      transform-origin: 50% 50%;

      -webkit-mask: var(${se}•ring);
      mask: var(${se}•ring);
    }
  }

  @media (prefers-reduced-motion: no-preference) {
    [arc-spinner] [arc-spinner-circle] {
      background: conic-gradient(transparent 0deg, currentcolor);
      animation: var(--arc-spinner-rotate-duration, 743ms) arc-spinner-rotate linear infinite;

      &::after {
        content: '';
        position: absolute;
        width: var(${se}•thickness);
        height: var(${se}•thickness);
        top: var(${se}•thickness);
        left: 50%;
        transform: translate(-50%, -100%);
        border-radius: var(--arc-border-radius-circle);
        background: var(--arc-spinner-color, currentcolor);
      }
    }

    [arc-spinner][data-color=ai] [arc-spinner-circle] {
      background: transparent;

      /** The comet and its cap are mask layers over one full-size gradient, so their colors stay continuous. */
      &::before {
        content: '';
        position: absolute;
        inset: 0;
        background: var(${zs});
        mask:
          conic-gradient(transparent 0deg, black 360deg),
          radial-gradient(
            circle at 50% calc(var(${se}•thickness) / 2),
            black calc(var(${se}•thickness) / 2 - 0.5px),
            transparent calc(var(${se}•thickness) / 2 + 0.5px)
          );
      }

      &::after {
        display: none;
      }
    }
  }

  @media (prefers-reduced-motion: reduce) {
    [arc-spinner] [arc-spinner-circle] {
      /* collapse the comet into a uniform ring — no spin, no travel */
      background: currentcolor;
      animation: var(--arc-spinner-pulse-duration, 1400ms) arc-spinner-pulse ease-in-out infinite;

      &::after {
        display: none;
      }
    }

    [arc-spinner][data-color=ai] [arc-spinner-circle] {
      background: var(${zs});

      &::before {
        display: none;
      }
    }
  }

  @keyframes arc-spinner-rotate {
    to {
      transform: rotate3d(0, 0, 1, 360deg);
    }
  }

  @keyframes arc-spinner-pulse {
    0%,
    100% {
      opacity: var(--arc-spinner-pulse-opacity-start, 1);
    }
    50% {
      opacity: var(--arc-spinner-pulse-opacity-end, 0.2);
    }
  }
}
`,pf=[...vr(ve,["inherit","xs","sm","md","lg"])],gf=["inherit",...Vr(Va,["neutral","white","brand","ai"])],Ac=(0,s.forwardRef)(({size:r="inherit",color:e="inherit",...a},t)=>(0,i.jsx)("span",{...a,ref:t,"arc-spinner":"","data-size":r,"data-color":e,children:(0,i.jsx)("span",{"arc-spinner-circle":""})}));Ac.displayName="ArcSpinner",Cr("ArcSpinner",hf);const vf=({isFloating:r,isOnMedia:e,shadow:a})=>[{condition:!r&&e,value:"light-md"},{condition:r&&!e,value:"lg"},{condition:r&&e,value:"light-lg"},{condition:r||a===!0,value:"lg"}],ff=({isFloating:r,isOnMedia:e,shadow:a})=>vf({isFloating:r,isOnMedia:e,shadow:a}).find(t=>t.condition)?.value??a,mf=({layout:r,isFloating:e})=>[{condition:r==="icon",value:"icon"},{condition:e||r==="hug",value:"hug"},{condition:!e&&r==="fill",value:"fill"}],bf=({layout:r,isFloating:e})=>mf({layout:r,isFloating:e}).find(a=>a.condition)?.value??r,$f=({scheme:r,isInverse:e})=>[{condition:e,value:"inverse"},{condition:r==="auto",value:void 0},{condition:!0,value:r}],yf=({scheme:r,isInverse:e})=>{const a=$f({scheme:r,isInverse:e}).find(t=>t.condition)?.value??r;return a==="auto"?void 0:a},xf=vr(Oo,["round","square","narrow"]),wf=vr(ve,["xxl","xl","lg","md","sm"]),kf=vr(sa,["hug","fill","icon"]),Bu=vr(Xr,["common","neutral","ai","critical","alpha"]),Es=[...Ha],Af=[...cc],Fu=vr(Gt,["primary","secondary","tertiary","plain","link-style"]),Cf=[...tt],Sf={circle:"round"},Hu=({shape:r})=>ot(r,Sf),_s=vr(Xr,["primary","secondary","tertiary","critical-primary","critical-secondary","ai-primary","ai-secondary","primary-inverse","secondary-inverse","tertiary-inverse"]),Vu={primary:{variant:"common",hierarchy:"primary"},secondary:{variant:"common",hierarchy:"secondary"},tertiary:{variant:"common",hierarchy:"tertiary"},"critical-primary":{variant:"critical",hierarchy:"primary"},"critical-secondary":{variant:"critical",hierarchy:"secondary"},"ai-primary":{variant:"ai",hierarchy:"primary"},"ai-secondary":{variant:"ai",hierarchy:"secondary"},"primary-inverse":{variant:"common",hierarchy:"primary",scheme:"inverse"},"secondary-inverse":{variant:"common",hierarchy:"secondary",scheme:"inverse"},"tertiary-inverse":{variant:"common",hierarchy:"tertiary",scheme:"inverse"}},zf=(()=>{const r=new Map;return _s.forEach(e=>{const a=Vu[e],t=a.scheme==="inverse"?"inverse":"";r.set(`${a.variant}|${a.hierarchy}|${t}`,e)}),r})(),Ts=r=>!!(r&&_s.includes(r)),Cc=r=>r!==void 0&&Ts(r)?Vu[r]:void 0,Uu=({variant:r})=>Cc(r)?.variant??r,Gu=({variant:r,hierarchy:e})=>Cc(r)?.hierarchy??e,Ku=({variant:r,isInverse:e,scheme:a})=>Cc(r)?.scheme??yf({scheme:a,isInverse:e}),Ef={variant:Bu[0],hierarchy:Fu[0],scheme:Es[0]},_f=({variant:r})=>{const e=Cc(r);return e?{variant:e.variant,hierarchy:e.hierarchy,scheme:e.scheme??Es[0]}:Ef},Tf=({variant:r,hierarchy:e,scheme:a})=>zf.get(`${r}|${e}|${a==="inverse"?"inverse":""}`),qe=d`60deg`,qr={purple:{50:d`light-dark(#fbf2ff, #210125)`,100:d`light-dark(#efccff, #540160)`,200:d`light-dark(#9c15ff, #ad44cb)`,300:d`light-dark(#680278, #ad44cb)`,400:d`light-dark(#5d3668, #c778de)`,500:d`light-dark(#37003f, #e3a7ff)`,600:d`light-dark(#27002c, #f9ebff)`},blue:{50:d`light-dark(#f4fbff, #00223b)`,100:d`light-dark(#d2f1fe, #02497d)`,200:d`light-dark(#1eb4fb, #169cfe)`,300:d`light-dark(#0179d0, #71bdfe)`,400:d`light-dark(#36648c, #84daff)`,500:d`light-dark(#004273, #b7eaff)`,600:d`light-dark(#012a48, #c2edff)`}},en=d`var(--arc-color-overlay-subtle)`,If=d`
:root {
  --arc-button-critical-bg-hover: light-dark(
    color-mix(in srgb, var(--arc-color-light-red-600), transparent 90%),
    color-mix(in srgb, var(--arc-color-dark-red-700), transparent 75%)
  );

  /* * + secondary floating button */
  --arc-button-floating-bg: ${en};
  --arc-button-floating-bg-processing: ${en};
  --arc-button-floating-bg-disabled: var(--arc-color-bg-disabled);
  --arc-button-floating-bg-focus: ${en};
  --arc-button-floating-bg-hover: light-dark(var(--arc-color-light-neutral-100), var(--arc-color-dark-neutral-100));
  --arc-button-floating-bg-active: light-dark(var(--arc-color-light-neutral-200), var(--arc-color-dark-neutral-200));

  /* critical + floating button */
  --arc-button-critical-floating-bg-hover: var(--arc-color-bg-critical-subtle);
  --arc-button-critical-floating-bg-active: var(--arc-color-bg-critical-muted);

  /* ai + secondary floating button */
  --arc-button-ai-floating-bg: ${en} linear-gradient(${qe}, transparent, ${en});

  /*
  ai variant gradients that can be slightly transitioned: 'bg-color + gradient(transparent -> color)'
  bg-color can be transitioned, gradient not so much. Result: subtle transition of the bg-color through the transparent parts of the gradient.
  */
  --arc-button-gradient-ai-transparent: transparent linear-gradient(${qe}, transparent, transparent);
  --arc-button-gradient-ai-50: ${qr.purple[50]} linear-gradient(${qe}, transparent, ${qr.blue[50]});
  --arc-button-gradient-ai-100: ${qr.purple[100]} linear-gradient(${qe}, transparent, ${qr.blue[100]});
  --arc-button-gradient-ai-200: ${qr.purple[200]} linear-gradient(${qe}, transparent, ${qr.blue[200]});
  --arc-button-gradient-ai-300: ${qr.purple[300]} linear-gradient(${qe}, transparent, ${qr.blue[300]});
  --arc-button-gradient-ai-400: ${qr.purple[400]} linear-gradient(${qe}, transparent, ${qr.blue[400]});
  --arc-button-gradient-ai-500: ${qr.purple[500]} linear-gradient(${qe}, transparent, ${qr.blue[500]});
  --arc-button-gradient-ai-600: ${qr.purple[600]} linear-gradient(${qe}, transparent, ${qr.blue[600]});
}
`,Pf=d`
:root {
  --arc-link-fg-hover-inverse: color-mix(in srgb, var(--arc-color-fg-on-mono-inverse) 68.2%, transparent);
  --arc-link-fg-disabled-inverse: color-mix(in srgb, var(--arc-color-fg-on-mono-inverse) 30%, transparent);
  --arc-link-focus-disabled-inverse: light-dark(var(--arc-color-light-blue-300), var(--arc-color-light-blue-600));
}
`,Rf=d`
:root {
  /* Tail edge colors for 'variant=ai' popovers */
  --arc-popover-ai-purple-50: ${qr.purple[50]};
  --arc-popover-ai-purple-200: ${qr.purple[200]};
  --arc-popover-ai-blue-50: ${qr.blue[50]};
  --arc-popover-ai-blue-200: ${qr.blue[200]};
}
`,jf=d`
:root {
  --arc-progress-bar-gradient-ai-200: linear-gradient(${qe}, ${qr.purple[200]} -0.5em, ${qr.blue[200]});
}
`,Lf=d`
:root {
  --arc-banner-gradient-ai-50: linear-gradient(${qe}, ${qr.purple[50]}, ${qr.blue[50]});
  --arc-banner-gradient-ai-100: linear-gradient(${qe}, ${qr.purple[100]}, ${qr.blue[100]});
  --arc-banner-gradient-ai-300: linear-gradient(${qe}, ${qr.purple[300]}, ${qr.blue[300]});
}
`,B=d`--arc•button`,G=d`${B}•fg`,z=d`${B}•bg`,fr=d`${B}•edge`,Or=d`${B}•border`,ro=d`${B}•outline`,Ue=d`${B}•label`,Re=d`${B}•mask`,Se=d`${B}•spinner`,ie=d`${B}•icon`,ze=d`${ie}•svg`,Mf=d`
  &[data-size=xxl] {
    ${B}•font•size: var(${m}•16);
    ${B}•height: var(${m}•56);
    ${Se}•size: var(${m}•32);
    ${ie}•size: var(${m}•20);
    ${ie}•size•large: var(${m}•24);
    ${ze}•size: var(${m}•25);
    ${ze}•size•large: var(${m}•24);
    ${Ue}•spacing: var(${m}•12);
    ${B}•spacing: var(${m}•16);
    ${B}•spacing•square: var(${m}•16);
    ${Or}•radius•square: var(--arc-border-radius-lg);
  }

  &[data-size=xl] {
    ${B}•font•size: var(${m}•14);
    ${B}•height: var(${m}•48);
    ${Se}•size: var(${m}•16);
    ${ie}•size: var(${m}•16);
    ${ie}•size•large: var(${m}•20);
    ${ze}•size: var(${m}•20);
    ${ze}•size•large: var(${m}•25);
    ${Ue}•spacing: var(${m}•10);
    ${B}•spacing: var(${m}•14);
    ${B}•spacing•square: var(${m}•14);
    ${Or}•radius•square: var(--arc-border-radius-lg);
  }

  &[data-size=lg] { /** @default */
    ${B}•font•size: var(${m}•14);
    ${B}•height: var(${m}•40);
    ${Se}•size: var(${m}•16);
    ${ie}•size: var(${m}•16);
    ${ie}•size•large: var(${m}•20);
    ${ze}•size: var(${m}•20);
    ${ze}•size•large: var(${m}•25);
    ${Ue}•spacing: var(${m}•8);
    ${B}•spacing: var(${m}•12);
    ${B}•spacing•square: var(${m}•10);
    ${Or}•radius•square: var(--arc-border-radius-lg);
  }

  &[data-size=inherit] { /* scalable • mimics default size */
    ${B}•font•size: 1em;
    ${B}•height: 2.5em;
    ${Ue}•font•size: 0.875em;
    ${Se}•size: 1.125em;
    ${ie}•size: 1.125em;
    ${ie}•size•large: 1.25em;
    ${ze}•size: 1.25em;
    ${ze}•size•large: 1.375em;
    ${Ue}•spacing: max(8px, 0.5em);
    ${B}•spacing: 0.75em;
    ${B}•spacing•square: 0.625em;
    ${Or}•radius•square: var(--arc-border-radius-lg);
  }

  &[data-size=md] {
    ${B}•font•size: var(${m}•14);
    ${B}•height: var(${m}•32);
    ${Se}•size: var(${m}•16);
    ${ie}•size: var(${m}•14);
    ${ie}•size•large: var(${m}•20);
    ${ze}•size: var(${m}•18);
    ${ze}•size•large: var(${m}•25);
    ${Ue}•spacing: var(${m}•6);
    ${B}•spacing: var(${m}•10);
    ${B}•spacing•square: var(${m}•8);
    ${Or}•radius•square: var(--arc-border-radius-lg);
  }

  &[data-size=sm] {
    ${B}•font•size: var(${m}•12);
    ${B}•height: var(${m}•24);
    ${Se}•size: var(${m}•14);
    ${ie}•size: var(${m}•12);
    ${ie}•size•large: var(${m}•14);
    ${ze}•size: var(${m}•15);
    ${ze}•size•large: var(${m}•18);
    ${Ue}•spacing: var(${m}•4);
    ${B}•spacing: var(${m}•8);
    ${B}•spacing•square: var(${m}•6);
    ${Or}•radius•square: var(--arc-border-radius-lg);
  }

  /* Custom button overrides • metrics based on size: 'inherit' */
  &[arc-button=custom] {
    ${B}•font•weight: normal;
    ${Or}•radius: 0.25em;
    ${B}•height: auto;
  }
`,Df=d`
  &[data-layout=hug] {
    ${B}•width: auto;
    ${B}•content•width: fit-content;
  }

  &[data-layout=fill] {
    ${B}•display: flex;
    ${B}•width: 100%;
    ${B}•content•width: 0;
  }

  &:not([data-layout=icon]) {
    ${ie}•width: auto;
  }

  &[data-layout=icon] {
    ${B}•aspect•ratio: 1 / 1;
    ${B}•min•width: min-content;
    ${B}•max•width: none;
    ${B}•spacing: var(${m}•0);

    ${ie}•width: 1.25em;

    &[data-shape=narrow] {
      ${B}•aspect•ratio: auto;
      ${B}•spacing: var(${m}•2);
      ${ie}•width: auto;
    }
  }

  &[data-shape=square] {
    ${B}•spacing: var(${B}•spacing•square);
  }

  &:is(
    [data-layout=icon]:not([data-shape]),
    [data-shape=square],
    [data-shape=narrow]
  ) {
    ${Or}•radius: var(${Or}•radius•square);
  }

`,Of=d`
  /** @mitigation • when no variant is set (i.e.: 'custom' buttons) */
  &:not([data-variant]) {
    ${G}: inherit;
    ${z}: transparent;
    ${fr}: transparent;
    ${G}•disabled: var(--arc-color-fg-disabled);
  }

  /** @default */
  &[data-variant=common] {
    ${Or}•width: var(${m}•1);

    /** @default */
    &:where([data-hierarchy=primary]) {
      ${G}: var(--arc-color-fg-on-theme-heavy);
      ${z}: var(--arc-color-bg-theme-heavy);
      ${fr}: transparent;

      ${G}•active: var(--arc-color-fg-on-theme-mid);
      ${G}•processing: var(--arc-color-fg-on-theme-stark);
      ${G}•disabled: var(--arc-color-fg-disabled);

      ${z}•hover: var(--arc-color-bg-theme-stark);
      ${z}•active: var(--arc-color-bg-theme-mid);
      ${z}•processing: var(--arc-color-bg-theme-stark);
      ${z}•disabled: var(--arc-color-bg-disabled);
    }

    &:where([data-hierarchy=secondary]) {
      ${G}: var(--arc-color-fg-primary);
      ${z}: transparent;
      ${fr}: var(--arc-color-border-theme-heavy);

      ${G}•active: var(--arc-color-fg-secondary);
      ${G}•processing: var(--arc-color-fg-secondary);
      ${G}•disabled: var(--arc-color-fg-disabled);

      ${fr}•active: var(--arc-color-border-theme-mid);
      ${fr}•processing: var(--arc-color-border-theme-subtle);
      ${fr}•disabled: var(--arc-color-border-disabled);

      ${z}•hover: var(--arc-color-bg-neutral-muted);
      ${z}•active: var(--arc-color-bg-neutral-subtle);
      ${z}•processing: transparent;
      ${z}•disabled: transparent;

      &:where([data-layout=icon]) {
        ${fr}: var(--arc-color-border-mid);
        ${fr}•hover: var(--arc-color-border-stark);
        ${fr}•focus: var(--arc-color-border-mid);
      }

      &:where([is-floating]) {
        ${z}: var(--arc-button-floating-bg);
        ${z}•processing: var(--arc-button-floating-bg-processing);
        ${z}•disabled: var(--arc-button-floating-bg-disabled);
        ${z}•focus: var(--arc-button-floating-bg-focus);
        ${z}•hover: var(--arc-button-floating-bg-hover);
        ${z}•active: var(--arc-button-floating-bg-active);
      }
    }

    &:where([data-hierarchy=tertiary]) {
      ${G}: var(--arc-color-fg-primary);
      ${z}: transparent;
      ${fr}: transparent;

      ${G}•active: var(--arc-color-fg-secondary);
      ${G}•processing: var(--arc-color-fg-secondary);
      ${G}•disabled: var(--arc-color-fg-disabled);

      ${z}•hover: var(--arc-color-bg-neutral-muted);
      ${z}•active: var(--arc-color-bg-neutral-muted);
      ${z}•processing: var(--arc-color-bg-neutral-muted);
    }

    &:where(
      [data-hierarchy=plain],
      [data-hierarchy=link-style]
    ) {
      ${G}: var(--arc-color-fg-primary);
      ${z}: transparent;
      ${fr}: transparent;

      ${G}•hover: var(--arc-color-alpha-heavy);
      ${G}•active: var(--arc-color-alpha-heavy);
      ${G}•processing: var(--arc-color-alpha-heavy);
      ${G}•disabled: var(--arc-color-fg-disabled);

      ${z}•hover: transparent;
      ${z}•active: transparent;
      ${z}•processing: transparent;
    }
  }

`,Nf=d`
  &[data-variant=neutral] {
    ${Or}•width: var(${m}•1);

    &:where([data-hierarchy=primary]) {
      ${G}: var(--arc-color-fg-primary);
      ${z}: var(--arc-color-bg-primary);
      ${fr}: var(--arc-color-border-mid);

      ${G}•active: var(--arc-color-fg-secondary);
      ${G}•processing: var(--arc-color-fg-secondary);
      ${G}•disabled: var(--arc-color-fg-disabled);

      ${z}•hover: var(--arc-color-bg-neutral-muted);
      ${z}•active: var(--arc-color-bg-neutral-subtle);
      ${z}•processing: var(--arc-color-bg-primary);
      ${z}•disabled: transparent;

      &:where([is-floating]) {
        ${z}: var(--arc-button-floating-bg);
        ${z}•processing: var(--arc-button-floating-bg-processing);
        ${z}•disabled: var(--arc-button-floating-bg-disabled);
        ${z}•focus: var(--arc-button-floating-bg-focus);
        ${z}•hover: var(--arc-button-floating-bg-hover);
        ${z}•active: var(--arc-button-floating-bg-active);
      }
    }

    &:where([data-hierarchy=secondary]) {
      ${G}: var(--arc-color-fg-neutral-stark);
      ${z}: var(--arc-color-bg-primary);
      ${fr}: var(--arc-color-border-mid);

      ${G}•hover: var(--arc-color-fg-primary);
      ${G}•active: var(--arc-color-fg-secondary);
      ${G}•processing: var(--arc-color-fg-secondary);
      ${G}•disabled: var(--arc-color-fg-disabled);

      ${fr}•disabled: var(--arc-color-border-disabled);

      ${z}•hover: var(--arc-color-bg-neutral-muted);
      ${z}•active: var(--arc-color-bg-neutral-subtle);
      ${z}•processing: var(--arc-color-bg-primary);
      ${z}•disabled: transparent;

      &:where([data-layout=icon]) {
        ${fr}: var(--arc-color-border-mid);
        ${fr}•hover: var(--arc-color-border-stark);
        ${fr}•focus: var(--arc-color-border-mid);
      }

      &:where([is-floating]) {
        ${z}: var(--arc-button-floating-bg);
        ${z}•processing: var(--arc-button-floating-bg-processing);
        ${z}•disabled: var(--arc-button-floating-bg-disabled);
        ${z}•focus: var(--arc-button-floating-bg-focus);
        ${z}•hover: var(--arc-button-floating-bg-hover);
        ${z}•active: var(--arc-button-floating-bg-active);
      }
    }

    &:where([data-hierarchy=tertiary]) {
      ${G}: var(--arc-color-fg-neutral-stark);
      ${z}: transparent;
      ${fr}: transparent;

      ${G}•active: var(--arc-color-fg-secondary);
      ${G}•processing: var(--arc-color-fg-secondary);
      ${G}•disabled: var(--arc-color-fg-disabled);

      ${z}•hover: var(--arc-color-bg-neutral-muted);
      ${z}•active: var(--arc-color-bg-neutral-subtle);
      ${z}•processing: var(--arc-color-bg-neutral-muted);
    }

    &:where(
      [data-hierarchy=plain],
      [data-hierarchy=link-style]
    ) {
      ${G}: var(--arc-color-fg-neutral-stark);
      ${z}: transparent;
      ${fr}: transparent;

      ${G}•hover: var(--arc-color-fg-primary);
      ${G}•active: var(--arc-color-fg-neutral-mid);
      ${G}•processing: var(--arc-color-fg-secondary);
      ${G}•disabled: var(--arc-color-fg-disabled);

      ${z}•hover: transparent;
      ${z}•active: transparent;
      ${z}•processing: transparent;
    }
  }

`,Bf=d`
  &[data-variant=ai] {
    ${G}•disabled: var(--arc-color-fg-disabled);
    ${fr}•disabled: var(--arc-color-border-disabled);
    ${Or}•width: var(${m}•2);

    ${Re}•bg: var(--arc-gradient-ai-200);
    ${Re}•disabled: var(--arc-color-border-disabled);
    ${Re}•processing: var(--arc-gradient-ai-100);

    &:where([data-hierarchy=primary]) {
      ${G}: var(--arc-color-fg-on-theme-stark);
      ${z}: var(--arc-button-gradient-ai-500) padding-box;
      ${fr}: transparent;

      ${G}•active: var(--arc-color-fg-neutral-mid);
      ${G}•processing: var(--arc-color-fg-on-theme-heavy);
      ${G}•hover: var(--arc-color-fg-on-theme-heavy);

      ${z}•hover: var(--arc-button-gradient-ai-400) padding-box;
      ${z}•active: var(--arc-button-gradient-ai-600) padding-box;
      ${z}•processing: var(--arc-button-gradient-ai-400) padding-box;
      ${z}•disabled: var(--arc-color-bg-disabled) padding-box;

      ${Re}•hover: var(--arc-gradient-ai-200);
      ${Re}•active: var(--arc-gradient-ai-200);
    }

    &:where([data-hierarchy=secondary]) {
      ${G}: var(--arc-color-fg-primary);
      ${z}: var(--arc-button-gradient-ai-transparent) padding-box; /* allows subtle transition of bg-color through the transparent parts of the gradient */
      ${fr}: transparent;

      ${G}•active: var(--arc-color-fg-neutral-stark);
      ${G}•processing: var(--arc-color-fg-primary);

      ${z}•hover: var(--arc-button-gradient-ai-50) padding-box;
      ${z}•focus: var(--arc-button-gradient-ai-50) padding-box;
      ${z}•active: var(--arc-button-gradient-ai-50) padding-box;
      ${z}•processing: var(--arc-button-gradient-ai-50) padding-box;
      ${z}•disabled: var(--arc-color-bg-disabled) padding-box;

      ${Re}•hover: var(--arc-gradient-ai-300);
      ${Re}•active: var(--arc-gradient-ai-100);

      &:where([is-floating]) {
        ${z}: var(--arc-button-ai-floating-bg) padding-box;
      }
    }
  }

`,Ff=d`
  &[data-variant=alpha] {
    ${Or}•width: var(${m}•1);

    &:where([data-hierarchy=primary]) {
      ${G}: var(--arc-color-mono-black);
      ${z}: var(--arc-color-mono-white);
      ${fr}: transparent;

      ${G}•focus: var(--arc-color-mono-black);
      ${G}•active: var(--arc-color-alpha-black-60);
      ${G}•processing: var(--arc-color-mono-black);
      ${G}•disabled: var(--arc-color-alpha-black-60);

      ${z}•hover: var(--arc-color-alpha-white-70);
      ${z}•active: var(--arc-color-alpha-white-40);
      ${z}•processing: var(--arc-color-alpha-white-40);
      ${z}•disabled: var(--arc-color-alpha-white-15);
    }

    &:where([data-hierarchy=secondary]) {
      ${G}: var(--arc-color-alpha-white-95);
      ${z}: transparent;
      ${fr}: var(--arc-color-alpha-white-80);

      ${G}•active: var(--arc-color-alpha-white-80);
      ${G}•processing: var(--arc-color-alpha-white-95);
      ${G}•disabled: var(--arc-color-alpha-white-50);

      ${z}•hover: var(--arc-color-alpha-white-20);
      ${z}•active: var(--arc-color-alpha-white-40);
      ${z}•processing: var(--arc-color-alpha-white-25);
      ${z}•disabled: transparent;

      ${fr}•hover: var(--arc-color-alpha-white-100);
      ${fr}•focus: var(--arc-color-alpha-white-80);
      ${fr}•active: var(--arc-color-alpha-white-50);
      ${fr}•processing: transparent;
      ${fr}•disabled: var(--arc-color-alpha-white-30);
    }

    &:where([data-hierarchy=tertiary]) {
      ${G}: var(--arc-color-alpha-white-95);
      ${z}: transparent;
      ${fr}: transparent;

      ${G}•active: var(--arc-color-alpha-black-60);
      ${G}•processing: var(--arc-color-alpha-white-95);
      ${G}•disabled: var(--arc-color-alpha-white-50);

      ${z}•hover: var(--arc-color-alpha-white-20);
      ${z}•active: var(--arc-color-alpha-white-40);
      ${z}•processing: var(--arc-color-alpha-white-20);
      ${z}•disabled: transparent;
    }

    &:where(
      [data-hierarchy=plain],
      [data-hierarchy=link-style]
    ) {
      ${G}: var(--arc-color-alpha-white-95);
      ${z}: transparent;
      ${fr}: transparent;

      ${G}•hover: var(--arc-color-alpha-white-60);
      ${G}•active: var(--arc-color-alpha-white-40);
      ${G}•processing: var(--arc-color-alpha-white-95);
      ${G}•disabled: var(--arc-color-alpha-white-30);
    }
  }
`,Hf=d`
  &[data-variant=critical] {
    ${Or}•width: var(${m}•1);

    &:where([data-hierarchy=primary]) {
      ${G}: var(--arc-color-fg-on-stark);
      ${z}: var(--arc-color-bg-critical-stark);
      ${fr}: transparent;

      ${G}•active: var(--arc-color-fg-critical-subtle);
      ${G}•processing: var(--arc-color-fg-on-heavy);
      ${G}•disabled: var(--arc-color-fg-disabled);

      ${z}•hover: var(--arc-color-bg-critical-heavy);
      ${z}•active: var(--arc-color-bg-critical-heavy);
      ${z}•processing: var(--arc-color-bg-critical-heavy);
      ${z}•disabled: var(--arc-color-bg-disabled);
    }

    &:where([data-hierarchy=secondary]) {
      ${G}: var(--arc-color-fg-critical-stark);
      ${z}: transparent;
      ${fr}: var(--arc-color-border-critical-stark);

      ${G}•active: var(--arc-color-fg-critical-subtle);
      ${G}•processing: var(--arc-color-fg-critical-stark);
      ${G}•disabled: var(--arc-color-fg-disabled);

      ${z}•hover: var(--arc-button-critical-bg-hover);
      ${z}•active: var(--arc-color-bg-critical-muted);
      ${z}•disabled: transparent;

      ${fr}•active: var(--arc-color-border-critical-subtle);
      ${fr}•processing: var(--arc-color-border-critical-stark);
      ${fr}•disabled: var(--arc-color-border-disabled);

      /* "floating" button mitigation */
      &:where([is-floating]) {
        ${z}: var(--arc-button-floating-bg);
        ${z}•processing: var(--arc-button-floating-bg-processing);
        ${z}•disabled: var(--arc-button-floating-bg-disabled);
        ${z}•focus: var(--arc-button-floating-bg-focus);

        ${z}•hover: var(--arc-button-critical-floating-bg-hover);
        ${z}•active: var(--arc-button-critical-floating-bg-active);
      }
    }

    &:where([data-hierarchy=tertiary]) {
      ${G}: var(--arc-color-fg-critical-stark);
      ${z}: transparent;
      ${fr}: transparent;

      ${G}•active: var(--arc-color-fg-critical-subtle);
      ${G}•processing: var(--arc-color-fg-critical-stark);
      ${G}•disabled: var(--arc-color-fg-disabled);

      ${z}•hover: var(--arc-button-critical-bg-hover);
      ${z}•active: var(--arc-color-bg-critical-subtle);
      ${z}•processing: var(--arc-color-bg-critical-muted);
      ${z}•disabled: transparent;
    }

    &:where(
      [data-hierarchy=plain],
      [data-hierarchy=link-style]
    ) {
      ${G}: var(--arc-color-fg-critical-stark);
      ${z}: transparent;
      ${fr}: transparent;

      ${G}•hover: var(--arc-color-fg-critical-mid);
      ${G}•active: var(--arc-color-fg-critical-subtle);
      ${G}•processing: var(--arc-color-fg-critical-stark);
      ${G}•disabled: var(--arc-color-fg-disabled);
    }
  }
`,Vf=d`
  /**
   * @deprecated • restores solid bg for legacy \`variant="secondary"\` / \`variant="secondary-inverse"\` usage,
   * which now map to \`data-variant=common data-hierarchy=secondary\` (transparent by default).
   */
  &[is-deprecated=secondary]:not([is-floating]) {
    ${z}: var(--arc-color-mono-white);
    ${z}•hover: var(--arc-color-bg-neutral-muted);
    ${z}•active: var(--arc-color-bg-neutral-subtle);
    ${z}•processing: var(--arc-color-mono-white);
    ${z}•disabled: var(--arc-color-mono-white);
    ${z}•focus: var(--arc-color-alpha-white-3);
  }

  &[is-deprecated=secondary-inverse]:not([is-floating]) {
    ${z}: transparent;
    ${z}•hover: var(--arc-color-bg-neutral-muted);
    ${z}•active: var(--arc-color-bg-neutral-subtle);
    ${z}•processing: transparent;
    ${z}•disabled: transparent;
    ${z}•focus: var(--arc-color-alpha-white-3);
  }
`,Uf=d`
  /** @overrides all variants when is onMedia (allows 'ai' gradient border) */
  &[is-on-media] {
    ${G}: var(--arc-color-mono-black);
    ${z}: var(--arc-color-alpha-white-70);
    ${fr}: var(--arc-color-alpha-black-15);

    ${G}•active: var(--arc-color-alpha-black-50);
    ${G}•processing: var(--arc-color-alpha-black-50);
    ${G}•disabled: var(--arc-color-alpha-black-40);

    ${z}•hover: var(--arc-color-alpha-white-90);
    ${z}•focus: var(--arc-color-alpha-white-70);
    ${z}•active: var(--arc-color-alpha-white-70);
    ${z}•disabled: var(--arc-color-alpha-white-60);
    ${z}•processing: var(--arc-color-alpha-white-60);

    ${fr}•active: var(--arc-color-alpha-black-10);
    ${fr}•disabled: var(--arc-color-alpha-black-10);
  }
`,Gf=d`
  ${B}•color: var(${G});
  ${B}•background: var(${z});
  ${B}•font•weight: var(--arc-font-weight-600);
  ${B}•cursor: var(--arc-button-cursor, pointer);
  ${B}•padding: 0 var(${B}•spacing);
  ${B}•content•opacity: 1;

  /**
   * @note: new spacing between label and icon
   * '--arc-button-gap' is @deprecated • this was the 'gap' at the [arc-button-content] level
   * '--arc-button-inline-spacing' is @preferred over '--arc-button-gap'
   */
  ${Ue}•padding: var(--arc-button-inline-spacing, var(--arc-button-gap, var(${Ue}•spacing)));

  /**
   * @note: default is 'inherit' so it can inherit from button's size.
   * The 'size="inherit"' sets the button's font-size to 1em,
   * and sets the label font-size to 0.875em (or 14px at 100%) to
   * match the default button's text size. This allows the label
   * to still remain scalable by the parent container's font-size.
   */
  ${Ue}•font•size: inherit;

  /**
   * @note: Transforms variant-dependent '${Or}•width' into '${Or}•size'
   * which is also used for inset/padding on the AI Button's [arc-button-mask] sizing.
   */
  ${Or}•size: var(--arc-button-border-width, var(${Or}•width));

  ${Or}•color: var(${fr});
  ${Or}: var(${Or}•size) solid var(${Or}•color, transparent);
  ${Or}•radius: var(--arc-border-radius-pill);

  ${ro}: var(--arc-border-width-md) solid var(${ro}•color, transparent);
  ${ro}•offset: var(--arc-border-width-md);

  ${B}•transition:
    background 0.2s ease-out,
    color 0.2s ease-out,
    height 0.2s ease-out,
    border-color 0.2s ease-out,
    outline-color 0.2s ease-out,
    opacity 0.2s ease-out,
    box-shadow 0.2s ease-out;

  &[data-hierarchy=link-style] {
    [arc-button-label] {
      text-decoration: var(--arc-link-text-decoration, underline);
      text-decoration-color: currentcolor;
    }

    [arc-button-icon] {
      text-decoration: none;
    }
  }

  /* Inter-Component Communication • ArcIcon -----------------------• */

  --arc-icon-size: var(${ie}•size);

  ${ze}•width: var(${ze}•size);

  &[has-large-icon] {
    --arc-icon-size: var(${ie}•size•large);

    [arc-button-icon]:has(svg) {
      ${ze}•width: var(${ze}•size•large);
    }
  }

  /* Inter-Component Communication • ArcSpinner --------------------• */

  --arc-spinner-size: var(${Se}•size);
  --arc-spinner-position: var(${Se}•position, absolute);
  --arc-spinner-inset: var(${Se}•inset, 50% auto auto 50%);
  --arc-spinner-translate: var(${Se}•translate, -50% -50%);
  --arc-spinner-color: var(--arc-button-progress-color, unset);

`,Kf=d`
  &:is(
    [is-processing],
    [is-processing-with-text],
    :has([arc-button-mask]),
    :has(input),
  ) {
    ${B}•position: relative;
  }

  &[is-disabled] {
    ${B}•color: var(${G}•disabled, var(${G}));
    ${B}•background: var(${z}•disabled, var(${z}));
    ${Or}•color: var(${fr}•disabled, var(${fr}));
    ${B}•opacity: var(--arc-button-disabled-opacity, unset);
    ${B}•cursor: var(--arc-button-disabled-cursor, not-allowed);
    ${Re}•bg: var(${Re}•disabled);
  }

  &:not(
    [is-disabled],
    [is-processing],
    [is-processing-with-text]
  ) {
    &:where(
      :hover,
      [data-simulate=hover]
    ) {
      ${B}•color: var(${G}•hover, var(${G}));
      ${B}•background: var(${z}•hover, var(${z}));
      ${Or}•color: var(${fr}•hover, var(${fr}));
      ${Re}•bg: var(${Re}•hover);
    }

    &:is(
      :active,
      [is-active],
      [data-simulate=active]
    ) {
      ${B}•color: var(${G}•active, var(${G}));
      ${B}•background: var(${z}•active, var(${z}));
      ${Or}•color: var(${fr}•active, var(${fr}));
      ${Re}•bg: var(${Re}•active);
    }
  }

  &[is-processing] {
    ${B}•content•visibility: hidden;
    ${B}•content•opacity: 0;

    /* spinner svg position controls */
    ${Se}•position: absolute;
    ${Se}•inset: 50% auto auto 50%;
    ${Se}•translate: -50% -50%;
  }

  &[is-processing-with-text] {
    ${B}•content•visibility: visible;

    /* spinner svg position controls */
    ${Se}•position: relative;
    ${Se}•inset: 0;
    ${Se}•translate: 0;
    ${Se}•size: 1lh;
  }

  &:is(
    [is-processing],
    [is-processing-with-text]
  ) {
    ${B}•opacity: var(--arc-button-processing-opacity, unset);
    ${B}•cursor: var(--arc-button-processing-cursor, default);
    ${Re}•bg: var(${Re}•processing);

    ${B}•color: var(${G}•processing, var(${G}));
    ${B}•background: var(${z}•processing, var(${z}));
    ${Or}•color: var(${fr}•processing, var(${fr}));
  }

  &:is(
    :where(:focus, :focus-within):focus-visible,
    [data-simulate=focus]
  ) {
    ${B}•color: var(${G}•focus, var(${G}));
    ${B}•background: var(${z}•focus, var(${z}));
    ${Or}•color: var(${fr}•focus, var(${fr}));
    ${ro}•color: var(--arc-button-outline-color, var(--arc-color-border-focus));

    * {
      outline: none;
    }
  }

`,Wf=d`
@layer arc-components {

  /* Shared defaults from _Internal/Components.css.js */
  ${If}

  :where([arc-button]) {
    /* SETUP -------------------------------------------------------• */
    ${Mf}
    ${Df}
    ${Of}
    ${Vf}
    ${Nf}
    ${Bf}
    ${Ff}
    ${Hf}
    ${Uf}

    /* CORE VARIABLES ----------------------------------------------• */
    ${Gf}
    ${Kf}

    /* CONTEXT OVERRIDES -------------------------------------------• */
    &[is-floating] {
      ${B}•position: fixed;
      ${B}•margin: 0;
      ${B}•z-index: 1000;
    }

    /* "floating" button mitigation */
    &:where([arc-shadow], [is-floating]) {
      backdrop-filter: var(--arc-button-backdrop-filter, blur(0.375em));
    }

    /* Plain & Link-style button structural overrides */
    &:is(
      [data-hierarchy=plain],
      [data-hierarchy=link-style]
    ) {
      ${Ue}•padding: unset;
      ${B}•padding: unset;
      ${B}•height: unset;
      ${Or}•radius: var(--arc-border-radius-md);

      [arc-button-content] {
        gap: var(--arc-button-inline-spacing, var(${Ue}•spacing));
      }
    }

    &:where([data-hierarchy=link-style]) {
      ${B}•font•weight: inherit;
      ${B}•text•decoration: none;
    }

    /* Custom button structural overrides */
    &[arc-button=custom] {
      ${B}•padding: unset;

      [arc-button-content] {
        gap: 0.5em;
      }

      [arc-button-label] {
        display: contents;
      }
    }

    /* CORE STYLES -------------------------------------------------• */
    appearance: none;
    cursor: var(--arc-button-cursor, var(${B}•cursor));
    position: var(--arc-button-position, var(${B}•position, unset));
    transition: var(--arc-button-transition, var(${B}•transition));
    z-index: var(--arc-button-z-index, var(${B}•z-index, unset));
    inset: var(--arc-button-inset, var(--js•inset, unset));

    /* FOOTPRINT */
    font: inherit;
    font-weight: var(--arc-button-font-weight, var(${B}•font•weight));
    font-size: var(--arc-button-font-size, var(${B}•font•size, inherit));
    padding: var(--arc-button-padding, var(${B}•padding));
    margin: var(--arc-button-margin, var(${B}•margin, unset));

    width: var(--arc-button-width, var(${B}•width, auto));
    min-width: var(--arc-button-min-width, var(${B}•min•width, unset));
    max-width: var(--arc-button-max-width, var(${B}•max•width, 100%));

    height: var(--arc-button-height, var(${B}•height, auto));
    min-height: var(--arc-button-min-height, var(${B}•min•height, unset));
    max-height: var(--arc-button-max-height, var(${B}•max•height, unset));

    aspect-ratio: var(--arc-button-aspect-ratio, var(${B}•aspect•ratio, unset));

    /* VARIANT THEME APPLIED ---------------------------------------• */

    color: var(--arc-button-color, var(${B}•color));
    background: var(--arc-button-background, var(${B}•background));
    border: var(--arc-button-border, var(${Or}));
    border-radius: var(--arc-button-border-radius, var(${Or}•radius));

    opacity: var(--arc-button-opacity, 1);

    outline: var(--arc-button-outline, var(${ro}));
    outline-offset: var(--arc-button-outline-offset, var(${ro}•offset));
    overflow: var(--arc-button-overflow, unset);

    /* shadow concession for buttons not already using 'arc-shadow' util */
    &:not([arc-shadow]) {
      box-shadow: var(--arc-button-box-shadow, unset);
    }

    &[href] {
      text-decoration: var(--arc-button-text-decoration, none);
    }

    /* INNER-ELEMENTS ----------------------------------------------• */
    [arc-button-content] {
      flex: 1;

      display: flex;
      align-items: var(--arc-button-align-items, center);
      justify-content: var(--arc-button-justify-content, center);
      gap: var(--arc-button-content-gap, unset);

      opacity: var(--arc-button-content-opacity, var(${B}•content•opacity));
      visibility: var(--arc-button-content-visibility, var(${B}•content•visibility, inherit));
      pointer-events: var(--arc-button-content-pointer-events, none);

      width: var(--arc-button-content-width, var(${B}•content•width, auto));
      max-width: var(--arc-button-content-max-width, 100%);
      overflow: var(--arc-button-content-overflow, visible);

      transition: var(--arc-button-content-transition, inherit);

      line-height: normal;
      user-select: none;
    }

    [arc-button-label] {
      display: var(--arc-button-label-display, unset);
      font-size: var(--arc-button-label-font-size, var(${Ue}•font•size));
      overflow: var(--arc-button-label-overflow, clip);
      text-overflow: var(--arc-button-label-text-overflow, ellipsis);
      white-space: var(--arc-button-label-white-space, nowrap);
      max-width: var(--arc-button-label-max-width, 100%);
      opacity: var(--arc-button-label-opacity, var(${B}•opacity));
      transition: var(--arc-button-label-transition, inherit);
      padding-inline: var(${Ue}•padding);
    }

    [arc-button-icon] {
      /** @note: override to ensure auto-width is applied to button icons This protects the
       * intended "gap" (now 'padding-inline' on the label) between icon and label */
      --fa-width: var(${ie}•width);

      flex: none;

      display: flex;
      align-items: center;
      justify-content: center;
      width: var(--arc-button-icon-width, var(${ie}•width));
      min-width: 1em;

      opacity: var(--arc-button-icon-opacity, var(${B}•opacity));
      transition: var(--arc-button-icon-transition, inherit);

      &:has(svg) {
        ${ie}•width: var(--arc-button-svg-width, var(${ze}•width));
      }

      svg {
        width: 100%;
        height: 100%;
      }
    }

    [arc-button-mask] {
      pointer-events: none;
      position: absolute;
      inset: calc(var(${Or}•size) * -1);
      padding: var(${Or}•size);
      background: var(${Re}•bg);
      mask: linear-gradient(black, black) content-box exclude, linear-gradient(black, black);
      border-radius: var(--arc-button-border-radius, var(${Or}•radius));
      transition: var(--arc-button-transition, inherit);
    }

    input {
      position: absolute;
      opacity: 0;
      scale: 0.1;
    }
  }

  [arc-button]:not([hidden]) {
    flex: var(--arc-button-flex, unset);
    display: var(--arc-button-display, var(${B}•display, inline-flex));
    align-items: center;
    justify-content: center;
  }

}
`,Xf=({variant:r,hierarchy:e,isOnMedia:a})=>[{test:e==="primary"&&r!=="neutral"||r==="alpha"||a,value:"white"},{test:!0,value:"brand"}],qf=({variant:r,hierarchy:e,isOnMedia:a})=>Xf({variant:r,hierarchy:e,isOnMedia:a}).find(t=>t.test)?.value??"brand",Yf=(0,i.jsx)("span",{"arc-button-mask":""}),Zf=!!s.version.startsWith("18"),Jf=r=>r===void 0||r===!1?{isFloating:!1}:r===!0?{isFloating:!0}:{isFloating:!0,inset:r.inset},Qf=({popoverTarget:r,popoverTargetAction:e})=>Zf?{popovertarget:r??void 0,popovertargetaction:e??void 0}:{popoverTarget:r??void 0,popoverTargetAction:e??void 0},Lr=(0,s.forwardRef)(({children:r,disabled:e,...a},t)=>{const o=(0,s.useRef)(null),{_isCustom:n,iconEnd:c,iconStart:l,icon:u,text:h,isActive:p,isDisabled:v,isProcessing:g,isProcessingWithText:f,hasLargeIcon:b,tag:$,href:x,type:A,title:y,layout:k,shape:w,size:E="lg",variant:_="common",hierarchy:I="primary",scheme:C="auto",shadow:S,isOnMedia:T,floating:D,onMedia:N,isInverse:H=!1,...J}=a,{isFloating:R,inset:M}=Jf(D),P=T??N,F=$??(x?"a":"button"),or=F==="button"?A||"button":void 0,gr=k==="icon",L=f||g||v||e,X=J?.["aria-disabled"]||L||void 0,sr=n?void 0:Uu({variant:_}),mr=n?void 0:Gu({variant:_,hierarchy:I}),rr=!n&&Ts(_)?_:void 0,ur=n?void 0:Hu({shape:w}),yr=n?"inherit":E,lr=bf({layout:k,isFloating:R}),wr=ff({isFloating:R,isOnMedia:P,shadow:S}),V=Ku({variant:_,isInverse:H,scheme:C}),K=!gr&&(r||h),er=(0,i.jsx)(Ac,{color:_&&I?qf({variant:_,hierarchy:I,isOnMedia:P}):"brand"}),O=f&&er||l||u,cr=!gr&&(f&&!(l||u)?void 0:c),br=(g||f&&gr)&&er,$r=sr==="ai"?Yf:void 0,{tooltip:U,...W}=J,Y=At(U)?U:void 0,ir=a.tooltip??Y,dr=!!ir,q=At(ir)?{text:ir}:ir,pr=J["aria-describedby"],Rr=Nr(void 0,"arc-tooltip"),Ir=a.id?`${a.id}-tooltip`:Rr,Sr=dr?Ir:void 0,Gr=dr?Yo([pr,Sr]):pr,{anchorName:Fr,style:Hr,popoverTarget:Ve,popoverTargetAction:ee,...ke}=W,Qe=Ve?Jo(String(Fr||a?.id)):void 0,at=dr?Jo(String(Sr)):void 0,ra=mu(Hr)?Hr:void 0,Do=ra&&"anchorName"in ra&&ra.anchorName,Yg=[...(At(Do)?Nu(Do,", "):[]).map(Jo),...Qe?[Qe]:[],...at?[at]:[]],qd=Yo(Yg,1/0,", "),Yd=ra!=null&&"inset"in ra&&ra.inset!==void 0&&ra.inset!==null&&ra.inset!=="",Zd={...ra??{},...qd?{anchorName:qd}:{},...M!==void 0&&!Yd?{"--js\u2022inset":M}:{}},Jd=Qf({popoverTarget:Ve||void 0,popoverTargetAction:ee||void 0}),Qd=(0,s.useCallback)(ru=>{o.current=ru,Ce(t,ru)},[t]);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(F,{...ke,...Jd,ref:Qd,"arc-button":n?"custom":"","arc-scheme":V,"arc-shadow":wr||void 0,disabled:!x&&L||void 0,href:x||void 0,title:dr?void 0:y||void 0,type:or,"data-layout":lr,"data-shape":ur,"data-size":yr,"data-variant":sr,"data-hierarchy":mr,"has-large-icon":b?"":void 0,"is-deprecated":rr,"is-floating":R?"":void 0,"is-on-media":P?"":void 0,"is-active":p?"":void 0,"is-processing":g||f&&gr?"":void 0,"is-processing-with-text":f&&!gr?"":void 0,"is-disabled":L||X?"":void 0,"aria-disabled":X,"aria-describedby":Gr||void 0,style:Zd,children:[(0,i.jsxs)("span",{"arc-button-content":"",children:[!!O&&(0,i.jsx)("span",{"arc-button-icon":"",children:typeof O=="string"?(0,i.jsx)(zr,{icon:O}):O}),!!K&&(0,i.jsx)("span",{"arc-button-label":"",children:K}),!!cr&&(0,i.jsx)("span",{"arc-button-icon":"",children:typeof cr=="string"?(0,i.jsx)(zr,{icon:cr}):cr})]}),br,$r]}),dr&&(0,i.jsx)(co,{...q,id:Sr,alternateAnchor:q?.alternateAnchor??(()=>o.current),anchorName:at})]})});Lr.displayName="ArcButton",Cr("ArcButton",Wf);const an=(0,s.forwardRef)((r,e)=>(0,i.jsx)(Lr,{...r,ref:e,"arc-popover-button":""})),Wu=({isInverse:r=!1,isOpen:e,...a})=>(0,i.jsx)(Lr,{icon:"fa-regular fa-xmark",text:"Dismiss",...a,layout:"icon",shape:"square",size:"sm",variant:"common",hierarchy:"tertiary",isInverse:r,"arc-popover-dismiss":""}),rm=({isInverse:r=!1,...e})=>(0,i.jsx)(Lr,{icon:"fa-regular fa-arrow-left",text:"Go Back",...e,layout:"icon",shape:"square",size:"sm",variant:"common",hierarchy:"tertiary",isInverse:r,"arc-popover-go-back":""}),em=({children:r,isSticky:e,showDivider:a,showDismiss:t,dismissProps:o,showGoBack:n,goBackProps:c,headerSlotEnd:l,tag:u="header",...h})=>(0,i.jsx)(u,{...h,"arc-popover-header":"","has-divider":a?"":void 0,"is-sticky":e?"":void 0,children:(0,i.jsxs)("div",{"arc-popover-display":"",children:[(0,i.jsxs)("div",{"arc-popover-header-slot":"start",children:[n&&(0,i.jsx)(rm,{...c}),r]}),(0,i.jsxs)("div",{"arc-popover-header-slot":"end",children:[l,t&&(0,i.jsx)(Wu,{...o})]})]})}),am=({children:r,tag:e="article",...a})=>(0,i.jsx)(e,{...a,"arc-popover-body":"",children:(0,i.jsx)("div",{"arc-popover-display":"",children:r})}),tm=({children:r,isSticky:e,showDivider:a,tag:t="footer",...o})=>(0,i.jsx)(t,{...o,"arc-popover-footer":"","has-divider":a?"":void 0,"is-sticky":e?"":void 0,children:(0,i.jsx)("div",{"arc-popover-display":"",children:r})});an.displayName="ArcPopoverButton";const Q=d`--arc-popover`,Ee=d`--arc•popover`,hr=d`--arc•trail•mix`,Is=d`${Ee}•radius`,om=d`${Ee}•content`,Sc=d`${Ee}•outline`,Er=d`${Ee}•offset`,za=d`${Ee}•header`,nm=d`${Ee}•body`,Ps=d`${Ee}•divider`,zc=d`${Ee}•footer`,pa=d`${Ee}•tail`,_r=d`${pa}•top`,Tr=d`${pa}•left`,tn=d`${pa}•size`,_e=d`${pa}•x`,Te=d`${pa}•y`,Rs=d`${Ee}•font•size`,Ec=d`${Ee}•padding`,Kr=d`${Ee}•margin`,eo=d`${za}•padding`,aa=d`${nm}•padding`,Ea=d`${zc}•padding`,Xu=d`${Ee}•fg`,_c=d`${Ee}•bg`,Tc=d`${om}•bg`,Ic=d`${pa}•fill•a`,Pc=d`${pa}•fill•b`,Rc=d`${pa}•edge•a`,jc=d`${pa}•edge•b`,cm=d`

  ${Ee}•fallback: none;
  ${Sc}: var(${Q}-outline-size, var(--arc-border-width-md));
  ${Is}: var(${Q}-border-radius, var(--arc-border-radius-lg));
  ${Er}: var(${Q}-offset, var(--js•offset, 0px));

  /* space & padding */
  ${Ec}: 0.875em;

  /* tail metrics - starts at defaults for anchor-at='bottom-start' */
  ${hr}: 47.5%; /* mix-ratio for tail to match gradient outline for: 'popover[variant=ai]' */
  ${_e}: var(${Q}-tail-x, 1.75em);
  ${Te}: var(${Q}-tail-y, 1.125em);
  ${tn}: 0px;

  &:where([has-tail]) {
    ${tn}: var(${Q}-tail-size, var(--js•tail, 8px));

    /* offset calculation magic number - 'sqrt(2) / 2' for half of 45° rotated tailSize */
    ${Er}: calc(var(${Q}-offset, var(--js•offset, 0px)) + var(${tn}) * (sqrt(2) / 2));
  }

  &:has([arc-popover-body]) {
    ${Ec}: 0;
    &:has([arc-popover-header]:not([has-divider])) { ${aa}•block•start: 0; }
    &:has([arc-popover-footer]:not([has-divider])) { ${aa}•block•end: 0; }
  }

`,im=d`

  /* default variant: common */
  &[variant] {
    ${Xu}: var(--arc-color-fg-primary);
    ${_c}: var(${Q}-background, var(--arc-color-bg-mono)) border-box;
    ${Tc}: var(${Q}-background, var(--arc-color-bg-mono)) padding-box;
    ${Ic}: var(${Q}-background, var(--arc-color-bg-mono));
    ${Pc}: var(${Q}-background, var(--arc-color-bg-mono));
    ${Rc}: var(${Q}-background, var(--arc-color-bg-mono));
    ${jc}: var(${Q}-background, var(--arc-color-bg-mono));
    ${Ee}•shadow: var(--arc-shadow-lg);
    ${Ps}: var(--arc-border-width-sm) solid var(--arc-color-border-mid);
  }

  &[variant=brand] {
    ${_c}: var(--arc-color-border-brand-mid) border-box;
    ${Tc}: var(--arc-color-bg-brand-muted) padding-box;
    ${Ic}: var(--arc-color-bg-brand-muted);
    ${Pc}: var(--arc-color-bg-brand-muted);
    ${Rc}: var(--arc-color-border-brand-mid);
    ${jc}: var(--arc-color-border-brand-mid);
  }

  &[variant=ai] {
    ${_c}: var(--arc-gradient-ai-200) border-box;
    ${Tc}: var(--arc-gradient-ai-50) padding-box;
    ${Ic}: var(${Q}-ai-purple-50);
    ${Pc}: var(${Q}-ai-blue-50);
    ${Rc}: var(${Q}-ai-purple-200);
    ${jc}: var(${Q}-ai-blue-200);
  }

`,sm=d`

  /* default density: compact */
  &:not([density=comfortable]) {
    ${Rs}: 0.75em;
    ${za}•gap: 0.75em;
    ${eo}•block: 0.75em;
    ${eo}•inline: 0.75em;

    ${aa}•block: 0.75em;
    ${aa}•inline: 0.75em;

    ${zc}•gap: 0.75em;
    ${Ea}•inline: 0.75em;
    ${Ea}•block•start: 0.75em;
    ${Ea}•block•end: 0.75em;
  }

  &[density=comfortable] {
    ${Rs}: 0.875em;
    ${za}•gap: 1.125em;
    ${eo}•block: 1em;
    ${eo}•inline: 1.25em;

    ${aa}•block: 1.25em;
    ${aa}•inline: 1.25em;

    ${zc}•gap: 1.125em;
    ${Ea}•inline: 1.25em;
    ${Ea}•block•start: 1em;
    ${Ea}•block•end: 1.25em;

    &:not(:has([arc-popover-body])) {
      ${Ec}: 1.25em;
    }
  }

`,on={TOP:d`
    &[anchor-at*='top-'] {
      ${Kr}: 0 0 var(${Er}) 0;
      ${_r}: 100%;
    }
    &[anchor-at='top-start'] {
      position-area: block-start span-inline-end;
      ${hr}: 95%;
      ${Tr}: calc(0% + var(${_e}));
    }
    &[anchor-at='top-center'] {
      position-area: block-start;
      ${hr}: 75%;
      ${Tr}: 50%;
    }
    &[anchor-at='top-end'] {
      position-area: block-start span-inline-start;
      ${hr}: 53.5%;
      ${Tr}: calc(100% - var(${_e}));
    }
  `,RIGHT:d`
    &[anchor-at*='right-'] {
      ${Kr}: 0 0 0 var(${Er});
      ${Tr}: 0%;
    }
    &[anchor-at='right-start'] {
      position-area: inline-end span-block-end;
      ${hr}: 53.5%;
      ${_r}: calc(0% + var(${Te}));
    }
    &[anchor-at='right-center'] {
      position-area: inline-end;
      ${hr}: 75%;
      ${_r}: 50%;
    }
    &[anchor-at='right-end'] {
      position-area: inline-end span-block-start;
      ${hr}: 95%;
      ${_r}: calc(100% - var(${Te}));
    }
  `,BOTTOM:d`
    &[anchor-at*='bottom-'] {
      ${Kr}: var(${Er}) 0 0 0;
      ${_r}: 0%;
    }
    &[anchor-at='bottom-end'] {
      position-area: block-end span-inline-start;
      ${hr}: 5%;
      ${Tr}: calc(100% - var(${_e}));
    }
    &[anchor-at='bottom-center'] {
      position-area: block-end;
      ${hr}: 25%;
      ${Tr}: 50%;
    }
    &[anchor-at='bottom-start'] {
      position-area: block-end span-inline-end;
      ${hr}: 47.5%;
      ${Tr}: calc(0% + var(${_e}));
    }
  `,LEFT:d`
    &[anchor-at*='left-'] {
      ${Kr}: 0 var(${Er}) 0 0;
      ${Tr}: 100%;
    }
    &[anchor-at='left-end'] {
      position-area: inline-start span-block-start;
      ${hr}: 47.5%;
      ${_r}: calc(100% - var(${Te}));
    }
    &[anchor-at='left-center'] {
      position-area: inline-start;
      ${hr}: 25%;
      ${_r}: 50%;
    }
    &[anchor-at='left-start'] {
      position-area: inline-start span-block-end;
      ${hr}: 5%;
      ${_r}: calc(0% + var(${Te}));
    }
  `,CENTER_AND_CORNERS:d`
    &:is([anchor-at='center'], [anchor-at*='corner']) { ${pa}•display: none; }
    &[anchor-at='center'] { position-area: center center; ${Kr}: 0; }
    &[anchor-at*='corner'] { ${Kr}: var(${Er}); }
    &[anchor-at='nw-corner'] { position-area: top left; }
    &[anchor-at='ne-corner'] { position-area: top right; }
    &[anchor-at='se-corner'] { position-area: bottom right; }
    &[anchor-at='sw-corner'] { position-area: bottom left; }
  `},ao={FLIP_BLOCK:d`
    &[anchor-at*='top-'] { ${Kr}: 0 0 var(${Er}) 0; }
    &[anchor-at='top-start']::before { ${hr}: 47.5%; ${_r}: 0%; }
    &[anchor-at='top-center']::before { ${hr}: 25%; ${_r}: 0%; }
    &[anchor-at='top-end']::before { ${hr}: 5%; ${_r}: 0%; }

    &[anchor-at='right-start']::before { ${hr}: 95%; ${_r}: calc(100% - var(${Te})); }
    &[anchor-at='right-end']::before { ${hr}: 53.5%; ${_r}: calc(0% + var(${Te})); }

    &[anchor-at*='bottom-'] { ${Kr}: var(${Er}) 0 0 0; }
    &[anchor-at='bottom-end']::before { ${hr}: 53.5%; ${_r}: 100%; }
    &[anchor-at='bottom-center']::before { ${hr}: 75%; ${_r}: 100%; }
    &[anchor-at='bottom-start']::before { ${hr}: 95%; ${_r}: 100%; }

    &[anchor-at='left-end']::before { ${hr}: 5%; ${_r}: calc(0% + var(${Te})); }
    &[anchor-at='left-start']::before { ${hr}: 47.5%; ${_r}: calc(100% - var(${Te})); }
  `,FLIP_INLINE:d`
    &[anchor-at='top-start']::before { ${hr}: 53.5%; ${Tr}: calc(100% - var(${_e})); }
    &[anchor-at='top-end']::before { ${hr}: 95%; ${Tr}: calc(0% + var(${_e})); }

    &[anchor-at*='right-'] { ${Kr}: 0 var(${Er}) 0 0; }
    &[anchor-at='right-start']::before { ${hr}: 5%; ${Tr}: 100%; }
    &[anchor-at='right-center']::before { ${hr}: 25%; ${Tr}: 100%; }
    &[anchor-at='right-end']::before { ${hr}: 47.5%; ${Tr}: 100%; }

    &[anchor-at='bottom-end']::before { ${hr}: 47.5%; ${Tr}: calc(0% + var(${_e})); }
    &[anchor-at='bottom-start']::before { ${hr}: 5%; ${Tr}: calc(100% - var(${_e})); }

    &[anchor-at*='left-'] { ${Kr}: 0 0 0 var(${Er}); }
    &[anchor-at='left-end']::before { ${hr}: 95%; ${Tr}: 0%; }
    &[anchor-at='left-center']::before { ${hr}: 75%; ${Tr}: 0%; }
    &[anchor-at='left-start']::before { ${hr}: 53.5%; ${Tr}: 0%; }
  `,FLIP_BLOCK_INLINE:d`
    &[anchor-at*='top-'] { ${Kr}: 0 0 var(${Er}) 0; }
    &[anchor-at='top-start']::before { ${hr}: 5%; ${_r}: 0%; ${Tr}: calc(100% - var(${_e})); }
    &[anchor-at='top-end']::before { ${hr}: 47.5%; ${_r}: 0%; ${Tr}: calc(0% + var(${_e})); }

    &[anchor-at*='right-'] { ${Kr}: 0 var(${Er}) 0 0; }
    &[anchor-at='right-start']::before { ${hr}: 47.5%; ${_r}: calc(100% - var(${Te})); ${Tr}: 100%; }
    &[anchor-at='right-end']::before { ${hr}: 5%; ${_r}: calc(0% + var(${Te})); ${Tr}: 100%; }

    &[anchor-at*='bottom-'] { ${Kr}: var(${Er}) 0 0 0; }
    &[anchor-at='bottom-end']::before { ${hr}: 95%; ${_r}: 100%; ${Tr}: calc(0% + var(${_e})); }
    &[anchor-at='bottom-start']::before { ${hr}: 53.5%; ${_r}: 100%; ${Tr}: calc(100% - var(${_e})); }

    &[anchor-at*='left-'] { ${Kr}: 0 0 0 var(${Er}); }
    &[anchor-at='left-end']::before { ${hr}: 53.5%; ${_r}: calc(0% + var(${Te})); ${Tr}: 0%; }
    &[anchor-at='left-start']::before { ${hr}: 95%; ${_r}: calc(100% - var(${Te})); ${Tr}: 0%; }
  `},lm=d`
  @position-try --js•try-top-start { position-area: block-start span-inline-end; margin: 0 0 var(${Er}) 0; }
  @position-try --js•try-top-center { position-area: block-start; margin: 0 0 var(${Er}) 0; }
  @position-try --js•try-top-end { position-area: block-start span-inline-start; margin: 0 0 var(${Er}) 0; }
  @position-try --js•try-right-start { position-area: inline-end span-block-end; margin: 0 0 0 var(${Er}); }
  @position-try --js•try-right-center { position-area: inline-end; margin: 0 0 0 var(${Er}); }
  @position-try --js•try-right-end { position-area: inline-end span-block-start; margin: 0 0 0 var(${Er}); }
  @position-try --js•try-bottom-start { position-area: block-end span-inline-end; margin: var(${Er}) 0 0 0; }
  @position-try --js•try-bottom-center { position-area: block-end; margin: var(${Er}) 0 0 0; }
  @position-try --js•try-bottom-end { position-area: block-end span-inline-start; margin: var(${Er}) 0 0 0; }
  @position-try --js•try-left-start { position-area: inline-start span-block-end; margin: 0 var(${Er}) 0 0; }
  @position-try --js•try-left-center { position-area: inline-start; margin: 0 var(${Er}) 0 0; }
  @position-try --js•try-left-end { position-area: inline-start span-block-start; margin: 0 var(${Er}) 0 0; }
  @position-try --js•try-center { position-area: center center; margin: 0; }
  @position-try --js•try-nw-corner { position-area: top left; margin: var(${Er}); }
  @position-try --js•try-ne-corner { position-area: top right; margin: var(${Er}); }
  @position-try --js•try-se-corner { position-area: bottom right; margin: var(${Er}); }
  @position-try --js•try-sw-corner { position-area: bottom left; margin: var(${Er}); }
`,ae={"top-start":d`
    ${Kr}: 0 0 var(${Er}) 0;
    &::before { ${hr}: 95%; ${_r}: 100%; ${Tr}: calc(0% + var(${_e})); }
  `,"top-center":d`
    ${Kr}: 0 0 var(${Er}) 0;
    &::before { ${hr}: 75%; ${_r}: 100%; ${Tr}: 50%; }
  `,"top-end":d`
    ${Kr}: 0 0 var(${Er}) 0;
    &::before { ${hr}: 53.5%; ${_r}: 100%; ${Tr}: calc(100% - var(${_e})); }
  `,"right-start":d`
    ${Kr}: 0 0 0 var(${Er});
    &::before { ${hr}: 53.5%; ${Tr}: 0%; ${_r}: calc(0% + var(${Te})); }
  `,"right-center":d`
    ${Kr}: 0 0 0 var(${Er});
    &::before { ${hr}: 75%; ${Tr}: 0%; ${_r}: 50%; }
  `,"right-end":d`
    ${Kr}: 0 0 0 var(${Er});
    &::before { ${hr}: 95%; ${Tr}: 0%; ${_r}: calc(100% - var(${Te})); }
  `,"bottom-start":d`
    ${Kr}: var(${Er}) 0 0 0;
    &::before { ${hr}: 47.5%; ${_r}: 0%; ${Tr}: calc(0% + var(${_e})); }
  `,"bottom-center":d`
    ${Kr}: var(${Er}) 0 0 0;
    &::before { ${hr}: 25%; ${_r}: 0%; ${Tr}: 50%; }
  `,"bottom-end":d`
    ${Kr}: var(${Er}) 0 0 0;
    &::before { ${hr}: 5%; ${_r}: 0%; ${Tr}: calc(100% - var(${_e})); }
  `,"left-start":d`
    ${Kr}: 0 var(${Er}) 0 0;
    &::before { ${hr}: 5%; ${Tr}: 100%; ${_r}: calc(0% + var(${Te})); }
  `,"left-center":d`
    ${Kr}: 0 var(${Er}) 0 0;
    &::before { ${hr}: 25%; ${Tr}: 100%; ${_r}: 50%; }
  `,"left-end":d`
    ${Kr}: 0 var(${Er}) 0 0;
    &::before { ${hr}: 47.5%; ${Tr}: 100%; ${_r}: calc(100% - var(${Te})); }
  `},dm=d`
  @supports (container-type: anchored) {
    @container anchored(fallback: --js•try-top-start) { [arc-popover][try-fallbacks][has-tail] { ${ae["top-start"]} } }
    @container anchored(fallback: --js•try-top-center) { [arc-popover][try-fallbacks][has-tail] { ${ae["top-center"]} } }
    @container anchored(fallback: --js•try-top-end) { [arc-popover][try-fallbacks][has-tail] { ${ae["top-end"]} } }
    @container anchored(fallback: --js•try-right-start) { [arc-popover][try-fallbacks][has-tail] { ${ae["right-start"]} } }
    @container anchored(fallback: --js•try-right-center) { [arc-popover][try-fallbacks][has-tail] { ${ae["right-center"]} } }
    @container anchored(fallback: --js•try-right-end) { [arc-popover][try-fallbacks][has-tail] { ${ae["right-end"]} } }
    @container anchored(fallback: --js•try-bottom-start) { [arc-popover][try-fallbacks][has-tail] { ${ae["bottom-start"]} } }
    @container anchored(fallback: --js•try-bottom-center) { [arc-popover][try-fallbacks][has-tail] { ${ae["bottom-center"]} } }
    @container anchored(fallback: --js•try-bottom-end) { [arc-popover][try-fallbacks][has-tail] { ${ae["bottom-end"]} } }
    @container anchored(fallback: --js•try-left-start) { [arc-popover][try-fallbacks][has-tail] { ${ae["left-start"]} } }
    @container anchored(fallback: --js•try-left-center) { [arc-popover][try-fallbacks][has-tail] { ${ae["left-center"]} } }
    @container anchored(fallback: --js•try-left-end) { [arc-popover][try-fallbacks][has-tail] { ${ae["left-end"]} } }
  }
`,um=d`
  &[data-resolved-at='top-start'] { ${ae["top-start"]} }
  &[data-resolved-at='top-center'] { ${ae["top-center"]} }
  &[data-resolved-at='top-end'] { ${ae["top-end"]} }
  &[data-resolved-at='right-start'] { ${ae["right-start"]} }
  &[data-resolved-at='right-center'] { ${ae["right-center"]} }
  &[data-resolved-at='right-end'] { ${ae["right-end"]} }
  &[data-resolved-at='bottom-start'] { ${ae["bottom-start"]} }
  &[data-resolved-at='bottom-center'] { ${ae["bottom-center"]} }
  &[data-resolved-at='bottom-end'] { ${ae["bottom-end"]} }
  &[data-resolved-at='left-start'] { ${ae["left-start"]} }
  &[data-resolved-at='left-center'] { ${ae["left-center"]} }
  &[data-resolved-at='left-end'] { ${ae["left-end"]} }
`,hm=d`
  ${lm}

  [arc-popover] {
    position: fixed;
    inset: auto;
    padding: 0;
    margin: var(${Kr});

    container-type: anchored;
    position-anchor: var(${Q}-anchor-name, var(--js•anchor));

    ${on.TOP}
    ${on.RIGHT}
    ${on.BOTTOM}
    ${on.LEFT}
    ${on.CENTER_AND_CORNERS}

    &[try-fallbacks] {
      /* '--js•fallbacks' is set by the component: automatic flip keywords by default,
         or an ordered list of managed '@position-try' idents when 'fallbackAnchors' is used. */
      position-try-fallbacks: var(--js•fallbacks, flip-block, flip-inline, flip-block flip-inline);
    }
  }

  @supports (container-type: anchored) {
    @container anchored(fallback: flip-block) {
      [arc-popover][try-fallbacks][has-tail] {
        ${ao.FLIP_BLOCK}
      }
    }

    @container anchored(fallback: flip-inline) {
      [arc-popover][try-fallbacks][has-tail] {
        ${ao.FLIP_INLINE}
      }
    }

    @container anchored(fallback: flip-block flip-inline) {
      [arc-popover][try-fallbacks][has-tail] {
        ${ao.FLIP_BLOCK_INLINE}
      }
    }
  }

  /* Managed fallback placements ('fallbackAnchors') — native '@position-try' tail re-pointing. */
  ${dm}

  /* @note – tail fallback mitigation */
  @supports not (container-type: anchored) {
    /* @note – inline center anchor placement mitigation for Firefox */
    [arc-popover] {
      &[anchor-at='right-center'] {
        position-area: inline-end center;
      }
      &[anchor-at='left-center'] {
        position-area: inline-start center;
      }
    }

    [arc-popover][try-fallbacks][has-tail] {
      &[data-fallbacks='flip-block'] {
        ${ao.FLIP_BLOCK}
      }
      &[data-fallbacks='flip-inline'] {
        ${ao.FLIP_INLINE}
      }
      &[data-fallbacks='flip-block-inline'] {
        ${ao.FLIP_BLOCK_INLINE}
      }

      /* Managed fallback placements ('fallbackAnchors') — resolved-anchor tail re-pointing. */
      ${um}
    }
  }
`,to={BACKDROP:d`
    [arc-popover]::backdrop {
      background: var(${Q}-backdrop, transparent);
    }
  `,CONTENT:d`
    [arc-popover-content] {
      flex: var(${Q}-flex, 1);
      position: relative;
      display: var(${Q}-content-display, flex);
      flex-direction: var(${Q}-content-flex-direction, column);
      gap: var(${Q}-content-gap, 0);

      overflow: var(${Q}-overflow, auto);
      overscroll-behavior: var(${Q}-overscroll-behavior, contain);

      color: var(${Q}-color, var(${Xu}));
      padding: var(${Q}-padding, var(${Ec}));
      margin: var(${Q}-margin, unset);
      background: var(${Q}-content-background, var(${Tc}));
      border-radius: calc(var(${Is}) - var(${Sc}));
      border: var(${Q}-border, none);

      height: var(${Q}-height, auto);
      min-height: var(${Q}-min-height, auto);
      max-height: var(${Q}-max-height, 65vh);
      resize: var(${Q}-resize, none);
    }
  `,HEADER:d`
    [arc-popover-header] {
      flex: var(${Q}-header-flex, none);
      display: var(${Q}-header-display, flex);
      justify-content: var(${Q}-header-justify-content, space-between);
      align-items: var(${Q}-header-align-items, baseline);
      gap: var(${Q}-header-gap, var(${za}•gap));

      padding: var(${Q}-header-padding,
        var(${eo}•block)
        var(${eo}•inline)
      );

      color: var(${Q}-header-color, inherit);
      background: var(${Q}-header-background, none);

      &[is-sticky] {
        position: sticky;
        z-index: var(${Q}-header-z-index, 2);
        top: var(${Q}-header-top, 0);
      }

      &:has([arc-popover-go-back]) {
        padding-inline-start: 0.875em;
      }

      &:has([arc-popover-dismiss]) {
        padding-inline-end: 0.875em;
      }

      &:where([has-divider]) {
        border-bottom: var(${Q}-header-border-bottom, var(${Ps}));
      }

      :where([arc-button]) {
        margin: var(${Q}-header-button-margin, -0.5em);
      }
    }

    [arc-popover-header-slot='start'] {
      ${za}•slot•flex: 1;
      ${za}•slot•gap: 1em;
    }

    [arc-popover-header-slot='end'] {
      ${za}•slot•flex: none;
      ${za}•slot•gap: 1.5em;
    }

    [arc-popover-header-slot] {
      min-width: 0%;
      flex: var(${za}•slot•flex);
      display: var(${Q}-header-display, flex);
      justify-content: var(${Q}-header-justify-content, unset);
      align-items: var(${Q}-header-align-items, baseline);
      gap: var(${Q}-header-slot-gap, var(${za}•slot•gap));
    }

    /* Header-less Popover: DismissButton typical starting spot */
    [arc-popover]:not([arc-popover-header]) > [arc-popover-dismiss] {
      --arc-button-position: absolute;
      --arc-button-z-index: var(${Q}-dismiss-z-index, 2);
      inset: var(${Q}-dismiss-inset, 0.5em 0.5em auto auto);
      margin: var(${Q}-dismiss-margin, 0);
    }
  `,BODY:d`
    [arc-popover-body] {
      flex: var(${Q}-body-flex, 1);
      display: var(${Q}-body-display, block);
      flex-direction: var(${Q}-body-flex-direction, unset);

      padding: var(${Q}-body-padding,
        var(${aa}•block•start, var(${aa}•block))
        var(${aa}•inline)
        var(${aa}•block•end, var(${aa}•block))
        var(${aa}•inline)
      );
    }
  `,FOOTER:d`
    [arc-popover-footer] {
      flex: var(${Q}-footer-flex, none);
      display: var(${Q}-footer-display, flex);
      flex-direction: var(${Q}-footer-flex-direction, row-reverse);
      justify-content: var(${Q}-footer-justify-content, space-between);
      align-items: var(${Q}-footer-align-items, center);
      gap: var(${Q}-footer-gap, var(${zc}•gap));

      padding: var(${Q}-footer-padding,
        var(${Ea}•block•start)
        var(${Ea}•inline)
        var(${Ea}•block•end)
        var(${Ea}•inline)
      );

      background: var(${Q}-footer-background, none);
      color: var(${Q}-footer-color, inherit);

      &[is-sticky] {
        position: sticky;
        z-index: var(${Q}-footer-z-index, 2);
        bottom: var(${Q}-footer-bottom, 0);
      }

      &:where([has-divider]) {
        border-top: var(${Q}-footer-border-top, var(${Ps}));
      }
    }
  `,TAIL:d`
    [arc-popover][has-tail]::before {
      content: '';
      box-sizing: content-box;
      position: absolute;
      display: var(${pa}•display, block);

      inset: auto;
      top: var(${_r}, auto);
      left: var(${Tr}, auto);

      translate: -50% -50%;
      rotate: 45deg;

      width: var(${tn});
      height: var(${tn});
      border-radius: 0.125em;

      background: color-mix(in srgb,
        var(${Ic}) var(${hr}),
        var(${Pc}) clamp(0%, 100% - var(${hr}), 100%)
      );

      border: var(${Sc}) solid color-mix(in srgb,
        var(${Rc}) var(${hr}),
        var(${jc}) clamp(0%, 100% - var(${hr}), 100%)
      );
    }
  `},pm=d`
  [arc-popover] {
    will-change: opacity;
    overflow: visible; /* For the tail – content overflow is set on '[arc-popover-content]' */

    /* @note – this line-height magic number fixes asymmetrical outline/border issues with certain placements
    on low DPI displays. It's based on the default (--arc-line-height-standard) of 1.4 */
    line-height: var(${Q}-line-height, 1.395);

    /* @note – this font-size is intended NOT to be altered; it is locked in as a reset (browser baseline)
    for various popover calculations. The effective popover font size is set on '[arc-popover-display]'. */
    font-size: initial;

    background: var(${Q}-background, var(${_c}));
    border: var(${Sc}) solid transparent;
    border-radius: var(${Is});
    box-shadow: var(${Q}-shadow, var(${Ee}•shadow));
    width: var(${Q}-width, auto);
    height: var(${Q}-height, auto);
    min-width: var(${Q}-min-width, auto);
    min-height: var(${Q}-min-height, auto);
    max-width: var(${Q}-max-width, 100vw);
    max-height: var(${Q}-max-height, 65vh);
  }

  /* @note – font-size control for header|footer|body padding calculations */
  [arc-popover-display] {
    display: contents;
    font-size: var(${Q}-font-size, var(${Rs}));
  }

  ${to.CONTENT}
  ${to.HEADER}
  ${to.BODY}
  ${to.FOOTER}
  ${to.TAIL}
  ${to.BACKDROP}
`,nn={SETUP:cm,ANCHORS:hm,VARIANTS:im,DENSITIES:sm,ELEMENT:pm},gm=d`
@layer arc-components {

  /* Shared defaults from _Internal/Components.css.js */
  ${Rf}

  [arc-popover] {
    ${nn.SETUP}
    ${nn.VARIANTS}
    ${nn.DENSITIES}
  }

  ${nn.ANCHORS}
  ${nn.ELEMENT}

  /* POPOVER anchoring mitigation ----------------------------------• */

  [arc-popover][is-floating] {
    position-area: none;
    position-try-fallbacks: none;
    margin: 0; /* zero out the gap on the Floating UI path to prevent doubled offsets */
  }

  /* POPOVER transition --------------------------------------------• */

  [arc-popover] {
    z-index: var(--arc-popover-z-index, 10000); /* default for floating-ui fallback */
    transition-timing-function: ease-out;
    transition-duration: var(--arc-popover-transition-duration, 240ms);
    transition-behavior: allow-discrete;
    transition-property: display, opacity;

    @supports (overlay: auto) {
      transition-property: display, overlay, opacity;
    }

    opacity: 0;
    &:popover-open { opacity: 1; }

    &::backdrop { transition: inherit; opacity: 0; }
    &:popover-open::backdrop { opacity: 1; }
  }

  @starting-style {
    [arc-popover]:popover-open { opacity: 0; }
    [arc-popover]:popover-open::backdrop { opacity: 0; }
  }
}

`,qu=(0,s.forwardRef)(({children:r,popover:e=De.popover,anchorAt:a=De.anchorAt,anchorName:t,anchorProps:o,alternateAnchorId:n,alternateAnchor:c,boundary:l=De.boundary,tryFallbacks:u=De.tryFallbacks,fallbackAnchors:h=De.fallbackAnchors,density:p=De.density,variant:v=De.variant,scheme:g=De.scheme,isInverse:f,hasTail:b,tailSize:$=De.tailSize,offset:x=De.offset,hidePopoverButton:A,headerSlot:y,showHeaderDivider:k,isHeaderSticky:w,showDismiss:E,dismissProps:_,showGoBack:I,goBackProps:C,headerSlotEnd:S,footerSlot:T,isFooterSticky:D,showFooterDivider:N,tag:H="div",contentTag:J="div",onToggle:R,...M},P)=>{const F=(0,s.useRef)(null),or=(0,s.useRef)(null),gr=(0,s.useRef)(null),L=(0,s.useRef)(R);(0,s.useImperativeHandle)(P,()=>or.current);const[X,sr]=(0,s.useState)(!1),mr=(0,s.useMemo)(()=>g==="auto"?void 0:f?"inverse":g,[f,g]),rr=(0,s.useCallback)(()=>{if(typeof document>"u")return F.current??null;const W=Sa(F.current??or.current)??document;return n?W.getElementById(n):typeof c=="string"?W.getElementById(c):c instanceof HTMLElement?c:typeof c=="function"?c():c&&typeof c=="object"&&"current"in c?c.current:F.current??null},[c,n]),ur=u||l==="flip",yr=ur?_u(h):[],lr=yr.length?yr.map(Tu).join(", "):"flip-block, flip-inline, flip-block flip-inline",wr=!!b&&!Eu.includes(a),V=Iu({canHaveTail:wr,tailSize:$}),K=(0,s.useMemo)(()=>{const W=t||n||(typeof c=="string"?c:void 0)||o?.id||M.id||void 0;return $s(String(W))},[t,o?.id,M.id,c,n]),er=(0,s.useMemo)(()=>({popoverTarget:M.id,"aria-haspopup":!0,"aria-controls":M.id,"aria-expanded":X}),[M.id,X]),O=(0,s.useMemo)(()=>({isOpen:X,"aria-label":"Dismiss",...er,..._}),[_,X,er]),cr=(0,s.useMemo)(()=>({ref:F,...er,...o,tooltip:X?void 0:o?.tooltip,anchorName:K||""}),[o,er,K,X]),br=(0,s.useMemo)(()=>({"--js\u2022anchor":cr?.anchorName||"","--js\u2022offset":Number(x)===0?"":`${x}px`,"--js\u2022tail":V.cssTailVar,"--js\u2022fallbacks":lr}),[cr?.anchorName,x,V.cssTailVar,lr]);ha(()=>{const W=rr();if(gr.current=W,!!W)return Ru(W,cr.anchorName)},[rr,cr.anchorName,X]),(0,s.useEffect)(()=>{L.current=R},[R]),(0,s.useEffect)(()=>{const W=or.current;if(!W)return;const Y=kr=>{const{newState:ir}=kr,dr=ir==="open";sr(dr),dr&&(gr.current=rr()),L.current?.(kr)};return W.addEventListener("toggle",Y),()=>W.removeEventListener("toggle",Y)},[rr]),of({anchorEl:gr.current,popoverEl:or.current,anchorAt:a,tryFallbacks:ur,fallbackAnchors:yr,offsetPx:Number(x)||0,tailSizePx:V.floatingTailPx,hasTail:wr,isOpen:X}),lf({anchorEl:gr.current,popoverEl:or.current,anchorAt:a,tryFallbacks:ur,fallbackAnchors:yr,hasTail:wr,isOpen:X});const $r=!!(y||I||S),U=!!T;return(0,i.jsxs)(i.Fragment,{children:[!((n||c)&&A)&&(0,i.jsx)(an,{...cr}),(0,i.jsxs)(H,{...M,ref:or,"arc-popover":"","arc-scheme":mr,"anchor-at":a,"is-floating":zu?"":void 0,"try-fallbacks":ur?"":void 0,popover:e,variant:v,density:p,"has-tail":wr?"":void 0,role:M.role??"dialog",style:{...M.style,...br},children:[(0,i.jsxs)(J,{"arc-popover-content":"",children:[$r&&(0,i.jsx)(em,{showDivider:k,showGoBack:I,goBackProps:C,headerSlotEnd:S,showDismiss:E,dismissProps:O,isSticky:w,children:y}),$r||U?(0,i.jsx)(am,{children:r}):(0,i.jsx)(J,{"arc-popover-display":"",children:r}),U&&(0,i.jsx)(tm,{showDivider:N,isSticky:D,children:T})]}),E&&!$r&&(0,i.jsx)(Wu,{...O})]})]})});qu.displayName="ArcPopover";const js=qu;js.handlePopover=Pu,js.Button=an;const ga=js;Cr("ArcPopover",gm);const oo=d`--arc•icon•text`,cn=d`${oo}•font•size`,Yu=d`${oo}•icon`,Ls=d`${oo}•text`,Zu=d`${oo}•subtext`,va=d`${oo}•fg`,Wa=d`${oo}•gap`,st=d`${Yu}•size`,Ju=d`${Yu}•vertical•align`,sn=d`${Ls}•overflow`,Lc=d`${Ls}•text•overflow`,Mc=d`${Ls}•white•space`,Dc=d`${Zu}•font•size`,Qu=d`${Zu}•fg`,vm=d`

  &[data-variant=inherit] { /* @default 'inherit' • uses font/color props from context */
    ${va}: currentcolor;
  }

  &[data-variant=primary] {
    ${va}: var(--arc-color-fg-primary);
  }

  &[data-variant=secondary] {
    ${va}: var(--arc-color-fg-secondary);
  }

  &[data-variant=inverse] {
    ${va}: var(--arc-color-dark-neutral-1000);
  }

  &[data-variant=brand] {
    ${va}: var(--arc-color-fg-brand-stark);
  }

  &[data-variant=info] {
    ${va}: var(--arc-color-fg-info-stark);
  }

  &[data-variant=success] {
    ${va}: var(--arc-color-fg-success-stark);
  }

  &[data-variant=warning] {
    ${va}: var(--arc-color-fg-warning-stark);
  }

  &[data-variant=critical] {
    ${va}: var(--arc-color-fg-critical-mid);
  }

`,fm=d`

  /* Overall Text Sizes */

  &[data-size=inherit] { /* @default 'inherit' • uses font/size from context */
    ${cn}: 1em;
    ${Dc}: 0.75em;
    ${st}: 1em;
    ${Wa}: 0.25em; /* 4px @ 100% */
  }

  &[data-size=md] {
    ${cn}: var(--arc-font-size-14);
    ${Dc}: var(--arc-font-size-12);
    ${Wa}: var(${j}•3);
  }

  &[data-size=sm] {
    ${cn}: var(--arc-font-size-12);
    ${Dc}: var(--arc-font-size-12);
    ${Wa}: var(${j}•3);
  }

  /* Gap Sizes */

  &[data-gap=lg] { ${Wa}: var(${j}•12); } /* 12px @ 100% */
  &[data-gap=md] { ${Wa}: var(${j}•8); }  /* 8px @ 100% */
  &[data-gap=sm] { ${Wa}: var(${j}•3); }  /* 4px @ 100% */

  /* Icon Sizes */

  &[icon-size=xl] { ${st}: var(${m}•24); }
  &[icon-size=lg] { ${st}: var(${m}•20); }
  &[icon-size=md] { ${st}: var(${m}•16); }
  &[icon-size=sm] { ${st}: var(${m}•14); }
  &[icon-size=xs] { ${st}: var(${m}•12); }
`,mm=d`

  /* 61.2% is the opacity equivalent of the secondary-text color token's gray value. */
  ${Qu}: var(--arc-icon-text-subtext-color, color-mix(in srgb, currentcolor 61.2%, transparent));

  /* ArcIcon */
  --arc-icon-color: var(--arc-icon-text-icon-color, var(${va}));
  --arc-icon-size: var(--arc-icon-text-icon-size, var(${st}));
  --arc-icon-fa-line-height: normal;
  --arc-icon-align-self: baseline;

  &[data-layout=inline] {
    ${sn}: unset;
    ${Lc}: unset;
    ${Mc}: unset;

    ${Ju}: calc((var(${st}) - var(${cn})) / -2);

    &:has(svg) { ${Ju}: text-bottom; }
  }

  /* Text Overflows */
  &[data-layout=gutter] {
    ${sn}: visible;
    ${Lc}: unset;
    ${Mc}: normal;

    &[data-overflow=truncate] {
      ${sn}: hidden;
      ${Lc}: ellipsis;
      ${Mc}: nowrap;
    }
  }

`,bm=d`
@layer arc-components {

  [arc-icon-text] {
    ${vm}
    ${fm}
    ${mm}
  }

  [arc-icon-text] {
    position: var(--arc-icon-text-position, relative);
    font-size: var(--arc-icon-text-font-size, var(${cn}));
    color: var(--arc-icon-text-text-color, var(${va}));
    line-height: var(--arc-icon-text-line-height, inherit);

    [data-element=icon] {
      display: contents;
    }

    [data-element] {
      /* @note: SVG alignment mitigation strategy; presents in multiple components
       * Badges, CheckboxBars, RadioBars, supporting IconText cases like Links, etc. when using SVG icons.
       */
      :where(svg) {
        flex: none;
        align-self: var(--arc-icon-text-svg-align-self, normal);
        display: var(--arc-icon-text-svg-display, inline-block) !important;
        width: var(--arc-icon-text-svg-width, 1.25em) !important;
        height: var(--arc-icon-text-svg-height, auto) !important;
        max-height: var(--arc-icon-text-svg-max-height, 1lh);
        fill: var(--arc-icon-text-svg-fill, currentColor);
        vertical-align: var(--arc-icon-text-svg-vertical-align, text-bottom) !important;
        overflow: var(--arc-icon-text-svg-overflow, visible) !important;
      }
    }

    [data-element=text],
    [data-element=subtext] {
      position: relative;
      hyphens: var(--arc-icon-text-hyphens, auto);
    }

    &[is-strong] [data-element=text] {
      font-weight: var(--arc-icon-text-font-weight, var(--arc-font-weight-bold));

      [data-element=subtext] {
        font-weight: var(--arc-icon-text-subtext-font-weight, var(--arc-font-weight-normal));
      }
    }

    /* @default • gutter layout */
    &[data-layout=gutter] {
      display: inline-flex;
      align-items: var(--arc-icon-text-align-items, first baseline);
      gap: var(--arc-icon-text-gap, var(${Wa}));

      /* Truncation Support */
      overflow: var(--arc-icon-text-overflow, var(${sn}));

      &[is-flipped] { flex-direction: row-reverse; }

      [data-element=text] {
        flex: 1;
        min-width: 0%;
      }

      [data-element=subtext] {
        display: var(--arc-icon-text-subtext-display, block);
        line-height: normal;
        font-size: var(--arc-icon-text-subtext-font-size, var(${Dc}));
        color: var(--arc-icon-text-subtext-color, var(${Qu}));
        padding-block-start: var(--arc-icon-text-subtext-spacing, 0);
      }

      :where([data-element=text], [data-element=subtext]) {
        overflow: var(--arc-icon-text-overflow, var(${sn}));
        text-overflow: var(--arc-icon-text-text-overflow, var(${Lc}));
        white-space: var(--arc-icon-text-white-space, var(${Mc}));
      }
    }

    &[data-layout=inline] {
      display: inline;

      [data-element=icon] + [data-element=text] { margin-inline-start: var(--arc-icon-text-gap, var(${Wa})); }
      [data-element=text]:has(+ [data-element=icon]) { margin-inline-end: var(--arc-icon-text-gap, var(${Wa})); }
      [data-element=subtext] { display: contents; }
    }
  }

  [arc-icon-text] {
    &[arc-icon-status=brand],
    &[arc-icon-status=announcement] {
      --arc-icon-color: var(--arc-color-fg-brand-mid);
    }

    &[arc-icon-status=info] {
      --arc-icon-color: var(--arc-color-fg-info-mid);
    }

    &[arc-icon-status=success] {
      --arc-icon-color: var(--arc-color-fg-success-mid);
    }

    &[arc-icon-status=warning] {
      --arc-icon-color: var(--arc-color-fg-warning-mid);
    }

    &[arc-icon-status=error],
    &[arc-icon-status=critical] {
      --arc-icon-color: var(--arc-color-fg-critical-mid);
    }

    &[arc-icon-status=processing] {
      --arc-icon-color: var(--arc-color-fg-brand-mid);
    }
  }
}

`,$m=vr(Xr,["inherit","primary","secondary","inverse","brand","info","success","warning","critical"]),le=({children:r,layout:e="gutter",size:a="inherit",variant:t="inherit",tag:o="span",icon:n,iconTooltip:c,text:l,subtext:u,gradient:h,overflow:p,iconSize:v,gapSize:g,isFlipped:f=!1,isStrong:b=!1,...$})=>{const x=r||l,A=!!n,y=!!x,k=e==="gutter",w=e==="inline",E=A&&(!f||k),_=A&&y&&f&&w,I=!!v&&v!=="inherit",C=I&&Fo.includes(v)?v:void 0,S=I&&!Fo.includes(v)?v:void 0,T=g!=="inherit"?g:void 0,D=p!=="inherit"?p:void 0,N=gs(n),H=typeof N=="string"?(0,i.jsx)(zr,{icon:N,size:S,gradient:h}):N,J=c?(0,i.jsx)(co,{text:c,children:H}):H;return(0,i.jsxs)(o,{...$,"arc-icon-text":"","data-variant":t,"data-layout":e,"data-overflow":D,"data-size":a,"data-gap":T,"icon-size":C,"is-flipped":f?"":void 0,"is-strong":b?"":void 0,children:[E&&(0,i.jsx)("span",{"data-element":"icon",children:J}),y&&(0,i.jsxs)("span",{"data-element":"text",children:[x,!!u&&(k?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("br",{}),(0,i.jsx)("small",{"data-element":"subtext",children:u})]}):(0,i.jsxs)(i.Fragment,{children:[" ",(0,i.jsx)("span",{"data-element":"subtext",children:u})]}))]}),_&&(0,i.jsx)("span",{"data-element":"icon",children:J})]})};Cr("ArcIconText",bm);const fa={...De,popover:vs[2],anchorAt:$c[2],boundary:ms[1],tryFallbacks:!0,scheme:fs[3],offset:4,isStrong:!0,hasTail:!0,isEnabled:!0},Oc=new WeakSet,ym=100,xm=100;let Ms=!0,Ds=null;const wm=typeof CSS<"u"&&typeof CSS.supports=="function"&&CSS.supports("selector(:focus-visible)"),km=r=>r instanceof Element?wm?r.matches(":focus-visible")===!0:Ms:!1,Os=new WeakMap,Ns=new WeakMap,ln=new Set,Nc=(r,e)=>{const a=r.get(e);a!=null&&(clearTimeout(a),r.delete(e))},rh=(r,e,a,t)=>{const o=window.setTimeout(()=>{t(),r.delete(e)},a);r.set(e,o)},eh="[aria-describedby]",Am=r=>typeof r=="object"&&r!==null&&r.hasAttribute?.("popover")===!0,ah=r=>r instanceof HTMLElement&&r.getAttribute("role")==="tooltip"&&Am(r),Cm=r=>!!r&&(r.tagName==="LABEL"||r.hasAttribute("arc-label")),Sm=r=>r?.match(/\S+/g)??[],Bs=(r,e)=>{const a=Sa(e??document.documentElement);if(!a)return null;const t=a.querySelector(`[aria-describedby~="${r}"]`);return t?t.closest("label,[arc-label]")??t:null},zm=r=>{if(!(r instanceof Element))return null;const e=r.closest?.(eh);if(e){const t=e.getAttribute("aria-describedby")??"";if(t)return{anchor:e.closest?.("label,[arc-label]")??e,tooltipId:t}}let a=r;for(;a;){if(Cm(a)){const t=a.querySelector?.(eh),o=t?.getAttribute?.("aria-describedby")??"";if(t&&o)return{anchor:a,tooltipId:o}}a=a.parentElement}return null},Em=r=>{if(!(r instanceof Element))return null;const e=r.closest?.('[role="tooltip"][popover]')??null;return e instanceof HTMLElement?e:null},_m=r=>r?.id?Bs(r.id,r):null,Tm=r=>{const e=Em(r),a=zm(r);if(!a&&e){const u=_m(e);return!u||!e.id?null:{anchor:u,tooltip:e}}if(!a)return null;const{anchor:t,tooltipId:o}=a;if(!o)return null;const n=Sa(r);if(!n)return null;const c=Sm(o),l=e??c.map(u=>n.getElementById(u)).find(u=>ah(u))??null;return ah(l)?{anchor:t,tooltip:l}:null},Im=(r,e,a)=>{const t=a instanceof Element?a:null;if(!t)return!1;const o=r===t||r.contains(t),n=e===t||e.contains(t);return o||n},th=r=>{r.isConnected&&(r.showPopover?.(),ln.add(r))},oh=r=>{r.isConnected&&(r.hidePopover?.(),ln.delete(r))},Pm=(r,e)=>{if(Nc(Ns,r),Nc(Os,r),!e){th(r);return}rh(Os,r,ym,()=>th(r))},Fs=(r,e)=>{if(Nc(Os,r),Nc(Ns,r),!e){oh(r);return}rh(Ns,r,xm,()=>oh(r))},Rm=()=>{ln.forEach(r=>{Fs(r,!1)})},dn=(r,e,a,t)=>{const o=Tm(e);if(!o)return;const{anchor:n,tooltip:c}=o;if(r){Pm(c,t);return}Im(n,c,a)||Fs(c,t)};let Bc=null,Fc=null,Hc=null,Vc=null,Uc=null,Gc=null,no=null,un=null;const nh=r=>{if(!r&&typeof document>"u")return;const e=r?Sa(r):document;if(!e||Oc.has(e))return;Gc=t=>{Ms=!1,Ds=t.target},no=()=>{Ds=null},Bc=t=>dn(!0,t.target,void 0,!0),Hc=t=>dn(!1,t.target,t.relatedTarget,!0),Fc=t=>{km(t.target)&&dn(!0,t.target,void 0,!1)},Vc=t=>{const o=t.relatedTarget??Ds;dn(!1,t.target,o,!1)},Uc=t=>{t.key==="Tab"&&(Ms=!0),t.key==="Escape"&&(ln.size>0&&t.preventDefault(),dn(!1,t.target,void 0,!1),ln.forEach(o=>Fs(o,!1)))},un=t=>{if(t.newState!=="open")return;const{target:o}=t;if(o instanceof HTMLElement&&o.getAttribute("role")!=="tooltip"&&o.getAttribute("popover")!=="manual"){try{if(!o.matches("[popover]:popover-open"))return}catch{return}Rm()}},[["pointerdown",Gc],["pointerup",no],["pointercancel",no],["pointerover",Bc],["focusin",Fc],["pointerout",Hc],["focusout",Vc],["keydown",Uc]].forEach(([t,o])=>{e.addEventListener(t,o)}),e.addEventListener("toggle",un,!0),Oc.add(e)},jm=()=>{if(!Oc.has(document)||typeof document>"u")return;[["pointerdown",Gc],["pointerup",no],["pointercancel",no],["pointerover",Bc],["focusin",Fc],["pointerout",Hc],["focusout",Vc],["keydown",Uc]].forEach(([e,a])=>{a&&document.removeEventListener(e,a)}),un&&document.removeEventListener("toggle",un,!0),Bc=null,Fc=null,Hc=null,Vc=null,Uc=null,Gc=null,no=null,un=null,Oc.delete(document)},ma=d`--arc•tooltip`,ch=d`${ma}•subtext`,ih=d`${ma}•slot`,Lm=d`
@layer arc-components {
  [arc-tooltip] {
    ${ma}•width: max-content;
    ${ma}•max•width: 20em;
    ${ma}•font•size: var(${m}•12);
    ${ma}•padding: var(${j}•10);
    ${ch}•spacing: var(${j}•6);
    ${ih}•margin•top: var(${j}•8);

    /* Communicates to Popover Engine ------------------------------• */
    --arc-popover-overflow: var(--arc-tooltip-overflow, clip);
    --arc-popover-border-radius: var(--arc-border-radius-md);
    --arc-popover-min-width: var(--arc-tooltip-min-width, auto); /** Ensure tooltip width is driven by content, not anchor width */
    --arc-popover-width: var(--arc-tooltip-width, var(${ma}•width));
    --arc-popover-max-width: var(--arc-tooltip-max-width, var(${ma}•max•width));
    --arc-popover-border: var(--arc-tooltip-border, 0);
    --arc-popover-footer-flex-direction: var(--arc-tooltip-footer-flex-direction, row);
    --arc-popover-font-size: var(--arc-tooltip-font-size, var(${ma}•font•size));
    --arc-popover-padding: var(--arc-tooltip-padding, var(${ma}•padding));
    --arc-popover-tail-x: var(--arc-tooltip-tail-x, 1.125em);
    --arc-popover-tail-y: var(--arc-tooltip-tail-y, 1.125em);
    --arc-popover-line-height: var(--arc-line-height-tight);

    /* Communicates to IconText ----------------------------------• */
    --arc-icon-text-subtext-font-size: var(--arc-tooltip-subtext-font-size, var(${ma}•font•size));
    --arc-icon-text-hyphens: none;
    --arc-icon-text-subtext-spacing: var(--arc-tooltip-subtext-spacing, var(${ch}•spacing));

    [arc-tooltip-content] {
      text-align: var(--arc-tooltip-text-align, unset);
    }

    [arc-tooltip-content] + [arc-tooltip-slot-content] {
      margin-top: var(--arc-tooltip-slot-margin-top, var(${ih}•margin•top));
    }
  }
}
`,co=(0,s.forwardRef)(({id:r,children:e,slot:a,isEnabled:t=fa.isEnabled,popover:o=fa.popover,variant:n=fa.variant,anchorAt:c=fa.anchorAt,alternateAnchor:l,boundary:u=fa.boundary,tryFallbacks:h=fa.tryFallbacks,hasTail:p=fa.hasTail,offset:v=fa.offset,scheme:g=fa.scheme,isStrong:f=fa.isStrong,text:b,subtext:$,icon:x,isFlipped:A,...y},k)=>{const w=Nr(r,"arc-tooltip"),E=(0,s.useRef)(null);(0,s.useImperativeHandle)(k,()=>E.current);const _=N=>typeof N=="object"&&N!==null&&"tabIndex"in N,I=e,C=!!l;let S=null;(0,s.isValidElement)(I)?S=t?(0,s.cloneElement)(I,{"aria-describedby":w,..._(I.props)&&I.props.tabIndex!=null?{}:{tabIndex:0}}):I:!C&&typeof console<"u"&&Au("\u{1F6A8} ArcTooltip \u2022 expects a single ReactElement child as the trigger.");const T=(0,s.useMemo)(()=>()=>Bs(w,E.current),[w]),D=g==="auto"?void 0:g;return(0,s.useEffect)(()=>{if(t)try{nh(E.current)}catch{}},[t]),(0,i.jsxs)(i.Fragment,{children:[S,t&&(0,i.jsxs)(ga,{...y,"arc-tooltip":"",scheme:y?.isInverse?"inverse":D,role:"tooltip",id:w,ref:E,popover:o,anchorAt:c,tryFallbacks:h??u==="flip",variant:n,hasTail:p,offset:v,hidePopoverButton:!0,alternateAnchor:l??T,tag:y?.tag??"span",contentTag:y?.contentTag??"span",children:[b&&(0,i.jsx)(le,{"arc-tooltip-content":"",text:b,subtext:$,icon:x,isFlipped:A,isStrong:f,size:"inherit",variant:"inherit"}),a&&(0,i.jsx)("span",{"arc-tooltip-slot-content":"",children:a})]})]})});Cr("ArcTooltip",Lm);const Mm="Anonymous",sh=(r={})=>r.isAnonymous||!(r.name||r.email||r.src),Hs=(r={})=>sh(r)?r.anonymousName||Mm:r.name||r.email,Dm=r=>r?.trim().charAt(0)??void 0,Om=(r,e)=>{let a=0;const t=Math.min(r.length,50);for(let o=0;o<t;o+=1)a=(a+r.charCodeAt(o))%(e??33);return a},Nm=(r,e,a)=>e?.length?r?.trim()===""?a||e[0]:e[Om(r,e.length)]||a||e[0]:a,lh=vr(Va,["blue","orange","mint","red","yellow","green","maroon","purple"]),Bm=vr(Va,["neutral","white","black"]),hn=vr(ve,["lg","md","sm","xs"]),Fm=[...hn,"profile-sm","profile-md","profile-lg"],Ur=d`--arc•avatar`,me=d`${Ur}•chars`,Vs=d`

  &[data-size=lg] {
    ${Ur}•font•size: var(${m}•16);
    ${Ur}•size: 2.5em; /* target: 40px @ 100% */
    ${me}•1: var(${m}•16);
    ${me}•2: var(${m}•14);
    ${me}•3: var(${m}•12);
  }

  &:is([data-size=md], [data-size=inherit], :not([data-size])) { /* @default size */
    ${Ur}•font•size: var(${m}•14);
    ${Ur}•size: 2.2857142857em; /* target: 32px @ 100% (32 / 14 * 1em) */
    ${me}•1: var(${m}•14);
    ${me}•2: var(${m}•12);
    ${me}•3: var(${m}•10);
  }

  &[data-size=sm] {
    ${Ur}•font•size: var(${m}•12);
    ${Ur}•size: 2em; /* target: 24px @ 100% */
    ${me}•1: var(${m}•12);
    ${me}•2: var(${m}•10);
    ${me}•3: var(${m}•8);
  }

  &[data-size=xs] {
    ${Ur}•font•size: var(${m}•10);
    ${Ur}•size: 2em; /* target: 20px @ 100% */
    ${me}•1: var(${m}•10);
    ${me}•2: var(${m}•8);
    ${me}•3: var(${m}•6);
  }

`,Hm=d`

  &[data-size=profile-lg] {
    ${Ur}•font•size: var(${m}•40);
    ${Ur}•size: 4em;
  }

  &[data-size=profile-md] {
    ${Ur}•font•size: var(${m}•32);
    ${Ur}•size: 3em;
  }

  &[data-size=profile-sm] {
    ${Ur}•font•size: var(${m}•28);
    ${Ur}•size: 2.2857142857em; /* target: 64px @ 100% (64 / 28 * 1em) */
  }

`,dh=d`

  [arc-avatar] {
    ${Ur}•font•size: inherit;
    ${Ur}•size: inherit;
    ${me}•1: inherit;
    ${me}•2: inherit;
    ${me}•3: inherit;
  }

`,lt=d`${Ur}•fg`,Oe=d`${Ur}•bg`,Vm=d`
@layer arc-components {

  [arc-avatar] {
    /* Colors --------------------------------------------------------• */
    ${lt}: var(--arc-avatar-color, var(--arc-color-mono-white));

    &:has([data-color=blue]) { /* @default color */
      ${Oe}: var(--arc-color-light-blue-400);
    }
    &:has([data-color=purple]) {
      ${Oe}: var(--arc-color-light-purple-400);
    }
    &:has([data-color=red]) {
      ${Oe}: var(--arc-color-light-red-400);
    }
    &:has([data-color=yellow]) {
      ${Oe}: var(--arc-color-light-yellow-400);
    }
    &:has([data-color=green]) {
      ${Oe}: var(--arc-color-light-green-400);
    }
    &:has([data-color=maroon]) {
      ${Oe}: var(--arc-color-light-maroon-400);
    }
    &:has([data-color=orange]) {
      ${Oe}: var(--arc-color-light-orange-400);
    }
    &:has([data-color=mint]) {
      ${Oe}: var(--arc-color-light-mint-400);
    }

    /* RESERVED COLORS -----------------------------------------------• */
    &:has([data-color=black]) {
      ${lt}: light-dark(var(--arc-color-mono-white), var(--arc-color-mono-black));
      ${Oe}: light-dark(var(--arc-color-mono-black), var(--arc-color-mono-white));
    }

    /* @default anonymous */
    &:has([data-color=neutral]) {
      ${lt}: var(--arc-color-fg-secondary);
      ${Oe}: var(--arc-color-alpha-subtle);
    }

    /* anonymous on-media */
    &[is-on-media]:has([data-color=neutral]) {
      ${lt}: var(--arc-color-fg-on-stark);
      ${Oe}: var(--arc-color-alpha-stark);
    }

    &:has([data-color=white]) {
      ${lt}: var(--arc-color-mono-black);
      ${Oe}: var(--arc-color-mono-white);
    }

    /* SIZES ---------------------------------------------------------• */
    ${Vs}
    ${Hm}
  }

  /* CORE AVATAR STYLES ----------------------------------------------• */
  [arc-avatar]:not([hidden]) {
    font-size: var(--arc-avatar-font-size, var(${Ur}•font•size));

    flex: none;
    align-self: center;

    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--arc-avatar-size, var(${Ur}•size));
    aspect-ratio: 1 / 1;
    line-height: normal;

    text-align: center;
    position: relative;
    overflow: hidden;
    border-radius: var(--arc-border-radius-circle);

    opacity: var(--arc-alpha-100);
    transition: opacity 200ms ease-out;

    &[data-is-inactive] {
      opacity: var(--arc-alpha-50);
    }

    &[is-on-media] {
      box-shadow: var(--arc-avatar-box-shadow, 0 0 0 var(${m}•2) var(--arc-color-mono-white));
    }

    [data-num-length] {
      --arc-button-font-size: var(${me}•1);
    }

    [data-num-length='2'] {
      --arc-button-font-size: var(${me}•2);
    }

    [data-num-length='3'] {
      --arc-button-font-size: var(${me}•3);
    }


    /* INNER ELEMENTS ------------------------------------------------• */

    [data-element=counter] {
      ${Ur}•pointer•events: all;

      /* Inter-Component Communication • ArcButton --------------------• */
      --arc-button-width: 100%;
      --arc-button-height: auto;
      --arc-button-aspect-ratio: 1 /1;
      --arc-button-padding: 0;
      --arc-button-background: var(--arc-avatar-background, var(${Oe}));
      --arc-button-color: var(--arc-avatar-color, var(${lt}));

      &:disabled {
        --arc-button-cursor: default;
      }
    }

    [data-element=image] {
      object-fit: cover;

      /* Hides problematic image */
      &:is([data-not-loaded], [data-has-error]) {
        ${Ur}•visibility: hidden;
      }

      /* Hides subsequent elements with valid image */
      &:not([data-has-error]) ~ [data-element] {
        ${lt}: transparent;
        ${Oe}: none;
      }
    }

    :is(
      [data-element=counter],
      [data-element=initial],
      [data-element=anonymous]
    ) {
      background: var(${Oe});
      color: var(${lt});
    }

    :is([data-element=initial]) {
      font-size: var(--arc-avatar-initial-font-size, inherit);
      text-transform: var(--arc-avatar-text-transform, capitalize);
    }

    [data-element] {
      flex: none;
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;

      width: 100%;
      height: 100%;

      border-radius: inherit;
      font-weight: var(--arc-font-weight-600);
      visibility: var(${Ur}•visibility, unset);

      transition-duration: 200ms;
      transition-behavior: allow-discrete;
      transition-timing-function: linear;
      transition-property:
        visibility,
        background-color,
        color;

      pointer-events: var(${Ur}•pointer•events, none);
      user-select: none;
      -webkit-user-select: none;
    }
  }

}
`,uh="blue",hh="neutral",Um="fa-solid fa-user arc-aw",Gm=({children:r,icon:e,color:a,...t})=>(0,i.jsx)("span",{...t,"data-element":"anonymous","data-color":"neutral",children:r||(0,i.jsx)(zr,{icon:e})}),Km=({isLoaded:r,hasError:e,onLoad:a,onError:t,...o})=>{const n=!r&&""||void 0,c=e&&""||void 0,l=!r||e||void 0;return(0,i.jsx)("img",{...o,hidden:l,"data-element":"image","data-not-loaded":n,"data-has-error":c,onLoad:a,onError:t})},Wm=({children:r,initial:e,color:a,...t})=>(0,i.jsx)("span",{...t,"data-element":"initial","data-color":a,children:r||e}),Kc=(0,s.forwardRef)(({children:r,size:e,color:a,isActive:t=!0,isAnonymous:o,anonymousName:n,alt:c,src:l,name:u,email:h,isOnMedia:p,showTooltip:v,tooltipProps:g,title:f,...b},$)=>{const[x,A]=(0,s.useState)(!1),[y,k]=(0,s.useState)(!1),w=F=>{A(!0),k(!1),b.onLoad?.(F)},E=F=>{A(!1),k(!0),b.onError?.(F)},_=Dm(u||h),I=!!_,C=o||(!x||y)&&!I,S=!C&&!!l&&!y||void 0,T=(C&&hh||void 0)??(a||void 0)??Nm(String(h||u||void 0),lh,uh)??uh,D={src:l,alt:c,isLoaded:x,hasError:y,onLoad:w,onError:E};(0,s.useEffect)(()=>{C&&A(!1)},[C]);const{text:N,isEnabled:H,...J}=g??{},R=N??Hs({isAnonymous:o,anonymousName:n,name:u,email:h,src:l})??c,M=(H??v)&&!!R,P=(0,i.jsx)("span",{...b,ref:$,"arc-avatar":"","data-is-inactive":!t||void 0,"data-size":e,"aria-label":(f??u??h)||void 0,title:M?void 0:f,"is-on-media":p?"":void 0,children:r||(C?(0,i.jsx)(Gm,{icon:Um,color:hh}):(0,i.jsxs)(i.Fragment,{children:[S&&(0,i.jsx)(Km,{...D}),I&&(0,i.jsx)(Wm,{initial:_,color:T})]}))});return M?(0,i.jsx)(co,{...J,text:R,children:P}):P});Cr("ArcAvatar",Vm);const Xm=d`
@layer arc-components {

  [arc-avatar-overflow] {
    /* Inter-Component Communication • ArcPopover ------------------• */
    --arc-popover-font-size: var(--arc-font-size-body-md);
    --arc-popover-translate: -100% 0.5em;
    --arc-popover-width: max-content;
    --arc-popover-max-width: 18em;
    --arc-popover-padding: 0;

    /* For Neutral/Anonymous avatars -------------------------------• */
    [data-element=list] {
      margin: 0;
      padding: var(${m}•4) var(${m}•0);
    }

    [data-element=list-item] {
      display: flex;
      align-items: center;
      gap: var(${m}•6);
      padding: var(${m}•4) var(${m}•8);
    }

    ${Vs}
    ${dh}
  }

}
`,qm=hn,Ym=r=>(0,i.jsx)("ul",{...r,"data-element":"list"}),Zm=r=>(0,i.jsx)("li",{...r,"data-element":"list-item"}),Jm=({count:r,anchorId:e,overflowId:a,shouldShowOverflow:t,...o})=>(0,i.jsx)(Kc,{title:`+${r}`,children:(0,i.jsx)(ga.Button,{...o,id:e,popoverTarget:a,text:`+${r}`,variant:"common",hierarchy:"primary",disabled:!t,"data-element":"counter","data-color":"black","data-num-length":r?.toString().length})}),Qm=({children:r,id:e,size:a="sm",overflowCount:t=0,shouldShowOverflow:o=!1,anchorAt:n="bottom-end",tryFallbacks:c=!0,...l})=>{const u=Math.min(t,999),h=Nr(e,"arc-avatar-overflow"),p=(0,s.useMemo)(()=>`${h}-anchor`,[h]),v=(0,s.useMemo)(()=>s.Children.toArray(r),[r]);return(0,i.jsxs)(i.Fragment,{children:[u>0&&(0,i.jsx)(Jm,{count:u,anchorId:p,overflowId:h,shouldShowOverflow:o}),o&&u>0&&(0,i.jsx)(ga,{...l,scheme:"inverse","arc-avatar-overflow":"",id:h,anchorAt:n,tryFallbacks:c,alternateAnchorId:p,hidePopoverButton:!0,variant:"common","data-size":a,children:(0,i.jsx)(Ym,{children:v.map((g,f)=>(0,i.jsx)(Zm,{children:g},f))})})]})};Cr("ArcAvatarOverflow",Xm);const rb=d`
@layer arc-components {

  [arc-avatar-pile] {
    --arc-button-inline-spacing: 0;

    position: relative;
    display: inline-flex;
    align-items: center;
    gap: 0;

    ${Vs}
    ${dh}

    /* Cutout (mask) a portion of subsequent avatars ---------------• */
    [arc-avatar]+[arc-avatar] {
      margin-left: -0.125em;

      /* magic! */
      mask: radial-gradient(
        50% 50% at -43% 50%,
        transparent 110%,
        black 110%
      ) padding-box;
    }

  }

}
`,eb=hn,ab=({size:r="md",...e})=>(0,i.jsx)("div",{...e,"arc-avatar-pile":"","data-size":r});Cr("ArcAvatarPile",rb);const je=d`${Ur}•text`,Ct=d`${Ur}•subtext`,io=d`${Ur}•gap`,tb=d`
@layer arc-components {

  [arc-avatar-text] {
    ${je}•font•size: var(${m}•14);
    ${Ct}•font•size: var(${m}•12);
    ${io}: var(${m}•8);

    ${je}•overflow: unset;
    ${je}•text•overflow: unset;
    ${je}•white•space: unset;

    &[data-overflow=truncate] {
      ${je}•overflow: hidden;
      ${je}•text•overflow: ellipsis;
      ${je}•white•space: nowrap;
    }

    &:has([data-size=inherit]) {
      ${je}•font•size: 1em;
      ${Ct}•font•size: 0.875em;
      ${io}: 0.5em;
    }

    &:has([data-size=lg]) {
      ${je}•font•size: var(--arc-font-size-14);
      ${Ct}•font•size: var(--arc-font-size-12);
    }

    &:has([data-size=md]) { /* @default size */
      ${je}•font•size: var(--arc-font-size-14);
      ${Ct}•font•size: var(--arc-font-size-12);
    }

    &:has([data-size=sm]) {
      ${je}•font•size: var(--arc-font-size-14);
      ${Ct}•font•size: var(--arc-font-size-12);
    }

    &:has([data-size=xs]) {
      ${je}•font•size: var(--arc-font-size-12);
      ${Ct}•font•size: var(--arc-font-size-12);
      ${io}: var(--arc-space-0-75);
    }

    &[data-gap=lg] { ${io}: var(${m}•12); }
    &[data-gap=sm] { ${io}: var(${m}•4); }
  }

  [arc-avatar-text] {
    font-size: var(--arc-avatar-text-font-size, var(${je}•font•size));
    display: inline-flex;
    align-items: center;
    gap: var(--arc-avatar-text-gap, var(${io}));
    line-height: normal;
    min-width: 0%; /* @note: allows truncation/ellipsis for [data-element=text] */

    &[is-strong] [data-element=text] {
      font-weight: var(--arc-avatar-text-font-weight, var(--arc-font-weight-bold));

      [data-element=subtext] {
        font-weight: var(--arc-avatar-text-subtext-font-weight, var(--arc-font-weight-normal));
      }
    }

    [data-element=text] {
      flex: 1;
      text-align: start;
    }

    [data-element=subtext] {
      display: var(--arc-avatar-subtext-display, block);
      font-size: var(--arc-avatar-subtext-font-size, var(${Ct}•font•size));

      /* 61.2% is the opacity equivalent of the secondary-text color token's gray value. */
      color: var(--arc-avatar-subtext-color, color-mix(in srgb, currentcolor 61.2%, transparent));
    }

    :where([data-element=text], [data-element=subtext]) {
      overflow: var(${je}•overflow);
      text-overflow: var(${je}•text•overflow);
      white-space: var(${je}•white•space);
    }
  }

}
`,ob=dc,nb=Mr,cb=hn,Wc=({children:r,avatar:e={},subtext:a,size:t,gapSize:o,overflow:n,isStrong:c,...l})=>{const u=sh(e),h=r||Hs(e),p=o!=="inherit"?o:void 0,v=n!=="inherit"?n:void 0;return(0,i.jsxs)("span",{...l,"arc-avatar-text":"","data-gap":p,"data-overflow":v,"is-strong":c?"":void 0,children:[(0,i.jsx)(Kc,{...e,isAnonymous:u,size:t}),(0,i.jsxs)("span",{"data-element":"text",children:[h,a&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("br",{}),(0,i.jsx)("small",{"data-element":"subtext",children:a})]})]})]})};Cr("ArcAvatarText",tb);const ph=({fg:r,bg:e})=>d`
  &:has(>[data-color=mono-inverse]) {
    ${r}•high: var(--arc-color-fg-on-mono-inverse);
    ${e}•high: var(--arc-color-bg-mono-inverse);
    ${r}•low: var(--arc-color-fg-on-subtle);
    ${e}•low: var(--arc-color-bg-neutral-subtle);
  }

  &:has(>[data-color=brand]) {
    ${r}•high: var(--arc-color-fg-on-stark);
    ${e}•high: var(--arc-color-bg-brand-stark);
    ${r}•low: var(--arc-color-fg-brand-stark);
    ${e}•low: var(--arc-color-bg-brand-subtle);
  }

  &:has(>[data-color=mono]) {
    ${r}•high: var(--arc-color-fg-on-mono);
    ${e}•high: var(--arc-color-bg-mono);
    ${r}•low: var(--arc-color-fg-on-mono);
    ${e}•low: var(--arc-color-bg-mono);
  }

  &:has(>[data-color=blue]) {
    ${r}•high: var(--arc-color-fg-on-stark);
    ${e}•high: var(--arc-color-bg-blue-stark);
    ${r}•low: var(--arc-color-fg-blue-stark);
    ${e}•low: var(--arc-color-bg-blue-subtle);
  }

  &:has(>[data-color=neutral]) {
    ${r}•high: var(--arc-color-fg-on-heavy);
    ${e}•high: var(--arc-color-bg-neutral-heavy);
    ${r}•low: var(--arc-color-fg-neutral-stark);
    ${e}•low: var(--arc-color-bg-neutral-subtle);
  }

  &:has(>[data-color=purple]) {
    ${r}•high: var(--arc-color-fg-on-stark);
    ${e}•high: var(--arc-color-bg-purple-stark);
    ${r}•low: var(--arc-color-fg-purple-stark);
    ${e}•low: var(--arc-color-bg-purple-subtle);
  }

  &:has(>[data-color=green]) {
    ${r}•high: var(--arc-color-fg-on-stark);
    ${e}•high: var(--arc-color-bg-green-stark);
    ${r}•low: var(--arc-color-fg-green-stark);
    ${e}•low: var(--arc-color-bg-green-subtle);
  }

  &:has(>[data-color=yellow]) {
    ${r}•high: var(--arc-color-fg-on-stark);
    ${e}•high: var(--arc-color-bg-yellow-stark);
    ${r}•low: var(--arc-color-fg-yellow-stark);
    ${e}•low: var(--arc-color-bg-yellow-subtle);
  }

  &:has(>[data-color=red]) {
    ${r}•high: var(--arc-color-fg-on-stark);
    ${e}•high: var(--arc-color-bg-red-stark);
    ${r}•low: var(--arc-color-fg-red-stark);
    ${e}•low: var(--arc-color-bg-red-subtle);
  }

  &:has(>[data-color=maroon]) {
    ${r}•high: var(--arc-color-fg-on-stark);
    ${e}•high: var(--arc-color-bg-maroon-stark);
    ${r}•low: var(--arc-color-fg-maroon-stark);
    ${e}•low: var(--arc-color-bg-maroon-subtle);
  }

  &:has(>[data-color=mint]) {
    ${r}•high: var(--arc-color-fg-on-stark);
    ${e}•high: var(--arc-color-bg-mint-stark);
    ${r}•low: var(--arc-color-fg-mint-stark);
    ${e}•low: var(--arc-color-bg-mint-subtle);
  }

  &:has(>[data-color=orange]) {
    ${r}•high: var(--arc-color-fg-on-stark);
    ${e}•high: var(--arc-color-bg-orange-stark);
    ${r}•low: var(--arc-color-fg-orange-stark);
    ${e}•low: var(--arc-color-bg-orange-subtle);
  }

  &:has(>[data-color=ai]) {
    ${r}•high: var(--arc-color-fg-on-heavy);
    ${e}•high: var(--arc-gradient-ai-300);
    ${r}•low: var(--arc-color-fg-on-subtle);
    ${e}•low: var(--arc-gradient-ai-100);
  }

  &:has(>[data-color=overlay-light]) {
    ${r}•high: var(--arc-color-mono-black);
    ${e}•high: var(--arc-color-alpha-white-80);
    ${r}•low: var(--arc-color-alpha-heavy);
    ${e}•low: var(--arc-color-alpha-white-20);
  }

  &:has(>[data-color=overlay-dark]) {
    ${r}•high: var(--arc-color-mono-white);
    ${e}•high: var(--arc-color-alpha-black-70);
    ${r}•low: var(--arc-color-mono-white);
    ${e}•low: var(--arc-color-alpha-black-40);
  }
`,gh=({fg:r,bg:e})=>d`
  &:has(>[data-contrast=high]) {
    ${r}: var(${r}•high);
    ${e}: var(${e}•high);
  }

  &:has(>[data-contrast=low]) {
    ${r}: var(${r}•low);
    ${e}: var(${e}•low);
  }
`,Ar=d`--arc•badge`,Us=d`${Ar}•fg`,Gs=d`${Ar}•bg`,ib=ph({fg:Us,bg:Gs}),sb=gh({fg:Us,bg:Gs}),lb=d`
  &:has(>[data-size=lg]) {
    ${Ar}•font•size: var(${m}•14);
    ${Ar}•font•size•caps: var(${m}•12);
    ${Ar}•size: var(${m}•24);
    ${Ar}•min•size: var(${m}•30);
    ${Ar}•padding•inline: var(${m}•8);
    ${Ar}•gap: var(${m}•4);
  }

  &:has(>[data-size=md]) {
    ${Ar}•font•size: var(${m}•12);
    ${Ar}•font•size•caps: var(${m}•10);
    ${Ar}•size: var(${m}•20);
    ${Ar}•min•size: var(${m}•24);
    ${Ar}•padding•inline: var(${m}•6);
    ${Ar}•gap: var(${m}•4);
  }

  &:has(>[data-size=sm]) {
    ${Ar}•font•size: var(${m}•10);
    ${Ar}•font•size•caps: var(${m}•8);
    ${Ar}•size: var(${m}•16);
    ${Ar}•min•size: var(${m}•18);
    ${Ar}•padding•inline: var(${m}•6);
    ${Ar}•gap: var(${m}•4);
  }

  /** @default • relative equivalent of 'md' at 100% • (16 x 75% = 12) */
  &:has(>[data-size=inherit]) {
    ${Ar}•font•size: 1em;
    ${Ar}•font•size•text: 0.75em;
    ${Ar}•font•size•caps: 0.625em;
    ${Ar}•size: 1.25em;
    ${Ar}•min•size: 1.5em;
    ${Ar}•padding•inline: 0.5em;
    ${Ar}•gap: 0.25em;
  }
`,db=d`
  &:has(>[data-layout=fill]) {
    ${Ar}•flex: auto; /* same as 1 (1 1 auto) but with clearer intent */
    ${Ar}•display: flex;
    ${Ar}•min•width: var(${Ar}•min•size);

    /* Inter-Component Communication • ArcIconText -------------------• */
    --arc-icon-text-overflow: hidden;
    --arc-icon-text-white-space: nowrap;
    --arc-icon-text-text-overflow: ellipsis;
  }

  &:has(>[data-layout=hug]) {
    ${Ar}•flex: none; /* same as 0 0 auto but with clearer intent */
    ${Ar}•display: inline-flex;
    ${Ar}•min•width: min-content;
  }
`,ub=d`
@layer arc-components {

  [arc-badge-wrapper] {
    ${ib}
    ${sb}
    ${lb}
    ${db}

    /* Inter-Component Communication • ArcIconText -------------------• */
    --arc-icon-height: 1lh;
    --arc-icon-text-align-items: center;
    --arc-icon-text-gap: var(${Ar}•gap);
    --arc-icon-text-svg-width: var(--arc-badge-svg-width, 1em);
  }

  /* CORE ------------------------------------------------------------• */

  [arc-badge-wrapper]:not([hidden]) {
    flex: var(--arc-badge-flex, var(${Ar}•flex, unset));
    align-self: var(--arc-badge-align-self, flex-start);
    display: var(${Ar}•display, inline-flex);
    align-items: center;
    justify-content: center;
    height: 1lh;
    max-height: 1lh;
    vertical-align: bottom;

    &:has(>[data-is-flexible]) {
      min-width: var(--arc-badge-min-width, var(${Ar}•min•width));
    }
  }

  [arc-badge] {
    font-size: var(--arc-badge-font-size, var(${Ar}•font•size));
    font-weight: var(--arc-font-weight-600);

    flex: var(${Ar}•flex);
    display: var(${Ar}•display, inline-flex);
    align-items: center;
    justify-content: center;
    height: var(${Ar}•size);
    padding-inline: var(${Ar}•padding•inline);

    overflow: hidden;
    white-space: nowrap;
    line-height: normal;

    color: var(--arc-badge-color, var(${Us}));
    background: var(--arc-badge-background, var(${Gs}));
    border-radius: var(--arc-border-radius-pill);
    mix-blend-mode: var(--arc-badge-mix-blend-mode, unset);

    :is([data-element=icon], [data-element=text]) {
      font-size: var(${Ar}•font•size•text, 1em);
    }

    &[data-is-uppercase] [data-element=text] {
      text-transform: uppercase;
      font-size: var(${Ar}•font•size•caps);
    }
  }

}
`,vh=["brand","blue","neutral","purple","green","yellow","red","orange","mint","maroon","mono","mono-inverse","ai","overlay-light","overlay-dark"],hb=["brand",...vh.filter(r=>r!=="brand")],pb=["neutral",...vh.filter(r=>r!=="neutral")],gb=Vr(Va,hb),vb=Vr(Va,pb),fb=Vr(ve,["inherit","lg","md","sm"]),mb=Vr(sa,["hug","fill"]),bb=["low","high"],$b=Vr(Xr,["brand-blue","brand-black","neutral","info","success","warning","critical","ai","overlay-light","overlay-dark"]),yb={"brand-blue":"brand","brand-black":"mono-inverse",neutral:"neutral",info:"purple",success:"green",warning:"yellow",critical:"red",ai:"ai","overlay-light":"overlay-light","overlay-dark":"overlay-dark"},xb=({children:r,icon:e,text:a,isFlipped:t,isFlexible:o,isUppercase:n,color:c,variant:l,size:u="inherit",layout:h="hug",contrast:p="high",...v})=>{const g=c??yb[l??"brand-blue"],f=r||(0,i.jsx)(le,{icon:e,text:a,isFlipped:t,layout:"gutter"}),b=h==="fill"&&o;return(0,i.jsx)("span",{...v,"arc-badge-wrapper":"",children:(0,i.jsx)("span",{"arc-badge":"","data-contrast":p,"data-color":g,"data-layout":h,"data-size":u,"data-is-flexible":b?"":void 0,"data-is-uppercase":n?"":void 0,children:f})})};Cr("ArcBadge",ub);const de=d`--arc•badge•count`,Ks=d`${de}•fg`,Ws=d`${de}•bg`,wb=ph({fg:Ks,bg:Ws}),kb=gh({fg:Ks,bg:Ws}),Ab=d`
  &:has(>[data-size=lg]) {
    ${de}•font•size: var(${m}•14);
    ${de}•size: var(${m}•24);
    ${de}•padding•inline: var(${m}•6);
  }

  &:has(>[data-size=md]) {
    ${de}•font•size: var(${m}•12);
    ${de}•size: var(${m}•20);
    ${de}•padding•inline: var(${m}•6);
  }

  &:has(>[data-size=sm]) {
    ${de}•font•size: var(${m}•10);
    ${de}•size: var(${m}•16);
    ${de}•padding•inline: var(${m}•6);
  }

  &:has(>[data-size=inherit]) { /** @default • scalable based on 'md' size */
    ${de}•font•size: 1em;
    ${de}•font•size•text: 0.75em;
    ${de}•size: 1.25em;
    ${de}•padding•inline: 0.375em;
  }
`,Cb=d`
@layer arc-components {

  [arc-badge-count-wrapper] {
    ${wb}
    ${kb}
    ${Ab}
  }

  /* CORE ------------------------------------------------------------• */

  [arc-badge-count-wrapper]:not([hidden]) {
    flex: none;
    align-self: var(--arc-badge-count-align-self, flex-start);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 1lh;
    max-height: 1lh;
    vertical-align: bottom;
  }

  [arc-badge-count] {
    font-size: var(--arc-badge-count-font-size, var(${de}•font•size));
    font-weight: var(--arc-font-weight-600);

    flex: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: var(${de}•size);
    min-width: var(${de}•size);
    padding-inline: var(${de}•padding•inline);

    white-space: nowrap;
    line-height: normal;

    color: var(--arc-badge-count-color, var(${Ks}));
    background: var(--arc-badge-count-background, var(${Ws}));
    border-radius: var(--arc-border-radius-pill);
    mix-blend-mode: var(--arc-badge-count-mix-blend-mode, unset);

    [data-element=text] {
      font-size: var(${de}•font•size•text, 1em);
    }
  }

}
`,Sb=Vr(ve,["inherit","lg","md","sm"]),zb=Vr(Xr,["neutral","brand","critical","warning","success","inverse"]),Eb=["low","high"],_b=Vr(Oo,["square","circle"]),Tb={neutral:"neutral",brand:"brand",critical:"red",warning:"yellow",success:"green",inverse:"mono"},Ib=({children:r,text:e,color:a,variant:t,contrast:o,size:n="inherit",shape:c,...l})=>{const u=r||(0,i.jsx)("span",{"data-element":"text",children:e}),h=a??Tb[t??"neutral"],p=t==="critical"?"high":o??"low";return(0,i.jsx)("span",{...l,"arc-badge-count-wrapper":"",children:(0,i.jsx)("span",{"arc-badge-count":"","data-color":h,"data-contrast":p,"data-size":n,children:u})})};Cr("ArcBadgeCount",Cb);const ta=d`--arc•banner`,Ne=d`${ta}•bg`,Le=d`${ta}•fg`,Ye=d`${ta}•columns`,Xa=d`${ta}•border`,Xs=d`${ta}•border•radius`,pn=d`${ta}•padding`,St=d`${ta}•min•height`,Xc=d`${ta}•body`,so=d`${Xc}•font•size`,qc=d`${Xc}•gap`,fh=d`${Xc}•flex•direction`,mh=d`${Xc}•min•width`,qs=d`${ta}•icon`,lo=d`${qs}•font•size`,Ys=d`${qs}•padding`,dt=d`${qs}•color`,bh=d`${ta}•action`,Zs=d`${bh}•justify`,Js=d`${bh}•gap`,gn=d`${ta}•column•gap`,Qs=d`${ta}•row•gap`,Pb=d`
  &:where([variant=ai]) {
    ${Le}: var(--arc-color-fg-primary);
    /* Note: uses components-specific gradient style from: bannerStyles import */
    ${Ne}: var(--arc-banner-gradient-ai-50) padding-box, var(--arc-banner-gradient-ai-100) border-box;
    ${Xa}: var(--arc-border-width-sm) solid transparent;
  }

  &:where([variant=announcement]) {
    ${Le}: var(--arc-color-fg-primary);
    ${dt}: var(--arc-color-fg-brand-mid);
    ${Ne}: var(--arc-color-bg-blue-muted);
    ${Xa}: var(--arc-border-width-sm) solid var(--arc-color-border-blue-subtle);
  }

  &:where([variant=critical]) {
    ${Le}: var(--arc-color-fg-primary);
    ${dt}: var(--arc-color-fg-critical-mid);
    ${Ne}: var(--arc-color-bg-critical-muted);
    ${Xa}: var(--arc-border-width-sm) solid var(--arc-color-border-critical-subtle);
  }

  &:where([variant=info]) {
    ${Le}: var(--arc-color-fg-primary);
    ${dt}: var(--arc-color-fg-info-mid);
    ${Ne}: var(--arc-color-bg-info-muted);
    ${Xa}: var(--arc-border-width-sm) solid var(--arc-color-border-info-subtle);
  }

  &:where([variant=neutral]) {
    ${Le}: var(--arc-color-fg-secondary);
    ${dt}: var(--arc-color-fg-secondary);
    ${Ne}: var(--arc-color-alpha-muted);
    ${Xa}: var(--arc-border-width-sm) solid var(--arc-color-border-mid);
  }

  &:where([variant=success]) {
    ${Le}: var(--arc-color-fg-primary);
    ${dt}: var(--arc-color-fg-success-mid);
    ${Ne}: var(--arc-color-bg-success-muted);
    ${Xa}: var(--arc-border-width-sm) solid var(--arc-color-border-success-subtle);
  }

  &:where([variant=warning]) {
    ${Le}: var(--arc-color-fg-primary);
    ${dt}: var(--arc-color-fg-warning-mid);
    ${Ne}: var(--arc-color-bg-warning-muted);
    ${Xa}: var(--arc-border-width-sm) solid var(--arc-color-border-warning-subtle);
  }
`,Rb=d`
  &:where([variant=ai]) {
    ${Le}: var(--arc-color-fg-on-stark);
    /* Note: uses components-specific gradient style from: bannerStyles import */
    ${Ne}: var(--arc-banner-gradient-ai-300);
  }

  &:where([variant=announcement]) {
    ${Le}: var(--arc-color-fg-on-stark);
    ${Ne}: var(--arc-color-bg-blue-stark);
  }

  &:where([variant=critical]) {
    ${Le}: var(--arc-color-fg-on-stark);
    ${Ne}: var(--arc-color-bg-critical-mid);
  }

  &:where([variant=info]) {
    ${Le}: var(--arc-color-fg-on-stark);
    ${Ne}: var(--arc-color-bg-info-stark);
  }

  &:where([variant=neutral]) {
    ${Le}: var(--arc-color-fg-on-stark);
    ${Ne}: var(--arc-color-bg-neutral-stark);
  }

  &:where([variant=success]) {
    ${Le}: var(--arc-color-fg-on-stark);
    ${Ne}: var(--arc-color-bg-success-stark);
  }

  &:where([variant=warning]) {
    ${Le}: var(--arc-color-fg-on-mid);
    ${Ne}: var(--arc-color-bg-warning-mid);
  }
`,jb=d`
  ${qc}: 0.375em;
  ${fh}: column;
  ${mh}: 7em;
  ${Js}: 0.75em;
  ${gn}: 0.75em;
  ${Qs}: 0.75em;

  /* INSET SETUP ---------------------------------------------------• */

  &[layout=inset] {
    ${Pb}

    ${pn}: 0 0.75em 0 1em;
    ${Xs}: var(--arc-border-radius-lg);
    ${qc}: 0.125em;
    ${Ys}: 0.0625em;
    ${gn}: 0.625em;

    ${St}: 5em;

    &:where([density=comfortable]) {
      &:not(:has([arc-banner-actions], [arc-banner-dismiss]))) {
        ${St}: 4.75em;
      }
      &:has([arc-banner-heading]):not(:has([arc-banner-message])),
      &:has([arc-banner-message]):not(:has([arc-banner-heading])),
      &:not(:has([arc-banner-message], [arc-banner-heading])) {
        ${St}: 3.5em;
        ${Qs}: 0.25em;

        &:has([arc-banner-actions]) {
          ${St}: 3.75em;
        }
      }
    }

    &[action-placement=bottom] {
      ${Zs}: flex-start;

      &[density=compact] {
        ${pn}: 0 0.25em 0 0.5em;
      }
    }

    &[density=compact]:where([action-placement=inline]) {
      line-height: normal;

      [arc-banner-grid] {
        font-size: var(${so});
      }
    }
  }

  /* BLEED SETUP ---------------------------------------------------• */

  &[layout=bleed] {
    ${Rb}

    ${St}: 4em;
    ${pn}: 0 0.75em 0 1em;
    ${Xa}: none;
    ${Xs}: 0;
    ${qc}: 0.125em;
    ${gn}: 1em;
    ${Zs}: flex-end;
    ${Ys}: 0.125em;

    &[density=compact],
    &[alignment=center] {
      ${lo}: 1.125em;
      line-height: normal;

      [arc-banner-grid] {
        font-size: var(${so});
      }
    }
  }

  /* DENSITIES -----------------------------------------------------• */

  &[density=comfortable] {
    ${lo}: 1em;
    ${so}: 0.875em;
  }

  &[density=compact] {
    ${St}: 2em;
    ${pn}: 0 0.25em 0 0.5em;
    ${so}: 0.75em;
    ${Js}: 0.5em;
    ${gn}: 0.5em;

    &[action-placement=inline] {
      ${lo}: 1em;
    }

    &[action-placement=bottom] {
      ${lo}: 0.875em;
    }

    [arc-banner-grid] {
      align-self: center;
    }
  }

  /* Inter-component communication • ArcIcon/ArcIconText/ArcLink ---• */

  &[layout=inset] {
    &[density=compact]:where([action-placement=inline]) {
      --arc-icon-text-icon-color: var(--arc-banner-icon-color, var(${dt}));
      --arc-icon-text-gap: 0.375em;
    }

    [arc-banner-icon] {
      --arc-icon-color: var(--arc-banner-icon-color, var(${dt}));
    }
  }

  &[layout=bleed] {
    &:where([density=compact], [alignment=center]) {
      --arc-icon-text-gap: 0.375em;
    }

    &[alignment=center] [arc-banner-grid] {
      --arc-icon-height: 100%;
      --arc-icon-max-height: 100%;
      --arc-icon-text-icon-size: var(${lo});
    }
  }

  &[density=compact] [arc-banner-body] {
    --arc-icon-height: 100%;
    --arc-icon-max-height: 100%;
    --arc-icon-text-icon-size: 1.125em;
  }

`,Lb=d`
  &[layout=inset] {
    [arc-banner-grid] {
      margin-block: 0.75em;
    }

    &[density=compact] {
      &[action-placement=bottom] {
        [arc-banner-grid] {
          margin-block: 0.25em 0.625em;
        }
      }

      &:not([action-placement=bottom]) {
        [arc-banner-grid] {
          margin-block: 0.25em;
          line-height: normal;
        }

        [arc-banner-icon],
        [arc-banner-body] {
          align-self: center;
        }
      }
    }

    &[action-placement=bottom] {
      [arc-banner-actions] { grid-row: 2; }
      &:has([arc-banner-icon]) [arc-banner-actions] { grid-column: 2 / -1; }
      &:not(:has([arc-banner-icon])) [arc-banner-actions] { grid-column: 1 / -1; }
    }
  }
`,Mb=d`
  &[layout=bleed] {
    &[density=compact] {
      [arc-banner-grid] {
        margin-block: 0.25em;
      }
    }

    [arc-banner-grid] {
      margin-block: 0.5em;
      align-self: center;
      align-items: center;
    }

    &[alignment=center] {
      [arc-banner-grid] {
        font-size: var(${so});
        place-items: center;
        line-height: normal;
      }
    }
  }
`,Db=d`
  &:where([action-placement=inline]) {
    align-items: flex-start;

    &[density=compact] {
      ${Ye}: 1fr auto auto;

      &:not(:has([arc-banner-actions])):has([arc-banner-dismiss]),
      &:not(:has([arc-banner-dismiss])):has([arc-banner-actions]) {
        ${Ye}: 1fr auto;
      }
    }

    &[density=comfortable] {
      ${Ye}: auto 1fr auto auto;

      &:has([arc-banner-icon]):has([arc-banner-actions]):not(:has([arc-banner-dismiss])),
      &:has([arc-banner-icon]):has([arc-banner-dismiss]):not(:has([arc-banner-actions])) {
        ${Ye}: auto 1fr auto;
      }

      &:not(:has([arc-banner-icon])):has([arc-banner-actions]):has([arc-banner-dismiss]) {
        ${Ye}: 1fr auto auto;
      }

      &:has([arc-banner-icon]):not(:has([arc-banner-actions])):not(:has([arc-banner-dismiss])) {
        ${Ye}: auto 1fr;
      }
      &:not(:has([arc-banner-icon])):has([arc-banner-actions]):not(:has([arc-banner-dismiss])),
      &:not(:has([arc-banner-icon])):has([arc-banner-dismiss]):not(:has([arc-banner-actions])) {
        ${Ye}: 1fr auto;
      }
    }

    &:not(:has([arc-banner-icon], [arc-banner-dismiss], [arc-banner-actions])) {
      ${Ye}: 1fr;
    }
  }

  &:where([action-placement=bottom]) {
    ${Ye}: auto 1fr auto;

    &:not(:has([arc-banner-icon])) {
      ${Ye}: 1fr auto;
    }

    &:not(:has([arc-banner-dismiss])) {
      ${Ye}: auto 1fr;
    }

    &:not(:has([arc-banner-icon])):not(:has([arc-banner-dismiss])) {
      ${Ye}: 1fr;
    }
  }
`,Ob=d`
  width: var(--arc-banner-width, 100%);
  max-width: 100%;
  border: var(--arc-banner-border, var(${Xa}));
  background: var(--arc-banner-background, var(${Ne}));
  border-radius: var(--arc-banner-border-radius, var(${Xs}));
  padding: var(--arc-banner-padding, var(${pn}));
  min-height: var(--arc-banner-min-height, var(${St}, auto));
  font-size: var(--arc-banner-font-size, initial);
  line-height: var(--arc-line-height-loose);
  overflow: var(--arc-banner-overflow, unset);

  &:not([hidden]) {
    display: flex;
    align-items: center;
  }

  ${Db}

  [arc-banner-grid] {
    color: var(--arc-banner-color, var(${Le}));
    flex: 1;

    display: grid;
    align-items: baseline;
    grid-template-columns: var(${Ye});
    column-gap: var(${gn});
    row-gap: var(${Qs});
  }

  [arc-banner-body] {
    color: var(--arc-banner-color, var(${Le}));
    flex: 1;
    min-width: var(--arc-banner-body-min-width, var(${mh}));

    display: flex;
    flex-direction: var(${fh});
    gap: var(${qc});
  }

  [arc-banner-icon] {
    font-size: var(${lo});
    padding-inline: var(${Ys});
  }

  [arc-banner-heading],
  [arc-banner-message] {
    flex: none;
  }

  [arc-banner-heading],
  [arc-banner-message],
  [arc-banner-actions] {
    font-size: var(${so});
    margin: 0;
  }

  [arc-banner-actions] {
    display: flex;
    flex-flow: row wrap;
    align-items: flex-start;
    justify-content: var(--arc-banner-action-justify, var(${Zs}));
    gap: var(--arc-banner-action-gap, var(${Js}));
  }

`,Nb=d`
@layer arc-components {
  ${Lf}

  [arc-banner] {
    /* CORE VARIABLES -----------------------------------------------• */
    ${jb}

    /* CORE STYLES --------------------------------------------------• */
    ${Ob}

    /* INSET LAYOUT -------------------------------------------------• */
    ${Lb}

    /* BLEED LAYOUT -------------------------------------------------• */
    ${Mb}
  }

}
`,Bb=Vr(bt,["comfortable","compact"]),Fb=["inset","bleed"],Hb=["inline","bottom"],Vb=["left","center"],Ub=[...Ha],Gb=[...Xr,"announcement"],Kb=Vr(Gb,["ai","announcement","critical","info","neutral","success","warning"]),ut={layout:"inset",variant:"neutral",density:"comfortable",actionPlacement:"inline",alignment:"left",showDismiss:!0},Wb=r=>r==="critical"||r==="warning"?"alert":"status",Xb=({children:r,id:e,icon:a,dismissProps:t,heading:o,density:n=ut.density,layout:c=ut.layout,actionPlacement:l=ut.actionPlacement,alignment:u=ut.alignment,actionSlot:h,showDismiss:p=ut.showDismiss,message:v,variant:g=ut.variant,onClose:f,...b})=>{const $=Nr(e,"arc-banner"),x=gs(a),A=u==="center",y=c==="bleed",k=c==="inset",w=n==="compact",E=l==="inline",_=!!x,C=k&&g==="ai"?"ai-200":void 0,S={variant:g,layout:c,density:n,alignment:u,"action-placement":l},T=()=>(0,i.jsx)(zr,{icon:x,gradient:C}),D=()=>(0,i.jsx)(i.Fragment,{children:!!h&&(0,i.jsx)("span",{"arc-banner-actions":"",children:h})}),N=()=>(0,i.jsx)("div",{"arc-banner-dismiss":"",children:(0,i.jsx)(Lr,{icon:"fa-regular fa-xmark-large",layout:"icon",variant:k||y&&g==="warning"?"common":"alpha",hierarchy:"tertiary",shape:"square","aria-label":"Dismiss",size:w?"sm":"md",...t,onClick:R=>{t?.onClick?.(R),f?.()}})}),H=({showActions:R=!0})=>(0,i.jsx)("div",{"arc-banner-body":"",children:r||(0,i.jsxs)(le,{icon:(0,i.jsx)(T,{}),children:[!!o&&(0,i.jsx)("strong",{children:o})," ",v," ",R&&h]})}),J=()=>(0,i.jsxs)(i.Fragment,{children:[_&&(0,i.jsx)("span",{"arc-banner-icon":"",children:(0,i.jsx)(T,{})}),(0,i.jsx)("div",{"arc-banner-body":"",children:r||(0,i.jsxs)(i.Fragment,{children:[o&&(0,i.jsx)("strong",{"arc-banner-heading":"",children:o}),v&&(0,i.jsx)("span",{"arc-banner-message":"",children:v})]})})]});return(0,i.jsx)("div",{role:Wb(g??ut.variant),...b,...S,"arc-banner":"",id:$,children:(0,i.jsxs)("div",{"arc-banner-grid":"",children:[A?(0,i.jsx)(H,{}):(0,i.jsxs)(i.Fragment,{children:[w&&E?(0,i.jsx)(H,{showActions:!1}):(0,i.jsx)(J,{}),(0,i.jsx)(D,{})]}),p&&(0,i.jsx)(N,{})]})})};Cr("ArcBanner",Nb);const I2=null,qb=["divider","section-label"];var Yb;const zt={layout:"gutter",variant:"inherit",overflow:"truncate",gapSize:"md",size:"md"},Zb=r=>[{test:()=>!!r.variant,value:r.variant},{test:()=>!!r.icon&&typeof r.subtext<"u",value:"icon-text-detail"},{test:()=>!!r.icon,value:"icon-text"},{test:()=>!!r.avatar&&typeof r.subtext<"u",value:"user-detail"},{test:()=>!!r.avatar,value:"user"},{test:()=>typeof r.subtext<"u",value:"text-detail"},{test:()=>!0,value:"text"}],Jb=({icon:r,onClick:e,items:a,renderSubmenu:t,submenuProps:o,...n})=>({icon:ku(r),itemProps:n}),$h=(r,e)=>{const{icon:a,itemProps:t}=Jb(e);switch(r){case"divider":return(0,i.jsx)("hr",{});case"section-label":return(0,i.jsx)(le,{...t,...zt,icon:a,size:"sm",isStrong:!0});case"icon-text":return(0,i.jsx)(le,{...t,...zt,icon:a});case"icon-text-detail":return(0,i.jsx)(le,{...t,...zt,icon:a,isStrong:!0});case"text":return(0,i.jsx)(le,{...t,...zt});case"text-detail":return(0,i.jsx)(le,{...t,...zt,subtext:t.subtext??"sub",isStrong:!0});case"user":return(0,i.jsx)(Wc,{...t,...zt,size:"sm"});case"user-detail":return(0,i.jsx)(Wc,{...t,...zt,size:"md",isStrong:!0});default:return r}},P2=r=>Object.fromEntries(Yb.map(e=>[e,$h(e,r)])),Qb=200,r$=r=>{const e=r.submenuProps&&typeof r.submenuProps=="object"?r.submenuProps.id:void 0;return typeof e=="string"&&e.length>0?e:void 0},e$=r=>{const e=r.submenuProps&&typeof r.submenuProps=="object"?r.submenuProps:{},{menuProps:a,renderItem:t,...o}=e;return{menuProps:a,popoverPassthrough:o}},a$=r=>({ownMenuId:r.menu,parentTriggerId:r.trigger}),t$=r=>{const e=r.submenuProps;if(!e||typeof e!="object")return;const a=e.renderItem;return typeof a=="function"?a:void 0},rl=r=>typeof r.renderSubmenu=="function"||Array.isArray(r.items)&&r.items.length>0,Yc=(r,e,a)=>{if(!rl(r))return{hasSubmenu:!1};const t=al(r,e),o=`${a}-subtrigger-${t}`;let c=r$(r)??`${a}-submenu-${t}`;return c===o&&(c=`${c}-menu`),{hasSubmenu:!0,menuId:c,triggerId:o}},o$=(r,e)=>{if(!e||!r)return-1;let t=e.nodeType===Node.ELEMENT_NODE?e:e.parentNode;for(;t;){if(t===r)return-1;if(t instanceof HTMLLIElement&&t.parentElement===r)return Array.prototype.indexOf.call(r.children,t);t=t.parentNode}return-1},n$=(r,e)=>{if(typeof document>"u")return!1;const a=ea(r,e);try{return!!a?.matches?.(":popover-open")}catch{return!1}},el=r=>r===!0||typeof r=="number"&&r>=0&&Number.isFinite(r),c$=r=>r===!0?0:r,i$=r=>r===!0?Qb:r,s$={divider:"separator","section-label":"presentation","icon-text-detail":"menuitem","icon-text":"menuitem","user-detail":"menuitem",user:"menuitem","text-detail":"menuitem",text:"menuitem"},al=(r,e)=>r.itemId!=null&&String(r.itemId)!==""?String(r.itemId):`auto-${e}`,yh=r=>{let e=null;for(let a=r;a;a=a.parentElement)a.hasAttribute("arc-popover")&&(e=a);return e},xh=(r,e,a,t)=>{if(t||a==="divider"||rl(e))return;if(r.target instanceof Element){const c=r.target.closest("[arc-popover]");if(c&&r.currentTarget.contains(c))return}if(!!!(e.href||e.onClick))return;yh(r.currentTarget)?.hidePopover?.()},l$=r=>r?.role??s$[uo(r)]??"menuitem",uo=r=>Zb(r)?.find(({test:e})=>e())?.value??"text",wh=r=>qb.some(e=>e===r),kh=r=>e=>$h(r,e),tl=(r,e,a,t)=>{const o=t??Yc(r,e,a);if(o.hasSubmenu)return o.triggerId;const n=al(r,e);return`${a}-mi-${n}`},d$=(r,e,a)=>uo(r)==="divider"||r.isDisabled===!0||r["aria-disabled"]===!0?!1:r.checked!==void 0||Yc(r,e,a).hasSubmenu?!0:!!(r.href||r.onClick),Zc=(r,e)=>{const a=[];for(let t=0;t<r.length;t+=1)d$(r[t],t,e)&&a.push(t);return a},Ah=(r,e,a)=>{if(typeof document>"u")return;const t=r.children[e];if(!(t instanceof HTMLElement))return;const o=ea(a,r);if(o instanceof HTMLElement&&t.contains(o)){o.focus();return}const n=t.querySelectorAll('a[href], button:not(:disabled), input:not(:disabled), select:not(:disabled), textarea:not(:disabled), [tabindex]:not([tabindex="-1"])');Array.from(n).find(l=>l.getAttribute("aria-disabled")!=="true")?.focus()},Ch=(r,e,a,t)=>{const o=Zc(r,e);if(o.length===0)return-1;if(t==="actual")return a>=0&&o.includes(a)?a:o[0];let n=o.indexOf(a);return n<0?t==="next"?o[0]:t==="previous"?o[o.length-1]:o[0]:t==="next"?(n=(n+1)%o.length,o[n]):(n=(n-1+o.length)%o.length,o[n])};function u$(r,e,a){return{ArrowUp:t=>{const o=Ch(r,e,t,"previous");o>=0&&a(o)},ArrowDown:t=>{const o=Ch(r,e,t,"next");o>=0&&a(o)},Home:()=>{const t=Zc(r,e);t.length>0&&a(t[0])},End:()=>{const t=Zc(r,e);t.length>0&&a(t[t.length-1])}}}function h$(r,e){const{isVisible:a,menuListRef:t,activeItemIndex:o,filteredItems:n,menuDomId:c,isMenuRtlRef:l,submenuBackNavigation:u,listNavByKey:h,hideSubmenu:p,focusTriggerById:v,focusRowAtItemIndex:g,setActiveItemIndex:f,openSubmenuForKeyboard:b}=e;if(!a||!t.current||!(r.target instanceof Node)||!t.current.contains(r.target))return;const $=t.current,x=r.target.closest?.("ul[arc-menu]");if(x&&x!==$)return;let A=o$($,r.target);if(A<0&&o>=0&&(A=o),A<0)return;const y=n[A],k=Yc(y,A,c),w=l.current,E=w?"ArrowLeft":"ArrowRight",_=w?"ArrowRight":"ArrowLeft";if(k.hasSubmenu&&r.key===_&&n$(k.menuId,$)){r.preventDefault(),r.stopPropagation(),g(A),p(k.menuId);return}if(u&&(r.key==="Escape"||r.key===_)){r.preventDefault(),r.stopPropagation(),v(u.parentTriggerId),p(u.ownMenuId);return}if(k.hasSubmenu&&(r.key===E||r.key==="Enter")){r.preventDefault(),r.stopPropagation(),f(A),b(k.menuId);return}const I=h[r.key];I&&(r.preventDefault(),r.stopPropagation(),I(A))}function p$(r,e){if(typeof document>"u")return;ea(r,e)?.hidePopover?.()}function g$(r,e){if(typeof document>"u")return;ea(r,e)?.showPopover?.()}function v$(r){r.querySelectorAll("[popover]").forEach(e=>{try{e.matches(":popover-open")&&e.hidePopover?.()}catch{}})}function f$(r,e){typeof document>"u"||requestAnimationFrame(()=>{ea(r,e)?.querySelector("[arc-menu]")?.focus()})}function m$(r,e){if(typeof document>"u")return;ea(r,e)?.focus()}function b$({menuListRef:r,passiveMode:e}){const a=(0,s.useRef)(null),t=(0,s.useRef)(null),o=(0,s.useRef)(null),n=(0,s.useCallback)(()=>{t.current!=null&&(clearTimeout(t.current),t.current=null)},[]),c=(0,s.useCallback)(()=>{o.current!=null&&(clearTimeout(o.current),o.current=null)},[]),l=(0,s.useCallback)(()=>{const b=r.current;b&&v$(b)},[r]),u=(0,s.useCallback)(b=>{p$(b,r.current),a.current===b&&(a.current=null)},[r]),h=(0,s.useCallback)(b=>{typeof document>"u"||(a.current&&a.current!==b&&u(a.current),g$(b,r.current),a.current=b)},[u,r]),p=(0,s.useCallback)(b=>{if(!el(e))return;c(),n();const $=c$(e);if($<=0){h(b);return}t.current=setTimeout(()=>{t.current=null,h(b)},$)},[e,n,c,h]),v=(0,s.useCallback)(b=>{if(!el(e))return;n(),c();const $=i$(e);if($<=0){u(b);return}o.current=setTimeout(()=>{o.current=null,u(b)},$)},[e,n,c,u]),g=(0,s.useCallback)(b=>{n(),c(),h(b),f$(b,r.current)},[n,c,h,r]),f=(0,s.useCallback)(b=>{m$(b,r.current)},[r]);return{activeSubmenuIdRef:a,cancelPendingSubmenuOpen:n,cancelPendingSubmenuClose:c,closeOpenDescendantPopovers:l,hideSubmenu:u,runShowSubmenu:h,showSubmenuFromPointer:p,requestSubmenuCloseFromPointer:v,openSubmenuForKeyboard:g,focusTriggerById:f}}const $$=d`--arc•menu`,ba=d`${$$}•item`,y$=d`
@layer arc-components {

  [arc-menu] {
    ${ba}•gap: var(${j}•8);
    ${ba}•fg: inherit;
    ${ba}•bg: inherit;

    font-size: var(--arc-menu-font-size, var(${m}•14));
    list-style: none;
    line-height: normal;

    display: var(--arc-menu-display, flex);
    flex-direction: var(--arc-menu-flex-direction, column);
    gap: var(--arc-menu-gap, var(${j}•2));
    padding: var(--arc-menu-padding, var(${j}•4));
    margin: var(--arc-menu-margin, 0);

    outline: var(--arc-menu-outline, none);
  }

  /* Submenus sit under the same <li> as the row button, so the parent row stays :hover while
     pointing at submenu items. Reset the item bg token on submenu lists so inherited hover from
     the parent <li> does not paint every submenu row; each submenu row only picks up hover from its own <li>. */
  [arc-menu-item] > [arc-popover] [arc-menu] {
    ${ba}•bg: transparent;
  }

  [arc-menu-item] {
    position: relative;
    display: var(--arc-menu-item-display, flex);
    flex-direction: var(--arc-menu-item-flex-direction, row);
    justify-content: var(--arc-menu-item-justify-content, space-between);
    align-items: var(--arc-menu-item-align-items, center);
    gap: var(--arc-menu-item-gap, var(${ba}•gap));

    background: var(--arc-menu-item-background, var(${ba}•bg));
    color: var(--arc-menu-item-color, var(${ba}•fg));
    padding: var(--arc-menu-item-padding, 0);
    border-radius: var(--arc-menu-item-border-radius, var(--arc-border-radius-md));
    cursor: var(--arc-menu-item-cursor, default);
    outline: var(--arc-menu-item-outline, none);

    transition: var(--arc-menu-item-transition, 120ms ease-out);

    &:not([arc-menu-selection-row]):has(> [arc-button=custom]:not([is-disabled])) {
      &:is(:hover, :has(> [arc-button=custom]:not([is-disabled]):focus-visible)) {
        ${ba}•bg: var(--arc-color-bg-hover-default);
      }
    }

    /* Inter-Component Communication • ArcButton -------------------• */

    > [arc-button=custom] {
      --arc-button-flex: 1;
      --arc-button-font-size: 1em;
      --arc-button-border: none;
      --arc-button-transition: none;
      --arc-button-position: var(--arc-menu-item-position, relative);
      --arc-button-gap: var(--arc-menu-item-gap, var(${ba}•gap));
      --arc-button-opacity: var(--arc-menu-item-opacity, unset);
      --arc-button-overflow: var(--arc-menu-item-overflow, clip);
      --arc-button-outline-offset: var(--arc-menu-item-outline-offset, var(${m}•2m));

      [arc-button-content] {
        display: contents;
      }
    }
  }

  [arc-menu-item][arc-menu-selection-row] {
    &:is(:hover, :has(:focus-visible)) {
      ${ba}•bg: var(--arc-color-bg-hover-default);
    }

    &[is-selected] {
      ${ba}•bg: var(--arc-color-bg-selected-default);
    }
  }

  [arc-menu-item=divider] {
    margin: 0 var(${j}•4m);

    hr {
      flex: 1;
      border: none;
      border-top: var(--arc-border-width-sm) solid var(--arc-color-border-mid);
      height: 0;
      margin: 0;
    }
  }

`,x$=({items:r,filterText:e,renderItem:a,isVisible:t,keepMenuOpen:o,renderSubmenu:n,passiveMode:c,submenuBackNavigation:l,...u})=>{const h=c??200,p=(0,s.useId)(),v=(0,s.useRef)(null),{activeSubmenuIdRef:g,cancelPendingSubmenuOpen:f,cancelPendingSubmenuClose:b,closeOpenDescendantPopovers:$,hideSubmenu:x,showSubmenuFromPointer:A,requestSubmenuCloseFromPointer:y,openSubmenuForKeyboard:k,focusTriggerById:w}=b$({menuListRef:v,passiveMode:h}),E=(0,s.useRef)(!1),[_,I]=(0,s.useState)(!1),[C,S]=(0,s.useState)(-1);ha(()=>{const M=v.current;if(M&&typeof getComputedStyle<"u"){const P=getComputedStyle(M).direction==="rtl";E.current=P,I(P)}},[t,r]);const T=(0,s.useMemo)(()=>e?r.filter(M=>Object.values(M).some(P=>P===e)):r,[r,e]),D=(0,s.useRef)(T);D.current=T;const N=(0,s.useCallback)(M=>{if(M<0){S(-1);return}S(M);const P=v.current;if(!P)return;const F=tl(T[M],M,p);Ah(P,M,F)},[T,p]),H=(0,s.useMemo)(()=>u$(T,p,N),[T,p,N]),J=M=>h$(M,{isVisible:!!t,menuListRef:v,activeItemIndex:C,filteredItems:T,menuDomId:p,isMenuRtlRef:E,submenuBackNavigation:l,listNavByKey:H,hideSubmenu:x,focusTriggerById:w,focusRowAtItemIndex:N,setActiveItemIndex:S,openSubmenuForKeyboard:k}),R=(0,s.useMemo)(()=>T.map((M,P)=>{const F=al(M,P),{itemId:or,role:gr,keepMenuOpen:L,items:X,renderSubmenu:sr,submenuProps:mr,"arc-menu-selection-row":rr,"is-selected":ur,...yr}=M,lr=Yc(M,P,p),{hasSubmenu:wr}=lr,V=wr?lr.menuId:"",K=wr?{menu:lr.menuId,trigger:lr.triggerId}:void 0,er=uo(M)||"",O=gr||l$(M)||"menuitem",cr=P===C,br=tl(M,P,p,lr),$r={filterText:e,isCurrent:cr,menuControlId:br,itemId:F,role:gr,keepMenuOpen:L??o,isRtl:_,...wr?{hasSubmenu:!0,ids:K}:{hasSubmenu:!1}},U=a?.(yr,P,$r);return wr?(0,i.jsxs)("li",{"arc-menu-item":er,role:"presentation",onFocusCapture:()=>S(P),onMouseEnter:()=>{A(V)},onMouseLeave:el(h)?()=>y(V):void 0,onClick:W=>xh(W,M,er,L??o),children:[U,n?.({ids:K,items:X??[],item:M,filterText:e,passiveMode:h,isRtl:_})]},F):(0,i.jsx)("li",{"arc-menu-item":er,"arc-menu-selection-row":rr,"is-selected":ur,role:O,onFocusCapture:()=>S(P),onClick:W=>xh(W,M,er,L??o),children:U},F)}),[C,e,T,o,a,p,_,h,n,A,y]);return(0,s.useEffect)(()=>{if(!t){f(),b(),$(),g.current=null,S(-1);return}const M=D.current,P=Zc(M,p);if(P.length>0){const F=P[0],or=v.current;if(S(F),or){const gr=tl(M[F],F,p);Ah(or,F,gr)}}},[t,p,f,b,$,g]),(0,s.useEffect)(()=>()=>{f(),b(),$(),g.current=null},[f,b,$,g]),(0,i.jsx)("ul",{...u,ref:v,"arc-menu":"",role:"menu",onKeyDown:J,onMouseLeave:()=>S(-1),tabIndex:t?0:-1,children:R})};Cr("ArcMenu",y$);const Sh=["items","renderItem","renderSubmenu","keepMenuOpen","onToggle","id","menuProps","passiveMode","submenuBackNavigation","offset","ref","selectionProps"],w$=(r,e)=>{const a=!r.includes(e);return{value:a?[...r,e]:r.filter(t=>t!==e),changedValue:e,selected:a,reason:"item"}},zh=(r,e)=>{const a=new Set(r),t=e.filter(o=>a.has(o)).length;return t===0?"none":t===e.length?"all":"mixed"},k$=(r,e,a)=>{const t=e.length>0&&zh(r,e)!=="all";return{value:t?[...e]:[],changedValue:a,selected:t,reason:"selectAll"}},Eh=r=>wh(uo(r)),_h=rl,Th=r=>!Eh(r)&&!_h(r),A$=r=>r.filter(e=>Th(e)?e.itemId!=null&&String(e.itemId)!=="":!0),Ih=r=>!!(r["aria-disabled"]??r.isDisabled),ol=r=>{const{onClick:e,href:a,target:t,...o}=r;return o},Ph=r=>_h(r)?r:Eh(r)?ol(r):null,C$=(r,e)=>r.filter(a=>Th(a)&&!Ih(a)&&String(a.itemId)!==e).map(a=>String(a.itemId)),S$={none:!1,mixed:"mixed",all:!0},Rh=(r,e,a)=>Ih(r)?{}:{"arc-menu-selection-row":"","is-selected":e?"":void 0,...a},z$=(r,e)=>{const a=Ph(r);if(a)return a;const{checked:t,onChange:o,...n}=ol(r),c=String(r.itemId),l=e.selectAllItemId!==void 0&&c===e.selectAllItemId,u=l?S$[e.selectAllState]:e.selectedIds.has(c),h=u===!0&&(l||e.selectAllState!=="all");return{role:"presentation",...n,checked:u,keepMenuOpen:!0,...l?{containerProps:{...n.containerProps,"arc-menu-select-all-row":""}}:{},...Rh(r,h,{onChange:(p,v)=>e.onToggle(r,v)})}},E$=(r,e)=>{const a=Ph(r);if(a)return a;const t=ol(r),o=e.value!==null&&String(r.itemId)===e.value;return{role:"presentation",...t,"aria-checked":o,keepMenuOpen:!0,...Rh(r,o,{onClick:n=>{const c=n;e.onActivate(r,c?.nativeEvent??n??new MouseEvent("click"))}})}},_$=(r,e)=>{if(e.mode==="single"){const o={value:typeof e.value=="string"?e.value:null,onActivate:e.onActivate};return r.map(n=>E$(n,o))}const a=Array.isArray(e.value)?e.value:[],t={selectedIds:new Set(a),onToggle:e.onToggle,selectAllItemId:e.selectAllItemId,selectAllState:zh(a,e.enabledSelectableIds)};return r.map(o=>z$(o,t))},jh="fa-regular fa-angle-down",T$=(r,e,a)=>{const t=e==null?void 0:(r??[]).find(h=>h.itemId===e),o=t?t.text??(t.avatar?Hs(t.avatar):void 0):a?.placeholder,n=t?.endSlot==null?void 0:(0,i.jsx)("span",{"arc-dropdown-selected-end":"",children:t.endSlot}),c=t?.icon??(t?.avatar?(0,i.jsx)(Kc,{size:"sm",...t.avatar}):void 0),l=t?.startSlot==null?void 0:(0,i.jsxs)("span",{"arc-dropdown-selected-start":"",children:[t.startSlot,typeof c=="string"?(0,i.jsx)(zr,{icon:c}):c]});let u=o;return l!==void 0?u=(0,i.jsxs)(i.Fragment,{children:[l,o,n]}):n!==void 0&&(u=(0,i.jsxs)(i.Fragment,{children:[o,n]})),{variant:"neutral",hierarchy:"primary",size:"lg",...a?.showCaret??!0?{iconEnd:jh}:{},...t&&l===void 0?{iconStart:c}:{},text:u}},qa=d`--arc•label`,vn=d`${qa}•cursor`,fn=d`${qa}•opacity`,I$=d`
@layer arc-components {

  [arc-label] {
    /* Inter-Component Communication -------------------------------• */
    /* also applies to nested ArcLabelContent */
    ${fn}: var(--arc-label-opacity, unset);
    ${fn}•disabled: var(--arc-label-opacity-disabled, var(--arc-alpha-40));

    /* Internal STYLES ---------------------------------------------• */
    ${qa}•display: var(--arc-label-display, inline-flex);
    ${qa}•gap: var(--arc-label-gap, var(${m}•8));
    ${qa}•align•items: var(--arc-label-align-items, baseline);

    ${vn}: var(--arc-label-cursor, pointer);
    ${vn}•disabled: var(--arc-label-cursor-disabled, not-allowed);

    &:has(:disabled) {
      ${vn}: var(${vn}•disabled);
      ${fn}: var(${fn}•disabled);
    }

    &[data-layout=fill] {
      ${qa}•display: flex;
    }
  }

  /* CORE STYLES ---------------------------------------------------• */
  [arc-label]:not([hidden]) {
    display: var(${qa}•display);
    align-items: var(${qa}•align•items);
    gap: var(${qa}•gap);
    cursor: var(${vn});
  }

}
`,P$=vr(sa,["hug","fill"]),Et=({layout:r,...e})=>(0,i.jsx)("label",{...e,"arc-label":"","data-layout":r});Cr("ArcLabel",I$);const R$=d`
@layer arc-components {

  [arc-label-content] {
    opacity: var(--arc-label-opacity, var(${fn}, unset));
    transition: var(--arc-label-transition, opacity 100ms ease-out);
    user-select: var(--arc-label-user-select, none);
    -webkit-user-select: var(--arc-label-user-select, none);
  }

}
`,_t=r=>(0,i.jsx)("span",{...r,"arc-label-content":""});Cr("LabelContent",R$);const j$={checkbox:"checkbox",radio:"radio",switch:"radio"},mn=({id:r,indeterminate:e,type:a,onChange:t,...o})=>{const n=a==="checkbox"&&!!e,c=(0,s.useRef)(null),l=Nr(r,`arc-${a}`),u=h=>p=>{if(!(p?.target instanceof HTMLInputElement))return;const v={checked:p?.target.checked,indeterminate:p?.target?.indeterminate,name:p?.target?.name,value:o?.value};h?.(v,p)};return(0,s.useEffect)(()=>{c.current?.type==="checkbox"&&(c.current.indeterminate=!!e)},[e]),(0,i.jsx)("input",{...o,id:l,ref:c,type:j$[a],"arc-input-type":a,"aria-disabled":o?.disabled||void 0,"data-is-disabled":o?.disabled||void 0,"data-is-checked":o?.checked||void 0,"data-is-indeterminate":n||void 0,onChange:u(t)})},L$=d`
@layer arc-components {

  [arc-input-mask] {
    ${Z}•border•width: var(--arc-border-width-sm);
    ${Z}•border: var(${Z}•border•width) solid var(${Z}•border•color);

    /* Inter-Component Communication ---------------------------------• */

    /* for: ArcIcon */
    --arc-icon-size: var(${Z}•icon•size); /* ArcIcon */

    /* STATES --------------------------------------------------------• */

    &:has(:disabled) {
      ${Z}•cursor: not-allowed;
    }

    &:has(:focus:focus-visible) {
      ${Z}•outline: var(${Z}•border•width) solid var(--arc-color-border-focus);
    }
  }

  /* CORE STYLES -----------------------------------------------------• */

  [arc-input-mask-wrapper] {
    align-self: normal;
    display: flex;
    align-items: center;
    justify-content: center;
    max-height: 1lh;
  }

  [arc-input-mask] {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(${Z}•width);
    height: var(${Z}•height);
    opacity: var(${Z}•opacity, var(--arc-alpha-100));

    color: var(${Z}•color, transparent);
    background: var(${Z}•background);
    border: var(${Z}•border);
    border-radius: var(${Z}•border•radius);
    translate: var(${Z}•translate, unset);

    outline: var(${Z}•outline, none);
    outline-offset: var(${Z}•border•width);

    transition-duration: 100ms;
    transition-behavior: allow-discrete;
    transition-timing-function: ease-in-out;
    transition-property:
      opacity,
      background,
      color,
      border-color,
      outline;

    [arc-input-type] {
      flex: none;
      outline: none;
      appearance: none;
      position: absolute;
      inset: calc(var(${Z}•border•width) * -1);
      cursor: var(${Z}•cursor, pointer);
      margin: 0;
      padding: 0;
      border: 0;
      z-index: var(${Z}•z•index, unset);
    }
  }

}
`,Jc=({type:r,...e})=>(0,i.jsx)("span",{"arc-input-mask-wrapper":"",children:(0,i.jsx)("span",{...e,"arc-input-mask":r})});Cr("ArcBooleanInputMask",L$);const be=d`--arc•checkbox`,M$=d`
@layer arc-components {

  [arc-checkbox] {
    /* SIZES -------------------------------------------------------• */
    &[data-size=inherit] {
      ${be}•font•size: 1em;
      ${be}•icon•size: 0.625em;
      ${be}•size: 1.125em;
      ${be}•gap: 0.5em;
    }

    &[data-size=md] {
      ${be}•font•size: var(${m}•14);
      ${be}•icon•size: var(${m}•10);
      ${be}•size: var(${m}•18);
      ${be}•gap: var(${m}•8);
    }

    &[data-size=sm] {
      ${be}•font•size: var(${m}•12);
      ${be}•icon•size: var(${m}•10);
      ${be}•size: var(${m}•16);
      ${be}•gap: var(${m}•6);
    }

    /* Inter-Component Communication -------------------------------• */
    /* for: ArcBooleanInputMask */
    ${Z}•border•radius: var(${m}•4);
    ${Z}•size: var(${be}•size);
    ${Z}•icon•size: var(${be}•icon•size);
    ${Z}•width: var(${be}•size);
    ${Z}•height: var(${be}•size);
    ${Z}•translate: 0 var(${m}•1m);•

    /* for: ArcLabel */
    --arc-label-gap: var(${be}•gap);
    --arc-label-align-items: stretch; /* ArcLabel • this allows the mask
                                        to stay inline with the label text
                                        regardless of applied line-height */
  }

  /* CORE STYLES ---------------------------------------------------• */
  [arc-checkbox]:not([hidden]) {
    font-size: var(${be}•font•size);
    display: var(--arc-checkbox-display, inline-flex);
    min-height: 1lh;

    /* UNCHECKED, NOT-DISABLED, +HOVER • default state */
    &:not(:has(:checked, :indeterminate)) {
      ${Z}•color: transparent;
      ${Z}•border•color: var(--arc-color-border-stark);
      ${Z}•background: transparent;

      &:hover {
        ${Z}•border•color: var(--arc-color-border-theme-heavy);
        ${Z}•background: var(--arc-color-bg-theme-subtle);
      }

      &:has(:disabled) {
        ${Z}•border•color: var(--arc-color-border-disabled);
        ${Z}•background: var(--arc-color-bg-disabled);
      }
    }

    /* DISABLED */
    &:has(:disabled) {
      color: var(--arc-color-fg-disabled);
    }

    /* PRIMARY, +DISABLED */
    &[data-variant=primary] {
      &:has(:checked, :indeterminate) {
        ${Z}•color: var(--arc-color-fg-on-theme-heavy);
        ${Z}•border•color: transparent;
        ${Z}•background: var(--arc-color-bg-theme-heavy);

        &:not(:has(:disabled)):hover {
          ${Z}•color: var(--arc-color-fg-on-theme-stark);
          ${Z}•background: var(--arc-color-bg-theme-stark);
        }

        &:has(:disabled) {
          ${Z}•color: var(--arc-color-fg-on-theme-mid);
          ${Z}•background: var(--arc-color-bg-theme-mid);
        }
      }
    }

    /* SECONDARY, +DISABLED */
    &[data-variant=secondary] {
      &:has(:checked, :indeterminate) {
        ${Z}•color: var(--arc-color-fg-theme-heavy);
        ${Z}•border•color: var(--arc-color-border-theme-heavy);
        ${Z}•background: transparent;

        &:not(:has(:disabled)):hover {
          ${Z}•color: var(--arc-color-fg-theme-stark);
          ${Z}•border•color: var(--arc-color-border-theme-stark);
        }

        &:has(:disabled) {
          ${Z}•color: var(--arc-color-fg-theme-subtle);
          ${Z}•border•color: var(--arc-color-border-theme-mid);
        }
      }
    }
  }

}
`,D$=vr(sa,["hug","fill"]),O$=vr(ve,["inherit","md","sm"]),N$=vr(Xr,["primary","secondary"]),nl=({children:r,label:e,layout:a,size:t="md",variant:o="primary",useMask:n=!0,...c})=>{const{className:l,title:u,...h}=c,p={className:l,title:u},v=r??e,g=(0,i.jsx)(mn,{...h,type:"checkbox"}),f=n&&(0,i.jsxs)(Jc,{type:"checkbox",children:[g,(0,i.jsx)(zr,{icon:h?.indeterminate?"fa-solid fa-minus arc-fw":"fa-solid fa-check arc-fw"})]}),b=!!v&&(0,i.jsxs)(Et,{layout:a,children:[f||g,(0,i.jsx)(_t,{children:v})]});return(0,i.jsx)("span",{...p,"arc-checkbox":"","data-size":t,"data-variant":o,children:b||f||g})};Cr("ArcCheckbox",M$);const B$="fa-regular fa-check",F$=r=>{r.key!=="Enter"||r.currentTarget.disabled||(r.preventDefault(),r.currentTarget.click())},Lh=r=>{const{selectionMode:e,startSlot:a,endSlot:t,onClick:o,href:n,target:c,containerProps:l,isDisabled:u,"aria-disabled":h,tooltip:p,id:v,popoverTarget:g,popoverTargetAction:f,"aria-haspopup":b,"aria-controls":$,"aria-expanded":x,...A}=r,y=uo(A),k=(0,s.useMemo)(()=>kh(y),[y]),w=h??u,E=y==="divider",_=wh(y)?void 0:e,I=!!(n||o||g),C=!E,S=C&&a?"":void 0,T=C&&t?"":void 0,D=(0,s.useMemo)(()=>({...l,onClick:o,tooltip:p,href:n,target:c,id:v,popoverTarget:g,popoverTargetAction:f,"aria-haspopup":b,"aria-controls":$,"aria-expanded":x}),[l,o,p,n,c,v,g,f,b,$,x]),N=(0,s.useMemo)(()=>({...l}),[l]);if(_==="multiple"){const{checked:H,onChange:J,...R}=A;return(0,i.jsxs)("label",{...N,"arc-dropdown-item":"multi-select","has-start-slot":S,"has-end-slot":T,children:[(0,i.jsx)(nl,{id:v,role:"menuitemcheckbox",checked:H===!0,indeterminate:H==="mixed",disabled:!!w,onClick:o?M=>o(M.nativeEvent):void 0,onChange:J,onKeyDown:F$}),a,(0,i.jsx)(k,{...R,"is-item-content":"interactive"}),t]})}if(_==="single"){const{"aria-checked":H,...J}=A,R=H===!0,M=(0,i.jsxs)(i.Fragment,{children:[t,R?(0,i.jsx)(zr,{"arc-dropdown-single-select-check":"",icon:B$}):(0,i.jsx)("span",{"arc-dropdown-single-select-spacer":""})]});return(0,i.jsxs)(Lr,{...D,role:"menuitemradio","aria-checked":R,"aria-disabled":w?"true":void 0,isDisabled:!!w,_isCustom:!0,"arc-dropdown-item":"single-select","has-start-slot":S,"has-end-slot":R||t?"":void 0,children:[C&&a,(0,i.jsx)(k,{...J,"is-item-content":"interactive"}),C&&M]})}return I?(0,i.jsxs)(Lr,{...D,role:g?"menuitem":l?.role,"aria-disabled":w?"true":void 0,isDisabled:!!w,_isCustom:!0,"arc-dropdown-item":y??"","has-start-slot":S,"has-end-slot":T,children:[C&&a,(0,i.jsx)(k,{...A,"is-item-content":"interactive"}),C&&t]}):(0,i.jsxs)("div",{...N,"arc-dropdown-item":y??"","has-start-slot":S,"has-end-slot":T,children:[C&&a,(0,i.jsx)(k,{...A,"is-item-content":"inert"}),C&&t]})},H$=d`--arc•dropdown`,V$=d`${H$}•menu`,Me=d`${V$}•item`,U$=d`
@layer arc-components {

  /* ITEM SETUP ----------------------------------------------------• */

  [arc-dropdown-item] {
    ${Me}•padding: var(${j}•8) var(${j}•12);
    ${Me}•min•height: var(${m}•36);
    ${Me}•gap: var(${j}•8);

    &[arc-dropdown-item=text-detail] {
      ${Me}•min•height: var(${m}•48);
    }

    &[arc-dropdown-item=section-label] {
      ${Me}•min•height: var(${m}•32);
    }

    &[arc-dropdown-item=user] {
      ${Me}•min•height: var(${m}•40);

      &:not([has-start-slot]) {
        ${Me}•padding: var(${j}•8) var(${j}•12) var(${j}•8) var(${j}•10);
      }
    }

    &[arc-dropdown-item=user-detail] {
      ${Me}•min•height: var(${m}•48);

      &:not([has-start-slot]) {
        ${Me}•padding: var(${j}•8) var(${j}•12) var(${j}•8) var(${j}•6);
      }
    }

    &[arc-dropdown-item=divider] {
      ${Me}•min•height: var(${m}•8);
      ${Me}•padding: 0;
    }
  }

  /* DROPDOWN ELEMENTS ---------------------------------------------• */

  [arc-dropdown] {
    --arc-popover-font-size: initial;
    --arc-popover-width: var(--arc-dropdown-width, auto);
    --arc-popover-min-width: var(--arc-dropdown-min-width, 3em);
    --arc-popover-max-width: var(--arc-dropdown-max-width, 50em);
    --arc-popover-padding: var(--arc-dropdown-padding, 0em);
    --arc-popover-body-padding: var(--arc-dropdown-body-padding, 0em);
    --arc-popover-outline-size: 0em;
    --arc-popover-overflow: var(--arc-dropdown-overflow, auto);

    --arc-menu-item-gap: var(${Me}•gap);
    --arc-badge-align-self: center;
    --arc-badge-count-align-self: center;
  }

  [arc-dropdown-submenu] {
    &:where([anchor-at="left-start"], [anchor-at="right-start"]) {
      margin-top: var(--arc-dropdown-submenu-offset, var(${j}•4m));
    }

    &:where([anchor-at="left-end"], [anchor-at="right-end"]) {
      margin-top: var(--arc-dropdown-submenu-offset, var(${j}•4));
    }
  }

  [arc-dropdown-item] {
    flex: 1;
    display: flex;
    align-items: center;
    gap: var(${Me}•gap);
    text-align: start;
    min-height: var(${Me}•min•height);

    &:not([arc-button]) {
      padding: var(${Me}•padding);
      max-width: 100%;
    }

    &[arc-button] {
      --arc-button-padding: var(${Me}•padding);
      --arc-button-min-height: var(${m}•40);
    }

    &[arc-dropdown-item=section-label] {
      color: var(--arc-dropdown-section-label-color, var(--arc-color-fg-secondary));
    }

    [is-item-content] {
      flex: 1;
    }

    [arc-dropdown-submenu-icon] {
      --arc-icon-color: var(--arc-dropdown-submenu-icon-color, var(--arc-color-fg-secondary));
    }

    [arc-dropdown-single-select-check] {
      --arc-icon-color: var(--arc-dropdown-single-select-check-color, var(--arc-color-fg-accent));
    }

    [arc-dropdown-single-select-spacer] {
      width: 1.375em;
    }
  }

  /* A selected row's start/end slots reflected into the trigger's label (see selectionAnchor). Both
     ride in the button's auto-width label area — the start group ahead of the label, the end after it —
     so the icon/avatar sizes itself and there's no reach into the button's icon slot. Each is spaced
     from the label by the lg button's icon/label gap token. */
  [arc-dropdown-selected-start],
  [arc-dropdown-selected-end] {
    display: inline-flex;
    align-items: center;
    vertical-align: middle;
    --arc-badge-align-self: center;
  }

  [arc-dropdown-selected-start] {
    gap: var(${m}•8);
    margin-inline-end: var(${m}•8);
  }

  [arc-dropdown-selected-end] {
    margin-inline-start: var(${m}•8);
  }

}
`,bn={OFFSET:void 0,ANCHOR_AT_LTR:"left-start",ANCHOR_AT_RTL:"right-start",ICON_LTR:"fa-regular fa-angle-right",ICON_RTL:"fa-regular fa-angle-left"},G$=(r,e)=>({anchorAt:r?bn.ANCHOR_AT_LTR:bn.ANCHOR_AT_RTL,offset:e??bn.OFFSET,role:"none","aria-label":void 0}),Mh=(0,s.forwardRef)((r,e)=>(0,i.jsx)(an,{...r,ref:e,"arc-dropdown-menu-button":""})),K$=r=>{const e={...r};return Sh.forEach(a=>{Reflect.deleteProperty(e,a)}),e},W$=r=>r?bn.ICON_RTL:bn.ICON_LTR,cl=r=>{try{r.hidePopover?.()}catch{}},X$=(r,e)=>r===void 0?W$(e):typeof r=="function"?r(e):r,q$=(r,e)=>{(0,s.useEffect)(()=>{const a=r.current;if(!e||!a)return;const t=o=>{const n=o.relatedTarget;n!==null&&(n instanceof Node&&a.contains(n)||n instanceof Element&&n.closest("[popovertarget]")?.getAttribute("popovertarget")===a.id||cl(a))};return a.addEventListener("focusout",t),()=>a.removeEventListener("focusout",t)},[r,e])},ho=r=>{const{items:e,renderItem:a,keepMenuOpen:t,menuProps:o,passiveMode:n,submenuBackNavigation:c,renderSubmenu:l,submenuIcon:u,submenuOffset:h,selectionProps:p,anchorProps:v,ref:g,...f}=r,[b,$]=(0,s.useState)(!1),x=p?.mode,A=p?.value,y=p?.selectAllItemId,k=p?.mode==="single"&&!!p.showsSelection,w=p?.mode==="single"?p.value:null,E=p?.mode==="single"?p.placeholder:void 0,_=p?.showCaret,I=(0,s.useRef)(r);I.current=r;const C=(0,s.useRef)(null),S=(0,s.useMemo)(()=>x?A$(e??[]):null,[x,e]),T=(0,s.useMemo)(()=>x==="multiple"&&S?C$(S,y):[],[x,S,y]),D=(0,s.useRef)(T);D.current=T;const N=(0,s.useCallback)((L,X)=>{const sr=I.current.selectionProps;if(sr?.mode!=="multiple")return;const{selectAllItemId:mr}=sr,rr=Array.isArray(sr.value)?sr.value:[],ur=mr!==void 0&&String(L.itemId)===mr?k$(rr,D.current,mr):w$(rr,String(L.itemId));sr.onSelectionChange?.(ur,X.nativeEvent),L.onClick?.(X.nativeEvent instanceof MouseEvent?X.nativeEvent:void 0)},[]),H=(0,s.useCallback)((L,X)=>{const sr=I.current.selectionProps;if(sr?.mode!=="single")return;const mr=C.current;mr&&cl(yh(mr)??mr);const rr=String(L.itemId);rr!==sr.value&&sr.onSelectionChange?.({value:rr,changedValue:rr,selected:!0,reason:"item"},X),L.onClick?.(X instanceof MouseEvent?X:void 0)},[]);q$(C,!!x&&b);const J=(0,s.useMemo)(()=>!S||!x?e??[]:_$(S,{mode:x,value:A,selectAllItemId:y,enabledSelectableIds:T,onToggle:N,onActivate:H}),[S,x,e,A,N,H,y,T]),R=(0,s.useMemo)(()=>k?{...T$(e,w,{placeholder:E,showCaret:_}),...v}:x==="multiple"&&(_??!0)?{iconEnd:jh,...v}:v,[k,x,e,w,E,_,v]),M=(0,s.useCallback)(L=>{if(typeof document>"u")return;const X=ea(L,C.current);X&&cl(X)},[]),P=(0,s.useCallback)(L=>{C.current=L,Ce(g,L)},[g]),F=(0,s.useCallback)(L=>{const X=I.current,sr=K$(X),mr=L.item.submenuProps?.selectionProps!==void 0,rr=t$(L.item)??(mr?void 0:X.renderItem),{ids:ur}=L,yr=X.keepMenuOpen;if(L.item.renderSubmenu)return L.item.renderSubmenu({items:L.items,renderItem:rr,keepMenuOpen:yr,filterText:L.filterText,passiveMode:L.passiveMode,ids:ur,closeSubmenu:()=>{M(ur.menu)},inheritedFromParent:sr});const{menuProps:lr,popoverPassthrough:wr}=e$(L.item);return(0,i.jsx)(ho,{...sr,...G$(L.isRtl,X.submenuOffset),...wr,id:ur.menu,"arc-dropdown-submenu":"",submenuBackNavigation:a$(ur),alternateAnchorId:ur.trigger,hidePopoverButton:!0,passiveMode:L.passiveMode,items:L.items,renderItem:rr,keepMenuOpen:yr,menuProps:lr})},[M]),or=(0,s.useCallback)((...L)=>{const[X,,sr]=L;if(a)return a(...L);const{ids:mr,isRtl:rr,menuControlId:ur}=sr,{endSlot:yr,...lr}=X,wr=!!mr,V=X$(I.current.submenuIcon,!!rr),K=yr||wr?(0,i.jsxs)(i.Fragment,{children:[yr,wr?(0,i.jsx)(zr,{"arc-dropdown-submenu-icon":"",icon:V}):null]}):void 0;return(0,i.jsx)(Lh,{...lr,selectionMode:wr?void 0:I.current.selectionProps?.mode,id:ur,endSlot:K,...mr?{popoverTarget:mr.menu,popoverTargetAction:"toggle","aria-haspopup":"menu","aria-controls":mr.menu}:{}})},[a]),gr=L=>{$(L.newState==="open"),r?.onToggle?.(L)};return(0,i.jsx)(ga,{...f,anchorProps:R,ref:P,"arc-dropdown":"",variant:"common",onToggle:gr,children:(0,i.jsx)(x$,{...o,"arc-dropdown-menu":"",passiveMode:n,submenuBackNavigation:c,items:J,renderItem:or,isVisible:b,keepMenuOpen:t,renderSubmenu:F})})};Mh.displayName="ArcDropdownButton",ho.Button=Mh,ho.Item=Lh,Cr("ArcDropdownMenu",U$);const Dh=r=>{let e=[];const a=new Set,t=o=>{e=o,a.forEach(n=>n()),r().onSelectionChange?.(o)};return{get mode(){return r().mode},subscribe(o){return a.add(o),()=>{a.delete(o)}},isActive(){return r().activateOnFirstSelect?e.length>0:!0},isSelected(o){return e.includes(o)},toggle(o){const n=e.includes(o),c=r().mode==="single"?n?[]:[o]:n?e.filter(l=>l!==o):[...e,o];t(c)}}},$n=(0,s.createContext)(null),il=()=>(0,s.useContext)($n),Y$=()=>()=>{},Oh=(r,e)=>(0,s.useSyncExternalStore)(r?.subscribe??Y$,()=>r?e(r):!1,()=>!1),sl=r=>Oh((0,s.useContext)($n),e=>r!=null?e.isSelected(r):!1),Nh=()=>Oh((0,s.useContext)($n),r=>r.isActive()),ll=(0,s.createContext)(void 0),Bh=()=>(0,s.useContext)(ll),dl=(0,s.forwardRef)(({children:r,...e},a)=>(0,i.jsx)("div",{...e,ref:a,"arc-card-media":"",children:r}));dl.displayName="ArcCard.Media";const ul=(0,s.forwardRef)(({position:r,direction:e="column",children:a,...t},o)=>(0,i.jsx)("div",{...t,ref:o,"arc-card-media-element":r,"is-row":e==="row"?"":void 0,"is-column":e==="column"?"":void 0,children:a}));ul.displayName="ArcCard.MediaElement";const hl=(0,s.forwardRef)(({children:r,actionSlot:e,showDivider:a,...t},o)=>(0,i.jsxs)("header",{...t,ref:o,"arc-card-header":"","has-divider":a?"":void 0,children:[(0,i.jsx)("div",{"arc-card-header-content":"",children:r}),!!e&&(0,i.jsx)("div",{"arc-card-header-actions":"",children:e})]}));hl.displayName="ArcCard.Header";const pl=(0,s.forwardRef)(({tag:r="div",...e},a)=>(0,s.createElement)(r,{...e,ref:a,"arc-card-body":""}));pl.displayName="ArcCard.Body";const gl=(0,s.forwardRef)(({showDivider:r,...e},a)=>(0,i.jsx)("footer",{...e,ref:a,"arc-card-footer":"","has-divider":r?"":void 0}));gl.displayName="ArcCard.Footer";const yn=(0,s.forwardRef)(({tag:r="a",...e},a)=>(0,s.createElement)(r,{...r==="button"?{type:"button"}:null,...e,ref:a,"arc-card-action-area":""}));yn.displayName="ArcCard.ActionArea";const Qc=(0,s.forwardRef)(({tag:r,level:e=4,href:a,target:t,rel:o,onClick:n,children:c,...l},u)=>{const h=r??`h${e}`,p=a!=null||n!=null;return(0,s.createElement)(h,{...l,ref:u,"arc-card-title":""},p?(0,i.jsx)(yn,{...a!=null?{href:a,target:t,rel:o}:{tag:"button"},onClick:n,children:c}):c)});Qc.displayName="ArcCard.Title";const ri=(0,s.forwardRef)(({value:r,icon:e="fa-regular fa-check",onClick:a,"aria-label":t="Select",style:o,...n},c)=>{const l=Bh(),u=r??l,h=il(),p=sl(u);return(0,i.jsx)(Lr,{ref:c,layout:"icon",variant:"common",hierarchy:"secondary",shape:"square",size:"sm",...n,icon:e,"arc-card-select-toggle":"","aria-label":t,"aria-pressed":p,style:{"--arc-icon-color":p?void 0:"transparent",...o},onClick:v=>{v.stopPropagation(),a?.(v),!v.defaultPrevented&&u!=null&&h?.toggle(u)}})});ri.displayName="ArcCard.SelectionToggle";const vl=({id:r,anchorProps:e,...a})=>{const t=Nr(r,"arc-card-menu");return(0,i.jsx)(ho,{...a,id:t,"arc-card-menu":"",anchorProps:{icon:"fa-regular fa-ellipsis",layout:"icon",variant:"common",hierarchy:"secondary",shape:"square",size:"sm","aria-label":"More options",...e}})};vl.displayName="ArcCard.Menu";const Z$=new Set(["article","section"]),J$=["a[href]","button","input","select","textarea","label",'[role="button"]','[role="link"]','[role="checkbox"]','[role="menuitem"]','[role="menuitemcheckbox"]','[role="menuitemradio"]','[role="tab"]','[contenteditable]:not([contenteditable="false"])'].join(", "),Q$=r=>{let e,a=!1,t=!1;const o=()=>e!=null&&a&&t,n=l=>{s.Children.forEach(l,u=>{o()||!(0,s.isValidElement)(u)||(u.type===Qc?e??=u:u.type===ri?a=!0:u.type===yn&&(t=!0),n(u.props.children))})};n(r);const c=e!=null&&(e.props.href!=null||e.props.onClick!=null);return{title:e,hasClickableTitle:c,hasSelectionToggle:a,hasActionArea:t}},Ya=d`--arc•card`,Fh=d`${Ya}•fg`,Hh=d`${Ya}•bg`,Vh=d`${Ya}•bc`,xn=d`${Ya}•br`,wn=d`${Ya}•fs`,po=d`${Ya}•pad`,go=d`${Ya}•gap`,fl=d`${Ya}•divider`,ml=d`${Ya}•lift`,r1=d`
  ${Fh}: var(--arc-color-fg-primary);
  ${Hh}: var(--arc-color-bg-primary);
  ${Vh}: var(--arc-color-border-mid);
  ${fl}: var(${m}•1) solid var(--arc-color-border-mid);

  /* size = master scaling axis: font → radius → padding → gap */
  &[data-size=inherit] {
    ${wn}: inherit;
    ${xn}: var(--arc-border-radius-md);
    ${po}: var(${j}•16);
    ${go}: var(${j}•12);
  }

  &[data-size=lg] {
    ${wn}: var(${m}•16);
    ${xn}: var(${m}•16);
    ${po}: var(${j}•20);
    ${go}: var(${j}•16);
  }

  &[data-size=md] {
    ${wn}: var(${m}•14);
    ${xn}: var(${m}•14);
    ${po}: var(${j}•16);
    ${go}: var(${j}•12);
  }

  &[data-size=sm] {
    ${wn}: var(${m}•12);
    ${xn}: var(${m}•10);
    ${po}: var(${j}•14);
    ${go}: var(${j}•8);
  }
`,e1=d`
  [arc-card]:has([arc-card-media]) {
    anchor-scope: --card-media;
  }

  [arc-card-media] {
    anchor-name: --card-media;
    aspect-ratio: 16 / 9;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1em;

    > img,
    > video,
    > picture,
    > svg {
      display: block;
      max-width: 100%;
      max-height: 100%;
      object-fit: cover;
      line-height: 0;
    }
  }

  [arc-card-media-element] {
    position: absolute;
    position-anchor: --card-media;
    z-index: 1;

    display: flex;
    gap: var(${m}•8);
    margin: 0.75em;

    &[is-row] {
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }

    &[is-column] {
      flex-direction: column;
    }

    &[arc-card-media-element*=top] {
      top: anchor(top);
    }
    &[arc-card-media-element*=bottom] {
      bottom: anchor(bottom);
    }
    &[arc-card-media-element*=left] {
      left: anchor(left);
    }
    &[arc-card-media-element*=right] {
      right: anchor(right);
    }
  }

  [arc-card-header],
  [arc-card-body],
  [arc-card-footer] {
    padding: var(--arc-card-padding, var(${po}));
  }

  /* Bare content with no structural region: pad the root so ad-hoc children aren't flush to the edge.
     When any region is present it owns the padding and the root stays unpadded (keeps dividers
     full-bleed). Media is excluded on purpose — a media-only card bleeds to the radius. */
  &:not(:has(:is([arc-card-media], [arc-card-header], [arc-card-body], [arc-card-footer]))) {
    padding: var(--arc-card-padding, var(${po}));
  }

  [arc-card-header] {
    flex: none;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: var(--arc-card-gap, var(${go}));

    &[has-divider] {
      border-bottom: var(${fl});
    }

    /* shed the gap-facing padding only when a body follows to set the rhythm; a header with no body
       after it (or a divider) keeps full padding so it never collides with the next region */
    &:not([has-divider]):has(+ [arc-card-body]) {
      padding-block-end: 0;
    }
  }

  [arc-card-header-content] {
    flex: 1;
    min-width: 0;
  }

  [arc-card-body] {
    flex: 1;
  }

  [arc-card-footer] {
    flex: none;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: var(--arc-card-gap, var(${go}));
    margin-block-start: auto;

    &[has-divider] {
      border-top: var(${fl});
    }
  }

  /* a footer directly after a body sheds its top padding — the body's own padding sets the gap;
     standalone (no body before it, or a divider) it keeps full padding so regions never collide */
  [arc-card-body] + [arc-card-footer]:not([has-divider]) {
    padding-block-start: 0;
  }

  [arc-card-title] {
    flex: none;
    margin: 0;
  }
`,a1=d`
  /* whole-card control, a card holding an ActionArea, or a card in a selectable set —
     selectable is either the card's own attr or inherited from a selectable ArcCardLayout */
  &:is(a, button),
  &:has([arc-card-action-area]),
  &[is-selectable],
  [arc-card-layout][is-selectable] & {
    cursor: pointer;
  }

  /* hover affordance — also shown on focus; never overrides the selected border */
  &:is(a, button):hover,
  &:is(a, button):focus-visible,
  &:has([arc-card-action-area]):hover,
  &:has([arc-card-action-area]:focus-visible),
  &[is-selectable]:hover,
  [arc-card-layout][is-selectable] &:hover {
    &:not([is-selected]) {
      border-color: var(--arc-color-border-hover);
    }
  }

  /* hover lift + optional background tint (tint yields to the selected tint) */
  &:is(a, button):hover,
  &:has([arc-card-action-area]):hover,
  &[is-selectable]:hover,
  [arc-card-layout][is-selectable] &:hover {
    ${ml}: 0 var(${m}•6) var(${m}•18) rgb(0 0 0 / 0.12);

    &[has-hover-tint]:not([is-selected]) {
      background: var(--arc-color-bg-hover-subtle);
    }
  }

  /* focus ring on the card itself */
  &:has([arc-card-action-area]:focus-visible) {
    outline: var(${m}•2) solid var(--arc-color-border-focus);
    outline-offset: var(${m}•2);
  }

  [arc-card-action-area] {
    color: inherit;
    text-decoration: none;
    outline: none;

    /* neutralize native <button> chrome so a button ActionArea reads as the title text (harmless
       on an <a>, which has none of it) */
    appearance: none;
    margin: 0;
    padding: 0;
    border: none;
    background: none;
    font: inherit;
    text-align: inherit;
    cursor: pointer;

    /* stretched hit-area overlay across the card */
    &::after {
      content: '';
      position: absolute;
      inset: 0;
      z-index: 0;
    }
  }

  /* Keep the suite-owned interactive regions clickable above the overlay. Scoped to the two
     structural slots we control (header actions + footer) and gated on an actual ActionArea, so
     we never impose position/stacking on arbitrary team content. Body content intentionally sits
     *under* the overlay — the documented whole-card hit-target tradeoff (blocks text selection).
     A team needing another control above the overlay lifts it themselves. */
  &:has([arc-card-action-area]) {
    :is([arc-card-header-actions], [arc-card-footer] :is(a, button)) {
      position: relative;
      z-index: 1;
    }
  }
`,t1=d`
  /* Visual selected state only — the accessible state lives on the composed control. */
  &[is-selected] {
    border-color: var(--arc-color-border-selected);

    &::after {
      content: '';
      position: absolute;
      inset: var(${m}•1m);
      z-index: 1;
      pointer-events: none;
      border-radius: inherit;
      outline: var(${m}•2) solid var(--arc-color-border-selected);
      outline-offset: var(${m}•2m);
    }

    &[has-selected-tint] {
      background: var(--arc-color-bg-selected-subtle);
      color: var(--arc-color-fg-on-selected-subtle);
    }
  }

  [arc-card-select-toggle] {
    opacity: 0;
  }

  &[is-selectable] [arc-card-select-toggle],
  &:hover [arc-card-select-toggle],
  &:focus-within [arc-card-select-toggle] {
    opacity: 1;
  }
`,o1=d`
@layer arc-components {

  /* SETUP ---------------------------------------------------------• */

  [arc-card] {
    ${r1}
  }

  /* CORE ----------------------------------------------------------• */

  [arc-card] {
    position: relative;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    text-align: start;
    font-size: initial;
    overflow: hidden;

    /* two independent, composable shadow layers: the selected ring + the hover lift */
    ${ml}: 0 0 transparent;

    color: var(--arc-card-color, var(${Fh}));
    background: var(--arc-card-background, var(${Hh}));
    border: var(--arc-card-border, var(${m}•1) solid var(${Vh}));
    border-radius: var(--arc-card-border-radius, var(${xn}));
    box-shadow: var(${ml});
    transition: background-color 120ms ease, border-color 120ms ease, box-shadow 120ms ease;

    min-width: var(--arc-card-min-width, var(--js•miw, unset));

    > * {
      font-size: var(--arc-card-font-size, var(${wn}));
    }

    ${e1}
    ${a1}
    ${t1}
  }

  /* REDUCED MOTION ------------------------------------------------• */

  @media (prefers-reduced-motion: reduce) {
    [arc-card] {
      transition: none;
    }
  }

}
`,n1=["grid","list","row"],c1=["none",...vr(ve,["xs","sm","md","lg","xl"])],i1=vr(Xr,["common"]),s1=vr(ve,["inherit","sm","md","lg"]),l1=n1,d1=c1,u1=({children:r,tag:e,variant:a="common",size:t="md",hasHoverTint:o=!0,hasSelectedTint:n=!0,isSelectable:c,isSelected:l,value:u,onClick:h,onKeyDown:p,role:v,tabIndex:g,"aria-label":f,"aria-labelledby":b,"aria-checked":$,...x},A)=>{const y=e??"div",k=il(),w=k!=null&&u!=null,E=sl(u),_=Nh(),I=w&&_,C=l??(I?E:!1),S=c??I,T=h,D=p,N=I?X=>{if(T?.(X),X.defaultPrevented)return;const sr=X.target?.closest(J$);sr&&sr!==X.currentTarget||k.toggle(u)}:T,H=I?X=>{D?.(X),!(X.defaultPrevented||X.target!==X.currentTarget)&&(X.key===" "||X.key==="Enter")&&(X.preventDefault(),k.toggle(u))}:D,J=y==="a"||y==="button",R=typeof y=="string"&&Z$.has(y),M=!f&&!b,P=I&&!J,F=P||R&&M?Q$(r):void 0,or=P&&!F?.hasSelectionToggle&&!F?.hasActionArea&&!F?.hasClickableTitle,L=(R||or)&&M&&F?.title&&Zt(F.title.props.children)||void 0;return(0,s.createElement)(y,{...x,ref:A,onClick:N,onKeyDown:H,"arc-card":"","data-variant":a,"data-size":t,"aria-label":f??L,"aria-labelledby":b,role:v??(or?"checkbox":void 0),tabIndex:g??(or?0:void 0),"aria-checked":$??(or?C:void 0),"has-hover-tint":o?"":void 0,"has-selected-tint":n?"":void 0,"is-selectable":S?"":void 0,"is-selected":C?"":void 0},(0,s.createElement)(ll.Provider,{value:u},r))},Uh=(0,s.forwardRef)(u1);Uh.displayName="ArcCard";const h1=Object.assign(Uh,{Media:dl,MediaElement:ul,Header:hl,Body:pl,Footer:gl,Title:Qc,ActionArea:yn,SelectionToggle:ri,Menu:vl});Cr("ArcCard",o1);const p1=d`--arc•layout`,_a=d`${p1}•gap`,g1=d`
@layer arc-components {

  /* SETUP -----------------------------------------------------------• */

  [arc-layout] {
    padding: var(--arc-layout-padding, 0em);
    font-size: initial;

    /* Box-alignment, override-first with the component's system var; unset → CSS default (the
       var() resolves to the property's initial value). Harmless in whichever mode ignores them. */
    align-items: var(--arc-layout-align-items, var(--js•align));
    justify-content: var(--arc-layout-justify•content, var(--js•justify));
    justify-items: var(--arc-layout-justify•items, var(--js•justify•items));
    align-content: var(--arc-layout-align•content, var(--js•align•content));

    &[data-gap=none] { ${_a}: 0em; }
    &[data-gap=xs] { ${_a}: 0.125em; }
    &[data-gap=sm] { ${_a}: 0.5em; }
    &[data-gap=md] { ${_a}: 0.875em; }
    &[data-gap=lg] { ${_a}: 1.5em; }
    &[data-gap=xl] { ${_a}: 2em; }
    &[data-gap=number] { ${_a}: var(--js•gap, 0em); }
  }

  [arc-layout=row] {
    display: flex;
    flex-direction: var(--arc-layout-direction, row);
    gap: var(--arc-layout-gap, var(${_a}));

    &[can-wrap] {
      flex-wrap: wrap;
    }
  }

  [arc-layout=list] {
    display: flex;
    flex-direction: var(--arc-layout-direction, column);
    gap: var(--arc-layout-gap, var(${_a}));
  }

  [arc-layout=grid] {
    display: grid;
    grid-template-columns: var(--arc-layout-columns, var(--js•cols, 1fr));
    gap: var(--arc-layout-gap, var(${_a}));
  }

}
`,v1=(r,e)=>[{test:()=>e&&!r,value:`repeat(auto-fill, minmax(${e}, 1fr))`},{test:()=>e&&bc(r)&&r>0,value:`repeat(${r}, minmax(${e}, min-content))`},{test:()=>bc(r)&&r>0&&!e,value:`repeat(${r}, minmax(0, 1fr))`},{test:()=>At(r)&&(!e||e==="0em"),value:r},{test:()=>!0,value:void 0}],f1=(r,e)=>v1(r,e).find(a=>a.test())?.value,Gh=r=>{if(!r)return[void 0,void 0];const[e,a]=r.trim().split(/\s+/);return[e,a??e]},m1=({mode:r,gap:e,minItemWidth:a,columns:t,canWrap:o,alignItems:n,justifyItems:c,alignContent:l,justifyContent:u,placeItems:h,placeContent:p,tag:v="div",style:g,...f})=>{const b=r==="grid"?f1(t,a):void 0,$=r==="row"&&!!a,x=bc(e)&&e>0,[A,y]=Gh(h),[k,w]=Gh(p),E={"--js\u2022align":n??A,"--js\u2022justify":u??w,"--js\u2022justify\u2022items":c??y,"--js\u2022align\u2022content":l??k},_={...g,...b?{"--js\u2022cols":b}:{},...x?{"--js\u2022gap":`max(${e}px, ${e} / 16 * 1em)`}:{},...$?{"--js\u2022miw":a}:{},...Object.fromEntries(Object.entries(E).filter(([,I])=>I!=null))};return(0,i.jsx)(v,{...f,"arc-layout":r,"data-gap":x?"number":e??void 0,"can-wrap":o?"":void 0,style:_})};Cr("ArcLayout",g1);const b1=r=>r===!0?"multiple":r==="single"||r==="multiple"?r:void 0,$1=({mode:r="grid",gap:e="md",role:a,isSelectable:t,onSelectionChange:o,activateOnFirstSelect:n=!1,...c})=>{const l=b1(t),u=(0,s.useRef)({mode:"multiple",activateOnFirstSelect:n,onSelectionChange:o});u.current={mode:l??"multiple",activateOnFirstSelect:n,onSelectionChange:o};const h=(0,s.useRef)(null);l&&!h.current?h.current=Dh(()=>u.current):!l&&h.current&&(h.current=null);const p=h.current,v=(0,s.useSyncExternalStore)(p?.subscribe??(()=>()=>{}),()=>p?.isActive()??!1,()=>!1),g=(0,i.jsx)(m1,{...c,"arc-card-layout":"",...v?{"is-selectable":""}:{},mode:r,gap:e,role:a??(r==="row"?"group":void 0)});return p?(0,i.jsx)($n.Provider,{value:p,children:g}):g},vo=()=>{},Tt=d`--arc•cb`,Ie=d`${Tt}•o`,bl=d`${Ie}•icon`,$l=d`${Ie}•text`,Kh=d`${Tt}•fs`,Wh=d`${Tt}•br`,yl=d`${Tt}•di`,Xh=d`${Tt}•pd`,qh=d`${Tt}•gp`,Yh=d`${Tt}•bg`,kn=d`${Ie}•fg`,ei=d`${Ie}•bg`,Zh=d`${Ie}•bc`,xl=d`${Ie}•bw`,ai=d`${Ie}•br`,Jh=d`${Ie}•fw`,Qh=d`${Ie}•ol`,rp=d`${Ie}•ow`,ep=d`${Ie}•oo`,ap=d`${Ie}•lh`,ti={BAR:d`
    ${Kh}: var(${m}•14);
    ${Wh}: var(${m}•8);

    &:is([data-layout=hug], :not([data-layout])) { /** @default */
      ${yl}: inline-flex;
    }

    &[data-layout=fill] {
      ${yl}: flex;
    }
  `,OPTIONS:d`
    ${kn}: var(--arc-color-fg-secondary);
    ${ei}: transparent;
    ${Zh}: transparent;
    ${xl}: var(${m}•1);
    ${ap}: calc(var(${Ie}•sz) - var(${xl}) * 2);
    ${rp}: var(${m}•2);
    ${ep}: 0;
  `,SOLID:d`
    ${Yh}: transparent;
    ${Xh}: 0;
    ${qh}: var(${m}•2);

    ${ai}: var(${m}•8);

    /* Solid densities */
    &:is([data-density=comfortable], :not([data-density])) {
      ${Ie}•sz: var(${m}•40);
      ${bl}•pd: var(${m}•8);
      ${$l}•pd: var(${m}•12);
    }

    /* [data-size=md] is a deprecated alias — remove with barDensity.deprecated.ts */
    &:is([data-density=compact], [data-size=md]:not([data-density])) {
      ${Ie}•sz: var(${m}•32);
      ${bl}•pd: var(${m}•6);
      ${$l}•pd: var(${m}•8);
    }
  `,SOLID_OPTION_STATES:d`
    &:not(:has(:disabled, :checked)) {
      &:hover {
        ${kn}: var(--arc-color-fg-on-hover-default);
        ${ei}: var(--arc-color-bg-hover-default);
      }
    }

    &:has(:checked) {
      ${kn}: var(--arc-color-fg-primary);
      ${ei}: var(--arc-color-bg-secondary);
      ${Jh}: var(--arc-font-weight-500);
    }

    &:has(:disabled) {
      ${kn}: var(--arc-color-fg-disabled);
    }

    &:has(:focus-within:focus-visible) {
      ${Qh}: var(${rp}) solid var(--arc-color-border-focus);
    }
  `},y1=d`
@layer arc-components {

  [arc-checkbox-bar] {
    ${ti.BAR}
    ${ti.OPTIONS}

    /* Inter-Component Communication -------------------------------• */
    --arc-label-opacity-disabled: 1; /* intrinsic disabled opacity not needed here; letting tokens handle it */
    --arc-label-align-items: stretch; /* control ArcLabel's vertical footprint;
                                        allows long label text to wrap
                                        without compromising option's
                                        visual border */

    ${ti.SOLID}

    [arc-checkbox-bar-option] {
      ${ti.SOLID_OPTION_STATES}
    }
  }

  /* CORE STYLES ---------------------------------------------------- */
  [arc-checkbox-bar-option] {
    flex: 1 1 auto;
    display: flex;
    position: relative;
    border-radius: var(${ai});
  }

  [arc-checkbox-bar]:not([hidden]) {
    font-size: var(--arc-checkbox-bar-font-size, var(${Kh}));
    display: var(${yl});
    gap: var(${qh});
    background: var(${Yh});
    border-radius: var(${Wh});
    padding: var(${Xh});
    margin: 0;

    [arc-checkbox] {
      flex: 1;
      display: flex;
      justify-content: center;
      border-radius: var(${ai});
      outline: var(${Qh}, none);
      outline-offset: var(${ep});
    }

    /* INPUT ELEMENT -----------------------------------------------• */
    [arc-input-type=checkbox] {
      position: absolute;
      appearance: none;
      pointer-events: none;
      opacity: 0;
    }

    /* Inter-Component Communication -------------------------------• */
    [arc-label] {
      flex: 1;
      line-height: var(${ap});
      overflow: hidden;
    }

    [arc-label-content] {
      flex: 1;
      display: flex;
      align-items: safe center;
      justify-content: center;

      height: var(${Ie}•sz);
      min-width: var(${Ie}•sz);

      border-radius: var(${ai});
      border: var(${xl}) solid var(${Zh});
      background: var(${ei});
      color: var(${kn});
      font-weight: var(${Jh}, unset);

      transition-duration: 200ms;
      transition-timing-function: ease-out;
      transition-property:
        border,
        background,
        color,
        font-weight;

      &:has([data-element=text]) {
        padding: 0 var(${$l}•pd);
      }

      &:not(:has([data-element=text])) {
        padding: 0 var(${bl}•pd);
      }
    }

    [arc-icon-text] [data-element] {
      min-width: min-content;
      overflow: hidden;
      overflow-wrap: break-word;
    }
  }

}
`,x1=vr(sa,["hug","fill"]),w1=Ho,k1=vr(Xr,["solid"]),A1=Vo,tp=({children:r,label:e,icon:a,...t})=>{const o=r||(0,i.jsx)(le,{icon:a,text:e});return(0,i.jsx)("li",{"arc-checkbox-bar-option":"","data-is-checked":t?.checked||void 0,children:(0,i.jsx)(nl,{...t,layout:"fill",useMask:!1,label:o,onChange:t.onChange??vo})})},C1=({children:r,density:e,size:a,layout:t="hug",variant:o="solid",name:n,options:c,values:l,isDisabled:u,onChange:h,...p})=>{const v=Nr(n,"arc-checkbox-bar"),g=e??Kt(a)??"comfortable";return(0,i.jsx)("ul",{...p,"arc-checkbox-bar":"","data-density":g,"data-size":nt(g),"data-layout":t,"data-variant":o,"is-disabled":u?"":void 0,role:"group",children:c?c.map(({hidden:f,onChange:b,value:$,...x})=>f||$==null||$===""?null:(0,s.createElement)(tp,{...x,key:String($),name:v,value:$,checked:l?.includes($)??!1,disabled:u||x.disabled,onChange:b??h??vo})):r})};Cr("ArcCheckboxBar",y1);const Ta=d`--arc•chip`,An=d`${Ta}•fg`,Cn=d`${Ta}•bg`,Sn=d`${Ta}•border`,oi=d`${Ta}•height`,ni=d`${Ta}•padding`,ci=d`${Ta}•leading•edge`,ii=d`${Ta}•dismiss•edge`,wl=d`${Ta}•avatar•gap`,si=d`${Ta}•icon•gap`,li=d`${Ta}•dismiss•gap`,S1=d`:where(:hover, [data-simulate=hover], :has([data-simulate=hover]))`,z1=d`:not([is-selected], [is-disabled])`,E1=d`
  ${An}: var(--arc-chip-color, var(--arc-color-fg-primary));
  ${Cn}: var(--arc-chip-background, var(--arc-color-bg-primary));
  ${Sn}: var(--arc-chip-border-color, var(--arc-color-border-mid));
  ${wl}: ${jr(6)};
`,_1=d`
  &[data-size=sm] {
    ${oi}: ${jr(24)};
    ${ni}: ${jr(8)};
    ${ci}: ${jr(1)};
    ${ii}: 0;
    ${si}: ${jr(4)};
    ${li}: 0;
  }

  &[data-size=md] {
    ${oi}: ${jr(32)};
    ${ni}: ${jr(12)};
    ${ci}: ${jr(3)};
    ${ii}: ${jr(3)};
    ${si}: ${jr(8)};
    ${li}: ${jr(2)};
  }

  &[data-size=lg] {
    ${oi}: ${jr(40)};
    ${ni}: ${jr(16)};
    ${ci}: ${jr(3)};
    ${ii}: ${jr(7)};
    ${si}: ${jr(8)};
    ${li}: ${jr(4)};

    &[has-dismiss] {
      ${wl}: ${jr(8)};
    }
  }
`,T1=d`
  /* WRAPPER — visible pill ----------------------------------------• */
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
  gap: var(${li});
  height: var(${oi});
  border-radius: var(--arc-border-radius-pill);
  border: var(--arc-border-width-sm) solid var(${Sn});
  background: var(${Cn});
  color: var(${An});
  font-family: var(--arc-font-family-body);
  font-size: var(--arc-chip-font-size, initial);
  transition:
    background-color 200ms ease-out,
    border-color 200ms ease-out,
    color 200ms ease-out;

  &:has([arc-chip-body]:focus-visible) {
    outline: var(--arc-border-width-md) solid var(--arc-color-border-focus);
    outline-offset: var(--arc-border-width-md);

    [arc-chip-body]:focus-visible { outline: none; }
  }
`,I1=d`
  /* BODY — content surface + inner slots --------------------------• */
  [arc-chip-body] {
    flex: 1;
    appearance: none;
    display: inline-flex;
    align-items: center;
    height: 100%;
    padding: 0 var(${ni});
    margin: 0;
    background: transparent;
    border: none;

    /* Asymmetric left padding when an avatar is present — matches the avatar's vertical inset. */
    &:has([arc-avatar-text]) {
      padding-inline-start: var(${ci});
    }

    /* Inter-Component Communication • ArcAvatarText ------------• */
    --arc-avatar-text-gap: var(${wl});

    /* Inter-Component Communication • ArcIconText --------------• */
    --arc-icon-text-gap: var(${si});
    --arc-icon-text-line-height: var(--arc-line-height-tight);
  }

  /* When a dismiss sibling is present, pull body flush right and reserve outer space for it. */
  &[has-dismiss] {
    padding-inline-end: var(${ii});
    [arc-chip-body] { padding-inline-end: 0; }
  }
`,P1=d`
  /* DISMISS — sibling of body -------------------------------------• */
  [data-slot=dismiss]:where(:hover, [data-simulate=hover]) {
    background: var(--arc-color-alpha-subtle);
  }
`,R1=d`
  /* INTERACTIVE — only set on interactive wrappers ----------------• */
  &[is-interactive] {
    cursor: pointer;
    user-select: none;

    [arc-chip-body] {
      color: inherit;
      cursor: inherit;
    }

    &${S1}${z1} {
      ${Cn}: var(--arc-color-bg-hover-default);
      ${Sn}: var(--arc-color-border-hover);
    }
  }

  /* SELECTED ------------------------------------------------------• */
  &[is-selected] {
    ${Cn}: var(--arc-color-bg-blue-muted);
    ${Sn}: var(--arc-color-border-selected);
    ${An}: var(--arc-color-fg-brand-heavy);
  }

  /* DISABLED ------------------------------------------------------• */
  &[is-disabled] {
    ${Cn}: transparent;
    ${Sn}: var(--arc-color-border-disabled);
    ${An}: var(--arc-color-fg-disabled);
    cursor: not-allowed;
  }
`,j1=d`
  &:where([data-variant=ai]) {
    background: var(--arc-gradient-ai-50);

    &[is-selected] {
      background: var(--arc-gradient-ai-100) padding-box, var(--arc-gradient-ai-200) border-box;
      border-color: transparent;
      ${An}: var(--arc-color-fg-primary);
    }
  }
`,L1=d`
@layer arc-components {

  [arc-chip]:not([hidden]) {
    /* SETUP --------------------------------------------------------• */
    ${E1}

    /* SIZES --------------------------------------------------------• */
    ${_1}

    /* CORE STYLES --------------------------------------------------• */
    ${T1}

    /* BODY ---------------------------------------------------------• */
    ${I1}

    /* DISMISS ------------------------------------------------------• */
    ${P1}

    /* STATES -------------------------------------------------------• */
    ${R1}

    /* VARIANTS -----------------------------------------------------• */
    ${j1}
  }

}
`,M1=vr(Xr,["common","ai"]),D1=Vr(ve,["sm","md","lg"]),O1={sm:"xs",md:"sm",lg:"md"},N1={sm:"sm",md:"md",lg:"md"},kl={variant:"common",size:"md"},B1=({children:r,text:e,variant:a=kl.variant,size:t=kl.size,isSelected:o,isDisabled:n,isStrong:c,icon:l,isFlipped:u,avatar:h,onClick:p,onDismiss:v,dismissProps:g,...f})=>{const b=p!==void 0||o!==void 0,$=b?"button":"span",x=r||e,A=!!h,y=!!l;return(0,i.jsxs)("span",{...f,"arc-chip":"","data-size":t,"data-variant":a,"is-selected":o?"":void 0,"is-disabled":n?"":void 0,"is-interactive":b?"":void 0,"has-dismiss":v?"":void 0,children:[(0,i.jsx)($,{"arc-chip-body":"",...b&&{type:"button",disabled:n,"aria-pressed":o,"aria-disabled":n||void 0,onClick:n?void 0:p},children:A?(0,i.jsx)(Wc,{avatar:{...h,isActive:!n},isStrong:c,size:O1[t],overflow:"truncate",children:x}):(y||x)&&(0,i.jsx)(le,{icon:l,isFlipped:u,isStrong:c,size:N1[t],overflow:"truncate",children:x})}),v&&(0,i.jsx)(Lr,{"aria-label":typeof e=="string"?`Remove ${e}`:"Dismiss",icon:"fa-regular fa-xmark",...g,layout:"icon",hierarchy:"tertiary",shape:"round",size:"sm","data-slot":"dismiss",disabled:n,onClick:k=>{g?.onClick?.(k),v()}})]})};Cr("ArcChip",L1);const F1=["normal","simple","add","edit"],H1=["solid","gradient"],V1=["swatch","gradient-stop","gradient"],U1=["standalone","embedded"],G1=["none","header","tools"],di=["gradient-field","gradient-stops","angle-slider","angle-presets"],Al=["color-field","eye-dropper","hue-slider","alpha-slider","alpha-input","hex-input","palettes"],op=["eye-dropper","alpha-slider","hex-input","palettes"],K1=[...Al,...di],np=r=>r.kind==="gradient",cp=r=>r.activePanel==="solid",W1=r=>r.activePanel==="gradient",X1=r=>r.activePanel==="none",pe={colorPicker:"Color Picker",heading:"Color",panelSolid:"Solid",panelGradient:"Gradient",colorField:"Color Saturation and Value",saturation:"Saturation",value:"Value",colorFieldReadout:(r,e)=>`Saturation ${r}%. Value ${e}%.`,hue:"Hue",hueValue:r=>`Hue ${r}\xB0`,opacity:"Opacity",opacityValue:r=>`Opacity ${r}%`,hex:"Hex",unsetColor:"Unset color",unsetColorPlaceholder:"...",hexInvalid:"Please enter six hex digits \u2192 A1B2C3",hexRgbOnly:"Use six hex digits (RGB only). Opacity is not available.",hexExpandHint:r=>`Please enter six hex digits \u2192 ${r}.`,hexApplyAlphaHint:(r,e)=>`Change to \u2192 #${r} at ${e}% opacity?`,applyExpandedHex:"Apply expanded six-digit hex",applyExpandedHexValue:r=>`Apply expanded hex ${r}`,applyHexWithAlpha:(r,e)=>`Apply #${r} and ${e}% opacity`,eyeDropper:"Dropper",eyeDropperTooltip:"Pick a color",colorPalette:"Color palette",addSwatch:"Add Swatch",addCurrentColor:"Add Current Color",saveColor:"Save Color",save:"Save",cancel:"Cancel",done:"Done",removeColor:"Remove color",removeGradient:"Remove gradient",gradient:"Gradient",gradientStops:"Stops",addGradient:"Add Gradient",stopPosition:r=>`Stop ${r} position`,addColorStop:"Add Color Stop",editColorStop:"Edit Color Stop",insertColorStop:"Insert Color Stop",removeColorStop:"Remove Color Stop",distributeColorStops:"Distribute Color Stops",angle:"Angle",gradientAngle:"Gradient angle",gradientAngleOption:r=>`${r}\xB0`},ui=r=>r?{...pe,...r}:pe,q1=1e-10,hi=1e-6,R2=1e-4,ip=2,ar=(r,e,a)=>Math.min(a,Math.max(e,r)),$a=(r,e)=>{const a=10**e;return Math.round(r*a)/a},sp=(r,e=hi)=>Math.abs(r)<e?0:Math.abs(1-r)<e?1:r,Y1=r=>{if(!Number.isFinite(r)||r<=0)return ip;let e=r,a=0;for(;a<12;){const t=Math.round(e);if(Math.abs(e-t)<q1)return a;e*=10,a+=1}return ip},Z1=(r,e,a,t)=>[{test:e<0&&a>=0,value:(r<0?Math.abs(e):a)>0?$a(r/(r<0?Math.abs(e):a)*100,t):0},{test:a<0,value:e<0?$a(r/Math.abs(e)*100,t):0},{test:e>=0,value:a>0?$a(r/a*100,t):0}].find(({test:o})=>o)?.value??0,lp=({value:r,min:e=0,max:a=100,step:t=1,precision:o})=>{const n=Number(e),c=Number(a),l=Math.min(n,c),u=Math.max(n,c),h=Number(t),p=Number(r),v=u-l,g=Number.isFinite(h)&&h>0&&v>0?h/v*100:0,f=o??Y1(g),b=ar(p,l,u),$=v===0?0:(b-l)/v,x=$a($*100,f),A=$a(100-x,f),y=Z1(b,l,u,f);return{toValue:x,fromValue:A,pctSigned:y}},zn=r=>parseInt(r,16),$e=r=>ar($a(r,0),0,255),Cl=r=>$a((r%360+360)%360,2),dp=(r,e)=>sp($a(ar(r,0,1),e)),Ge=r=>{const e=(r.h%360+360)%360,a=ar(r.s,0,1),t=ar(r.v,0,1),o=ar(r.a,0,1),n=t*a,c=n*(1-Math.abs(e/60%2-1)),l=t-n;let u=0,h=0,p=0;return e<60?[u,h,p]=[n,c,0]:e<120?[u,h,p]=[c,n,0]:e<180?[u,h,p]=[0,n,c]:e<240?[u,h,p]=[0,c,n]:e<300?[u,h,p]=[c,0,n]:[u,h,p]=[n,0,c],{r:(u+l)*255,g:(h+l)*255,b:(p+l)*255,a:o}},pi=(r,e)=>{const a=ar(r.r,0,255)/255,t=ar(r.g,0,255)/255,o=ar(r.b,0,255)/255,n=Math.max(a,t,o),c=Math.min(a,t,o),l=n-c,u=n===0?0:l/n,h=n;let p=e??0;return l>1e-10?(n===a?p=60*((t-o)/l%6):n===t?p=60*((o-a)/l+2):p=60*((a-t)/l+4),p<0&&(p+=360)):p=(p%360+360)%360,{h:p,s:u,v:h,a:ar(r.a,0,1)}},up=r=>{const e=(r.h%360+360)%360,{s:a}=r,{l:t}=r,o=(1-Math.abs(2*t-1))*a,n=o*(1-Math.abs(e/60%2-1)),c=t-o/2;let l=0,u=0,h=0;return e<60?[l,u,h]=[o,n,0]:e<120?[l,u,h]=[n,o,0]:e<180?[l,u,h]=[0,o,n]:e<240?[l,u,h]=[0,n,o]:e<300?[l,u,h]=[n,0,o]:[l,u,h]=[o,0,n],{r:(l+c)*255,g:(u+c)*255,b:(h+c)*255,a:r.a}},hp=r=>{const e=r.r/255,a=r.g/255,t=r.b/255,o=Math.max(e,a,t),n=Math.min(e,a,t),c=o-n;let l=0;c!==0&&(o===e?l=60*((a-t)/c%6):o===a?l=60*((t-e)/c+2):l=60*((e-a)/c+4)),l<0&&(l+=360);const u=(o+n)/2,h=c===0?0:c/(1-Math.abs(2*u-1));return{h:l,s:h,l:u,a:r.a}},pp=r=>{const e=It(r.r),a=It(r.g),t=It(r.b),o=.4122214708*e+.5363325363*a+.0514459929*t,n=.2119034982*e+.6806995451*a+.1073969566*t,c=.0883024619*e+.2817188376*a+.6299787005*t,l=Math.cbrt(o),u=Math.cbrt(n),h=Math.cbrt(c),p=.2104542553*l+.793617785*u-.0040720468*h,v=1.9779984951*l-2.428592205*u+.4505937099*h,g=.0259040371*l+.7827717662*u-.808675766*h,f=Math.sqrt(v*v+g*g);let b=Math.atan2(g,v)*180/Math.PI;return b<0&&(b+=360),{L:ar(p,0,1),C:f,h:b,a:ar(r.a,0,1)}},gp=r=>{const e=ar(r.L,0,1),a=r.h*Math.PI/180,t=r.C*Math.cos(a),o=r.C*Math.sin(a),n=e+.3963377774*t+.2158037573*o,c=e-.1055613458*t-.0638541728*o,l=e-.0894841775*t-1.291485548*o,u=n*n*n,h=c*c*c,p=l*l*l,v=4.0767416621*u-3.3077115913*h+.2309699292*p,g=-1.2684380046*u+2.6097574011*h-.3413193965*p,f=-.0041960863*u-.7034186147*h+1.707614701*p,b=$=>{const x=$<=.0031308?$*12.92:1.055*$**.4166666666666667-.055;return Math.round(ar(x,0,1)*255)};return{r:b(v),g:b(g),b:b(f),a:ar(r.a,0,1)}},It=r=>{const e=$e(r)/255;return e<=.04045?e/12.92:((e+.055)/1.055)**2.4},vp=r=>{const e=It(r.r),a=It(r.g),t=It(r.b);return .2126*e+.7152*a+.0722*t},gi=(r,e)=>{const a=r.a+e.a*(1-r.a);if(a<=0)return{r:0,g:0,b:0,a:0};const t=r.a/a,o=e.a*(1-r.a)/a;return{r:$e(r.r*t+e.r*o),g:$e(r.g*t+e.g*o),b:$e(r.b*t+e.b*o),a:dp(a,2)}},En=(r,e,a,t)=>{const o=t?t(r):r,n=t?t(e):e;return Math.abs(o-n)<=a},fo=(r,e,a)=>En(r,e,a,Math.round),Sl=(r,e,a)=>En(r,e,a),vi=(r,e)=>!e||!r?!1:fo(r.r,e.r,1)&&fo(r.g,e.g,1)&&fo(r.b,e.b,1)&&Sl(r.a,e.a,1/255+hi),fp=(r,e)=>!r||!e?!1:$e(r.r)===$e(e.r)&&$e(r.g)===$e(e.g)&&$e(r.b)===$e(e.b)&&Math.abs(r.a-e.a)<hi,J1=(r,e)=>!e||!r?!1:fo(r.r,e.r,3)&&fo(r.g,e.g,3)&&fo(r.b,e.b,3)&&Sl(r.a,e.a,.02),Q1=(r,e)=>En(r.h,e.h,1e-4)&&En(r.s,e.s,1e-4)&&En(r.v,e.v,1e-4)&&Sl(r.a,e.a,1e-4),zl=r=>String(Math.round(ar(r,0,1)*100)),mp=r=>{const e=r.trim();if(!e)return null;if(e.endsWith("%")){const t=Number(e.slice(0,-1).trim());return Number.isFinite(t)?ar(t/100,0,1):null}if(e.startsWith(".")||e.includes(".")){const t=Number(e);return Number.isFinite(t)?ar(t,0,1):null}const a=Number(e);return Number.isFinite(a)?ar(a/100,0,1):null},fi=r=>ar(Number(r.toFixed(2)),0,1).toString(),ry=/^[0-9a-f]+$/i,ey=500,mo=new Map,El=r=>({...r}),ay=(r,e)=>{if(mo.size>=ey){const a=mo.keys().next().value;a&&mo.delete(a)}mo.set(r,e?El(e):null)},_l=r=>r.split("").map(e=>e+e).join(""),Tl=r=>r.length===3?_l(r):r,Pt=r=>r.replace(/#/g,"").trim(),bp=r=>{const e=r.trim().toLowerCase().replace(/^#/,"");if(![3,4,6,8].includes(e.length))return null;const a=e.length<=4?_l(e):e;if(!ry.test(a))return null;const t=zn(a.slice(0,2)),o=zn(a.slice(2,4)),n=zn(a.slice(4,6)),c=a.length===8?zn(a.slice(6,8))/255:1;return[t,o,n,c].some(l=>Number.isNaN(l))?null:{r:t,g:o,b:n,a:ar(c,0,1)}},Ia=r=>{const e=Number(r.trim());return Number.isFinite(e)?e:null},Il=r=>{const e=r.trim();if(e.endsWith("%")){const t=Ia(e.slice(0,-1));return t==null?null:ar(t/100*255,0,255)}const a=Ia(e);return a==null?null:ar(a,0,255)},Pl=r=>{const e=r.trim();if(e.endsWith("%")){const t=Ia(e.slice(0,-1));return t==null?null:ar(t/100,0,1)}const a=Ia(e);return a==null?null:ar(a,0,1)},Rl=(r,e)=>{const t=r.trim().toLowerCase().match(e);if(!t)return null;const o=t[1].trim(),[n,c]=o.split("/").map(h=>h.trim()),l=n.includes(",")?n.split(",").map(h=>h.trim()):n.split(/\s+/).filter(Boolean),u=c&&c.length?c:null;return{channels:l,alphaPart:u}},ty=r=>{const e=Rl(r,/^rgba?\((.*)\)$/);if(!e)return null;let{channels:a,alphaPart:t}=e;if(a.length===4&&t===null&&(t=a[3]??null,a=a.slice(0,3)),a.length!==3)return null;const o=Il(a[0]),n=Il(a[1]),c=Il(a[2]);if(o==null||n==null||c==null)return null;let l=1;if(t){const u=Pl(t);if(u==null)return null;l=u}return{r:o,g:n,b:c,a:l}},oy=r=>{const e=Rl(r,/^hsla?\((.*)\)$/);if(!e)return null;let{channels:a,alphaPart:t}=e;if(a.length===4&&t===null&&(t=a[3]??null,a=a.slice(0,3)),a.length!==3)return null;const o=p=>Number(p.replace("deg","").trim()),n=p=>{if(!p.endsWith("%"))return null;const v=Ia(p.slice(0,-1));return v==null?null:v/100},c=o(a[0]),l=n(a[1]),u=n(a[2]);if(!Number.isFinite(c)||l==null||u==null)return null;let h=1;if(t){const p=Pl(t);if(p==null)return null;h=p}return up({h:c,s:l,l:u,a:h})},ny=r=>{const e=Rl(r,/^oklch\((.*)\)$/);if(!e)return null;const{channels:a,alphaPart:t}=e;if(a.length!==3)return null;const o=p=>{const v=p.trim();if(v.endsWith("%")){const f=Ia(v.slice(0,-1));return f!=null?ar(f/100,0,1):null}const g=Ia(v);return g!=null?ar(g,0,1):null},n=p=>{const v=p.trim();if(v.endsWith("%")){const f=Ia(v.slice(0,-1));return f!=null&&f>=0?f/100*.4:null}const g=Ia(v);return g!=null&&g>=0?g:null},c=o(a[0]),l=n(a[1]),u=Ia(a[2].trim());if(c==null||l==null||u==null||!Number.isFinite(u))return null;let h=1;if(t){const p=Pl(t);if(p==null)return null;h=p}return gp({L:c,C:l,h:u,a:h})},Zr=r=>{if(!r||typeof r!="string")return null;const e=r.toLowerCase().trim();if(mo.has(e)){const t=mo.get(e);return t?El(t):null}let a=null;return e.startsWith("#")?a=bp(e):e.startsWith("rgb")?a=ty(e):e.startsWith("hsl")?a=oy(e):e.startsWith("oklch")&&(a=ny(e)),ay(e,a),a?El(a):null},cy=/#[0-9a-f]{3,8}|(?:rgba?|hsla?|oklch)\([^()]*\)/gi,$p=r=>{const e=(r.match(cy)??[]).map(u=>Zr(u)).filter(u=>u!=null);if(e.length===0)return null;const a=e.reduce((u,h)=>({r:u.r+h.r,g:u.g+h.g,b:u.b+h.b,a:u.a+h.a}),{r:0,g:0,b:0,a:0}),t=e.length,o=Math.round(a.r/t),n=Math.round(a.g/t),c=Math.round(a.b/t),l=a.a/t;return l<1?`rgba(${o}, ${n}, ${c}, ${l})`:`rgb(${o}, ${n}, ${c})`},yp=(r,e,a)=>{const t=Zr(`#${r}`);return t?a?.shouldApplyParsedAlpha===!0&&(r.length===4||r.length===8)?t:{...t,a:e.a}:null},xp=r=>{if(!r||typeof r!="string")return!1;const e=r.trim().toLowerCase();return/^#?[0-9A-F-a-f]{3,4}$/.test(e)||/^#?[0-9A-F-a-f]{6}([0-9A-F-a-f]{2})?$/.test(e)},wp=r=>{if(!r||typeof r!="object")return!1;const e=r;return typeof e.r=="number"&&typeof e.g=="number"&&typeof e.b=="number"&&typeof e.a=="number"},mi=r=>{if(!r||typeof r!="object")return!1;const e=r;return typeof e.h=="number"&&typeof e.s=="number"&&typeof e.v=="number"&&typeof e.a=="number"},Ke=(r,e=!1)=>{const a=l=>ar(Math.round(l),0,255).toString(16).padStart(2,"0"),t=a(r.r),o=a(r.g),n=a(r.b),c=a(ar(r.a,0,1)*255);return e?`#${t}${o}${n}${c}`:`#${t}${o}${n}`},bo=r=>Ke({...r,a:1},!1).slice(1),kp=(r,e,a,t,o)=>{const n=Zr(`#${r}`)??e,c={...n,[a]:$e(n[a]+t*o)};return bo(c)},jl=r=>{const e=hp(r),a=Math.round(e.h),t=Math.round(e.s*100),o=Math.round(e.l*100);return`hsl(${a} ${t}% ${o}% / ${fi(ar(e.a,0,1))})`},Pa=r=>{const e=ar(Math.round(r.r),0,255),a=ar(Math.round(r.g),0,255),t=ar(Math.round(r.b),0,255),o=ar(r.a,0,1);return o<1?`rgb(${e} ${a} ${t} / ${fi(o)})`:`rgb(${e} ${a} ${t})`},Ll=r=>{const e=pp(r),a=Math.round(e.L*1e3)/10,t=Math.round(e.C/.4*1e3)/10,o=Math.round(e.h),n=ar(e.a,0,1);return n<1?`oklch(${a}% ${t}% ${o} / ${fi(n)})`:`oklch(${a}% ${t}% ${o})`},We={ALPHA_MIN:0,ALPHA_MAX:100,ALPHA_SNAP_STEP:10,HUE_MIN:0,HUE_MAX:360,HUE_SNAP_STEP:15,SATURATION_MIN:0,SATURATION_MAX:100,SATURATION_SNAP_STEP:10,VALUE_MIN:0,VALUE_MAX:100,VALUE_SNAP_STEP:10},Ap={auto:r=>r.a<1?Pa(r):Ke({...r,a:1},!1),hex:r=>Ke({...r,a:1},!1),hexa:r=>Ke(r,!0),rgb:r=>Pa(r),hsl:r=>jl(r),oklch:r=>Ll(r)},iy=(r,e)=>(Ap[r]??Ap.hex)(e),Br=r=>typeof r=="string"?r:r.color,$o=(r,e)=>typeof r!="string"&&r.name?r.name:e??void 0,Cp=r=>{const e=Br(r),a=Zr(e),t=!!a&&a.a<1&&a.a>.01,o=!!a&&a.a===0;return{cssColor:e,rgba:a,isTranslucent:t,isTransparent:o,opaqueHex:a?Ke({...a,a:1},!1):null}},bi=(r,e)=>{if(mi(r))return r;const a=(wp(r)?r:null)??Zr(r)??Zr(e)??{r:0,g:0,b:0,a:1};return pi(a)},Ra=(r,e)=>{const a=e?.fallbackHex??"#000000",t=e?.format??"hex",o=bi(r,a),n={h:(o.h%360+360)%360,s:ar(o.s,0,1),v:ar(o.v,0,1),a:ar(o.a,0,1)},c=Ge(n),l={r:$e(c.r),g:$e(c.g),b:$e(c.b),a:n.a},u=iy(t,l);let h,p,v,g,f;const b=l.a<1?"rgb":"hex",$=l.a<1?Pa(l):Ke({...l,a:1},!1),x=wo(u,{contrastBias:e?.contrastBias,bgColor:e?.contrastBgColor});return{format:t,value:u,alpha:l.a,autoFormat:b,autoValue:$,contrastColor:x,hsv:n,rgba:l,get hex(){return h??=Ke({...l,a:1},!1)},get hexa(){return p??=Ke(l,!0)},get rgb(){return v??=Pa(l)},get hsl(){return g??=jl(l)},get oklch(){return f??=Ll(l)}}},Sp=(r,e)=>({...Ra(r.hsv,{format:e}),name:r.name}),_n=(r,e)=>({color:Br(r),name:$o(r,e)}),Tn=r=>({color:`#${`00${Math.floor(Math.random()*16777216).toString(16)}`.slice(-6)}`,name:r}),yo=r=>Br(r).trim().toLowerCase(),xo=(r,e)=>{if(yo(r)===yo(e))return!0;const a=Zr(Br(r)),t=Zr(Br(e));return!!a&&!!t&&vi(a,t)},Ml=(r,e,a)=>{const t=a?.skipIndex;return r.some((o,n)=>n!==t?xo(o,e):!1)},sy=(r,e)=>Ml(r,e)?r:[...r,e],oe=r=>typeof r=="object"&&r!==null&&"stops"in r&&Array.isArray(r.stops),zp={r:255,g:255,b:255,a:1},Ep={r:42,g:42,b:42,a:1},ly=r=>{let e=r,a=0;for(;e;){const t=e.getAttribute("arc-scheme");if(t==="light")return a%2===0?zp:Ep;if(t==="dark")return a%2===0?Ep:zp;t==="inverse"&&(a+=1),e=e.parentElement}return null},dy=r=>{let e=null;try{e=r?document.documentElement?.querySelector?.(r):document.documentElement}catch{return null}if(e==null)return null;let a=null,t=e,o=0;for(;t&&o<12;){const n=Zr(window.getComputedStyle(t).backgroundColor);if(n&&n.a>0){if(a=a?gi(a,n):n,n.a===1)break}else{const c=ly(t);if(c){a=a?gi(a,c):c;break}}t=t.parentElement,o+=1}return a},_p=r=>{const e=window.getComputedStyle(r),a=Zr(e.backgroundColor);if(a&&a.a>0)return e.backgroundColor;const t=e.backgroundImage;return t&&t!=="none"?$p(t):null},wo=(r,e)=>{const a=Zr(Br(r));if(!a||a.a===0)return e?.useScheme?"auto":"inherit";const{darkColor:t,lightColor:o,contrastBias:n,bgColor:c,bgElement:l}=e??{},u=e?.useScheme?"light":t??"#000000",h=e?.useScheme?"dark":o??"#ffffff",p=ar(n??-4,-7,7);let v=a;if(a.a<1){const $=Zr(c??""),x=$&&$.a>0?$:null,A=x?null:dy(l);v=gi(a,x??A??{r:255,g:255,b:255,a:1})}const g=vp(v),f=(g+.05)/.05,b=1.05/(g+.05);return f+p>=b?u:h},Dl=r=>r==null?null:{comparisonKey:yo(r),selectedRgba:Zr(Br(r))},Tp=(r,e)=>{if(!e)return!1;if(yo(r)===e.comparisonKey)return!0;if(!e.selectedRgba)return!1;const a=Zr(Br(r));return!!a&&vi(a,e.selectedRgba)},nr={ANGLE:90,ANGLE_MIN:0,ANGLE_MAX:360,ANGLE_SNAP_STEP:15,ANGLE_PRESETS:[0,180,135,225,90,270,45,315],STOPS:[],STOP_MIN:0,STOP_MAX:100},Ip=r=>{const e=r!=null&&Br(r)!==""?r:Tn();return[{color:Br(e),at:nr.STOP_MIN},{color:Br(Tn()),at:nr.STOP_MAX}]},ya=r=>r.map((e,a)=>({stop:e,index:a})).sort((e,a)=>e.stop.at-a.stop.at||e.index-a.index),Pp=r=>ya(r).map(e=>e.stop),Rt=(r,e=nr.STOP_MIN,a=nr.STOP_MAX)=>r.map(t=>({...t,at:ar(Math.round(t.at),e,a)})),Ol=(r,e,a)=>r!=null&&a<=r+1||e!=null&&a>=e-1,uy=(r,e,a)=>Ol(r[e-1]?.stop.at,r[e+1]?.stop.at,a),$i=(r,e)=>{if((r.angle??nr.ANGLE)!==(e.angle??nr.ANGLE))return!1;const a=r.stops??[],t=e.stops??[];return a.length!==t.length?!1:a.every((o,n)=>o.at===t[n].at&&o.color===t[n].color)},hy=(r,e)=>$i({stops:Rt(r.stops??[]),angle:r.angle??nr.ANGLE},{stops:Rt(e.stops??[]),angle:e.angle??nr.ANGLE}),ht=(r,e)=>r.name===e.name&&Za(r)===Za(e),In=(r,e)=>ar(Math.round((r+e)/2),nr.STOP_MIN,nr.STOP_MAX),Rp=(r,e,a=nr.STOP_MIN,t=nr.STOP_MAX)=>e<=1?a:a+r/(e-1)*(t-a),jp=r=>{const e=ya(r);if(e.length<=1)return r;const a=[...r];return e.forEach((t,o)=>{a[t.index]={...t.stop,at:ar(Math.round(Rp(o,e.length)),nr.STOP_MIN,nr.STOP_MAX)}}),a},Lp=(r,e,a)=>{const t=Zr(Br(r.color)),o=Zr(Br(e.color));if(!t||!o)return Br(r.color);const n=e.at-r.at,c=n===0?0:ar((a-r.at)/n,0,1),l={r:t.r+(o.r-t.r)*c,g:t.g+(o.g-t.g)*c,b:t.b+(o.b-t.b)*c,a:t.a+(o.a-t.a)*c};return Ke(l,l.a<1)},py=r=>{const e=ya(r).map(o=>o.stop);if(e.length<2)return null;let a=0,t=0;for(let o=0;o<e.length-1;o+=1){const n=e[o+1].at-e[o].at;n>a&&(a=n,t=o)}return[e[t],e[t+1]]},Mp=(r,e,a="#000000")=>{const t=ya(r);if(e.kind==="between"){const o=t[e.sortedIndex-1],n=t[e.sortedIndex];if(!o||!n)return{color:Br(a),at:Nl(r)};const c=In(o.stop.at,n.stop.at),l=Lp(o.stop,n.stop,c);return{color:Br(l),at:c}}return{color:Br(a),at:Nl(r)}},Dp=(r,e)=>{if(r.length===0)return[{color:e??Br(Tn()),at:In(nr.STOP_MIN,nr.STOP_MAX)}];const a=ya(r),t=a[a.length-1],o=a[a.length-2],n=nr.STOP_MAX,c=o?.stop.at??nr.STOP_MIN,l=In(c,n),u={color:e??Br(t.stop.color),at:n};return r.map((h,p)=>p===t.index?{...h,at:l}:h).concat(u)},Nl=r=>{const e=(nr.STOP_MIN+nr.STOP_MAX)/2;if(r.length===0)return e;if(r.length===1)return ar(r[0].at>=e?nr.STOP_MIN:nr.STOP_MAX,nr.STOP_MIN,nr.STOP_MAX);const a=py(r);return a?In(a[0].at,a[1].at):e},Za=r=>{const{stops:e=[],angle:a=nr.ANGLE}=r,t=ya(e);if(t.length===0)return"transparent";if(t.length===1)return Br(t[0].stop.color);const o=t.map(({stop:n})=>`${Br(n.color)} ${n.at}%`);return`linear-gradient(${a}deg, ${o.join(", ")})`},Op=(r,e)=>r?.name??e??void 0,yi=(r,e="")=>{const a=r.stops??[];if(a.length===0)return Br(e);const t=ya(a);if(t.length===1)return Br(t[0].stop.color);let o=0,n=0,c=0,l=0,u=0;for(let p=0;p<t.length;p+=1){const v=t[p-1]?.stop.at??t[p].stop.at,g=t[p].stop.at,f=t[p+1]?.stop.at??g,b=(g-v)/2+(f-g)/2,$=Zr(Br(t[p].stop.color));$&&(o+=$.r*b,n+=$.g*b,c+=$.b*b,l+=$.a*b,u+=b)}if(u===0)return Br(e);const h={r:Math.round(o/u),g:Math.round(n/u),b:Math.round(c/u),a:l/u};return Ke(h,h.a<1)},ko=(r,e)=>{const a={stops:r.stops??[],angle:r.angle??nr.ANGLE,...r.name!=null?{name:r.name}:{}},t=yi(a,e?.fallbackColor),o=wo(t,{contrastBias:e?.contrastBias,bgColor:e?.contrastBgColor});return{...a,value:Za(a),baseColor:t,contrastColor:o}},Np=(r,e)=>{const a=r.stops?.length?r.stops:Ip(e),t=r.angle??nr.ANGLE,o={stops:a,angle:t,...r.name!=null?{name:r.name}:{}},n=e?Br(e):void 0,c=yi(o,n),l=wo(c);return{...o,value:Za(o),baseColor:c,contrastColor:l}},Bp=r=>{const{stops:e=[],angle:a=nr.ANGLE}=r;return e?.length?e.length===1?String(e[0].color):Za({stops:e,angle:a}):"transparent"},Fp=(r,e,a,t,o,n,c,l,u=!0)=>{if(n<=0)return ar(c,c,l);const h=o*Math.PI/180,p=Math.cos(h),v=Math.sin(h),f=(((r-a)*p+(e-t)*v)/n+1)/2*100,b=u?Math.round(f):f;return ar(b,c,l)},Bl=(r,e,a,t)=>Math.atan2(e-t,r-a)*180/Math.PI,Hp=(r,e,a,t=nr.ANGLE_MIN,o=nr.ANGLE_MAX)=>{let n=a-e;for(;n>180;)n-=360;for(;n<-180;)n+=360;const c=((r+n)%360+360)%360;return ar(c,t,o)},Vp=(r,e=nr.ANGLE_SNAP_STEP,a=nr.ANGLE_MIN,t=nr.ANGLE_MAX)=>ar(Math.round(r/e)*e,a,t),gy=(r,e,a=nr.ANGLE_SNAP_STEP,t=nr.ANGLE_MIN,o=nr.ANGLE_MAX)=>{const n=r%a===0;return e>0?ar(n?r+a:Math.ceil(r/a)*a,t,o):ar(n?r-a:Math.floor(r/a)*a,t,o)},vy=new Set(["ArrowLeft","ArrowRight","ArrowUp","ArrowDown"]),Up=(r,e,a=1)=>{if(!vy.has(r))return null;const o=(e-90)*Math.PI/180,n=Math.cos(o),c=Math.sin(o),l={ArrowRight:[1,0],ArrowLeft:[-1,0],ArrowDown:[0,1],ArrowUp:[0,-1]},[u,h]=l[r],p=u*n+h*c;return p>0?a:p<0||r==="ArrowLeft"||r==="ArrowUp"?-a:a},Gp=(r,e)=>{const a=r.colors??[];return oe(e)?a.some(n=>oe(n)&&ht(n,e))?r:{...r,colors:[...a,e]}:a.some(o=>!oe(o)&&xo(o,e))?r:{...r,colors:[...a,e]}},Kp=(r,e)=>{const a=r.colors??[],t=oe(e)?a.filter(o=>!(oe(o)&&ht(o,e))):a.filter(o=>oe(o)||!xo(o,e));return t.length===a.length?r:{...r,colors:t}},Wp=(r,e,a)=>r.map(t=>t.id===e.id?Gp(t,a):t),Xp=(r,e,a)=>r.map(t=>t.id===e.id?Kp(t,a):t),fy=(r,e,a)=>{if(Array.isArray(r)){if(a===void 0)throw new TypeError("ArcColorPalette.addColor: pass (palettes, palette, color) when the first argument is an array.");return Wp(r,e,a)}return Gp(r,e)},my=(r,e,a)=>{if(Array.isArray(r)){if(a===void 0)throw new TypeError("ArcColorPalette.removeColor: pass (palettes, palette, color) when the first argument is an array.");return Xp(r,e,a)}return Kp(r,e)},by=(r,e,a)=>{const t=r.find(o=>o.id===e);return t?Wp(r,t,a):r},$y=(r,e,a)=>{const t=r.find(o=>o.id===e);return t?Xp(r,t,a):r},j2=!1,yy="fa-regular fa-ellipsis-h",xy="fa-regular fa-angle-down fa-sm",qp="data-rollup-item",Yp="data-rollup-trigger",wy="fa-solid fa-triangle-exclamation",ky=28,Zp=(r,e,a,t,o,n)=>{let c=t+o,l=0;for(let u=0;u<n;u+=1){const h=c+a+e[u];if(h>r)break;c=h,l+=1}return l},Ay=(r,e,a,t)=>{const{items:o,triggerMore:n,chevron:c,gap:l,padX:u}=e,h=o.length,p=t==null?h:Math.min(t,h);if(p===h&&u+o.reduce((b,$)=>b+$,0)+l*Math.max(0,h-1)<=r)return h;const v=Zp(r,o,l,u,n,p);if(a>=0&&a<h&&a>=v){const f=o[a]+c;return Zp(r,o,l,u,Math.max(n,f),p)}return v},Cy=({enabled:r,itemCount:e,signature:a,selectedIndex:t=-1,maxVisible:o})=>{const n=(0,s.useRef)(null),c=(0,s.useRef)(null),l=(0,s.useRef)(null),u=(0,s.useRef)(t);u.current=t;const[h,p]=(0,s.useState)(0),v=(0,s.useRef)(null);r&&v.current!==a&&(v.current=a,c.current=null);const g=r&&c.current==null,[f,b]=(0,s.useState)(e),$=(0,s.useCallback)(()=>{const k=c.current,w=n.current;if(!k||!w)return;const E=w.parentElement,_=E?E.clientWidth:w.clientWidth,I=Ay(_,k,u.current,o);b(C=>C===I?C:I)},[o]);ha(()=>{if(!r){b(e);return}if(c.current!=null)return;const k=n.current;if(!k)return;const w=getComputedStyle(k),E=parseFloat(w.columnGap)||0,_=(parseFloat(w.paddingLeft)||0)+(parseFloat(w.paddingRight)||0),I=Array.from(k.querySelectorAll(`:scope > [${qp}]`)).map(D=>D.getBoundingClientRect().width),C=k.querySelector(`:scope > [${Yp}]`),S=C?C.getBoundingClientRect().width:0;let T=ky;if(C){const D=C.querySelectorAll("[arc-button-icon]"),N=D[D.length-1],H=C.querySelector("[arc-button-content]"),J=H&&parseFloat(getComputedStyle(H).columnGap)||0;N&&(T=N.getBoundingClientRect().width+J)}c.current={items:I,triggerMore:S,chevron:T,gap:E,padX:_},$(),p(D=>D+1)},[r,e,a,h,$]),ha(()=>{if(!r)return;const w=n.current?.parentElement;if(!w||typeof ResizeObserver>"u")return;const E=new ResizeObserver(()=>$());return E.observe(w),l.current=E,()=>{E.disconnect(),l.current=null}},[r,a,$]);const x=(0,s.useCallback)(k=>{n.current=k},[]),A=r?Math.min(f,e):e,y=r&&A<e;return{barRef:x,visibleCount:g?e:A,hasOverflow:g?!0:y,isMeasuring:g}},Jp=(r,e)=>e??(r==="aria-selected"?"true":"page"),Sy={[qp]:""},zy={[Yp]:""},Ey=r=>{r?.preventDefault?.(),r?.stopPropagation?.()},Qp=(r,e,a,{showIcons:t,showLabels:o,missingIcon:n,isVertical:c})=>{const l=typeof a=="string"?void 0:a,u=c?o?"top-start":"right-center":"top-center",h=l?.anchorAt??u,p=typeof a=="string"?{text:a,anchorAt:h}:{...a,anchorAt:h},v=a==null?void 0:p,g=!r;if(o)return{icon:t?r:void 0,text:e,tooltip:v};if(!t)return{icon:void 0,text:void 0,tooltip:v};const f=e==null?"":String(e);return{icon:r??n,iconStatus:g?"warning":void 0,text:void 0,tooltip:v??{text:`${r?"":"(Missing icon!) "}${f}`,anchorAt:h},ariaLabel:f||void 0}},_y=(r,e)=>r.href??`${r.text}-${e}`,Fl=({firstSlot:r,lastSlot:e,isVertical:a})=>r||e?(0,i.jsxs)("span",{"arc-button-bar-item":"slot",children:[r,!r&&!!e&&a&&(0,i.jsx)("span",{"arc-slot-spacer":""}),e]}):null,Ty=(r,{selectedAttr:e,selectedValue:a,isVertical:t,isBarDisabled:o,showIcons:n=!0})=>{const c={...r.tag?{tag:r.tag}:{},...r.isSelected?{[e]:Jp(e,a),"is-selected":""}:{}},l=n?r.icon:void 0;return{variant:l?"icon-text":"text",text:r.text,icon:l,href:r.href,target:r.target,isDisabled:r.isDisabled||o,onClick:r.onClick,...r.firstSlot||r.lastSlot?{endSlot:(0,i.jsx)(Fl,{firstSlot:r.firstSlot,lastSlot:r.lastSlot,isVertical:t})}:{},...Object.keys(c).length?{containerProps:c}:{}}},Pn=d`--arc•button•bar`,Rn=d`${Pn}•axis`,Ao=d`${Pn}•gap`,Hl=d`${Pn}•width`,Vl=d`${Pn}•justify`,Ul=d`${Pn}•align`,Iy=d`
  &[arc-button-bar=horizontal] {
    ${Rn}: row;

    &[is-flipped] {
      ${Rn}: row-reverse;
    }

    &[data-density=comfortable] {
      --arc-button-height: var(${m}•40);
      --arc-button-padding: 0 var(${j}•12);
      ${Ao}: var(${j}•6);
    }

    &[data-density=compact] {
      --arc-button-height: var(${m}•32);
      --arc-button-padding: 0 var(${j}•10);
      ${Ao}: var(${j}•4);
    }
  }
`,Py=d`
  &[arc-button-bar=vertical] {
    --arc-button-flex: 1;
    --arc-button-display: flex;

    &:not([is-minimized]) {
      --arc-button-justify-content: stretch;
    }

    ${Rn}: column;

    &[is-flipped] {
      ${Rn}: column-reverse;
    }

    &[data-density=comfortable] {
      --arc-button-height: var(${m}•36);
      --arc-button-padding: 0 var(${j}•12);
      ${Ao}: var(${j}•2);

      &[is-minimized] {
        ${Hl}: var(${m}•48);
      }
    }

    &[data-density=compact] {
      --arc-button-height: var(${m}•28);
      --arc-button-padding: 0 var(${j}•8);
      --arc-button-border-radius: var(--arc-border-radius-md);
      ${Ao}: var(${j}•2);

      &[is-minimized] {
        ${Hl}: var(${m}•36);
      }
    }
  }
`,Ry=d`
@layer arc-components {

  [arc-button-bar] {
    ${Iy}
    ${Py}

    ${Vl}: flex-end;
    ${Ul}: center;

    &[is-managed] {
      ${Vl}: stretch;
      ${Ul}: stretch;
    }

    flex: var(--arc-button-bar-flex, 1);
    display: var(--arc-button-bar-display, flex);
    flex-direction: var(${Rn});
    align-items: var(--arc-button-bar-align-items, var(${Ul}));
    justify-content: var(--arc-button-bar-justify-content, var(${Vl}));
    gap: var(${Ao}, var(${j}•8));
    width: var(${Hl}, unset);
    padding: 0;
    margin: 0;
    list-style: none;

    &[data-rollup] {
      contain: inline-size;
      min-width: 0;
    }

    *[data-measuring] {
      contain: none;
      width: max-content;
      max-width: none;

      > * {
        flex: 0 0 auto;
      }
    }

    &:not([data-measuring]) [arc-button-bar-item] {
      max-width: 100%;
    }
  }

  [arc-button-bar-item] {
    display: flex;
    margin: 0;
    padding: 0;
  }

  [arc-button-bar-item="slot"] {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: var(${Ao});
    padding: 0;
    margin: 0;
  }
}
`,jy=({orientation:r,isFlipped:e,isDisabled:a,density:t,hierarchy:o,showIcons:n,showLabels:c,missingIcon:l,items:u,canRollUp:h,maxVisible:p,rollUpLabel:v,listRole:g,selectedAttr:f,selectedValue:b,elementProps:$})=>{const x=Nr(void 0,"arc-button-bar-trigger"),A=`${x}-menu`,y=r==="vertical",k=h&&!y,w=t??(y?"comfortable":"compact"),E=u.findIndex(L=>L.isSelected),_={showIcons:n,showLabels:c,missingIcon:l,isVertical:y},I=(0,s.useMemo)(()=>`${u.map(X=>{const sr=typeof X.icon=="string"?X.icon:X.icon?"":"";return`${X.text}${X.href??""}${sr}${X.isDisabled?1:0}`}).join("")}|${w}|${o??""}|${E}|${n?1:0}|${c?1:0}`,[u,w,o,E,n,c]),{barRef:C,visibleCount:S,hasOverflow:T,isMeasuring:D}=Cy({enabled:k,itemCount:u.length,signature:I,selectedIndex:E,maxVisible:p}),N=D?u:u.slice(0,S),H=D?[]:u.slice(S),J=k&&(D||T),R=E>=0?u[E]:void 0,M=!D&&R!=null&&H.includes(R),P=Qp(M?R.icon:yy,M?R.text:v,M?R.tooltip:void 0,_),F=M?R.firstSlot:void 0,or=M?R.lastSlot:void 0,gr=Jp(f,b);return(0,i.jsxs)("ul",{...$,ref:C,"arc-button-bar":r,role:g,"data-density":w,"data-measuring":D?"":void 0,"data-rollup":k?"":void 0,"is-flipped":e?"":void 0,"is-managed":"",children:[N.map((L,X)=>{const{isSelected:sr,isDisabled:mr,tag:rr,icon:ur,text:yr,tooltip:lr,firstSlot:wr,lastSlot:V,isHidden:K,onClick:er,...O}=L,cr=Qp(ur,yr,lr,_),br=a||mr;return(0,s.createElement)("li",{...Sy,key:_y(L,X),"arc-button-bar-item":sr?"selected":""},(0,i.jsxs)(Lr,{...O,tag:rr,layout:y?"fill":"hug",size:"inherit",variant:"neutral",hierarchy:"tertiary",shape:"square",tooltip:cr.tooltip,"aria-label":cr.ariaLabel,"is-selected":sr?"":void 0,isDisabled:br||void 0,onClick:br?Ey:er,...sr?{[f]:gr}:{},children:[(0,i.jsx)(le,{icon:y?ku(cr.icon):cr.icon,"arc-icon-status":cr.iconStatus,text:cr.text,overflow:"truncate",gapSize:"md",iconSize:w==="comfortable"?"md":void 0}),c&&(0,i.jsx)(Fl,{firstSlot:wr,lastSlot:V,isVertical:y})]}))}),J?(0,i.jsxs)("li",{...zy,"arc-button-bar-item":M?"selected":"",children:[(0,i.jsxs)(Lr,{id:x,"arc-button-bar-rollup":"trigger","is-selected":M?"":void 0,layout:y?"fill":"hug",shape:"square",size:"inherit",variant:"neutral",hierarchy:"tertiary",isDisabled:a||void 0,tooltip:P.tooltip,"aria-label":P.ariaLabel,iconEnd:xy,popoverTarget:A,popoverTargetAction:"toggle","aria-haspopup":"menu","aria-controls":A,children:[(0,i.jsx)(le,{icon:P.icon,text:P.text,"arc-icon-status":P.iconStatus,overflow:"truncate",gapSize:"md"}),c&&(0,i.jsx)(Fl,{firstSlot:F,lastSlot:or,isVertical:y})]}),H.length>0&&(0,i.jsx)(ho,{id:A,alternateAnchorId:x,"arc-button-bar-rollup":"menu",anchorAt:"bottom-end",hidePopoverButton:!0,items:H.map(L=>Ty(L,{selectedAttr:f,selectedValue:b,isVertical:y,isBarDisabled:a,showIcons:n}))})]}):null]})},jt=({children:r,...e})=>{const{tag:a,orientation:t="horizontal",isFlipped:o=!1,isDisabled:n=!1,items:c,canRollUp:l=!1,maxVisible:u,rollUpLabel:h="More",density:p,hierarchy:v,showIcons:g=!0,showLabels:f=!0,missingIcon:b=wy,listRole:$="list",selectedAttr:x="aria-current",selectedValue:A,...y}=e;if(c){const w=c.filter(E=>!E.isHidden);return(0,i.jsx)(jy,{orientation:t,isFlipped:o,isDisabled:n,density:p,hierarchy:v,showIcons:g,showLabels:f,missingIcon:b,items:w,canRollUp:l,maxVisible:u,rollUpLabel:h,listRole:$,selectedAttr:x,selectedValue:A,elementProps:y})}const k=a??"menu";return(0,i.jsx)(k,{...y,"arc-button-bar":t,"is-flipped":o?"":void 0,role:y.role??"group",children:r})};Cr("ArcButtonBar",Ry);function jn(r){const e=(0,s.useRef)(r);e.current=r;const a=(0,s.useCallback)((...t)=>e.current?.(...t),[]);return r?a:void 0}const Ly=({activeColor:r})=>{const[e,a]=(0,s.useState)(r),t=r!=null,o=t?r:e;(0,s.useEffect)(()=>{a(r)},[r]);const n=(0,s.useCallback)(c=>{t||a(c)},[t]);return{isSelectionControlled:t,activeSelectedColor:o,setUncontrolledSelectedColor:a,selectColor:n}},My=({palette:r,isSelectionControlled:e,onAddColor:a,emitColorChange:t,setLocalColors:o,setUncontrolledSelectedColor:n,initialColorValue:c,shouldOpenPopover:l=!0,notifyAddColorToggle:u,showPopover:h,hidePopover:p})=>{const v=(0,s.useCallback)(()=>c??Tn(),[c]),[g,f]=(0,s.useState)(null),[b,$]=(0,s.useState)(v),x=(0,s.useCallback)(()=>{f(null),$(v())},[v]),A=(0,s.useCallback)(S=>{o(T=>oe(S)?T.some(H=>oe(H)&&ht(H,S))?T:[...T,S]:T.some(N=>!oe(N)&&xo(N,S))?T:[...T,S])},[o]),y=(0,s.useCallback)((S,T)=>{a?.(r,S,T),oe(S)||(t(S),e||n(S))},[t,e,a,r,n]),k=(0,s.useCallback)((S,T)=>{A(S),y(S,T??void 0)},[A,y]),w=(0,s.useCallback)(()=>{if(g!=null)return;const S=v();let T=-1;o(D=>(T=D.length,[...D,S])),f(T),$(S),u?.(!0),l&&h()},[g,v,u,o,l,h]),E=(0,s.useCallback)(S=>{g!=null&&$(S)},[g]),_=(0,s.useCallback)(S=>{S?.preventDefault(),S?.stopPropagation(),g!=null&&o(T=>T.filter((D,N)=>N!==g)),x(),u?.(!1),l&&p()},[g,p,u,x,o,l]),I=(0,s.useCallback)((S,T)=>{const N=(R=>typeof R?.preventDefault=="function")(S)?S:T;if(N?.preventDefault(),N?.stopPropagation(),g==null||b==null){u?.(!1),l&&p();return}const J=(r.colors??[]).map((R,M)=>M===g?b:R);o(J),y(b,N??void 0),x(),u?.(!1),l&&p()},[g,b,y,p,u,r.colors,x,o,l]),C=(0,s.useCallback)((S,T)=>{T?.preventDefault(),T?.stopPropagation(),k(S,T??void 0)},[k]);return{draftColorIndex:g,draftColorValue:b,startAddDraft:w,updateDraftColor:E,cancelDraftColor:_,saveDraftColor:I,saveCurrentColor:C}};let r0=!1;const Ln=new Set,Gl=r=>{r0=r,Ln.forEach(e=>{e.setState(r),r||e.onRelease?.()})},e0=r=>{(r.metaKey||r.key==="Meta")&&Gl(!0)},a0=r=>{Gl(!!r.metaKey)},t0=()=>{Gl(!1)},Dy=r=>{const[e,a]=(0,s.useState)(r0),t=(0,s.useRef)(r);return t.current=r,(0,s.useEffect)(()=>{const o={setState:a,onRelease:()=>t.current?.()};return Ln.add(o),Ln.size===1&&(window.addEventListener("keydown",e0),window.addEventListener("keyup",a0),window.addEventListener("blur",t0)),a(e),()=>{Ln.delete(o),Ln.size===0&&(window.removeEventListener("keydown",e0),window.removeEventListener("keyup",a0),window.removeEventListener("blur",t0))}},[]),e},Be=d`--arc-popover`,Co=d`--arc•color•picker`,ne=d`${Co}•thumb`,Lt=d`${Co}•tools`,ja=d`${Co}•dropper`,o0=d`--js•hex`,Kl=d`
  background-image:
    linear-gradient(
      to right,
      transparent,
      var(${o0}, transparent)
    ),
    conic-gradient(
      var(--arc-color-alpha-subtle) 0 25%,
      var(--arc-color-alpha-muted) 0 50%,
      var(--arc-color-alpha-subtle) 0 75%,
      var(--arc-color-alpha-muted) 0 100%
    );

  background-size: 100% 100%, 1em 1em;
  background-position: 50% 50%, 50% 50%;
`,Oy=d`
  background-image:
    linear-gradient(
      to right,
      #f00 0%,
      #ff0 16.66%,
      #0f0 33.33%,
      #0ff 50%,
      #00f 66.66%,
      #f0f 83.33%,
      #f00 100%
    );
`,Wl=d`3.75em`,n0={POPOVER:d`
    /* Inter-Component Communication: ArcPopover */
    ${Be}-width: 14em; /* 224px */
    ${Be}-min-width: 10.5em; /* 140px */
    ${Be}-max-width: 15.75em; /* 252px */
    ${Be}-line-height: normal; /* @note – allows elements to resolve to design-spec heights */
    ${Be}-outline-size: 0px; /* @note – default outline-size causes divider lines to not extend to the edges of the popover shell. */
    ${Be}-padding: 0;
    ${Be}-overflow: hidden auto;

    ${Be}-header-padding: 0.75em 1em;
    ${Be}-header-background: var(--arc-color-bg-mono);
    ${Be}-header-align-items: center;

    ${Be}-body-padding: 0;

    ${Be}-footer-padding: 1em;
    ${Be}-footer-background: var(--arc-color-bg-mono);

    /* Inter-Component Communication: inner ArcTooltips • UX enhancement: transition speed-up */
    [arc-popover-content] {
      ${Be}-transition-duration: 30ms;
    }

    &:has([arc-color-picker=simple]) {
      ${Be}-width: 12.25em; /* 196px */
    }

    /* Inter-Component Communication: ArcButtonBar via ArcPopoverFooter */
    [arc-popover-footer]:has([arc-button-bar]) {
      --arc-button-bar-justify-content: stretch;
      --arc-button-flex: 1;
    }
  `,PICKER:d`
    ${ne}•shadow: 0 0 0 max(4px, 0.25em) var(--arc-color-alpha-white-95), 0 0 max(6px, 0.375em) max(3px, 0.1875em) var(--arc-color-alpha-black-30);
    ${ne}•size: max(10px, 0.625em);
    ${ne}•transition: 200ms ease-out;

    ${Co}•padding: 1em;
    &[is-inline] { ${Co}•padding: 0; }

    &[arc-color-picker=simple] {
      ${ja}•align•self: end;
      ${Lt}•gap: 1em 0.5em;

      [arc-color-slider] {
        grid-column: 1 / -1;
      }
    }

    [arc-color-input=hex] {
      --arc-input-prefix-opacity: var(--arc-alpha-40);
      --arc-input-suffix-opacity: var(--arc-alpha-100);
    }

    /* This font-size is intended for various scaling calculations. */
    font-size: initial;
    position: relative;
    display: flex;
    flex-direction: column;
    z-index: 1;

    -webkit-user-select: none;
    user-select: none;

    /* Inter-Component Communication: ArcInput & ArcLabel • font-size reset for input labels */
    --arc-input-padding-inline: max(6px, 0.375em);
  `},Ny=d`

  [arc-color-field] {
    display: grid;
    gap: 0.5em;
  }

  [arc-color-surface=field] {
    position: relative;
    width: 100%;
    aspect-ratio: 1 / 1;

    -webkit-user-select: none;
    user-select: none;
    touch-action: none;
    cursor: pointer;

    border-radius: var(--arc-border-radius-md);
    background: var(--arc-color-bg-mono);

    &:focus:focus-visible {
      outline: var(--arc-border-width-md) solid var(--arc-color-border-focus);
      outline-offset: 0.25em;
    }

    &::after {
      box-sizing: border-box;
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: inherit;
      border: var(--arc-border-width-sm) solid var(--arc-color-border-mid);
      pointer-events: none;
      z-index: 2;
    }
  }

  [arc-color-field-canvas] {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    display: block;
    border-radius: inherit;
    pointer-events: none;
  }

  [arc-color-field-slice] {
    position: absolute;
    pointer-events: none;
    z-index: 3;
    border-radius: var(--arc-border-radius-pill);
    transition: left var(${ne}•transition), top var(${ne}•transition);
  }

  [arc-color-field][sr-focus] [has-focus] {
    outline: var(--arc-border-width-md) solid var(--arc-color-border-focus);
    outline-offset: 0.25em;
  }

  /* Saturation axis at current Value */
  [arc-color-field-slice=saturation] {
    inset: calc(var(--js•v) * 100%) 0 auto 0;
    height: var(--arc-border-width-md);
  }

  /* Value axis at current Saturation */
  [arc-color-field-slice=value] {
    inset: 0 auto 0 calc(var(--js•s) * 100%);
    width: var(--arc-border-width-md);
  }

  [arc-color-field-thumb] {
    position: absolute;
    left: calc(var(--js•s) * 100%);
    top: calc(var(--js•v) * 100%);
    transform: translate(-50%, -50%);
    width: var(${ne}•size);
    height: var(${ne}•size);
    border: 0;
    border-radius: var(--arc-border-radius-circle);
    box-shadow: var(${ne}•shadow);
    background: var(--js•rgb);
    z-index: 4;
    transition:
      left var(${ne}•transition),
      top var(${ne}•transition);
  }

  @media (prefers-reduced-motion: reduce) {
    [arc-color-field-thumb],
    [arc-color-field-slice] {
      transition: none;
    }
  }

  [arc-color-field][is-interacting] {
    [arc-color-field-thumb],
    [arc-color-field-slice] {
      transition: none;
    }
  }

  /* Visually hidden but usable (so SR users can access them) */
  [arc-color-field-sr] {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  [arc-color-field-sr-slider] {
    display: block;
  }

`,By=d`

  [arc-color-slider] {
    &:has([arc-slider-surface=hue]) { ${ne}•bg: var(--js•hue); }
    &:has([arc-slider-surface=alpha]) { ${ne}•bg: transparent; }

    /* Inter-Component Communication: ArcSlider --------------------• */
    --arc-slider-input-height: auto;
    --arc-slider-progress-display: none;
    --arc-slider-track-background: transparent;
    --arc-slider-progress-background: transparent;
    --arc-slider-track-height: 0.875em;
    --arc-slider-thumb-size: var(${ne}•size);
    --arc-slider-thumb-size-hover: var(${ne}•size);
    --arc-slider-thumb-shadow: var(${ne}•shadow);
    --arc-slider-thumb-background: var(${ne}•bg);
    --arc-slider-thumb-outline-offset: 0.3125em;

    display: grid;
    gap: 0.375em;

    [arc-slider-surface=hue] { ${Oy} }
    [arc-slider-surface=alpha] { ${Kl} }
  }

`,Fy=d`

  [arc-color-inputs] {
    display: grid;
    gap: 0.5em;
    grid-template-columns: 1fr ${Wl};
    align-items: end;

    &:not(:has([arc-color-input=hex])) {
      grid-template-columns: ${Wl} 1fr;
    }

    &:has([arc-color-input=hex]):not(:has([arc-color-input=alpha])) {
      grid-template-columns: 1fr;
    }
  }

  [arc-color-input=hex] {
    --arc-icon-color: var(--arc-color-fg-critical-mid);
    --arc-input-action-display: contents;
    --arc-button-min-width: none;
    --arc-button-max-width: 2.25em;
  }

  :is([arc-color-input=stop], [arc-color-input=alpha]) {
    --arc-input-text-align: end;
  }

`,Hy=d`
  [arc-gradient-stops] {
    display: grid;
    gap: 0.125em;
  }

  [arc-gradient-stop-list] {
    display: grid;
    gap: 0.125em;
    padding: 0;
    margin: 0;
    list-style: none;
  }

  [arc-gradient-field-wrapper] {
    position: relative;
    &:has([is-rotating]) {
      --angle-output-opacity: 1;
    }
  }

  [arc-gradient-field-angle-output] {
    position: absolute;
    bottom: 0;
    right: 0;
    opacity: var(--angle-output-opacity, 0.4);
    transition: opacity 200ms ease-out;
  }

  [arc-gradient-field] {
    position: relative;
    width: 100%;
    min-height: 2.5em;
    aspect-ratio: 1 / 1;
    border-radius: var(--arc-border-radius-circle);
    touch-action: none;
    user-select: none;
    cursor: grab;

    &[is-rotating] {
      cursor: grabbing;
    }

    /* Unset: empty placeholder field — dashed ring, no grab affordance (no stops to drag/rotate). */
    &[is-unset] {
      cursor: default;

      &::before {
        ${o0}: transparent;
        ${Kl}

        border-style: dashed;
      }
    }

    &::before {
      box-sizing: border-box;
      content: '';
      position: absolute;
      inset: 0;
      border-radius: var(--arc-border-radius-circle);
      border: var(--arc-border-width-sm) solid var(--arc-color-border-mid);
      pointer-events: none;
      z-index: 1;
    }
  }

  /* "Add Gradient" affordance shown in place of the stops list while unset. */
  [arc-gradient-add] {
    margin-block: 1em 0;
  }

  [arc-gradient-stop-thumb] {
    position: absolute;
    left: 0;
    top: 50%;
    margin-block-start: calc(var(${ne}•size) / -2);
    margin-inline-start: calc(var(${ne}•size) / -2);
    width: var(${ne}•size);
    height: var(${ne}•size);
    border-radius: var(--arc-border-radius-circle);
    background: var(${ne}•bg);
    box-shadow: var(${ne}•shadow);
    cursor: pointer;
    z-index: 1;
    touch-action: none;

    &:focus-visible {
      outline: 0.125em solid var(--arc-color-border-focus);
      outline-offset: 0.25em;
    }

    &::after {
      content: '';
      position: absolute;
      inset: -0.375em;
      border-radius: var(--arc-border-radius-circle);
    }
  }

  [arc-gradient-stop-row] {
    position: relative;
    display: grid;
    grid-template-columns: auto ${Wl} 1fr auto;
    gap: 0.5em;
    align-items: center;
    padding: 0.25em;
    margin-inline: -0.25em;
    border-radius: var(--arc-border-radius-md);

    &[is-editing-color] {
      background: var(--arc-color-bg-selected-default);
    }
  }

  [arc-gradient-stop-insert] {
    --arc-button-color: var(--arc-color-alpha-stark);
    --arc-button-width: 100%;
    --arc-button-z-index: 1;

    position: absolute;
    inset: -0.375em 0em auto 0em;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: var(--arc-border-radius-pill);
    height: 0.625em;
    opacity: var(--arc-alpha-0);
    background: transparent;
    transition: opacity 200ms ease-out, background 200ms ease-out;

    [arc-icon] {
      background: var(--arc-color-bg-mono);
      padding-inline: 0.25em;
    }

    &::before {
      content: '';
      position: absolute;
      inset: 50% 0 auto 0;
      translate: 0 -50%;
      height: 0.0625em;
      background: transparent;
      pointer-events: none;
    }

    &:where(:has(:hover), :focus-within) {
      opacity: var(--arc-alpha-80);

      &::before {
        background: var(--arc-color-bg-neutral-subtle);
      }
    }
  }

  *:not([arc-gradient-angle-slider]) + [arc-gradient-presets] {
    margin-block-start: 0.75em;
  }

  [arc-gradient-presets] [arc-color-palette-set] {
    --arc-swatch-width: 100%;
    --arc-swatch-border-radius: var(--arc-border-radius-md);

    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 0.5em;
    min-inline-size: 0;
    max-inline-size: none;
    padding: 0;
    margin: 0;
    border: 0;
  }
`,Vy=d`

  &[arc-color-picker=simple]:has([arc-color-palettes]) [arc-color-tools] {
    padding-top: 0;
  }

  :is([arc-color-tools=simple], [arc-color-tools=solid]) {
    display: grid;
    gap: var(${Lt}•gap, 0.5em);
    grid-template-columns: var(${Lt}•columns, auto 1fr);
  }

  [arc-color-tools=gradient] {
    display: grid;
    gap: 0;
    grid-template-columns: var(${Lt}•columns, 1fr);
  }

  [arc-color-tools=simple] {
    &:has([arc-color-input=hex]):not(:has([arc-color-eye-dropper])) {
      ${Lt}•columns: 1fr 2em;
    }
  }

  :is([arc-color-field], [arc-color-inputs]) {
    grid-column: 1 / -1;
  }

  [arc-color-eye-dropper] {
    align-self: var(${ja}•align•self, center);
    justify-self: var(${ja}•justify•self, center);
  }

  [arc-color-sliders] {
    grid-column: 1 / -1;

    display: grid;
    gap: 0.25em;
    grid-template-columns: auto;
    align-self: center;
  }

  [arc-color-eye-dropper] + [arc-color-sliders] {
    grid-column: 2;
  }

  /* Body placement of the "No color" toggle (unsetColorPlacement="tools"): a 3rd column to the right
     of the sliders, mirroring the eye dropper on the left. Header placement is unaffected (the
     toggle lives outside [arc-color-tools] there). */
  [arc-color-tools=solid]:has([arc-color-unset]) {
    ${Lt}•columns: auto 1fr auto;
  }

  [arc-color-tools=solid] [arc-color-unset] {
    grid-column: 3;
    align-self: center;
    justify-self: center;
  }

  /* Finding a good place for the eye dropper in some cases */
  &:has([arc-color-input=hex]):not(:has([arc-color-input=alpha], [arc-color-sliders])),
  &:has([arc-color-input=alpha]):not(:has([arc-color-input=hex], [arc-color-sliders])) {
    ${ja}•align•self: end;
    ${ja}•justify•self: end;

    &:has([arc-color-eye-dropper]) [arc-color-inputs] { display: contents; }

    &:not(:has([arc-color-field])) { ${ja}•row: 1; }

    &:not(:has([arc-color-input=hex])) {
      ${ja}•justify•self: start;
      ${Lt}•columns: 1fr auto;
      ${ja}•column: 1;
    }

    [arc-color-eye-dropper] {
      grid-column:  var(${ja}•column, 2);
      grid-row: var(${ja}•row, 2);
    }

    [arc-color-sliders] { grid-column: 1 / -1; }
  }

  ${Ny}
  ${By}
  ${Fy}
  ${Hy}

`,Uy=d`
@layer arc-components {

  [arc-color-picker-wrapper] {
    ${n0.POPOVER}
  }

  [arc-color-picker] {
    ${n0.PICKER}

    /* Empty / "no color": the field + sliders stay rendered and interactive (touching them is the
       exit path), but their thumbs are hidden so nothing reads as a committed selection. The
       visible slider thumb is the native range pseudo-element (the [arc-slider-thumb] overlay is
       only a focus-ring anchor, so it stays — keeping keyboard focus visible). */
    &[is-unset] {
      [arc-color-field-thumb],
      [arc-color-field-slice] {
        opacity: 0;
      }

      [arc-color-slider] [arc-slider-input] {
        &::-webkit-slider-thumb { opacity: 0; }
        &::-moz-range-thumb { opacity: 0; }
      }
    }

    [arc-color-picker-section=control] {
      padding: 1em 1em 0 1em;
    }

    &[is-inline] [arc-color-picker-section=control] {
      padding: 0 0 1em 0;
    }

    [arc-color-picker-section]:not([arc-color-picker-section=control]) {
      padding: var(${Co}•padding);

      &:has(+[arc-color-picker-section]) { padding-bottom: 1em; }
      +[arc-color-picker-section] { padding-top: 1em; }

      &[has-divider=top] { border-top: var(--arc-border-width-sm) solid var(--arc-color-border-mid); }
      &[has-divider=bottom] { border-bottom: var(--arc-border-width-sm) solid var(--arc-color-border-mid); }
    }

    ${Vy}

    [arc-color-palettes] {
      display: flex;
      flex-direction: column;
      gap: 1em;
    }

    [arc-color-section-header] {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 0.5em;
      padding: 0;
      height: 2.5em;
    }

    [arc-gradient-angle-slider] {
      position: sticky;
      bottom: 0;
      background: var(--arc-color-bg-mono);
      border-block-start: 0.0625em solid var(--arc-color-border-mid);
      padding-inline: 1em;
      margin-inline: -1em;
      margin-block-start: 0.75em;
      padding-block-end: 0.75em;
    }


    [arc-color-picker-section=footer] {
      position: sticky;
      bottom: 0;
      border-top: var(--arc-border-width-sm) solid var(--arc-color-border-mid);
      background: var(--arc-color-bg-mono);
      z-index: 2;
    }

    [arc-color-picker-button-bar] * {
      flex: 1;
    }
  }

  :where([arc-color-picker], [arc-color-picker-wrapper]) {
    [arc-color-unset][is-active] {
      --arc-button-background: var(--arc-color-bg-selected-subtle);
      --arc-button-border: var(--arc-border-width-sm) solid var(--arc-color-border-selected);
      --arc-button-color: var(--arc-color-fg-brand-heavy);
    }
  }

}
`,Pe=d`--arc•color•chip`,Gy=d`
@layer arc-components {

  [arc-color-chip=swatch] {
    ${Pe}•radius: var(--arc-border-radius-circle);
    ${Pe}•width: var(${m}•24);
    ${Pe}•height: var(${m}•24);
    ${Pe}•border: var(--arc-border-width-sm) solid var(--arc-color-border-mid);
  }

  [arc-color-chip=gradient-stop] {
    ${Pe}•radius: var(--arc-border-radius-md);
    ${Pe}•width: var(${m}•24);
    ${Pe}•height: var(${m}•24);
    ${Pe}•border: var(--arc-border-width-sm) solid var(--arc-color-border-mid);
  }

  [arc-color-chip=gradient] {
    ${Pe}•radius: var(--arc-border-radius-circle);
    ${Pe}•width: var(${m}•24);
    ${Pe}•height: var(${m}•24);
    ${Pe}•border: none;

    &::before {
      content: '';
      position: absolute;
      inset: 0;
      border-radius: var(--arc-swatch-border-radius, var(${Pe}•radius));
      border: var(--arc-border-width-sm) solid var(--arc-color-border-mid);
      opacity: 1;
      pointer-events: none;
      z-index: 1;
    }

    &[is-selected]::before {
      opacity: 0;
    }
  }

  [arc-color-chip] {
    --arc-button-position: relative;
    --arc-button-background: var(--js•gradient, var(--js•color));
    --arc-button-color: var(--js•fg, transparent);
    --arc-button-width: var(--arc-swatch-width, var(${Pe}•width));
    --arc-button-height: var(--arc-swatch-height, var(${Pe}•height));
    --arc-button-border-radius: var(--arc-swatch-border-radius, var(${Pe}•radius));
    --arc-button-border: var(${Pe}•border);
    --arc-button-outline-offset: var(--arc-border-width-sm);
    --arc-icon-size: var(${m}•10);

    &[is-transparent] {
      --arc-button-background: unset;
      ${Kl}
    }

    &[is-translucent] {
      --arc-button-background:
        var(--js•color)
        linear-gradient(
          to right,
          var(--js•hex),
          var(--js•hex) 50%,
          transparent 50%,
          transparent
        ) border-box;

      &::after {
        content: '';
        position: absolute;
        inset: 0 auto 0 50%;
        translate: -100% 0;
        width: var(--arc-border-width-sm);
        background: var(--arc-color-border-mid);
        pointer-events: none;
        z-index: 1;
      }
    }

    &:is(:hover, [is-selected]) {
      --arc-button-border: var(--arc-border-width-sm) solid var(--arc-color-border-heavy);
      --arc-button-box-shadow: 0 0 0 var(--arc-border-width-md) var(--arc-color-fg-on-mono-inverse) inset;
    }

    &[is-draft] {
      --arc-button-outline: var(--arc-border-width-md) dotted color-mix(in srgb, transparent 35%, var(--arc-color-border-focus) 65%);
    }

    &[is-control] {
      --arc-button-background: var(--arc-color-alpha-muted);
      --arc-button-color: inherit;
    }
  }

}
`,c0=(0,s.memo)(({color:r,gradient:e,name:a,kind:t,isDraft:o,isSelected:n,contrastBias:c,contrastBgColor:l,canRemoveColor:u,icon:h,text:p,tooltip:v,labels:g,onClick:f,style:b,popoverTargetAction:$,...x})=>{const A=(0,s.useMemo)(()=>ui(g),[g]),{cssColor:y,isTranslucent:k,isTransparent:w,opaqueHex:E}=(0,s.useMemo)(()=>Cp(r??""),[r]),_=e?Op(e,a):$o(r??"",a),I=p??_??(e?A.gradient:y),C=xp(y)?y.toUpperCase():y,S=v??_??(e?A.gradient:C),T=(0,s.useMemo)(()=>e?yi(e,y):y,[e,y]),D=(0,s.useRef)(null),[N,H]=(0,s.useState)(null),J=!e&&!w&&y!==""&&y!=="transparent"&&!Zr(y),R=(0,s.useCallback)(()=>{const Y=D.current;H(J&&Y&&typeof window<"u"?_p(Y):null)},[J]);(0,s.useEffect)(()=>{R()},[R]);const M=e?T:N??y,P=(0,s.useMemo)(()=>wo(M,{contrastBias:c,bgColor:l}),[M,c,l]),[F,or]=(0,s.useState)(!1),[gr,L]=(0,s.useState)(!1),[X,sr]=(0,s.useState)(!1),[mr,rr]=(0,s.useState)(!1),ur=Dy(()=>L(!1)),lr=(t==="swatch"||t==="gradient")&&!!u&&(X&&ur||(ur||gr)&&F),wr=lr||mr,V=wr?"fa-regular fa-xmark":h??"fa-solid fa-check",K=t==="gradient"?A.removeGradient:A.removeColor,er=wr?K:S;(0,s.useEffect)(()=>{lr&&rr(!0)},[lr]),(0,s.useEffect)(()=>{!lr&&n&&!o&&rr(!1)},[o,lr,n]);const O=(0,s.useCallback)(Y=>{const kr=lr||Y.metaKey?"remove":"select",ir={...Ra(y,{format:"auto",fallbackHex:y,contrastBias:c,contrastBgColor:l}),contrastColor:P,name:_};if(t==="gradient"&&e!=null){f?.({kind:t,colorData:ir,gradientData:ko(e,{contrastBias:c,contrastBgColor:l}),action:kr,shouldClosePicker:!1},Y);return}f?.({kind:t,colorData:ir,action:kr,shouldClosePicker:!1},Y)},[lr,f,y,_,t,e,c,l,P]),cr=(0,s.useCallback)(Y=>{$||Y.preventDefault(),Y.stopPropagation(),O(Y)},[O,$]),br=(0,s.useCallback)(Y=>{Y.metaKey&&(Y.preventDefault(),Y.stopPropagation(),O(Y))},[O]),$r=(0,s.useCallback)(Y=>{const kr=Y.propertyName??"";(kr==="color"||kr.includes("color"))&&(R(),!lr&&rr(!1))},[lr,R]),U=(0,s.useCallback)(Y=>{Y.key!=="Enter"||!lr||(Y.preventDefault(),Y.stopPropagation(),Y.currentTarget.click())},[lr]),W=(0,s.useMemo)(()=>({...b??{},"--js\u2022hex":w?"transparent":k&&(E??y??T)||"","--js\u2022color":y??T,"--js\u2022gradient":e?Za(e):"","--js\u2022fg":n&&!o||lr?P:""}),[b,w,k,E,y,T,n,o,lr,P,e]);return(0,i.jsx)(Lr,{...x,popoverTargetAction:$,ref:D,_isCustom:!0,"arc-color-chip":t,layout:"icon",tooltip:er,text:I,icon:V,"is-draft":o?"":void 0,"is-selected":!o&&n?"":void 0,"is-translucent":k?"":void 0,"is-transparent":w?"":void 0,style:W,onClick:cr,onContextMenu:br,onMouseEnter:Y=>{or(!0),L(Y.metaKey)},onMouseMove:Y=>{L(Y.metaKey)},onMouseLeave:()=>{or(!1),L(!1),rr(!1)},onFocus:()=>sr(!0),onBlur:()=>{sr(!1),rr(!1)},onKeyDown:U,onTransitionEnd:$r})});c0.displayName="ArcColorSwatch";const Mn=c0;Mn.getColorData=Ra,Cr("ArcColorSwatch",Gy);const Ky=d`
@layer arc-components {

  [arc-color-palette] {
    display: flex;
    flex-direction: column;
    gap: var(${j}•8);

    [arc-color-palette-header] {
      display: flex;
      flex-direction: column;
      gap: var(${j}•4);
      font-size: var(${m}•12);

      /* 61.2% is the opacity equivalent of the secondary-text color token's gray value. */
      small { opacity: 0.612; }
    }

    [arc-color-palette-set] {
      display: flex;
      flex-wrap: wrap;
      gap: var(${j}•4);
      max-width: calc((var(${m}•24) + var(${j}•4)) * 7 + var(${j}•24));
      min-inline-size: 0;
      padding: 0;
      margin: 0;
      border: 0;
    }

    [arc-color-palette-picker] {
      display: grid;
      gap: var(${j}•8);
      padding-top: var(${j}•8);
      border-top: var(--arc-border-width-sm) solid var(--arc-color-border-mid);
    }

    [arc-color-palette-inputs] {
      display: grid;
      gap: var(${j}•8);
      grid-template-columns: auto auto;
      align-items: end;
    }

    [arc-color-palette-actions] {
      display: flex;
      justify-content: flex-end;
      gap: var(${j}•8);
    }

    [arc-add-color] {
      --arc-icon-size: var(${m}•10);
    }
  }

}
`,Dn=({children:r,id:e,heading:a,showHeading:t=!0,setAriaLabel:o,colors:n=[],activeColor:c,activeGradient:l,matchByName:u=!1,format:h=Je.format,canAddColor:p=!1,canAddGradient:v=!1,canRemoveColor:g=!1,contrastBgColor:f,addColorFlow:b="standalone",sharedSwatchProps:$,onSwatchClick:x,onAddColor:A,onRemoveColor:y,onColorChange:k,onAddColorToggle:w,labels:E,..._})=>{const I=(0,s.useMemo)(()=>ui(E),[E]),C=b==="embedded",S=Nr(void 0,"add-color-anchor"),T=Nr(void 0,"add-color-popover"),D=Nr(void 0,"palette-heading"),N=t&&!!a,H=jn(x),J=jn(A),R=jn(y),M=jn(k),P=jn(w),[F,or]=(0,s.useState)(n),[gr,L]=(0,s.useState)(!1),[X,sr]=(0,s.useState)(!1),{isSelectionControlled:mr,activeSelectedColor:rr,setUncontrolledSelectedColor:ur,selectColor:yr}=Ly({activeColor:c}),lr=(0,s.useMemo)(()=>Dl(rr),[rr]),wr=(0,s.useMemo)(()=>rr!=null?$o(rr)?.trim().toLowerCase():void 0,[rr]),V=(0,s.useMemo)(()=>F.map(tr=>oe(tr)?{normalized:Za(tr),rgba:null,name:void 0}:{normalized:yo(tr),rgba:Zr(Br(tr)),name:$o(tr)?.trim().toLowerCase()}),[F]),K=(0,s.useMemo)(()=>V.map(tr=>!lr||!(tr.normalized===lr.comparisonKey||!!lr.selectedRgba&&!!tr.rgba&&vi(tr.rgba,lr.selectedRgba))?!1:u&&wr!=null&&tr.name!=null?tr.name===wr:!0),[V,lr,u,wr]),er=(0,s.useMemo)(()=>K.some(Boolean),[K]),O=(0,s.useMemo)(()=>!!l&&F.some(tr=>oe(tr)&&ht(tr,l)),[l,F]),cr=!C&&er?void 0:rr;(0,s.useEffect)(()=>{or(n)},[n]);const br=(0,s.useCallback)(tr=>{if(typeof tr=="object"&&tr!==null&&"hsv"in tr){M?.(tr);return}const Yr=Br(tr),Ut=$o(tr),Fa=Ra(Yr,{format:h,contrastBgColor:f});M?.({...Fa,name:Ut})},[M,h,f]),$r=(0,s.useRef)(!1),U=(0,s.useCallback)(tr=>{tr&&($r.current=!0,sr(!0)),L(tr),P?.(e,tr)},[e,P]),W=(0,s.useCallback)(()=>ga?.handlePopover?.(T,"show"),[T]),Y=(0,s.useCallback)(()=>ga?.handlePopover?.(T,"hide"),[T]);(0,s.useEffect)(()=>{gr&&$r.current&&($r.current=!1,W())},[gr,W]);const kr=(0,s.useMemo)(()=>({id:e,heading:a,showHeading:t,colors:F,activeColor:c,activeGradient:l,format:h,canAddColor:p,canAddGradient:v,canRemoveColor:g,contrastBgColor:f,addColorFlow:b,sharedSwatchProps:$,onSwatchClick:H,onAddColor:J,onRemoveColor:R,onColorChange:M,onAddColorToggle:P}),[e,a,t,F,c,l,h,p,v,g,f,b,$,H,J,R,M,P]),{draftColorIndex:ir,draftColorValue:dr,startAddDraft:q,updateDraftColor:pr,cancelDraftColor:Rr,saveDraftColor:Ir,saveCurrentColor:Sr}=My({palette:kr,isSelectionControlled:mr,onAddColor:J,emitColorChange:br,setLocalColors:or,setUncontrolledSelectedColor:ur,initialColorValue:cr,shouldOpenPopover:!C,notifyAddColorToggle:U,showPopover:W,hidePopover:Y}),Gr=(0,s.useMemo)(()=>F.map((tr,Yr)=>ir===Yr&&dr!=null?dr:tr),[ir,dr,F]),Fr=(0,s.useMemo)(()=>{if(ir==null||dr==null||lr==null||ir<0||ir>=K.length||oe(dr))return K;const tr=[...K];return tr[ir]=Tp(dr,lr),tr},[K,ir,dr,lr]),Hr=(0,s.useMemo)(()=>oe(dr)?null:Dl(dr),[dr]),Ve=(0,s.useMemo)(()=>ir==null||Hr==null?!1:Ml(F.filter(tr=>!oe(tr)),dr,{skipIndex:ir}),[ir,Hr,dr,F]),ee=(0,s.useCallback)((tr,Yr)=>{if(!tr?.colorData)return;if(tr.kind==="gradient"){const Fa=tr.gradientData;if(tr.action==="remove"&&g){or(Xi=>Xi.filter(oc=>!(oe(oc)&&ht(oc,Fa)))),R?.(kr,Fa,Yr);return}H?.({...tr,shouldClosePicker:!1},Yr);return}const Ut={color:tr.colorData.value,name:tr.colorData.name};if(tr.action==="remove"&&g){or(Fa=>{const Xi=Fa.filter(oc=>oe(oc)||!xo(oc,Ut));return Xi.length===Fa.length?Fa:Xi}),R?.(kr,Ut,Yr);return}yr(Ut),H?.({...tr,shouldClosePicker:!1},Yr),br(tr.colorData)},[g,br,R,H,kr,yr]),ke=(0,s.useCallback)(tr=>ir===tr&&dr!=null,[ir,dr]);(0,s.useEffect)(()=>{if(!C||ir==null)return;const tr=(v?l:void 0)??(p?rr:void 0);tr!=null&&pr(tr)},[l,rr,p,v,ir,C,pr]);const Qe=(0,s.useCallback)(tr=>{const Yr=tr?.newState==="open";L(Yr),P?.(e,Yr)},[e,P]),at=(0,s.useCallback)(tr=>{const Yr=(v?l:void 0)??(p?rr??Je.color:Je.color);Sr(Yr,tr)},[p,v,l,rr,Sr]),ra=(0,s.useCallback)(tr=>{tr.key!=="Escape"||!gr||Rr(tr)},[Rr,gr]),Do=(0,s.useMemo)(()=>ir==null||!oe(dr)?!1:F.some((tr,Yr)=>Yr!==ir&&oe(tr)&&ht(tr,dr)),[ir,dr,F]),Xd=p||v,Yd=C&&(!((v?l:void 0)??(p?rr:void 0))||!gr&&(v&&l?O:er)),Zd=C?I.addCurrentColor:I.addSwatch,Jd=C&&gr?I.cancel:Zd,Qd=C||!gr,w2=p&&v?void 0:[v?"gradient":"solid"];let Zg=at;return C||(Zg=gr?Rr:q),(0,i.jsxs)("div",{..._,"arc-color-palette":e,"is-adding-color":gr?"":void 0,children:[N&&(0,i.jsx)("header",{"arc-color-palette-header":"",id:D,children:typeof a=="string"?(0,i.jsx)("strong",{children:a}):(0,i.jsx)(le,{...a,layout:"inline",isStrong:!0})}),(0,i.jsxs)("fieldset",{"arc-color-palette-set":"",id:S,"aria-labelledby":N?D:void 0,"aria-label":N?void 0:o??I.colorPalette,children:[Gr?.map((tr,Yr)=>{if(oe(tr)){const Ut=`${Za(tr)}-${Yr}`,Fa=!!l&&ht(l,tr);return(0,s.createElement)(Mn,{...$,key:Ut,kind:"gradient",gradient:tr,name:tr.name,isDraft:ke(Yr),isSelected:Fa,canRemoveColor:g&&!ke(Yr),contrastBgColor:f,labels:E,onClick:ee})}return(0,s.createElement)(Mn,{...$,key:`${Br(tr)}-${Yr}`,color:tr,kind:"swatch",isDraft:ke(Yr),isSelected:Fr[Yr],canRemoveColor:g&&!(C&&ke(Yr)),contrastBgColor:f,tooltip:C&&ke(Yr)?I.saveColor:void 0,labels:E,onClick:C&&ke(Yr)?Ir:ee})}),Xd&&Qd&&(0,i.jsx)(Lr,{"arc-add-color":"",popoverTarget:T,icon:"fa-regular fa-plus",layout:"icon",shape:"round",size:"sm",hierarchy:"secondary",tooltip:Jd,onClick:Zg,isDisabled:Yd})]}),Xd&&!C&&X&&(0,i.jsx)(La,{mode:"add",heading:"",panels:w2,canTogglePanels:p&&v,color:oe(dr)?Je.color:dr??Je.color,gradient:oe(dr)?dr:void 0,format:h,labels:E,onChange:tr=>{tr.activePanel==="solid"?pr(tr.color.value):tr.activePanel==="gradient"&&pr(tr.gradient)},onPreviewColor:tr=>pr(tr.value),onPreviewGradient:tr=>pr(tr),popoverProps:{id:T,popover:"manual",anchorAt:"right-center",alternateAnchorId:S,hidePopoverButton:!0,tryFallbacks:!0,hasTail:!0,onToggle:Qe,onKeyDown:ra,footerSlot:(0,i.jsxs)(jt,{"arc-color-picker-button-bar":"",children:[(0,i.jsx)(Lr,{"arc-color-picker-button":"cancel",text:I.cancel,hierarchy:"secondary",size:"sm",onClick:Rr}),(0,i.jsx)(Lr,{"arc-color-picker-button":"save",text:I.save,size:"sm",onClick:Ir,isDisabled:Ve||Do})]})}}),r&&(0,i.jsx)("footer",{"arc-color-palette-footer":"",children:r})]})};Dn.addColor=fy,Dn.removeColor=my,Cr("ArcColorPalette",Ky);const Wy=(0,s.memo)(function({palette:e,canAddColor:a,canAddGradient:t,canRemoveColor:o,activePaletteColor:n,activePaletteGradient:c,contrastBgColor:l,labels:u,onSwatchClick:h,onAddColor:p,onRemoveColor:v}){const g=(0,s.useCallback)((f,b)=>{h(f,b,e.id)},[e.id,h]);return(0,i.jsx)(Dn,{...e,canAddColor:a??e.canAddColor,canAddGradient:t??e.canAddGradient,canRemoveColor:o,addColorFlow:"embedded",activeColor:n,activeGradient:c,contrastBgColor:l,labels:u,onAddColor:p,onRemoveColor:v,onSwatchClick:g})}),i0=({palettes:r=[],canAddColor:e,canAddGradient:a,canRemoveColor:t,activePaletteColor:o,activePaletteGradient:n,contrastBgColor:c,selectedNameRef:l,hsvRef:u,popoverId:h,labels:p,onAddColor:v,onRemoveColor:g,commitLocalHsv:f,...b})=>{const $=(0,s.useRef)(r);$.current=r;const x=(0,s.useCallback)((A,y,k)=>{const w=$.current.find(_=>_.id===k);if(!w)return;if(y?.preventDefault(),y?.stopPropagation(),A?.action==="remove"&&(t??w.canRemoveColor)){w.onSwatchClick?.(A,y);return}A?.kind!=="gradient"&&A?.colorData&&(l.current=A.colorData.name,f(A.colorData.hsv));try{w.onSwatchClick?.(A,y)}catch{}if((A?.shouldClosePicker??!0)&&h)try{ga.handlePopover(h,"hide")}catch{}},[t,f,h,l]);return r.length?(0,i.jsx)("div",{...b,"arc-color-palettes":"","arc-color-picker-section":"palettes",children:r.map(A=>(0,i.jsx)(Wy,{palette:A,canAddColor:e,canAddGradient:a,canRemoveColor:!!(t??A.canRemoveColor),activePaletteColor:o,activePaletteGradient:n,contrastBgColor:c,labels:p,onSwatchClick:x,onAddColor:v,onRemoveColor:g},A.id))}):null},s0=({onCommit:r})=>{const e=(0,s.useRef)(!1),a=(0,s.useCallback)((t,o)=>{const n=()=>{e.current=!1,o(),r()};return{onChange:({value:c})=>{e.current=!0,t(Number(c))},onPointerUp:n,onPointerCancel:n,onBlur:()=>{e.current&&n()}}},[r]);return{isPreviewingRef:e,createInputProps:a}},xi={status:"idle"},l0=(r,e)=>r.kind!==e.kind?!1:r.kind==="stop-at"&&e.kind==="stop-at"?r.stopId===e.stopId:!0,Xy=(r,e)=>{switch(e.type){case"PREVIEW_START":return{status:"previewing",source:e.source};case"PREVIEW_END":return r.status==="previewing"?xi:r;case"EDIT_FOCUS":return{status:"editingText",field:e.field,draft:e.draft};case"EDIT_INPUT":return r.status==="editingText"?{...r,draft:e.draft}:r;case"EDIT_BLUR":return r.status==="editingText"?xi:r;case"EXTERNAL_ADOPT":return r.status==="idle"?r:xi;default:return r}},qy=(r,e)=>r.status==="editingText"&&l0(r.field,e),Xl=(r,e,a)=>a.status==="editingText"&&l0(a.field,r)?a.draft:e,L2=1,Yy=/^[0-9A-Fa-f]{3}$/,Zy=/^[0-9A-Fa-f]{4}$/,Jy="[0-9A-Fa-f]{3}|[0-9A-Fa-f]{4}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8}",Qy="[0-9A-Fa-f]{3}|[0-9A-Fa-f]{6}",d0=r=>{if(Yy.test(r))return{kind:"three",expanded:Tl(r)};if(Zy.test(r)){const e=Zr(`#${r}`);if(e)return{kind:"four",shorthand:r,expanded:bo(e),alphaPercent:Math.round(e.a*100)}}return null},rx=(r,e,a)=>r?.kind==="three"?a.hexExpandHint(r.expanded.toUpperCase()):r?.kind==="four"?e?a.hexApplyAlphaHint(r.expanded.toUpperCase(),r.alphaPercent):a.hexExpandHint(r.expanded.toUpperCase()):a.hexInvalid,ex=(r,e,a,t=pe)=>{const o=Pt(r),n=d0(o),c=o.length>0&&(!a&&o.length===8||!e&&o.length!==6&&o.length!==8||Zr(`#${o}`)===null),u=!e&&o.length>0&&o.length!==6&&o.length!==8||!a&&o.length===8?rx(n,a,t):t.hexInvalid,h=!a&&o.length===8?t.hexRgbOnly:u;let p=t.applyExpandedHex;return n?.kind==="four"?p=a?t.applyHexWithAlpha(n.expanded.toUpperCase(),n.alphaPercent):t.applyExpandedHexValue(n.expanded.toUpperCase()):n?.kind==="three"&&(p=t.applyExpandedHexValue(n.expanded.toUpperCase())),{isInvalid:c,errorAid:{tooltip:h,ariaLabel:p,fix:n}}},u0=(r,e,a,t)=>{const o=Zr(`#${r}`);o&&(e(r,{applyHexAlpha:!0,...t}),a(bo(o)))},ax=(r,e,a,t)=>{if(e){u0(r,a,t);return}const o=Zr(`#${r}`);if(o){const n=bo(o);t(n),a(n)}},tx=(r,e,a,t)=>{if(e)u0(r,a,t);else{const o=r.slice(0,6);t(o),a(o)}},ox=(r,e,a,t)=>{r.kind==="three"?(a(r.expanded),e(r.expanded)):t?(e(r.shorthand,{applyHexAlpha:!0}),a(r.expanded)):(a(r.expanded),e(r.expanded))},nx=(r,e=!1)=>{const a=Pt(r);return!e&&a.length>6?a.slice(0,6):a},cx=(r,e,a,t)=>{if(!a&&(r.length===8||t?.applyHexAlpha===!0))return!1;if(!e&&r.length>0){const o=r.length===6||r.length===8,n=t?.applyHexAlpha===!0&&r.length===4;if(!o&&!n)return!1}return!0},h0=()=>typeof window<"u"&&"EyeDropper"in window&&typeof window.EyeDropper=="function",ql=h0(),p0=ql?window.EyeDropper:void 0,g0=p0?new p0:void 0,ix=({onColorPicked:r,labels:e,...a})=>{const t=e??pe,[o,n]=(0,s.useState)(!1),c=async()=>{if(!(!ql||!g0||o)){n(!0);try{const{sRGBHex:l}=await g0.open();if(typeof r=="function"){const u=Ge(bi(l,"#000000"));r(Ke({...u,a:1},!1))}else console.warn("EyeDropper: onColorPicked prop was not provided")}catch(l){l instanceof DOMException&&l.name==="AbortError"||console.error("EyeDropper failed:",l)}finally{n(!1)}}};return ql?(0,i.jsx)("div",{"arc-color-eye-dropper":"",children:(0,i.jsx)(Lr,{...a,onClick:c,layout:"icon",shape:"square",size:"md",variant:"common",hierarchy:"tertiary",icon:"fa-regular fa-eye-dropper",text:t.eyeDropper,tooltip:t.eyeDropperTooltip})}):null},So=r=>(0,i.jsx)(i.Fragment,{children:!!r.children&&(0,i.jsx)("span",{...r})}),sx=r=>(0,i.jsx)(i.Fragment,{children:!!r.children&&(0,i.jsx)("span",{...r})}),Yl=({children:r,...e})=>(0,i.jsx)(i.Fragment,{children:!!r&&(0,i.jsx)(Et,{...e,children:(0,i.jsx)(_t,{children:r})})}),lx=({children:r,layout:e,size:a,variant:t,tag:o="span",...n})=>(0,i.jsx)(o,{...n,"data-layout":e,"data-size":a,"data-variant":t,children:r}),dx=()=>(0,i.jsx)("span",{"input-element":"spacer"}),ux=r=>(0,i.jsx)(So,{...r,"input-element":"header"}),hx=r=>(0,i.jsx)(Yl,{...r,"input-element":"header-label"}),px=r=>(0,i.jsx)(So,{...r,"input-element":"header-slot"}),gx=r=>(0,i.jsx)(So,{...r,"input-element":"body"}),vx=r=>(0,i.jsx)(Yl,{...r,"input-element":"input-prefix"}),fx=r=>(0,i.jsx)(Yl,{...r,"input-element":"input-suffix"}),mx=r=>(0,i.jsx)(sx,{...r,"input-element":"input-action"}),bx=r=>(0,i.jsx)(So,{...r,"input-element":"footer"}),$x=r=>(0,i.jsx)(So,{...r,"input-element":"footer-caption"}),yx=r=>(0,i.jsx)(So,{...r,"input-element":"footer-slot"}),xx=r=>e=>{if(!(e?.target instanceof HTMLInputElement))return;const a={name:e?.target?.name,value:e?.target?.value};r?.(a,e)},Jr=d`--arc•input`,Ja=d`${Jr}•fg`,wi=d`${Ja}•disabled`,ki=d`${Ja}•readonly`,Ai=d`${Ja}•invalid`,oa=d`${Jr}•bg`,Ci=d`${oa}•hover`,Si=d`${oa}•disabled`,zi=d`${oa}•readonly`,Ei=d`${oa}•invalid`,wx=d`${Jr}•align`,v0=d`${wx}•items`,f0=d`${Jr}•header`,_i=d`${f0}•label•color`,m0=d`${f0}•slot•color`,b0=d`${Jr}•footer`,Zl=d`${b0}•caption•color`,$0=d`${b0}•slot•color`,Jl=d`${Jr}•border`,y0=d`${Jl}•radius`,kx=d`${Jl}•width`,na=d`${Jl}•color`,Ql=d`${Jr}•outline`,x0=d`${Ql}•size`,w0=d`${Ql}•offset`,k0=d`${Ql}•color`,On=d`${Jr}•height`,Ax=d`${Jr}•padding`,Ti=d`${Ax}•inline`,rd=d`${Ti}•end`,A0=d`${Jr}•slot`,ed=d`${A0}•gap`,ad=d`${A0}•font•size`,Ii=d`${na}•hover`,Pi=d`${na}•disabled`,td=d`${na}•readonly`,Nn=d`${na}•invalid`,od=d`${Jr}•action•height`,C0=d`${Jr}•gap`,nd=d`${Jr}•font•size`,Cx=d`
@layer arc-components {

/* --arc[-internal, -modifier, -computed] • NOT FOR CONSUMER USE ---• */

[arc-input] {

  /* SIZES ---------------------------------------------------------• */

  &[data-size=xl] {
    ${On}: var(${m}•48);
    ${rd}: var(${j}•8);
    ${od}: var(${m}•48);
  }

  &:is([data-size=lg], [data-size=inherit]) { /* @default • base size at 100% */
    ${On}: var(${m}•40);
    ${od}: var(${m}•40);
  }

  &[data-size=md] {
    ${On}: var(${m}•32);
    ${od}: var(${m}•32);
  }

  &:has(select) {
    ${Ti}: 0;
    ${v0}: stretch;
  }

  & {
    /* Defaults -------------------------• */
    ${nd}: var(${m}•14);
    ${ad}: var(${m}•12);

    ${On}: var(${m}•40); /* default size */
    ${C0}: var(${j}•6);
    ${ed}: var(${j}•4);
    ${Ti}: var(${j}•12);
    ${rd}: var(${j}•3);
    ${y0}: var(${m}•8);
    ${kx}: var(${m}•1);
    ${x0}: var(${m}•2);
    ${w0}: var(${m}•2);

    &[data-size=inherit] {
      ${nd}: 0.875em; /* 14px at 100% */
      ${ad}: 0.75em; /* 12px at 100% */
    }
  }

  /* VARIANTS ------------------------------------------------------• */

  & {
    ${Ja}: var(--arc-color-fg-primary);
    ${_i}: inherit;
    ${m0}: var(--arc-color-fg-secondary);
    ${Zl}: var(--arc-color-fg-secondary);
    ${$0}: var(--arc-color-fg-secondary);

    &[data-variant=outline] { /* @default */
      ${oa}: var(--arc-color-bg-primary);
      ${Ci}: var(--arc-color-bg-primary);
      ${na}: var(--arc-color-border-mid);
      ${Ii}: var(--arc-color-border-heavy);

      ${wi}: var(--arc-color-fg-disabled);
      ${Si}: var(--arc-color-bg-secondary);
      ${Pi}: var(--arc-color-border-mid);

      ${ki}: var(--arc-color-fg-primary);
      ${zi}: var(--arc-color-bg-disabled);
      ${td}: var(--arc-color-border-mid);

      ${Ai}: var(--arc-color-fg-critical-mid);
      ${Ei}: var(--arc-color-bg-primary);
      ${Nn}: var(--arc-color-fg-critical-mid);
    }

    &[data-variant=solid] {
      ${oa}: var(--arc-color-bg-secondary);
      ${Ci}: var(--arc-color-bg-hover-default);
      ${na}: transparent;
      ${Ii}: var(--arc-color-border-stark);

      ${Ai}: var(--arc-color-fg-critical-mid);
      ${Ei}: var(--arc-color-bg-critical-muted);
      ${Nn}: transparent;

      ${wi}: var(--arc-color-fg-disabled);
      ${Si}: var(--arc-color-bg-disabled);
      ${Pi}: transparent;

      ${ki}: var(--arc-color-fg-primary);
      ${zi}: var(--arc-color-bg-disabled);
      ${Nn}: var(--arc-color-fg-critical-mid);
    }

    &[data-variant=plain] {
      ${oa}: transparent;
      ${Ci}: var(--arc-color-bg-hover-default);
      ${na}: transparent;
      ${Ii}: transparent;

      ${Ai}: var(--arc-color-fg-critical-mid);
      ${Ei}: transparent;
      ${Nn}: var(--arc-color-fg-critical-mid);

      ${wi}: var(--arc-color-fg-disabled);
      ${Si}: transparent;
      ${Pi}: transparent;

      ${ki}: var(--arc-color-fg-primary);
      ${zi}: var(--arc-color-bg-disabled);
      ${td}: transparent;
    }
  }

  /* STATES --------------------------------------------------------• */

  &:where(:not(:has(
    input:where(:disabled, :read-only),
    select:where(:disabled, [data-readonly])
  ))) {
    &:where(
      :hover,
      [data-simulate=hover]
    ) {
      ${na}: var(--arc-input-border-color-hover, var(${Ii}));
      ${oa}: var(--arc-input-background-hover, var(${Ci}));
    }

    &:has([input-element=body]) {
      &:where(
        :focus-within,
        [data-simulate=focus],
        [data-simulate=active],
        :has(:focus, :focus-visible)
      ) {
        ${k0}: var(--arc-color-border-focus);
      }
    }
  }

  &:where(:has(
    input[type=range]:not(:disabled),
    select:not(:disabled, [data-readonly])
  )) {
    ${Jr}•cursor: pointer;
  }

  &:where(:has(
    input:not([type=range]):read-only,
    select[data-readonly]
  )) {
    ${Jr}•cursor: default;
    ${Ja}: var(${ki});
    ${oa}: var(${zi});
    ${na}: var(${td});
  }

  &:has(input:disabled, select:disabled) {
    ${Jr}•cursor: not-allowed;
    ${Ja}: var(${wi});
    ${oa}: var(${Si});
    ${na}: var(${Pi});
    ${_i}: var(--arc-color-fg-primary);
  }

  &[data-simulate=invalid],
  &:has(
    input:user-invalid:not(:focus),
    select:user-invalid:not(:focus)
  ) {
    ${oa}: var(${Ei});
    ${_i}: var(${Ja});
    ${na}: var(${Nn});
    ${Zl}: var(${Ai});
  }

  /* LAYOUTS -------------------------------------------------------• */

  &[data-layout=fill] { /* @default */
    flex: var(--arc-input-flex, 1);
    ${Jr}•display: flex;
  }

  &[data-layout=hug] {
    flex: var(--arc-input-flex, none);
    ${Jr}•display: inline-flex;
  }

  & {
    ${Jr}•border: var(--arc-border-width-sm) solid var(${na});
    ${Jr}•outline: var(${x0}) solid var(${k0}, transparent);
  }
}

/* Inter-Component Communications ----------------------------------• */

[arc-input] {
  --arc-icon-text-line-height: normal;
  --arc-label-cursor: var(${Jr}•cursor, inherit); /* ArcLabel • cursor syncing */

  &[arc-text-input][data-size=md] {
    --arc-button-border-radius: var(--arc-border-radius-md);
    --arc-button-outline-offset: 0;
    --arc-button-height: 80%; /* ArcButton • the input size 'md' needs
                                      a slightly smaller "input-action" button
                                      footprint; there's no direct access to
                                      ArcButton['size'] prop in this context */
  }
}

[arc-input]:not([hidden]) {
  display: var(${Jr}•display, flex);
  flex-direction: column;
  gap: var(${ed});
  color: var(--arc-input-color, var(${Ja}));

  :is([input-element=header], [input-element=footer]) {
    flex: none;
    display: flex;
    justify-content: space-between;
    font-size: var(--arc-input-slot-font-size, var(${ad}));
    gap: var(${ed});
  }

  [input-element=spacer] {
    display: safe flex-end;
  }

  [input-element=header] {
    align-items: safe flex-end;
  }

  [input-element=header-label] {
    flex: 1;
    color: var(--arc-input-header-label-color, var(${_i}));
    opacity: var(--arc-input-header-label-opacity, unset);
    font-weight: var(--arc-input-header-label-font-weight, var(--arc-font-weight-600));
  }

  [input-element=header-slot] {
    color: var(--arc-input-header-slot-color, var(${m0}));
    min-width: var(--arc-input-header-slot-min-width, fit-content);
  }

  [input-element=footer] {
    align-items: baseline;
  }

  [input-element=footer-caption] {
    flex: 1;
    color: var(--arc-input-footer-caption-color, var(${Zl}));
  }

  [input-element=footer-slot] {
    color: var(--arc-input-footer-slot-color, var(${$0}));
    min-width: var(--arc-input-footer-slot-min-width, fit-content);
  }

  [input-element=body] {
    flex: none;
    position: relative;
    display: flex;
    align-items: var(${v0}, center);
    gap: var(--arc-input-gap, var(${C0}));
    height: var(--arc-input-height, var(${On}));
    font-size: var(${nd});

    color: var(--arc-input-color, var(${Ja}));
    background-color: var(--arc-input-background, var(${oa}));
    border: var(--arc-input-border, var(${Jr}•border));
    border-radius: var(--arc-input-border-radius, var(${y0}));
    outline: var(${Jr}•outline, none);
    outline-offset: var(--arc-input-outline-offset, var(${w0}));

    transition-property: border, background, color, height;
    transition-duration: 200ms;
    transition-timing-function: ease-out;

    cursor: var(${Jr}•cursor, unset);

    padding-inline: var(--arc-input-padding-inline, var(${Ti}));

    &:has([input-element=input-action]) {
      padding-inline-end: var(${rd});
    }

    input {
      cursor: inherit;
      appearance: none;
      align-self: stretch;
      flex: 1;
      font: inherit;
      color: inherit;
      padding: 0;
      margin: 0;
      outline: none;
      line-height: normal;
      width: var(--arc-input-width, 100%);
      min-width: var(--arc-input-min-width, 1em);
      max-width: var(--arc-input-max-width, 100%);
      text-align: var(--arc-input-text-align, unset);

      &:not([type=range]) {
        border: var(--arc-border-width-sm) solid transparent;
        background: transparent;
      }

      /* @note - textfield appearance suppresses native spinners for number inputs */
      &[arc-input-type=number][is-appearance=textfield] {
        appearance: textfield;

        &::-webkit-inner-spin-button,
        &::-webkit-outer-spin-button {
          appearance: none;
        }
      }

      &[arc-input-type=search]::-webkit-search-cancel-button {
        appearance: none;
        display: none;
      }
    }

    /* @note - reset font-size for nested input elements */
    [input-element] { font-size: var(--arc-input-element-font-size, 1em); }
  }

  [input-element=input-prefix] {
    flex: none;
    opacity: var(--arc-input-prefix-opacity, unset);
    font-weight: var(--arc-input-prefix-font-weight, unset);
  }

  [input-element=input-suffix] {
    flex: none;
    opacity: var(--arc-input-suffix-opacity, var(--arc-alpha-40));
  }

  [input-element=input] {
    flex: 1;
    display: flex;
  }

  [input-element=input-action] {
    flex: none;
    cursor: inherit;
    align-self: stretch;
    display: var(--arc-input-action-display, flex);
    align-items: center;
    justify-content: center;
  }
}

}
`,Sx={onChangeHandler:xx,Wrapper:lx,Spacer:dx,Header:ux,HeaderLabel:hx,HeaderSlot:px,InputBody:gx,InputPrefix:vx,InputSuffix:fx,InputAction:mx,Footer:bx,FooterCaption:$x,FooterSlot:yx};Cr("ArcInput",Cx);const Pr=Sx,zx="[input-element=body]",Ex=24;function _x({inputRef:r,onChange:e,enabled:a,deltaPerStep:t=Ex}){const o=(0,s.useRef)(e);o.current=e,(0,s.useEffect)(()=>{if(!a||t<=0)return;let n=0;const c=()=>r.current,l=()=>{const f=c();if(!(f instanceof Element))return null;const b=f.closest(zx);return b instanceof HTMLElement?b:null},u=(f,b)=>{const $=o.current;if(!$)return;const x={name:f.name,value:b};$(x,{target:f,currentTarget:f})},h=()=>{n=0},p=f=>{const b=c();if(!b||document.activeElement!==b||b.type!=="number"||b.disabled||b.readOnly)return;f.preventDefault(),f.stopPropagation();const $=Number(b.step)||1,x=Number(b.min),A=Number(b.max),y=Number.isFinite(x)?x:void 0,k=Number.isFinite(A)?A:void 0;let w=Number(b.value);if(!Number.isFinite(w))return;n+=f.deltaY;const E=t,_=()=>{const S=Math.max(y??-1/0,w-$);return S===w?!1:(w=S,u(b,String(S)),!0)},I=()=>{const S=Math.min(k??1/0,w+$);return S===w?!1:(w=S,u(b,String(S)),!0)};for(;n>=E;){if(!_()){n=0;break}n-=E}for(;n<=-E;){if(!I()){n=0;break}n+=E}},v=l(),g=c();if(!(!v||!g||g.type!=="number"))return g.addEventListener("blur",h),v.addEventListener("wheel",p,{passive:!1}),()=>{g.removeEventListener("blur",h),v.removeEventListener("wheel",p)}},[a,t,r])}const Ri=vr(sa,["fill","hug"]),ji=vr(ve,["inherit","xl","lg","md"]),cd=vr(Xr,["outline","solid","plain"]),Tx=Ri,Ix=ji,Px=vr(cd,["outline","solid"]),Rx=["text","number","password","email","url"],zo=(0,s.forwardRef)(({layout:r="hug",size:e="inherit",variant:a="outline",inputProps:t,headerLabel:o,headerSlot:n,inputPrefix:c,inputAction:l,inputSuffix:u,footerCaption:h,footerSlot:p,...v},g)=>{const{id:f,wheelControl:b,appearance:$,onChange:x,...A}=t,y="arc-search"in v,k=y?"search":A?.type||"text",w=A?.disabled||void 0,E=A?.readOnly||void 0,_=A?.required||void 0,I=!!(o||n),C=!!(h||p),S=(0,s.useRef)(null),T=(0,s.useCallback)(H=>{S.current=H,Ce(g,H)},[g]),D=typeof b=="object"?b.deltaPerStep:void 0;_x({enabled:k==="number"&&b!==!1,deltaPerStep:D,inputRef:S,onChange:x});const N=l&&(0,s.isValidElement)(l)?(0,s.cloneElement)(l,{size:"md"}):l;return(0,i.jsxs)(Pr.Wrapper,{...v,"arc-text-input":"","arc-input":k,layout:r,size:e,variant:a,children:[I&&(0,i.jsxs)(Pr.Header,{children:[(0,i.jsx)(Pr.HeaderLabel,{htmlFor:f,children:o}),!!n&&(0,i.jsx)(Pr.Spacer,{}),(0,i.jsx)(Pr.HeaderSlot,{children:n})]}),(0,i.jsxs)(Pr.InputBody,{children:[(0,i.jsx)(Pr.InputPrefix,{htmlFor:f,children:c}),(0,i.jsx)("input",{...A,...y?{type:k}:{},ref:T,id:f,"arc-input-type":k,onChange:Pr.onChangeHandler(x),"aria-disabled":w,"aria-readonly":E,"aria-required":_,"is-appearance":$??void 0}),(0,i.jsx)(Pr.InputSuffix,{htmlFor:f,children:u}),(0,i.jsx)(Pr.InputAction,{children:N})]}),C&&(0,i.jsxs)(Pr.Footer,{children:[(0,i.jsx)(Pr.FooterCaption,{children:h}),!!p&&(0,i.jsx)(Pr.Spacer,{}),(0,i.jsx)(Pr.FooterSlot,{children:p})]})]})}),S0=({commitDraft:r,setIsEditing:e,onRevert:a})=>{const t=(0,s.useCallback)(()=>{e(!0)},[e]),o=(0,s.useCallback)(()=>{e(!1),r()},[e,r]),n=(0,s.useCallback)(c=>{if(c.key==="Enter"){c.preventDefault(),e(!1),r(),c.currentTarget.blur();return}c.key==="Escape"&&(c.preventDefault(),e(!1),a(),c.currentTarget.blur())},[e,r,a]);return{onFocus:t,onBlur:o,onKeyDown:n}},jx=({hsv:r,draftValue:e,label:a,showLabel:t=!0,setIsEditing:o,commitDraft:n,setDraftValue:c,expandHexShorthand:l=!1,hasAlphaTools:u=!0,isUnset:h=!1,labels:p,headerSlot:v})=>{const g=p??pe,f=a??g.hex,b=Nr(void 0,"hex-input"),$=(0,s.useRef)(null),x=bo(Ge(r)),[A,y]=(0,s.useState)(!1),{isInvalid:k,errorAid:w}=(0,s.useMemo)(()=>ex(e,l,u,g),[e,l,u,g]),{onFocus:E,onBlur:_,onKeyDown:I}=S0({commitDraft:n,setIsEditing:o,onRevert:()=>c(x)}),C=(0,s.useCallback)(()=>{y(!0);const R=Pt(e);if(R.length===8){tx(R,u,n,c),_();return}if(l&&R.length===3){const M=Tl(R);c(M),n(M),o(!1),_();return}l&&R.length===4&&ax(R,u,n,c),_()},[e,l,u,c,n,o,_]),S=(0,s.useCallback)(R=>{if(R.key!=="ArrowUp"&&R.key!=="ArrowDown")return;const M=R.key==="ArrowUp"?1:-1,P=R.altKey?"r":R.metaKey?"g":"b",F=R.shiftKey?16:1,or=kp(Pt(e),Ge(r),P,M,F);c(or),n(or,{phase:"preview"}),R.preventDefault()},[e,r,c,n]),T=(0,s.useCallback)(R=>{if(S(R),!R.defaultPrevented){if(R.key==="Enter"){R.preventDefault(),o(!1),R.currentTarget.blur();return}R.key==="Escape"&&I(R)}},[S,o,I]),D=({value:R})=>{const M=nx(R??"",u);c(M),M.length===6&&n(M,{phase:"preview"})},N=k&&A,H=N?w.tooltip:void 0,J=(0,s.useCallback)(()=>{const R=d0(Pt(e));R&&ox(R,n,c,u),queueMicrotask(()=>{$.current?.focus()})},[e,n,c,u]);return(0,i.jsx)(zo,{ref:$,"arc-color-input":"hex",size:"md",variant:"solid",headerLabel:t?f:void 0,headerSlot:v,inputPrefix:"#",inputAction:N?(0,i.jsx)(Lr,{layout:"icon",icon:"fa-solid fa-exclamation-circle",variant:"tertiary",tooltip:w.tooltip,"aria-label":w.ariaLabel,onClick:J}):void 0,inputProps:{id:b,"aria-label":f,placeholder:h?g.unsetColorPlaceholder:"...",value:e,pattern:u?Jy:Qy,maxLength:u?9:6,title:H,"aria-invalid":N?!0:void 0,style:{textTransform:"uppercase",letterSpacing:"0.0625ch"},onFocus:E,onBlur:C,onKeyDown:T,onChange:D}})},z0=({isUnset:r,onSelect:e,labels:a})=>{const t=a??pe;return(0,i.jsx)(Lr,{"arc-color-unset":"",icon:"fa-regular fa-eraser",layout:"icon",shape:"square",size:"sm",variant:"common",hierarchy:"tertiary",text:t.unsetColor,tooltip:t.unsetColor,"aria-label":t.unsetColor,isActive:r,onClick:e})},E0=["value","pct","pctSigned","min","max"],_0=new RegExp(`\\{#(${E0.join("|")})\\}`,"g"),Lx=Ri,Mx=ji,Dx=cd,Ox=["top","inline"],T0=({text:r,value:e,toValue:a,pctSigned:t,min:o,max:n})=>{const c={value:String(e??""),pct:String(a??""),pctSigned:String(t??""),min:String(o??""),max:String(n??"")};return typeof r=="string"?r.replace(_0,(l,u)=>c[u]):typeof r=="function"?r({...c,toValue:a,pctSigned:t}):r},Nx=10,id=r=>r==="ArrowUp"||r==="ArrowDown"||r==="ArrowLeft"||r==="ArrowRight",sd=(r,{shiftKey:e},{step:a=1,stepLarge:t=Nx}={})=>{if(!id(r))return null;const o=e?t:a;return r==="ArrowDown"||r==="ArrowLeft"?-o:o},I0=(r,e,{min:a=-1/0,max:t=1/0}={})=>ar(r+e,a,t),Bx=(r,{getValue:e,onStep:a,min:t,max:o,step:n,stepLarge:c})=>{const l=sd(r.key,r,{step:n,stepLarge:c});if(l==null)return!1;r.preventDefault();const u=I0(e(),l,{min:t,max:o});return a(u,r),!0},P0=(...r)=>e=>{r.some(a=>(a(e),e.defaultPrevented))},R0=(r,e,a,t)=>ar(Math.round(r/e)*e,a,t),j0=(r,e,a,t,o)=>{const n=r%a===0;return e>0?ar(n?r+a:Math.ceil(r/a)*a,t,o):ar(n?r-a:Math.floor(r/a)*a,t,o)},L0=({snapStep:r,min:e,max:a,step:t=1,value:o,onChange:n,onKeyDown:c,onPointerDown:l,onPointerMove:u,onPointerUp:h,onPointerCancel:p})=>{const v=(0,s.useRef)(!1),g=(0,s.useRef)(null),f=(0,s.useCallback)(()=>{g.current?.(),g.current=null},[]),b=(0,s.useCallback)(()=>{if(g.current||typeof window>"u")return;const w=E=>{v.current=E.shiftKey};window.addEventListener("keydown",w,!0),window.addEventListener("keyup",w,!0),g.current=()=>{window.removeEventListener("keydown",w,!0),window.removeEventListener("keyup",w,!0)}},[]);(0,s.useEffect)(()=>f,[f]);const $=(0,s.useCallback)(w=>{v.current=w.shiftKey,b(),l?.(w)},[l,b]),x=(0,s.useCallback)(w=>{v.current=!1,f(),h?.(w)},[h,f]),A=(0,s.useCallback)(w=>{v.current=!1,f(),p?.(w)},[p,f]),y=(0,s.useCallback)((w,E)=>{if(!r||!v.current){n?.(w,E);return}const _=R0(Number(w.value),r,e,a);n?.({...w,value:String(_)},E)},[r,e,a,n]),k=(0,s.useCallback)(w=>{if(!r||!w.shiftKey||!id(w.key)){c?.(w);return}const E=sd(w.key,w,{step:t,stepLarge:r});if(E==null){c?.(w);return}w.preventDefault();const _=j0(o,E>0?1:-1,r,e,a),I={value:String(_)};n?.(I,w)},[r,t,e,a,o,n,c]);return r?{onChange:y,onKeyDown:k,onPointerDown:$,onPointerMove:u,onPointerUp:x,onPointerCancel:A}:{onChange:n,onKeyDown:c,onPointerDown:l,onPointerMove:u,onPointerUp:h,onPointerCancel:p}},Fe=d`--arc•slider`,Ze=d`${Fe}•track`,Dr=d`${Fe}•thumb`,Eo={BASE:d`
    ${Ze}•bg: var(--arc-slider-track-background, var(--arc-color-border-mid));
    ${Ze}•progress•bg: var(--arc-slider-progress-background, var(--arc-color-bg-theme-heavy));
    ${Ze}•height: var(--arc-slider-track-height, max(4px, 0.25em));

    ${Dr}•size: var(--arc-slider-thumb-size, max(16px, 1em));
    ${Dr}•size•hover: var(--arc-slider-thumb-size-hover, max(16px, 1em));
    ${Dr}•size•anchor: var(--arc-slider-thumb-size-hover, var(--arc-slider-thumb-size, max(16px, 1em)));
    ${Dr}•size•rest: var(${Dr}•size•anchor);

    ${Dr}•bg: var(--arc-slider-thumb-background, var(--arc-color-bg-theme-heavy));
    ${Dr}•shadow: var(--arc-slider-thumb-shadow, var(--arc-shadow-md));

    &:has([has-small-thumb]) {
      ${Dr}•size: var(--arc-slider-thumb-size, max(8px, 0.5em));
      ${Dr}•size•rest: var(--arc-slider-thumb-size, max(8px, 0.5em));
    }

    &:has(
      [arc-slider-surface]:hover,
      [arc-slider-surface]:active,
      [arc-slider-surface]:focus-within
    ):not(:has([arc-slider-input]:disabled)) {
      ${Dr}•size: var(${Dr}•size•hover);
    }

    &:has([arc-slider-input]:disabled) {
      ${Dr}•bg: var(--arc-slider-thumb-background-disabled, var(--arc-color-bg-neutral-mid));
      ${Ze}•progress•bg: var(--arc-slider-progress-background-disabled, var(--arc-color-bg-neutral-mid));
      ${Ze}•bg: var(--arc-slider-track-background-disabled, var(--arc-color-bg-disabled));
      ${Dr}•shadow: var(--arc-slider-thumb-shadow-disabled, none);
    }

    ${Dr}•shift: calc((var(${Ze}•height) - var(${Dr}•size)) / 2);
    ${Dr}•shift•anchor: calc((var(${Ze}•height) - var(${Dr}•size•anchor)) / 2);

    ${Fe}•radius: var(--arc-border-radius-pill);
    ${Fe}•vx: calc((100% - var(${Dr}•size)) * (var(--js•v, 0) / 100));
    ${Fe}•vx•anchor: calc((100% - var(${Dr}•size•anchor)) * (var(--js•v, 0) / 100));

    ${Dr}•cx•nudge: calc(
      (var(--js•v, 0) / 100 - 0.5) * (var(${Dr}•size•anchor) - var(${Dr}•size•rest))
    );

    ${Fe}•tx: calc(var(${Fe}•vx•anchor) + var(${Dr}•cx•nudge));
    ${Fe}•ty: var(${Dr}•shift•anchor);
  `,THUMB:d`
    appearance: none;
    width: var(${Dr}•size);
    height: var(${Dr}•size);
    border: none;
    background: var(${Dr}•bg);
    translate: 0 0;
    box-sizing: border-box;
    border-radius: var(--arc-border-radius-circle);
    box-shadow: var(${Dr}•shadow);
    transition-property: translate, width, height, background;
    transition-duration: 200ms;
    transition-timing-function: ease-out;
  `,THUMB_FOCUS:d`
    outline: var(--arc-border-width-md) solid var(--arc-color-border-focus);
    outline-offset: var(--arc-slider-thumb-outline-offset, 0.125em);
  `,TRACK:d`
    display: flex;
    align-items: center;
    height: var(${Ze}•height);
    border-radius: var(${Fe}•radius);
    background: var(${Ze}•bg);
  `},Fx=d`
@layer arc-components {

  /* SETUP ---------------------------------------------------------• */

  [arc-slider] {
    ${Eo.BASE}
    font-size: initial;

    --arc-input-header-label-font-weight: var(--arc-slider-label-font-weight, unset);
    --arc-input-prefix-font-weight: var(--arc-slider-label-font-weight, var(--arc-font-weight-600));

    --arc-input-header-label-opacity: var(--arc-slider-label-opacity, unset);
    --arc-input-prefix-opacity: var(--arc-slider-label-opacity, unset);

    ::-webkit-inner-spin-button {
      appearance: none;
    }

    ::-webkit-list-button {
      appearance: none;
    }

    ::-moz-number-spin-box {
      display: none;
    }

    [arc-label-content] {
      display: contents;
    }

    > [input-element=body] {
      --arc-input-gap: var(${m}•16);
      --arc-input-padding-inline: 0;
      --arc-input-height: var(--arc-slider-input-height, unset);
      --arc-label-align-items: center;
    }

    [input-element=input-prefix] {
      --arc-input-element-font-size: max(12px, 0.75em);
    }

    [arc-slider-surface] {
      --arc-input-min-width: 3em;
      --arc-tooltip-text-align: center;
      --arc-tooltip-min-width: 2.5em;
    }

    [arc-slider-output] {
      --arc-input-text-align: center;
      --arc-input-width: var(--arc-slider-number-input-width, max(38px, 4ch));
      --arc-input-action-height: 100%;
      --arc-input-outline-offset: var(${m}•2); /* matches the Button component's outline-offset */
    }
  }

  /* CORE ----------------------------------------------------------• */

  [arc-slider] {
    max-width: var(--js•max•width, var(--arc-slider-max-width, 100%));

    [arc-slider-surface] {
      flex: 1;
      position: relative;
      display: flex;
      align-items: center;
      min-width: 0;
      height: var(${Ze}•height);
      border-radius: var(${Fe}•radius);

      -webkit-user-select: none;
      user-select: none;

      /* track progress (fill to thumb center); logical inset follows dir so RTL mirrors like native range */
      &::before {
        content: '';
        position: absolute;
        display: var(--arc-slider-progress-display, block);
        inset-block: calc(50% - var(${Ze}•height) / 2);
        inset-inline-start: 0;
        inset-inline-end: auto;
        width: calc(var(${Dr}•size) / 2 + var(${Fe}•vx));
        height: var(${Ze}•height);
        border-radius: var(${Fe}•radius);
        background: var(${Ze}•progress•bg);
        pointer-events: none;
        transition: background 200ms ease-out;
      }

      &:has(:focus:focus-visible) {
        [arc-slider-thumb] { ${Eo.THUMB_FOCUS} }
      }
    }

    [arc-slider-input] {
      ${Eo.TRACK}

      &::-moz-range-track { ${Eo.TRACK} }
      &::-moz-focus-outer { border: 0; }

      &::-moz-range-thumb { ${Eo.THUMB} }
      &::-webkit-slider-thumb { ${Eo.THUMB} }
    }

    &:has(
      [arc-slider-surface]:hover,
      [arc-slider-surface]:active,
      [arc-slider-surface]:focus-within
    ):not(:has([arc-slider-input]:disabled)) {
      [arc-slider-input]::-webkit-slider-thumb { translate: var(${Dr}•cx•nudge) 0; }
      [arc-slider-input]::-moz-range-thumb { translate: var(${Dr}•cx•nudge) 0; }

      &:dir(rtl) {
        [arc-slider-input]::-webkit-slider-thumb { translate: calc(-1 * var(${Dr}•cx•nudge)) 0; }
        [arc-slider-input]::-moz-range-thumb { translate: calc(-1 * var(${Dr}•cx•nudge)) 0; }
      }
    }

    [arc-slider-thumb] {
      position: absolute;
      width: var(${Dr}•size•anchor);
      height: var(${Dr}•size•anchor);
      inset-block-start: var(${Fe}•ty);
      inset-inline-start: var(${Fe}•tx);
      border-radius: var(${Fe}•radius);
      pointer-events: none;
    }
  }

  [arc-slider-captions] {
    position: absolute;
    inset: 0.5em 0 auto 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.25em;
    color: var(--arc-color-fg-secondary);
  }

  [arc-slider-caption] {
    font-size: max(10px, 0.625em);
  }

  [arc-slider-output] {
    --arc-input-action-display: contents;
    --arc-button-height:  var(--arc-slider-output-button-height, 100%);

    /* 61.2% is the opacity equivalent of the secondary-text color token's gray value. */
    --arc-input-suffix-opacity: var(--arc-slider-output-opacity, 61.2%);

    flex: none;
    align-self: stretch;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: max(6px, 0.375em);
  }
}

`,M0=(0,s.forwardRef)(({id:r,layout:e="hug",size:a="inherit",variant:t="solid",headerLabel:o,labelPlacement:n="top",displayPrecision:c=0,headerSlot:l,inputIdPrefix:u="arc-slider",inputProps:h,inputAction:p,inputSuffix:v,footerCaption:g,footerSlot:f,valueInputProps:b={},tooltipProps:$={},renderOutput:x,snapStep:A,style:y,...k},w)=>{const E=(0,s.useRef)(null),_=Nr(r,u),{minLabel:I,maxLabel:C,surfaceName:S,smallThumbAtRest:T=!1,onChange:D,value:N,min:H=0,max:J=100,step:R=1,disabled:M,onKeyDown:P,onPointerDown:F,onPointerMove:or,onPointerUp:gr,onPointerCancel:L,...X}=h,sr=Number(H),mr=Number(J),rr=Math.min(sr,mr),ur=Math.max(sr,mr),yr=(0,s.useRef)(!1),lr=(0,s.useRef)(Number(N));yr.current||(lr.current=Number(N));const wr=(0,s.useCallback)((ee,ke)=>{if(yr.current){const Qe=Number(ee.value);Number.isFinite(Qe)&&(lr.current=Qe)}D?.(ee,ke)},[D]),V=(0,s.useCallback)(ee=>{yr.current=!0,lr.current=Number(N),F?.(ee)},[F,N]),K=(0,s.useCallback)(ee=>{yr.current=!1,gr?.(ee)},[gr]),er=(0,s.useCallback)(ee=>{yr.current=!1,L?.(ee)},[L]),O=L0({snapStep:A,min:rr,max:ur,step:Number(R),value:Number(N),onChange:wr,onKeyDown:P,onPointerDown:V,onPointerMove:or,onPointerUp:K,onPointerCancel:er}),cr=yr.current?lr.current:N,br=(0,s.useMemo)(()=>({...X,id:_,value:cr,min:rr,max:ur,step:R,disabled:M}),[X,_,cr,rr,ur,R,M]),{showTooltip:$r=!1,text:U,...W}=$,{toValue:Y,pctSigned:kr=0}=lp({value:Number(cr),min:Number(rr),max:Number(ur),step:Number(R)}),ir=(0,s.useMemo)(()=>({value:cr,toValue:$a(Y,Number(c)),pctSigned:$a(kr,Number(c)),min:rr,max:ur}),[c,ur,rr,kr,Y,cr]),dr=(0,s.useMemo)(()=>$r?T0({text:U,...ir}):void 0,[$r,U,ir]),q=(0,s.useMemo)(()=>Pr.onChangeHandler(O.onChange),[O.onChange]),pr=(0,s.useCallback)((ee,ke)=>{const Qe=String(ee.value??N??rr);D?.({...ee,value:Qe},ke)},[D,N,rr]),Rr=(0,s.useMemo)(()=>{const{deltaPerStep:ee,showValueInput:ke=!1,...Qe}=b;return x&&typeof x=="function"?x(ir):(v||ke||p)&&(0,i.jsxs)(i.Fragment,{children:[v&&(0,i.jsx)(Pr.InputSuffix,{htmlFor:_,children:T0({text:v,...ir})}),ke&&(0,i.jsx)(zo,{"arc-slider-number-input":"",layout:"hug",size:a,variant:t,inputProps:{onKeyDown:O.onKeyDown,onPointerDown:O.onPointerDown,onPointerMove:O.onPointerMove,onPointerUp:O.onPointerUp,onPointerCancel:O.onPointerCancel,...Qe,...br,id:`${_}-text`,type:"number",appearance:"textfield",wheelControl:ee?{deltaPerStep:ee}:void 0,onChange:pr}}),p&&(0,i.jsx)(Pr.InputAction,{children:p})]})},[b,v,p,x,ir,_,a,t,br,O.onKeyDown,O.onPointerDown,O.onPointerMove,O.onPointerUp,O.onPointerCancel,pr]),Ir=(0,s.useMemo)(()=>!!o,[o]),Sr=(0,s.useMemo)(()=>Ir&&n==="top",[Ir,n]),Gr=(0,s.useMemo)(()=>Ir&&n==="inline",[Ir,n]),Fr=(0,s.useMemo)(()=>!!(Sr||l),[Sr,l]),Hr=(0,s.useMemo)(()=>!!(g||f),[g,f]),Ve=(0,s.useMemo)(()=>({...y,"--js\u2022v":String(Y)}),[y,Y]);return(0,i.jsxs)(Pr.Wrapper,{...k,"arc-slider":"","arc-input":"range",layout:e,size:a,style:Ve,children:[Fr&&(0,i.jsxs)(Pr.Header,{children:[Sr&&(0,i.jsx)(Pr.HeaderLabel,{htmlFor:_,children:o}),!!l&&(0,i.jsx)(Pr.Spacer,{}),(0,i.jsx)(Pr.HeaderSlot,{children:l})]}),(0,i.jsxs)(Pr.InputBody,{children:[Gr&&(0,i.jsx)(Pr.InputPrefix,{htmlFor:_,children:o}),(0,i.jsxs)("span",{"arc-slider-surface":S??"","has-small-thumb":T?"":void 0,children:[(0,i.jsx)("label",{"arc-slider-thumb":"",ref:E,htmlFor:_,"aria-hidden":!0}),(0,i.jsx)(co,{...W,isEnabled:$r&&!M,text:dr||String(cr),alternateAnchor:E,children:(0,i.jsx)("input",{...X,onKeyDown:O.onKeyDown,onPointerDown:O.onPointerDown,onPointerMove:O.onPointerMove,onPointerUp:O.onPointerUp,onPointerCancel:O.onPointerCancel,ref:w,id:_,"arc-slider-input":"","arc-input-type":"range",type:"range",value:cr,min:rr,max:ur,step:R,disabled:M,"aria-disabled":M,onChange:q})}),(I||C)&&(0,i.jsxs)("span",{"arc-slider-captions":"",children:[I&&(0,i.jsx)("label",{"arc-slider-caption":"min",htmlFor:_,children:I}),!!C&&(0,i.jsx)(Pr.Spacer,{}),C&&(0,i.jsx)("label",{"arc-slider-caption":"max",htmlFor:_,children:C})]})]}),Rr&&(0,i.jsx)("span",{"arc-slider-output":"",children:Rr})]}),Hr&&(0,i.jsxs)(Pr.Footer,{children:[(0,i.jsx)(Pr.FooterCaption,{children:g}),!!f&&(0,i.jsx)(Pr.Spacer,{}),(0,i.jsx)(Pr.FooterSlot,{children:f})]})]})});M0.displayName="ArcSlider";const ld=M0;Cr("ArcSlider",Fx);const dd=({inputProps:r,snapStep:e,...a})=>{const{id:t,...o}=r;return(0,i.jsx)(ld,{"arc-color-slider":r.surfaceName,...a,snapStep:e,inputIdPrefix:t,inputProps:o})},Hx=196.6,D0="arc-color-solid-preview",ud=new WeakMap,hd=(r,e)=>{const a=r.getContext("2d",{alpha:!1});if(!a)return;const{width:t,height:o}=r;if(!t||!o)return;const n=`${t}:${o}:${e}`;if(ud.get(r)===n)return;const c=a.createImageData(t,o),l=c.data;let u=0;for(let h=0;h<o;h+=1){const p=1-(o<=1?0:h/(o-1)),v=Ge({h:e,s:0,v:p,a:1}),g=Ge({h:e,s:1,v:p,a:1}),{r:f,g:b,b:$}=v,{r:x,g:A,b:y}=g;for(let k=0;k<t;k+=1){const w=t<=1?0:k/(t-1);l[u++]=$e(f+(x-f)*w),l[u++]=$e(b+(A-b)*w),l[u++]=$e($+(y-$)*w),l[u++]=255}}a.putImageData(c,0,0),ud.set(r,n)},Vx=(0,s.memo)(function({value:e,label:a,step:t=.01,stepLarge:o=.1,isDisabled:n=!1,showLabel:c=!1,labels:l,onChange:u}){const h=l??pe,p=a??h.colorField,v=Nr(void 0,"color-field"),g=(0,s.useRef)(null),f=(0,s.useRef)(null),b=(0,s.useRef)(!1),$=(0,s.useRef)(null),x=(0,s.useRef)(null),A=(0,s.useRef)(null),y=(0,s.useRef)(null),k=(0,s.useRef)(null),w=(0,s.useRef)(null),[E,_]=(0,s.useState)(!1),[I,C]=(0,s.useState)(null),[S,T]=(0,s.useState)(null),D=ar(I?.saturation??e.saturation,0,1),N=ar(I?.value??e.value,0,1);ha(()=>{A.current==null&&C(null)},[e.hue,e.saturation,e.value]);const H=Math.round(D*100),J=Math.round(N*100),R=(0,s.useMemo)(()=>{const V=e.hue;return typeof V=="number"&&Number.isFinite(V)?V:Hx},[e.hue]),M=(0,s.useMemo)(()=>Cl(R),[R]),P=(0,s.useCallback)((V,K,er="commit")=>{u({hue:R,saturation:ar(V,0,1),value:ar(K,0,1)},er)},[R,u]),F=(0,s.useCallback)(()=>{b.current&&(b.current=!1,C(null),P(D,N,"commit"))},[P,D,N]),or=(0,s.useCallback)((V,K)=>{const er=ar(V,0,1),O=ar(K,0,1);b.current=!0,C({saturation:er,value:O}),P(er,O,"preview")},[P]),gr=(0,s.useCallback)(V=>{const K=f.current;if(!K||!b.current)return;const er=V.relatedTarget;er instanceof Node&&K.contains(er)||F()},[F]),L=(0,s.useCallback)((V,K,er,O="preview")=>{const cr=ar((V-er.left)/er.width,0,1),br=ar((K-er.top)/er.height,0,1),$r=cr,U=1-br;O==="preview"&&C({saturation:$r,value:U}),P($r,U,O)},[P]),X=(0,s.useCallback)(V=>{if(n)return;V.preventDefault(),V.stopPropagation(),b.current=!1;const{clientX:K,clientY:er,pointerId:O,currentTarget:cr}=V,br=cr.getBoundingClientRect();A.current=O,x.current=br,y.current={clientX:K,clientY:er},k.current=null,w.current=null,cr.focus(),cr.setPointerCapture(O),_(!0),L(K,er,br)},[n,L]),sr=(0,s.useCallback)(V=>{if(n)return;const{clientX:K,clientY:er,currentTarget:O,pointerId:cr}=V;if(A.current!==cr)return;const br=x.current??O.getBoundingClientRect();if(V.shiftKey){const $r=y.current;if($r){if(k.current===null){const kr=Math.abs(K-$r.clientX),ir=Math.abs(er-$r.clientY);k.current=kr>=ir?"s":"v",w.current={clientX:K,clientY:er}}const U=w.current??$r,W=k.current==="s"?K:U.clientX,Y=k.current==="v"?er:U.clientY;L(W,Y,br);return}}else k.current=null,w.current=null;L(K,er,br)},[n,L]),mr=(0,s.useCallback)(()=>{const V=A.current!=null;A.current=null,x.current=null,y.current=null,k.current=null,w.current=null,_(!1),C(null),b.current=!1,V&&P(D,N,"commit")},[P,D,N]),rr=(0,s.useCallback)(V=>{if(n)return;const K=V.shiftKey?o:t;let er=D,O=N;switch(V.key){case"ArrowLeft":er=D-K;break;case"ArrowRight":er=D+K;break;case"ArrowUp":O=N+K;break;case"ArrowDown":O=N-K;break;case"Home":er=0,O=1;break;case"End":er=1,O=0;break;default:return}V.preventDefault(),or(er,O)},[n,t,o,or,D,N]),ur=(0,s.useCallback)(V=>{if(n||!V.key.startsWith("Arrow"))return;const K=V.shiftKey?o:t,er=V.key==="ArrowLeft"||V.key==="ArrowDown"?-K:K;V.preventDefault(),or(D+er,N)},[n,t,o,or,D,N]),yr=(0,s.useCallback)(V=>{if(n||!V.key.startsWith("Arrow"))return;const K=V.shiftKey?o:t,er=V.key==="ArrowLeft"||V.key==="ArrowDown"?-K:K;V.preventDefault(),or(D,N+er)},[n,t,o,or,D,N]),lr=(0,s.useMemo)(()=>({"--js\u2022s":String(D),"--js\u2022v":String(1-N)}),[D,N]),wr=(0,s.useRef)(M);return wr.current=M,ha(()=>{const V=g.current,K=$.current;if(!V||!K)return;const er=()=>{const U=V.getBoundingClientRect(),W=Math.max(1,Math.round(U.width)),Y=Math.max(1,Math.round(U.height)),kr=typeof window>"u"?1:Math.max(window.devicePixelRatio||1,1),ir=Math.max(1,Math.round(W*kr)),dr=Math.max(1,Math.round(Y*kr));K.width!==ir&&(K.width=ir),K.height!==dr&&(K.height=dr),hd(K,wr.current)};er();const O=new ResizeObserver(()=>{er()});O.observe(V);const cr=()=>{ud.delete(K),er()};K.addEventListener("contextrestored",cr);const br=V.closest("[arc-color-picker]"),$r=U=>{const{detail:W}=U,Y=W?.h;typeof Y!="number"||!Number.isFinite(Y)||hd(K,Cl(Y))};return br?.addEventListener(D0,$r),()=>{O.disconnect(),K.removeEventListener("contextrestored",cr),br?.removeEventListener(D0,$r)}},[]),ha(()=>{const V=$.current;V&&hd(V,M)},[M]),(0,i.jsxs)("div",{ref:f,"arc-color-field":"","is-disabled":n?"":void 0,"is-interacting":E?"":void 0,"sr-focus":S??void 0,onBlurCapture:gr,children:[c&&!!p&&(0,i.jsx)("label",{htmlFor:v,children:p}),(0,i.jsxs)("div",{id:v,ref:g,"arc-color-surface":"field",style:lr,tabIndex:n?-1:0,role:"application","aria-label":p,"aria-describedby":`${v}-readout`,onPointerDown:X,onPointerMove:sr,onPointerUp:mr,onPointerCancel:mr,onKeyDown:rr,children:[(0,i.jsx)("canvas",{ref:$,"arc-color-field-canvas":"","aria-hidden":"true"}),(0,i.jsx)("div",{"arc-color-field-thumb":"","aria-hidden":"true"}),(0,i.jsx)("div",{"arc-color-field-slice":"saturation","has-focus":S==="saturation"?"":void 0,"aria-hidden":"true"}),(0,i.jsx)("div",{"arc-color-field-slice":"value","has-focus":S==="value"?"":void 0,"aria-hidden":"true"})]}),(0,i.jsxs)("div",{"arc-color-field-sr":"","aria-hidden":!1,children:[(0,i.jsx)("div",{"arc-color-field-sr-slider":"saturation",role:"slider",tabIndex:n?-1:0,"aria-label":h.saturation,"aria-orientation":"horizontal","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":H,onKeyDown:ur,onFocus:()=>T("saturation"),onBlur:()=>T(null)}),(0,i.jsx)("div",{"arc-color-field-sr-slider":"value",role:"slider",tabIndex:n?-1:0,"aria-label":h.value,"aria-orientation":"vertical","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":J,onKeyDown:yr,onFocus:()=>T("value"),onBlur:()=>T(null)})]}),(0,i.jsx)("div",{id:`${v}-readout`,"arc-color-field-readout":"","arc-color-field-sr":"",children:h.colorFieldReadout(H,J)})]})}),O0=({getValue:r,onStep:e,min:a,max:t,step:o,stepLarge:n})=>(0,s.useCallback)(c=>{Bx(c,{getValue:r??(()=>Number(c.currentTarget.value)),onStep:e,min:a,max:t,step:o,stepLarge:n})},[r,e,a,t,o,n]),Ux=({hsv:r,draftValue:e,label:a,showLabel:t=!1,setIsEditing:o,commitDraft:n,setDraftValue:c,labels:l})=>{const h=a??(l??pe).opacity,p=Nr(void 0,"alpha-input"),{onFocus:v,onBlur:g,onKeyDown:f}=S0({commitDraft:n,setIsEditing:o,onRevert:()=>c(zl(r.a))}),b=O0({min:0,max:100,getValue:()=>Number(e),onStep:A=>{const y=String(A);c(y),n(y)}}),$=P0(b,f),x=({value:A})=>{const y=String(A??1);c(y),n(y,{phase:"preview"})};return(0,i.jsx)(zo,{"arc-color-input":"alpha",size:"md",variant:"solid",inputSuffix:"%",headerLabel:t?h:void 0,inputProps:{id:p,"aria-label":h,placeholder:"...",value:e,type:"number",appearance:"textfield",min:0,max:100,step:1,onFocus:v,onBlur:g,onKeyDown:$,onChange:x}})},Gx=r=>Ke({...r,a:1},!1).replace(/^#/,""),N0={kind:"hex"},B0={kind:"alpha"},F0=(0,s.memo)(function({state:e,tools:a,isSimpleMode:t,expandHexShorthand:o,isUnsetColorInTools:n=!1,labels:c}){const l=c??pe,{interaction:u,isUnset:h,commitColor:p,commitUnset:v,previewColor:g,startPreview:f,endPreview:b,editFocus:$,editInput:x,editBlur:A}=e,y=e.displayHsv,k=e.model.hsv,w=(0,s.useRef)(k),E=(0,s.useMemo)(()=>Ge(y),[y]),_=(0,s.useMemo)(()=>Gx(E),[E]),I=(0,s.useMemo)(()=>zl(y.a),[y.a]),C=Xl(N0,h?"":_,u),S=Xl(B0,h?"":I,u),T=(0,s.useMemo)(()=>!a||a.length===0?null:{colorField:a.includes("color-field"),hueSlider:a.includes("hue-slider"),alphaSlider:a.includes("alpha-slider"),sliderTools:a.includes("hue-slider")||a.includes("alpha-slider"),hexInput:a.includes("hex-input"),alphaInput:a.includes("alpha-input"),inputTools:a.includes("hex-input")||a.includes("alpha-input"),alphaTools:a.includes("alpha-slider")||a.includes("alpha-input"),eyeDropper:h0()&&a.includes("eye-dropper")},[a]),D=T?.alphaTools??!1,N=(0,s.useCallback)(V=>V?$(N0,h?"":_):A(),[$,A,_,h]),H=(0,s.useCallback)(V=>V?$(B0,h?"":I):A(),[$,A,I,h]),J=(0,s.useCallback)((V,K)=>{const er=Pt(V??C);if(!cx(er,o??!1,D,K))return;const O=Ge(k),cr=yp(er,O,{shouldApplyParsedAlpha:K?.applyHexAlpha===!0}),br=K?.phase??"commit";if(!cr)return;if(fp(cr,O)&&br==="preview"){g(k);return}const $r=pi(cr,k.h);br==="preview"?g($r):p($r)},[C,o,D,k,g,p]),R=(0,s.useCallback)((V,K)=>{const er=mp(V??S);if(er==null)return;const O={...k,a:er};(K?.phase??"commit")==="preview"?g(O):p(O)},[S,k,g,p]),M=(0,s.useCallback)(()=>{b(),p(w.current)},[b,p]),{createInputProps:P}=s0({onCommit:M}),F=(0,s.useCallback)((V,K)=>{const er={...k,...V};w.current=er,u.status!=="previewing"&&f(K),g(er)},[k,u.status,f,g]),or=(0,s.useCallback)((V,K="commit")=>{const er={...k,s:V.saturation,v:V.value};K==="preview"?(w.current=er,u.status!=="previewing"&&f({kind:"color-field"}),g(er)):p(er)},[k,u.status,f,g,p]),gr=(0,s.useMemo)(()=>P(V=>F({h:ar(V,We.HUE_MIN,We.HUE_MAX)},{kind:"hue-slider"}),()=>{}),[P,F]),L=(0,s.useMemo)(()=>P(V=>F({a:ar(V/100,0,1)},{kind:"alpha-slider"}),()=>{}),[P,F]),X=(0,s.useCallback)(V=>p(bi(V,"#000000")),[p]),sr=ar(Math.round(y.a*100),We.ALPHA_MIN,We.ALPHA_MAX),mr=(0,s.useMemo)(()=>({hue:y.h,saturation:y.s,value:y.v}),[y]),rr=(0,s.useMemo)(()=>({text:l.hueValue(Math.round(y.h)),showTooltip:!0}),[y.h,l]),ur=(0,s.useMemo)(()=>({text:l.opacityValue(sr),showTooltip:!0}),[sr,l]);if(!T)return null;const yr=T.hexInput&&(0,i.jsx)(jx,{hsv:y,draftValue:C,isUnset:h,setIsEditing:N,commitDraft:J,setDraftValue:x,expandHexShorthand:o,hasAlphaTools:D,labels:c}),lr=n&&!t&&(0,i.jsx)(z0,{isUnset:h,onSelect:v,labels:l}),wr=T.eyeDropper&&(0,i.jsx)(ix,{onColorPicked:X,labels:c});return(0,i.jsx)("div",{"arc-color-tools":t?"simple":"solid","arc-color-picker-section":"tools",children:t?(0,i.jsxs)(i.Fragment,{children:[yr,wr,T.alphaSlider&&(0,i.jsx)(dd,{headerLabel:l.opacity,tooltipProps:ur,snapStep:We.ALPHA_SNAP_STEP,inputProps:{id:"alpha-slider",surfaceName:"alpha",min:We.ALPHA_MIN,value:sr,max:We.ALPHA_MAX,step:1,"aria-label":l.opacity,...L}})]}):(0,i.jsxs)(i.Fragment,{children:[T.colorField&&(0,i.jsx)(Vx,{value:mr,onChange:or,labels:c}),wr,T.sliderTools&&(0,i.jsxs)("div",{"arc-color-sliders":"",children:[T.hueSlider&&(0,i.jsx)(dd,{tooltipProps:rr,snapStep:We.HUE_SNAP_STEP,inputProps:{id:"hue-slider",surfaceName:"hue",min:We.HUE_MIN,value:y.h,max:We.HUE_MAX,step:1,"aria-label":l.hue,...gr}}),T.alphaSlider&&(0,i.jsx)(dd,{tooltipProps:ur,snapStep:We.ALPHA_SNAP_STEP,inputProps:{id:"alpha-slider",surfaceName:"alpha",min:We.ALPHA_MIN,value:sr,max:We.ALPHA_MAX,step:1,"aria-label":l.opacity,...L}})]}),lr,T.inputTools&&(0,i.jsxs)("div",{"arc-color-inputs":"",children:[yr,T.alphaInput&&(0,i.jsx)(Ux,{hsv:y,showLabel:!T.hexInput,draftValue:S,setIsEditing:H,commitDraft:R,setDraftValue:x,isUnset:h,labels:c})]})]})})}),ye=d`--arc•radio`,Kx=d`
@layer arc-components {

  [arc-radio] {
    /* SIZES -------------------------------------------------------• */
    &[data-size=inherit] {
      ${ye}•font•size: 1em;
      ${ye}•icon•size: 0.625em;
      ${ye}•size: 1.125em;
      ${ye}•gap: 0.5em;
    }

    &[data-size=md] {
      ${ye}•font•size: var(${m}•14);
      ${ye}•icon•size: var(${m}•10);
      ${ye}•size: var(${m}•18);
      ${ye}•gap: var(${m}•8);
    }

    &[data-size=sm] {
      ${ye}•font•size: var(${m}•12);
      ${ye}•icon•size: var(${m}•10);
      ${ye}•size: var(${m}•16);
      ${ye}•gap: var(${m}•6);
    }

    /* Inter-Component Communication -------------------------------• */
    /* for: Setup defaults for ArcBooleanInputMask */
    ${Z}•border•radius: var(--arc-border-radius-circle);
    ${Z}•size: var(${ye}•size);
    ${Z}•icon•size: var(${ye}•icon•size);
    ${Z}•width: var(${ye}•size);
    ${Z}•height: var(${ye}•size);
    ${Z}•translate: 0 var(${m}•1m);

    /* for: ArcLabel */
    --arc-label-gap: var(${ye}•gap);
    --arc-label-align-items: stretch; /* ArcLabel • this allows the mask
                                        to stay inline with the label text
                                        regardless of applied line-height */
  }

  /* CORE STYLES ---------------------------------------------------• */
  [arc-radio]:not([hidden]) {
    font-size: var(${ye}•font•size);
    display: var(--arc-radio-display, inline-flex);
    min-height: 1lh;

    /* UNCHECKED, NOT-DISABLED, +HOVER • default state */
    &:not(:has(:checked)) {
      ${Z}•color: transparent;
      ${Z}•background: transparent;
      ${Z}•border•color: var(--arc-color-border-stark);

      &:hover {
        ${Z}•background: var(--arc-color-bg-theme-subtle);
        ${Z}•border•color: var(--arc-color-border-theme-heavy);
      }

      &:has(:disabled) {
        ${Z}•background: var(--arc-color-bg-disabled);
        ${Z}•border•color: var(--arc-color-border-disabled);
      }
    }

    /* DISABLED */
    &:has(:disabled) {
      color: var(--arc-color-fg-disabled);
    }

    /* CHECKED, ?NOT-DISABLED+HOVER, ?DISABLED */
    &:has(:checked) {
      ${Z}•color: var(--arc-color-fg-on-theme-heavy);
      ${Z}•background: var(--arc-color-bg-theme-heavy);
      ${Z}•border•color: transparent;

      &:not(:has(:disabled)):hover {
        ${Z}•background: var(--arc-color-bg-theme-stark);
      }

      &:has(:disabled) {
        ${Z}•color: var(--arc-color-fg-on-theme-mid);
        ${Z}•background: var(--arc-color-bg-theme-mid);
      }
    }
  }

}
`,Wx=vr(sa,["hug","fill"]),Xx=vr(ve,["inherit","md","sm"]),H0=({children:r,label:e,layout:a,size:t="md",useMask:o=!0,...n})=>{const{className:c,title:l,...u}=n,h={className:c,title:l},p=r??e,v=(0,i.jsx)(mn,{...u,type:"radio"}),g=o&&(0,i.jsxs)(Jc,{type:"radio",children:[v,(0,i.jsx)(zr,{icon:"fa-solid fa-circle-small arc-fw"})]}),f=!!p&&(0,i.jsxs)(Et,{layout:a,children:[g||v,(0,i.jsx)(_t,{children:p})]});return(0,i.jsx)("span",{...h,"arc-radio":"","data-size":t,children:f||g||v})};Cr("ArcRadio",Kx);const Mt=d`--arc•rb`,ue=d`${Mt}•o`,Bn=d`${ue}•icon`,Fn=d`${ue}•text`,V0=d`${Mt}•fs`,U0=d`${Mt}•br`,pd=d`${Mt}•di`,gd=d`${Mt}•pd`,vd=d`${Mt}•gp`,fd=d`${Mt}•bg`,pt=d`${ue}•fg`,gt=d`${ue}•bg`,Li=d`${ue}•bc`,md=d`${ue}•bw`,G0=d`${ue}•bs`,Hn=d`${ue}•br`,bd=d`${ue}•fw`,$d=d`${ue}•ol`,yd=d`${ue}•ow`,K0=d`${ue}•oo`,W0=d`${ue}•lh`,_o={BAR:d`
    ${V0}: var(${m}•14); /* font size */
    ${U0}: var(${m}•8); /* border radius */

    &:is([data-layout=hug], :not([data-layout])) { /** @default */
      ${pd}: inline-flex;
    }

    &[data-layout=fill] {
      ${pd}: flex;
    }
  `,OPTIONS:d`
    ${pt}: var(--arc-color-fg-secondary);
    ${gt}: transparent;
    ${Li}: transparent;
    ${md}: var(${m}•1);
    ${W0}: calc(var(${ue}•sz) - var(${md}) * 2);
    ${yd}: var(${m}•2);
    ${K0}: 0;
  `,COMMON:d`
    ${fd}: var(--arc-color-bg-secondary);
    ${gd}: var(${m}•4);
    ${vd}: var(${m}•2);

    ${Hn}: var(${m}•6);

    /* Common densities */
    &:is([data-density=comfortable], :not([data-density])) { /* @default */
      ${ue}•sz: var(${m}•32);
      ${Bn}•pd: var(${m}•8);
      ${Fn}•pd: var(${m}•12);
    }

    /* [data-size=md] is a deprecated alias — remove with barDensity.deprecated.ts */
    &:is([data-density=compact], [data-size=md]:not([data-density])) {
      ${ue}•sz: var(${m}•24);
      ${Bn}•pd: var(${m}•6);
      ${Fn}•pd: var(${m}•8);
    }
  `,COMMON_OPTION_STATES:d`
    &:not(:has(:disabled, :checked)) {
      &:hover {
        ${pt}: var(--arc-color-fg-on-hover-default);
        ${gt}: var(--arc-color-bg-hover-default);
      }
    }

    &:has(:checked) {
      ${pt}: var(--arc-color-mono-black);
      ${gt}: var(--arc-color-mono-white);
      ${bd}: var(--arc-font-weight-500);

      &:not(:has(:disabled)) {
        ${G0}: var(--arc-shadow-sm);
      }
    }

    &:has(:disabled) {
      ${pt}: var(--arc-color-fg-disabled);

      &:has(:checked) {
        ${gt}: var(--arc-color-bg-disabled);
        ${Li}: var(--arc-color-border-disabled);
      }
    }

    &:has(:focus-within:focus-visible) {
      ${$d}: var(${yd}) solid var(--arc-color-border-focus);
    }
  `,SOLID:d`
    ${fd}: transparent;
    ${gd}: 0;
    ${vd}: var(${m}•4);

    ${Hn}: var(${m}•8);

    /* Solid densities */
    &:is([data-density=comfortable], :not([data-density])) {
      ${ue}•sz: var(${m}•40);
      ${Bn}•pd: var(${m}•8);
      ${Fn}•pd: var(${m}•12);
    }

    /* [data-size=md] is a deprecated alias — remove with barDensity.deprecated.ts */
    &:is([data-density=compact], [data-size=md]:not([data-density])) {
      ${ue}•sz: var(${m}•32);
      ${Bn}•pd: var(${m}•6);
      ${Fn}•pd: var(${m}•10);
    }
  `,SOLID_OPTION_STATES:d`
    &:not(:has(:disabled, :checked)) {
      &:hover {
        ${pt}: var(--arc-color-fg-on-hover-default);
        ${gt}: var(--arc-color-bg-hover-subtle);
      }
    }

    &:has(:checked) {
      ${pt}: var(--arc-color-fg-primary);
      ${gt}: var(--arc-color-bg-secondary);
      ${bd}: var(--arc-font-weight-500);
    }

    &:has(:disabled) {
      ${pt}: var(--arc-color-fg-disabled);

      &:has(:checked) {
        ${gt}: var(--arc-color-bg-disabled);
        ${Li}: var(--arc-color-border-disabled);
      }
    }

    &:has(:focus-within:focus-visible) {
      ${$d}: var(${yd}) solid var(--arc-color-border-focus);
    }
  `},qx=d`
@layer arc-components {

  [arc-radio-bar] {
    ${_o.BAR}
    ${_o.OPTIONS}

    /* Inter-Component Communication -------------------------------• */
    --arc-label-opacity-disabled: 1; /* intrinsic disabled opacity not needed here; letting tokens handle it */
    --arc-label-align-items: stretch; /* control ArcLabel's vertical footprint;
                                        allows long label text to wrap
                                        without compromising option's
                                        visual border */

    /* VARIANTS ----------------------------------------------------• */
    &:is([data-variant=common], :not([data-variant])) { /* @default */
      ${_o.COMMON}

      [arc-radio-bar-option] {
        ${_o.COMMON_OPTION_STATES}
      }
    }

    &[data-variant=solid] {
      ${_o.SOLID}

      [arc-radio-bar-option] {
        ${_o.SOLID_OPTION_STATES}
      }
    }
  }

  /* CORE STYLES ---------------------------------------------------• */
  [arc-radio-bar-option] {
    flex: 1 1 auto;
    display: flex;
    position: relative;
    box-shadow: var(${G0}, none);
    border-radius: var(${Hn});
  }

  [arc-radio-bar]:not([hidden]) {
    font-size: var(--arc-radio-bar-font-size, var(${V0}));
    display: var(${pd});
    gap: var(${vd});
    border-radius: var(${U0});
    background: var(${fd});
    padding: var(${gd});
    margin: 0;

    [arc-radio] {
      flex: 1;
      display: flex;
      justify-content: center;
      border-radius: var(${Hn});
      outline: var(${$d}, none);
      outline-offset: var(${K0});
    }

    /* INPUT ELEMENT -----------------------------------------------• */
    [arc-input-type=radio] {
      position: absolute;
      appearance: none;
      pointer-events: none;
      opacity: 0;
    }

    /* Inter-Component Communication -------------------------------• */
    [arc-label] {
      flex: 1;
      line-height: var(${W0});
      overflow: hidden;
    }

    [arc-label-content] {
      flex: 1;
      display: flex;
      align-items: safe center;
      justify-content: center;

      height: var(${ue}•sz);
      min-width: var(${ue}•sz);

      border-radius: var(${Hn});
      border: var(${md}) solid var(${Li});
      background: var(${gt});
      color: var(${pt});
      font-weight: var(${bd}, unset);

      transition-duration: 200ms;
      transition-timing-function: ease-out;
      transition-property:
        border,
        background,
        color,
        font-weight;

      &:has([data-element=text]) {
        padding: 0 var(${Fn}•pd);
      }

      &:not(:has([data-element=text])) {
        padding: 0 var(${Bn}•pd);
      }
    }

    [arc-icon-text] [data-element] {
      min-width: min-content;
      overflow: hidden;
      overflow-wrap: break-word;
    }
  }

}
`,Yx=vr(sa,["hug","fill"]),Zx=Ho,Jx=vr(Xr,["common","solid"]),Qx=Vo,xd=({children:r,label:e,icon:a,name:t,value:o,...n})=>{const c=r||(0,i.jsx)(le,{icon:a,text:e});return(0,i.jsx)("li",{"arc-radio-bar-option":"","data-is-checked":n?.checked||void 0,children:(0,i.jsx)(H0,{...n,name:t,value:o,label:c,layout:"fill",useMask:!1,onChange:n.onChange??vo})})},X0=({children:r,density:e,size:a,layout:t="hug",variant:o="common",name:n,options:c,value:l,isDisabled:u,onChange:h,...p})=>{const v=Nr(n,"arc-radio-bar"),g=e??Kt(a)??"comfortable";return(0,i.jsx)("ul",{...p,"arc-radio-bar":"","data-density":g,"data-size":nt(g),"data-layout":t,"data-variant":o,"is-disabled":u?"":void 0,role:"radiogroup",children:c?c.map(({hidden:f,onChange:b,value:$,...x})=>f||$==null||$===""?null:(0,s.createElement)(xd,{...x,key:String($),name:v,value:$,checked:l===$,disabled:u||x.disabled,onChange:b??h??vo})):r})};Cr("ArcRadioBar",qx);const rw=(r,e)=>r==="gradient"?e.panelGradient:e.panelSolid,ew=({canTogglePanels:r,panels:e,activePanel:a,setActivePanel:t,labels:o=pe})=>(0,i.jsx)(i.Fragment,{children:r&&(0,i.jsx)("div",{"arc-color-picker-section":"control",children:(0,i.jsx)(X0,{layout:"fill",size:"md",children:e.map(n=>(0,i.jsx)(xd,{name:"color-picker-panel",value:n,label:rw(n,o),checked:n===a,onChange:()=>t(n)},n))})})}),{STOP_MIN:wd,STOP_MAX:kd}=nr,aw=(0,s.memo)(function({stop:e,stopIndex:a,sortedIndex:t,value:o,isEditing:n,isEditingColor:c,isAnyColorEditing:l,labels:u,onFocus:h,onInput:p,onCommit:v,onRevert:g,onOpenColorEdit:f,onRegisterAnchor:b,onInsertStopAt:$,onDelete:x}){const A=u??pe,y=t+1,k=Nr(void 0,"gradient-stop-row-anchor"),w=Nr(void 0,"gradient-stop-input"),E=(0,s.useRef)(null),_=(0,s.useRef)(t),I=O0({min:wd,max:kd,getValue:()=>Number(o),onStep:H=>{const J=String(H);p(J),v(J,!1)}}),C=(0,s.useCallback)(H=>{if(H.key==="Enter"){H.preventDefault(),v(void 0,!0),H.currentTarget.blur();return}H.key==="Escape"&&(H.preventDefault(),g(),H.currentTarget.blur())},[v,g]),S=P0(I,C),T=(0,s.useCallback)(()=>v(void 0,!0),[v]),D=(0,s.useCallback)(({value:H})=>p(String(H??o)),[p,o]);(0,s.useLayoutEffect)(()=>{if(!n){_.current=t;return}if(_.current===t)return;_.current=t;const H=E.current;if(!H)return;const{selectionStart:J,selectionEnd:R}=H;H.focus({preventScroll:!0}),J!=null&&R!=null&&H.setSelectionRange(J,R)},[n,t]),(0,s.useLayoutEffect)(()=>{b?.(a,k)},[b,k,a]);const N=n?o:String(ar(e.at,wd,kd));return(0,i.jsxs)("li",{"arc-gradient-stop-row":"",id:k,"is-editing-color":c?"":void 0,children:[t>0&&(0,i.jsx)("span",{"arc-gradient-stop-insert":"",children:(0,i.jsx)(Lr,{_isCustom:!0,icon:"fa-solid fa-plus fa-2xs",onClick:()=>$(t),tooltip:A.insertColorStop,isDisabled:l})}),(0,i.jsx)(Mn,{kind:"gradient-stop",color:e.color,onClick:()=>f(a,k)}),(0,i.jsx)(zo,{ref:E,"arc-color-input":"stop",inputProps:{type:"number",appearance:"textfield",id:w,"aria-label":A.stopPosition(y),value:N,min:wd,max:kd,step:1,onFocus:h,onBlur:T,onKeyDown:S,onChange:D,wheelControl:{deltaPerStep:24}},size:"md",variant:"solid",inputSuffix:"%"}),(0,i.jsx)("span",{"row-spacer":""}),(0,i.jsx)(Lr,{layout:"icon",size:"sm",icon:"fa-regular fa-trash",variant:"tertiary",tooltip:A.removeColorStop,onClick:()=>x(a),isDisabled:l})]})}),q0=({children:r,sectionName:e,content:a,...t})=>(0,i.jsxs)("header",{"arc-color-section-header":e??"",...t,children:[(0,i.jsx)(le,{...typeof a=="object"?a:{text:a},size:"sm",isStrong:!0}),r]}),{STOP_MIN:Ad,STOP_MAX:Cd}=nr,tw=r=>({kind:"stop-at",stopId:r}),ow=({state:r,isEmpty:e=!1,onAddGradient:a,editFallbackColor:t="#000000",format:o=Je.format,labels:n})=>{const c=n??pe,{interaction:l,commitGradient:u,commitUnset:h,previewGradient:p,editFocus:v,editInput:g,editBlur:f}=r,b=r.displayGradient,$=(0,s.useMemo)(()=>b.stops??[],[b.stops]),x=(0,s.useMemo)(()=>ya($),[$]),[A,y]=(0,s.useState)([]),k=(0,s.useRef)(0),w=(0,s.useCallback)(()=>(k.current+=1,`gradient-stop-${k.current}`),[]),E=Nr(void 0,"gradient-stop-edit-popover"),[_,I]=(0,s.useState)(null),C=(0,s.useRef)(null),[S,T]=(0,s.useState)(),[D,N]=(0,s.useState)(t),[H,J]=(0,s.useState)(!1),[R,M]=(0,s.useState)(!1),[P,F]=(0,s.useState)(),[or,gr]=(0,s.useState)(0),L=(0,s.useRef)(!1),X=(0,s.useRef)(null),sr=(0,s.useCallback)(()=>ga.handlePopover?.(E,"show"),[E]),mr=(0,s.useCallback)(()=>ga.handlePopover?.(E,"hide"),[E]);(0,s.useEffect)(()=>{y(q=>q.length===$.length?q:q.length<$.length?[...q,...Array.from({length:$.length-q.length},()=>w())]:q.slice(0,$.length))},[w,$.length]);const rr=(0,s.useCallback)(q=>u({...b,stops:q}),[u,b]),ur=(0,s.useCallback)(q=>{const pr=ya(q);y(Rr=>pr.map(Ir=>Rr[Ir.index]??w())),rr(pr.map(Rr=>Rr.stop))},[w,rr]),yr=(0,s.useCallback)(q=>l.status==="editingText"&&l.field.kind==="stop-at"&&l.field.stopId===q?l.draft:void 0,[l]),lr=(0,s.useCallback)((q,pr,Rr,Ir,Sr,Gr)=>{const Fr=$[q];if(!Fr){f();return}const Hr=Rr??yr(pr)??String(Fr.at),Ve=Number(Hr);if(Number.isNaN(Ve)){f();return}const ee=ar(Ve,Ad,Cd),ke=Ir||Ol(Sr,Gr,ee),Qe={...Fr,at:ee},at=$.map((ra,Do)=>Do===q?Qe:ra);ee!==Fr.at?ke?ur(at):rr(at):ke&&ur($),f()},[$,yr,f,ur,rr]),wr=(0,s.useCallback)((q,pr)=>{const Rr=$[q],Ir=Number(pr);if(!Rr||Number.isNaN(Ir))return;const Sr=ar(Ir,Ad,Cd),Gr=$.map((Fr,Hr)=>Hr===q?{...Fr,at:Sr}:Fr);p({...b,stops:Gr})},[$,b,p]),V=(0,s.useCallback)((q={kind:"append"})=>{const pr=$.length,Rr=q.kind==="append"?Dp($):[...$,Mp($,q)];X.current=pr,y(Ir=>[...Ir,w()]),rr(Rr)},[w,$,rr]),K=(0,s.useCallback)(q=>{C.current===q&&(mr(),C.current=null,I(null),J(!1));const pr=$.filter((Rr,Ir)=>Ir!==q);if(y(Rr=>Rr.filter((Ir,Sr)=>Sr!==q)),pr.length===0){h();return}rr(pr)},[h,$,mr,rr]),er=(0,s.useCallback)(()=>{$.length<2||ur(jp($))},[ur,$]),O=(0,s.useCallback)(q=>V({kind:"between",sortedIndex:q}),[V]),cr=(0,s.useCallback)((q,pr,Rr)=>{if(!$[q])return;const Sr=$.map((Gr,Fr)=>Fr===q?{...Gr,color:pr}:Gr);Rr==="preview"?p({...b,stops:Sr}):rr(Sr)},[$,b,p,rr]),br=(0,s.useCallback)(()=>{mr(),C.current=null,I(null),J(!1)},[mr]),$r=(0,s.useCallback)((q,pr)=>{const Rr=$[q];if(!Rr)return;const Ir=C.current!=null;C.current=q,M(!0),I(q),T(pr),N(Rr.color),Ir?gr(Sr=>Sr+1):(L.current=!0,F(pr))},[$]),U=(0,s.useCallback)((q,pr)=>{if(C.current===q){br();return}$r(q,pr)},[br,$r]),W=(0,s.useCallback)((q,pr)=>{X.current!==q||!$[q]||(X.current=null,$r(q,pr))},[$,$r]);(0,s.useEffect)(()=>{!L.current||_==null||!S||(L.current=!1,sr())},[S,_,sr]);const Y=(0,s.useCallback)(q=>{const pr=q?.newState==="open";J(pr),pr||(C.current=null,I(null))},[]),kr=(0,s.useCallback)(q=>{q.key!=="Escape"||!H||br()},[br,H]),ir=(0,s.useCallback)(q=>{N(q);const pr=C.current;pr!=null&&cr(pr,q,"commit")},[cr]),dr=(0,s.useCallback)(q=>{cp(q)&&ir(q.color.value)},[ir]);return e||$.length===0?(0,i.jsx)("div",{"arc-gradient-stops":"",children:(0,i.jsx)(Lr,{"arc-gradient-add":"",icon:"fa-regular fa-plus",text:c.addGradient,variant:"neutral",hierarchy:"tertiary",size:"sm",onClick:a})}):(0,i.jsxs)("div",{"arc-gradient-stops":"",children:[(0,i.jsx)(q0,{content:c.gradientStops,sectionName:"stops",children:(0,i.jsxs)(jt,{children:[(0,i.jsx)(Lr,{"arc-gradient-stop-distribute":"",layout:"icon",size:"sm",icon:"fa-regular fa-arrows-left-right-to-line",variant:"tertiary",onClick:er,tooltip:c.distributeColorStops,isDisabled:$.length<2}),(0,i.jsx)(Lr,{"arc-gradient-stop-add":"",layout:"icon",size:"sm",icon:"fa-regular fa-plus",variant:"tertiary",onClick:()=>V({kind:"append"}),tooltip:c.addColorStop,isDisabled:_!=null})]})}),(0,i.jsx)("ul",{"arc-gradient-stop-list":"",children:x.map((q,pr)=>{const Rr=A[q.index]??`gradient-stop-row-${q.index}`,Ir=tw(Rr),Sr=String(ar(q.stop.at,Ad,Cd)),Gr=x[pr-1]?.stop.at,Fr=x[pr+1]?.stop.at;return(0,i.jsx)(aw,{stop:q.stop,stopIndex:q.index,sortedIndex:pr,value:Xl(Ir,Sr,l),isEditing:qy(l,Ir),isEditingColor:_===q.index,isAnyColorEditing:_!=null,onFocus:()=>v(Ir,Sr),onInput:Hr=>{g(Hr),wr(q.index,Hr)},onCommit:(Hr,Ve=!1)=>lr(q.index,Rr,Hr,Ve,Gr,Fr),onRevert:f,onOpenColorEdit:U,onRegisterAnchor:W,onInsertStopAt:O,onDelete:K,labels:n},Rr)})}),R&&(0,i.jsx)(La,{mode:"edit",heading:"",panels:["solid"],color:D,syncKey:or,format:o,labels:n,onPreviewColor:q=>{const pr=C.current;pr!=null&&cr(pr,q.value,"preview")},onChange:dr,popoverProps:{id:E,popover:"manual",anchorAt:"left-center",alternateAnchorId:S,hidePopoverButton:!0,tryFallbacks:!0,hasTail:!0,offset:12,onToggle:Y,onKeyDown:kr,footerSlot:(0,i.jsxs)(jt,{"arc-color-picker-button-bar":"",children:[(0,i.jsx)("span",{"arc-button-bar-spacer":""}),(0,i.jsx)(Lr,{"arc-color-picker-button":"save",text:c.done,size:"sm",onClick:br})]})}},P)]})},Y0=r=>{const e=(0,s.useRef)(null),a=(0,s.useRef)(null),t=(0,s.useRef)(r);t.current=r;const o=(0,s.useCallback)(()=>{e.current=null;const h=a.current;a.current=null,h&&t.current(h.value)},[]),n=(0,s.useCallback)(h=>{a.current={value:h},e.current==null&&(e.current=requestAnimationFrame(o))},[o]),c=(0,s.useCallback)(()=>{e.current!=null&&(cancelAnimationFrame(e.current),e.current=null),a.current=null},[]),l=(0,s.useCallback)(()=>{e.current!=null&&(cancelAnimationFrame(e.current),o())},[o]),u=(0,s.useCallback)(()=>e.current!=null,[]);return(0,s.useEffect)(()=>c,[c]),{schedule:n,cancel:c,flush:l,hasPending:u}},Z0=.05,J0=.5,nw=4,cw=(0,s.memo)(function({entry:e,sortedIndex:a,angle:t,isDragging:o,stopPositionLabel:n,onAtChange:c,onDragStart:l}){const{stop:u,index:h}=e,p=ar(u.at,nr.STOP_MIN,nr.STOP_MAX),v=(0,s.useCallback)(f=>{const b=Up(f.key,t);if(b==null)return;f.preventDefault();const $=ar(p+b,nr.STOP_MIN,nr.STOP_MAX);c(h,$,!0)},[t,p,c,h]),g=(0,s.useCallback)(f=>{f.preventDefault(),f.stopPropagation(),l(h,f.pointerId)},[l,h]);return(0,i.jsx)("div",{"arc-gradient-stop-thumb":"",role:"slider",tabIndex:0,"aria-valuemin":nr.STOP_MIN,"aria-valuemax":nr.STOP_MAX,"aria-valuenow":Math.round(p),"aria-label":n(a+1),"is-dragging":o?"":void 0,style:{left:`${p}%`,background:String(u.color),zIndex:a+1},onPointerDown:g,onKeyDown:v})}),Q0=(r,e)=>{const a=r.getBoundingClientRect(),t=r.offsetWidth/2;return{centerX:a.left+a.width/2,centerY:a.top+a.height/2,axisHalfLength:t,axisAngleDeg:e-90}},iw=({stops:r,angle:e=nr.ANGLE,isUnset:a=!1,onUpdateStops:t,onUpdateAngle:o,labels:n})=>{const c=n??pe,l=(0,s.useRef)(null),u=(0,s.useRef)(null),h=(0,s.useRef)(null),p=(0,s.useRef)(null),v=(0,s.useRef)(null),g=(0,s.useRef)(null),f=(0,s.useRef)(null),b=(0,s.useRef)(null),[$,x]=(0,s.useState)(null),[A,y]=(0,s.useState)(null),[k,w]=(0,s.useState)(null),[E,_]=(0,s.useState)(!1),I=A??e,C=(0,s.useMemo)(()=>$??r??[],[$,r]),S=(0,s.useMemo)(()=>ya(C),[C]),T=(0,s.useMemo)(()=>{const U=C.length>0?C:nr.STOPS;return $?Rt(U,nr.STOP_MIN,nr.STOP_MAX):U},[$,C]),D=(0,s.useMemo)(()=>({background:a?"var(--arc-color-bg-mono)":Bp({stops:T,angle:nr.ANGLE}),rotate:`${I-90}deg`}),[T,I,a]),N=(0,s.useCallback)(U=>{t?.(U,"preview")},[t]),H=(0,s.useCallback)((U,W=!1)=>{const Y=Rt(U,nr.STOP_MIN,nr.STOP_MAX);t?.(W?Pp(Y):Y,"commit")},[t]),J=(0,s.useCallback)(U=>{o?.(U,"preview")},[o]),R=(0,s.useCallback)(U=>{o?.(U,"commit")},[o]),M=(0,s.useCallback)((U,W,Y=!1)=>{const kr=r??[],ir=kr[U];if(!ir||Math.abs(ir.at-W)<Z0)return;const dr=kr.map((q,pr)=>pr===U?{...q,at:W}:q);H(dr,Y)},[H,r]),P=(0,s.useCallback)((U,W,Y)=>{const kr=h.current,ir=l.current;if(!ir)return null;const dr=kr??Q0(ir,I);return Fp(U,W,dr.centerX,dr.centerY,dr.axisAngleDeg,dr.axisHalfLength,nr.STOP_MIN,nr.STOP_MAX,Y)},[I]),F=(0,s.useCallback)(U=>{if(!Number.isFinite(U))return;const W=Math.round(U),Y=g.current??e;Math.abs(Y-W)<J0||(g.current=W,y(W),(b.current==null||Math.abs(b.current-W)>=J0)&&(b.current=W,J(W)))},[e,J]),or=(0,s.useCallback)((U,W)=>{const Y=v.current??r??[],kr=Y[U];if(!kr||Math.abs(kr.at-W)<Z0)return;const ir=Y.map((Rr,Ir)=>Ir===U?{...Rr,at:W}:Rr);v.current=ir,x(ir);const dr=Rt(ir,nr.STOP_MIN,nr.STOP_MAX),q=f.current,pr=I;(!q||!$i({stops:q,angle:pr},{stops:dr,angle:pr}))&&(f.current=dr,N(dr))},[N,I,r]),gr=(0,s.useCallback)(U=>{const W=u.current;if(W==null)return;const Y=P(U.clientX,U.clientY,!1);Y!=null&&or(W,Y)},[or,P]),{schedule:L,cancel:X,flush:sr}=Y0(gr),mr=(0,s.useCallback)(U=>{const W=p.current;if(!W||!W.hasExceededThreshold)return;const Y=Bl(U.clientX,U.clientY,W.centerX,W.centerY),kr=Hp(W.startAngle,W.startPointerAngleDeg,Y,nr.ANGLE_MIN,nr.ANGLE_MAX);F(U.shiftKey?Vp(kr):kr)},[F]),{schedule:rr,cancel:ur,flush:yr}=Y0(mr),lr=(0,s.useCallback)((U,W)=>{const Y=l.current;Y&&(Y.setPointerCapture(W),u.current=U,h.current=Q0(Y,I),v.current=[...r??[]],f.current=Rt(v.current,nr.STOP_MIN,nr.STOP_MAX),x(v.current),w(U))},[I,r]),wr=(0,s.useCallback)((U,W)=>{if(S.length===0)return;const Y=P(U,W,!0);if(Y==null)return;const kr=S.reduce((ir,dr)=>{const q=Math.abs(dr.stop.at-Y);return!ir||q<ir.distance?{stopIndex:dr.index,distance:q}:ir},null);kr&&M(kr.stopIndex,Y,!0)},[M,P,S]),V=(0,s.useCallback)(()=>{const U=p.current;if(U?.hasExceededThreshold&&yr(),ur(),p.current=null,!!U){if(U.hasExceededThreshold){const W=g.current;W!=null&&R(W)}else wr(U.startClientX,U.startClientY);g.current=null,b.current=null,y(null),_(!1)}},[ur,R,wr,yr]),K=(0,s.useCallback)(()=>{sr(),X();const U=v.current;U&&H(U,!0),u.current=null,h.current=null,v.current=null,f.current=null,x(null),w(null)},[X,H,sr]),er=(0,s.useCallback)(U=>{if(!o){wr(U.clientX,U.clientY);return}const W=l.current;if(!W)return;const Y=W.getBoundingClientRect(),kr=Y.left+Y.width/2,ir=Y.top+Y.height/2;W.setPointerCapture(U.pointerId);const dr=Number.isFinite(U.clientX)?U.clientX:0,q=Number.isFinite(U.clientY)?U.clientY:0;p.current={pointerId:U.pointerId,startClientX:dr,startClientY:q,lastClientX:dr,lastClientY:q,startPointerAngleDeg:Bl(dr,q,kr,ir),startAngle:e,centerX:kr,centerY:ir,hasExceededThreshold:!1}},[e,wr,o]),O=(0,s.useCallback)(U=>{if(u.current!=null){L({clientX:U.clientX,clientY:U.clientY});return}const W=p.current;if(!W)return;Number.isFinite(U.clientX)&&Number.isFinite(U.clientY)?(W.lastClientX=U.clientX,W.lastClientY=U.clientY):(W.lastClientX+=U.movementX??0,W.lastClientY+=U.movementY??0);const{lastClientX:Y,lastClientY:kr}=W,ir=Math.hypot(Y-W.startClientX,kr-W.startClientY);if(!W.hasExceededThreshold){if(ir<nw)return;W.hasExceededThreshold=!0,_(!0)}rr({clientX:Y,clientY:kr,shiftKey:U.shiftKey})},[L,rr]),cr=(0,s.useCallback)(()=>{if(u.current!=null){K();return}V()},[K,V]),br=(0,s.useCallback)(()=>{if(u.current!=null){K();return}V()},[K,V]),$r=(0,s.useCallback)(()=>{u.current!=null&&K()},[K]);return(0,i.jsxs)("div",{"arc-gradient-field-wrapper":"",role:"group","aria-label":c.gradientStops,children:[(0,i.jsxs)("small",{"arc-gradient-field-angle-output":"","aria-hidden":"true",children:[I,"\xB0"]}),(0,i.jsx)("div",{ref:l,"arc-gradient-field":"","is-unset":a?"":void 0,"is-dragging":k!=null||E?"":void 0,"is-rotating":E?"":void 0,style:D,onPointerDown:er,onPointerMove:O,onPointerUp:cr,onPointerCancel:br,onLostPointerCapture:$r,children:S.map((U,W)=>(0,i.jsx)(cw,{entry:U,sortedIndex:W,angle:I,isDragging:k===U.index,stopPositionLabel:c.stopPosition,onAtChange:M,onDragStart:lr},`gradient-stop-thumb-${U.index}`))})]})},{ANGLE_MIN:sw,ANGLE_MAX:lw,ANGLE_SNAP_STEP:dw}=nr,uw=({inputProps:r,labels:e,...a})=>{const{id:t="angle-slider",min:o=sw,max:n=lw,step:c=1,value:l,onChange:u,...h}=r,p=e??pe,v=Nr(void 0,`${t}-label`),g=(0,s.useCallback)(f=>{if(f.shiftKey||!id(f.key))return;const b=sd(f.key,f,{step:Number(c)});if(b==null)return;f.preventDefault();const $=I0(Number(l),b,{min:Number(o),max:Number(n)}),x={value:String($)};u?.(x,f)},[o,n,c,l,u]);return(0,i.jsxs)("div",{"arc-gradient-angle-slider":"",children:[(0,i.jsx)(q0,{sectionName:"angle",content:p.angle,id:v}),(0,i.jsx)(ld,{"arc-angle-slider":"",...a,layout:"fill",size:"md",snapStep:dw,inputIdPrefix:t,inputProps:{...h,min:o,max:n,step:c,value:l,onChange:u,onKeyDown:g,"aria-labelledby":v},valueInputProps:{showValueInput:!0},tooltipProps:{showTooltip:!0,text:"{#value}\xB0"}})]})},hw="gradient-angle-presets",pw=(r,e)=>nr.ANGLE_PRESETS.map(a=>({stops:r,angle:a,name:e(a)})),gw=({gradient:r,onSelectAngle:e,labels:a})=>{const t=a??pe,o=r?.angle??nr.ANGLE,n=(0,s.useMemo)(()=>pw(r?.stops??nr.STOPS,t.gradientAngleOption),[r?.stops,t.gradientAngleOption]),c=(0,s.useMemo)(()=>n.find(u=>u.angle===o),[n,o]),l=u=>{np(u)&&e?.(u.gradientData.angle)};return(0,i.jsx)(Dn,{"arc-gradient-presets":"",id:hw,colors:n,activeGradient:c,showHeading:!1,setAriaLabel:t.gradientAngle,onSwatchClick:l,labels:a})},{ANGLE_MIN:rg,ANGLE_MAX:eg,ANGLE:vw}=nr,fw=({state:r,tools:e,isUnset:a=!1,onAddGradient:t,editFallbackColor:o,format:n,labels:c})=>{const{commitGradient:l,previewGradient:u,startPreview:h,endPreview:p}=r,v=r.displayGradient,g=v.angle??vw,f=(0,s.useRef)(g),[b,$]=(0,s.useState)(null),x=(0,s.useCallback)((C,S="commit")=>{const T={...v,...C};S==="preview"?u(T):l(T)},[v,u,l]),A=(0,s.useCallback)(()=>{p(),x({angle:f.current},"commit")},[p,x]),{createInputProps:y}=s0({onCommit:A}),k=(0,s.useMemo)(()=>y(C=>{const S=ar(C,rg,eg);f.current=S,$(S),h({kind:"angle-slider"}),x({angle:S},"preview")},()=>$(null)),[y,x,h]),w=(0,s.useMemo)(()=>!e||e.length===0?[...di]:[...e],[e]),E=(0,s.useMemo)(()=>{const C={gradientField:w.includes("gradient-field"),gradientStops:w.includes("gradient-stops"),angleSlider:w.includes("angle-slider"),anglePresets:w.includes("angle-presets")};return C.gradientField||C.gradientStops||C.angleSlider||C.anglePresets?C:null},[w]);if(!E)return null;const _=a||(v.stops?.length??0)===0,I=_?[]:v.stops??[];return(0,i.jsxs)("div",{"arc-color-tools":"gradient","arc-color-picker-section":"tools",children:[E.gradientField&&(0,i.jsx)(iw,{stops:I,angle:g,isUnset:_,onUpdateStops:(C,S)=>x({stops:C},S??"commit"),onUpdateAngle:(C,S)=>x({angle:C},S??"commit"),labels:c}),E.gradientStops&&(0,i.jsx)(ow,{state:r,isEmpty:_,onAddGradient:t,editFallbackColor:o,format:n,labels:c}),E.angleSlider&&(0,i.jsx)(uw,{labels:c,inputProps:{surfaceName:"angle",min:rg,max:eg,value:b??g,...k}}),E.anglePresets&&(0,i.jsx)(gw,{gradient:{stops:I,angle:g},onSelectAngle:C=>x({angle:C}),labels:c??pe})]})},ag=({heading:r,showGoBack:e,goBackProps:a,...t})=>(0,i.jsx)(ga,{...t,variant:"common","arc-color-picker-wrapper":"",showGoBack:e,goBackProps:a,headerSlot:!!r&&(0,i.jsx)(le,{...typeof r=="string"?{text:r}:r,"arc-color-picker-heading":"",overflow:"truncate",isStrong:!0})});ag.displayName="ArcColorPickerWrapper";const mw=(r,e)=>{switch(e.type){case"SET_COLOR":return{...r,hsv:e.hsv,selectedName:e.name,isUnset:!1};case"SET_UNSET":return r.isUnset?r:{...r,isUnset:!0,selectedName:void 0};case"SET_GRADIENT":return e.exitUnset&&r.isUnset?{...r,gradient:e.gradient,isUnset:!1}:{...r,gradient:e.gradient};case"SET_PANEL":return r.panel===e.panel?r:{...r,panel:e.panel};case"SET_NAME":return r.selectedName===e.name?r:{...r,selectedName:e.name};default:return r}},Vn=({color:r,name:e,gradient:a,isUnset:t=!1,format:o="auto",activePanel:n="solid"})=>{const c=mi(r)?r:_n(r).color,l=e??(mi(r)||typeof r=="string"?void 0:r.name),u=Ra(c,{format:o}),h=l?{...u,name:l}:u,p=ko(a,{fallbackColor:h.value}),v=n==="gradient"?p.value:h.value;return{activePanel:n,value:t?"":v,isUnset:t?!0:void 0,color:h,gradient:p}},bw={h:0,s:0,v:0,a:1},$w={stops:[],angle:nr.ANGLE},tg=r=>r??$w,Mi=r=>r==null?"":_n(r).color,og=(r,e)=>{const a=Zr(Mi(r));return a?pi(a,e):null},yw=({color:r,gradient:e,panel:a,format:t,syncKey:o,onChange:n,onSnapshotChange:c,onPreviewColor:l,onPreviewGradient:u})=>{const[h,p]=(0,s.useReducer)(mw,void 0,()=>({hsv:og(r)??bw,isUnset:a==="gradient"?e==null:Mi(r)==="",gradient:tg(e),panel:a})),[v,g]=(0,s.useReducer)(Xy,xi),[f,b]=(0,s.useState)(null),[$,x]=(0,s.useState)(null),A=(0,s.useRef)(v);A.current=v;const y=(0,s.useRef)(h);y.current=h;const k=(0,s.useRef)(o),w=(0,s.useRef)(Mi(r)),E=(0,s.useRef)(tg(e));ha(()=>{const P=Mi(r),F=a==="gradient"?e==null:P==="",or=o!==k.current;k.current=o;const gr=P!==w.current;w.current=P;const L=e!=null&&!$i(e,E.current);if(e!=null&&(E.current=e),!or&&!gr&&!L)return;const X=or||A.current.status==="idle";if(or&&(g({type:"EXTERNAL_ADOPT"}),b(null),x(null)),!!X){if(F&&p({type:"SET_UNSET"}),(or||gr)&&!F){const sr=og(r,y.current.hsv.h);sr&&p({type:"SET_COLOR",hsv:sr})}(or||L)&&e!=null&&p({type:"SET_GRADIENT",gradient:e,exitUnset:L})}},[r,e,o,a]);const _=(0,s.useCallback)((P,F)=>{if(!(!n&&!c))try{const or={...Ra(P,{format:t}),name:F};c&&c(Vn({color:P,name:F,gradient:y.current.gradient,format:t,activePanel:"solid"})),n?.({activePanel:"solid",color:or})}catch{}},[t,n,c]),I=(0,s.useCallback)((P,F)=>{p({type:"SET_COLOR",hsv:P,name:F}),b(null),y.current={...y.current,hsv:P,selectedName:F,isUnset:!1};try{w.current=Ra(P,{format:t}).value}catch{}_(P,F)},[_,t]),C=(0,s.useCallback)(()=>{if(p({type:"SET_UNSET"}),b(null),y.current={...y.current,isUnset:!0,selectedName:void 0},w.current="",!(!n&&!c))try{c&&c(Vn({color:y.current.hsv,gradient:y.current.gradient,isUnset:!0,format:t,activePanel:"solid"})),n?.({activePanel:"none",color:null,gradient:null})}catch{}},[t,n,c]),S=(0,s.useCallback)(P=>{if(b(P),!!l)try{l(Ra(P,{format:t}))}catch{}},[t,l]),T=(0,s.useCallback)(P=>{if(p({type:"SET_GRADIENT",gradient:P,exitUnset:!0}),x(null),y.current={...y.current,gradient:P,isUnset:!1},E.current=P,!(!n&&!c))try{const F=Pa(Ge(y.current.hsv)),or=ko(P,{fallbackColor:F});c&&c(Vn({color:y.current.hsv,gradient:P,format:t,activePanel:"gradient"})),n?.({activePanel:"gradient",gradient:or})}catch{}},[t,n,c]),D=(0,s.useCallback)(P=>{if(x(P),!!u)try{const F=Pa(Ge(y.current.hsv));u(ko(P,{fallbackColor:F}))}catch{}},[u]),N=(0,s.useCallback)(P=>g({type:"PREVIEW_START",source:P}),[]),H=(0,s.useCallback)(()=>{g({type:"PREVIEW_END"}),b(null),x(null)},[]),J=(0,s.useCallback)((P,F)=>g({type:"EDIT_FOCUS",field:P,draft:F}),[]),R=(0,s.useCallback)(P=>g({type:"EDIT_INPUT",draft:P}),[]),M=(0,s.useCallback)(()=>g({type:"EDIT_BLUR"}),[]);return{model:h,interaction:v,displayHsv:f??h.hsv,displayGradient:$??h.gradient,isUnset:h.isUnset&&f===null&&$===null,commitColor:I,commitUnset:C,commitGradient:T,previewColor:S,previewGradient:D,startPreview:N,endPreview:H,editFocus:J,editInput:R,editBlur:M}},Je={mode:"normal",color:"#05aff0",format:"auto",heading:pe.heading,palettes:[]},xw={stops:nr.STOPS,angle:nr.ANGLE},ww=["solid","gradient"],kw={icon:"fa-regular fa-paint-brush",text:pe.colorPicker,layout:"icon",shape:"round",size:"md"},Sd=(r,e)=>r.length===0||r.includes(e)?e:r[0],Aw=r=>{const e=Ge(r);return{"--js\u2022hue":`hsl(${r.h} 100% 50%)`,"--js\u2022hex":Ke({...e,a:1},!1),"--js\u2022rgb":Pa(e)}},La=({children:r,color:e,defaultColor:a,unsetColorPlacement:t="none",gradient:o,format:n=Je.format,mode:c=Je.mode,heading:l=Je.heading,tools:u,omitTools:h,isInline:p=!1,showGoBack:v=!1,goBackProps:g,canTogglePanels:f=!1,panels:b=ww,activePanel:$="solid",onUpdatePanel:x,palettes:A,popoverProps:y,expandHexShorthand:k,syncKey:w,labels:E,onChange:_,onSnapshotChange:I,onPreviewColor:C,onPreviewGradient:S,onAddColor:T,onRemoveColor:D,...N})=>{const H=(0,s.useMemo)(()=>ui(E),[E]),J=c==="simple",R=Nr(y?.id??void 0,"color-picker"),M=(0,s.useRef)(null),[P,F]=(0,s.useState)(()=>Sd(b,$)),or=e===void 0?a??null:e,L=yw({color:or,gradient:o??null,panel:P,format:n,syncKey:w,onChange:_,onSnapshotChange:I,onPreviewColor:C,onPreviewGradient:S}),X=(0,s.useRef)(void 0),sr=(0,s.useRef)(L.model.hsv);sr.current=L.model.hsv;const mr=(0,s.useCallback)(Sr=>L.commitColor(Sr,X.current),[L]),rr=(0,s.useMemo)(()=>Pa(Ge(L.model.hsv)),[L.model.hsv]),ur=(0,s.useMemo)(()=>A?.map(Sr=>({...Sr,canAddColor:!1,canRemoveColor:!1}))??[],[A]),yr=(0,s.useCallback)(Sr=>{F(Gr=>{const Fr=typeof Sr=="function"?Sr(Gr):Sr,Hr=Sd(b,Fr);return Hr!==Gr&&x?.(Hr),Hr})},[b,x]),lr=(0,s.useRef)(null),wr=(0,s.useCallback)(Sr=>{if(I)try{I(Vn({color:L.model.hsv,gradient:L.model.gradient,isUnset:L.isUnset,format:n,activePanel:Sr}))}catch{}},[I,L.model.hsv,L.model.gradient,L.isUnset,n]),V=(0,s.useRef)($);(0,s.useEffect)(()=>{V.current!==$&&(V.current=$,F(Sd(b,$)))},[$,b]),(0,s.useEffect)(()=>{const Gr=!(lr.current===null)&&lr.current!==P;lr.current=P,Gr&&wr(P)},[P,wr]);const K=(0,s.useMemo)(()=>{const Gr=P==="gradient"?di:J?op:Al,Fr=!u||u.length===0?[...Gr]:[...u];if(!h?.length)return Fr;const Hr=new Set(h);return Fr.filter(Ve=>!Hr.has(Ve))},[u,h,P,J]),er=K.includes("palettes"),O=t!=="none"&&!J,cr=O&&t==="tools"&&P==="solid",br=O&&t==="header",$r=(0,s.useMemo)(()=>Aw(L.displayHsv),[L.displayHsv]),W=P==="gradient"?"gradient":J?"simple":"solid",Y=er?A:void 0,kr=(0,s.useCallback)(()=>{const Sr=Pa(Ge(L.model.hsv)),Gr=(or!=null?_n(or).color:"")||Sr||Je.color,Fr=Np({...L.model.gradient,stops:[]},Gr);Fr.stops.length>0&&L.commitGradient(Fr)},[or,L]),ir=(0,i.jsxs)("div",{...N,ref:M,"arc-color-picker":W,"is-inline":p?"":void 0,"is-unset":L.isUnset?"":void 0,style:$r,children:[J?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(i0,{palettes:ur.length?ur:void 0,activePaletteColor:rr,commitLocalHsv:mr,selectedNameRef:X,hsvRef:sr,popoverId:R,labels:H}),(0,i.jsx)(F0,{state:L,tools:K,isSimpleMode:!0,expandHexShorthand:k,labels:H})]}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(ew,{canTogglePanels:f,panels:b,activePanel:P,setActivePanel:yr,labels:H}),P==="gradient"?(0,i.jsx)(fw,{state:L,tools:K,isUnset:L.isUnset,onAddGradient:kr,editFallbackColor:_n(e??"").color,format:n,labels:H}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(F0,{state:L,tools:K,isUnsetColorInTools:cr,expandHexShorthand:k,labels:H}),(0,i.jsx)(i0,{palettes:Y,activePaletteColor:rr,commitLocalHsv:mr,selectedNameRef:X,hsvRef:sr,popoverId:R,onAddColor:T??vo,onRemoveColor:D,labels:H,"has-divider":"top"})]})]}),r&&(0,i.jsx)("div",{"arc-color-picker-section":"footer",children:r})]});if(p)return ir;const dr=br?(0,i.jsx)(z0,{isUnset:L.isUnset,onSelect:L.commitUnset,labels:H}):null,q=dr||y?.headerSlotEnd?(0,i.jsxs)(i.Fragment,{children:[y?.headerSlotEnd,dr]}):void 0,pr=y?.anchorProps??kw,Rr=y?.popover??(J?"":"manual"),Ir=J?{...y,anchorAt:y?.anchorAt??"bottom-center",showDismiss:!1,hasTail:!0}:{...y,heading:l??void 0,showGoBack:v??void 0,goBackProps:g??void 0,headerSlotEnd:q??void 0,showHeaderDivider:!0,showFooterDivider:!0,isHeaderSticky:!0,isFooterSticky:!0};return(0,i.jsx)(ag,{...Ir,popover:Rr,anchorProps:pr,id:R,children:ir})},Cw=({color:r,gradient:e=xw,isUnset:a,format:t=Je.format,activePanel:o="solid"}={})=>{const n=r==null||r==="";return Vn({color:n?Je.color:r,gradient:e,isUnset:a??n,format:t,activePanel:o})};La.getColorAs=Sp,La.getColorData=Ra,La.getGradientData=ko,La.getSnapshot=Cw,La.getContrastColor=wo,La.addColor=by,La.removeColor=$y,Cr("ArcColorPicker",Uy);const zd={course:"Course",scenario:"Scenario",presentation:"Enablement Deck",microlearning:"Microlearning",video:"Interactive Video",guide:"Walkthrough",package:"Kit",custom:"Icon"},Ed={course:"Multiple interactive lessons with quizzes",microlearning:"A focused lesson on a single learning objective",presentation:"Shareable slides, polished and easy to keep current",guide:"A step-by-step guide to completing a task",video:"Chaptered recording with built-in, interactive checkpoints",scenario:"Conversational practice for real situations",package:"Learning packages",custom:"Custom learning content"},_d=r=>r?{...zd,...r}:zd,Sw=r=>r?{...Ed,...r}:Ed,xa=d`--arc•icon•avatar`,wa=d`${xa}•fg`,ka=d`${xa}•bg`,Dt=d`${xa}•width`,To=d`${xa}•size`,zw=d`
  &[data-color=brand],
  &[data-color=blue] {
    ${wa}: var(--arc-color-fg-blue-mid);
    ${ka}: var(--arc-color-bg-blue-subtle);
  }
  &[data-color=purple] {
    ${wa}: var(--arc-color-fg-purple-mid);
    ${ka}: var(--arc-color-bg-purple-subtle);
  }
  &[data-color=yellow] {
    ${wa}: var(--arc-color-fg-yellow-mid);
    ${ka}: var(--arc-color-bg-yellow-subtle);
  }
  &[data-color=orange] {
    ${wa}: var(--arc-color-fg-orange-mid);
    ${ka}: var(--arc-color-bg-orange-subtle);
  }
  &[data-color=red] {
    ${wa}: var(--arc-color-fg-red-mid);
    ${ka}: var(--arc-color-bg-red-subtle);
  }
  &[data-color=green] {
    ${wa}: var(--arc-color-fg-green-mid);
    ${ka}: var(--arc-color-bg-green-subtle);
  }
  &[data-color=mint] {
    ${wa}: var(--arc-color-fg-mint-mid);
    ${ka}: var(--arc-color-bg-mint-subtle);
  }
  &[data-color=maroon] {
    ${wa}: var(--arc-color-fg-maroon-mid);
    ${ka}: var(--arc-color-bg-maroon-subtle);
  }
  &[data-color=neutral] {
    ${wa}: var(--arc-color-fg-neutral-stark);
    ${ka}: var(--arc-color-bg-neutral-subtle);
  }
  &[data-color=ai] {
    ${wa}: var(--arc-color-fg-purple-stark);
    ${ka}: var(--arc-gradient-ai-100);
  }
`,Ew=d`
  &[data-size=inherit] {
    ${Dt}: 2em;
    ${xa}•border•radius: 0.5em;
  }
  &[data-size=xs] {
    ${Dt}: var(${m}•20);
    ${To}: var(${m}•10);
    ${xa}•border•radius: var(${m}•6);
  }
  &[data-size=sm] {
    ${Dt}: var(${m}•24);
    ${To}: var(${m}•12);
    ${xa}•border•radius: var(${m}•6);
  }
  &[data-size=md] {
    ${Dt}: var(${m}•32);
    ${To}: var(${m}•14);
    ${xa}•border•radius: var(${m}•8);
  }
  &[data-size=lg] {
    ${Dt}: var(${m}•40);
    ${To}: var(${m}•16);
    ${xa}•border•radius: var(${m}•8);
  }
  &[data-size=xl] {
    ${Dt}: var(${m}•56);
    ${To}: var(${m}•20);
    ${xa}•border•radius: var(${m}•12);
  }
`,_w=d`
@layer arc-components {

  /* SETUP -----------------------------------------------------------• */

  [arc-icon-avatar] {
    ${zw}
    ${Ew}
  }

  /* CORE ------------------------------------------------------------• */

  [arc-icon-avatar] {
    flex: none;
    font-size: initial;
    display: flex;
    align-items: center;
    justify-content: center;

    width: var(${Dt});
    aspect-ratio: 1 / 1;

    color: var(${wa});
    background: var(${ka});
    border-radius: var(${xa}•border•radius);

    [arc-icon] {
      font-size: var(${To});
      pointer-events: none;
    }
  }

}
`,Tw=["course","scenario","presentation","microlearning","video","guide","package","custom"],Iw=Vr(Va,["brand","blue","purple","yellow","orange","red","green","mint","maroon","neutral","ai"]),Pw=vr(ve,["inherit","xs","sm","md","lg","xl"]),Io={variant:"custom",color:"blue",size:"inherit",icon:"fa-regular fa-circle-dashed"},Di={course:{icon:"fa-solid fa-book-open",color:"blue"},scenario:{icon:"fa-solid fa-sitemap",color:"purple"},presentation:{icon:"fa-solid fa-presentation-screen",color:"yellow"},microlearning:{icon:"fa-solid fa-bolt",color:"orange"},video:{icon:"fa-solid fa-video",color:"red"},guide:{icon:"fa-solid fa-memo",color:"mint"},package:{icon:"fa-solid fa-cube",color:"maroon"},custom:{icon:Io.icon,color:Io.color}},ng=({variant:r=Io.variant,size:e=Io.size,color:a=Di.custom.color,icon:t=Di.custom.icon,hasAutoLabel:o,labels:n,role:c,title:l,showTooltip:u,tooltipProps:h,"aria-label":p,"aria-labelledby":v,...g})=>{const f=_d(n)[r],b=p||(o?f:void 0),$=!!(b||v),x=r==="custom",A=Di[r],y=x?t??A.icon:A.icon,k=x?a:A.color,w=x?"":r,E=c??($?"img":void 0),{text:_,isEnabled:I,...C}=h??{},S=_??b??f,T=(I??u)&&!!S,D=(0,i.jsx)("span",{...g,role:E,"aria-label":b,"aria-labelledby":v,title:T?void 0:l,"arc-icon-avatar":w,"data-color":k,"data-size":e,children:(0,i.jsx)(zr,{icon:y})});return T?(0,i.jsx)(co,{...C,text:S,children:D}):D};Cr("ArcIconAvatar",_w);const Oi=d`--arc•icon•avatar•text`,Ot=d`${Oi}•text`,Nt=d`${Oi}•subtext`,Bt=d`${Oi}•gap`,Ft=d`${Oi}•text•gap`,Rw=d`
@layer arc-components {

  [arc-icon-avatar-text] {
    /* Gaps and font sizes are static per @link ArcIconAvatar size — keyed off the
       avatar's data-size so they track the avatar with no separate prop. */

    &:has([data-size=inherit]) { /* @default — IconAvatar's default size is inherit */
      ${Ot}•font•size: 1em;
      ${Nt}•font•size: 0.875em;
      ${Bt}: 0.5em;
      ${Ft}: 0.25em;
    }

    &:has([data-size=xl]) {
      ${Ot}•font•size: var(--arc-font-size-14);
      ${Nt}•font•size: var(--arc-font-size-12);
      ${Bt}: ${jr(14)};
      ${Ft}: ${jr(6)};
    }

    &:has([data-size=lg]) {
      ${Ot}•font•size: var(--arc-font-size-14);
      ${Nt}•font•size: var(--arc-font-size-12);
      ${Bt}: ${jr(12)};
      ${Ft}: ${jr(4)};
    }

    &:has([data-size=md]) {
      ${Ot}•font•size: var(--arc-font-size-14);
      ${Nt}•font•size: var(--arc-font-size-12);
      ${Bt}: ${jr(12)};
      ${Ft}: ${jr(4)};
    }

    &:has([data-size=sm]) { /* @note text size matches xs */
      ${Ot}•font•size: var(--arc-font-size-12);
      ${Nt}•font•size: var(--arc-font-size-12);
      ${Bt}: ${jr(8)};
      ${Ft}: ${jr(2)};
    }

    &:has([data-size=xs]) {
      ${Ot}•font•size: var(--arc-font-size-12);
      ${Nt}•font•size: var(--arc-font-size-12);
      ${Bt}: ${jr(6)};
      ${Ft}: ${jr(2)};
    }
  }

  [arc-icon-avatar-text] {
    font-size: var(${Ot}•font•size);
    display: inline-flex;
    align-items: center;
    gap: var(${Bt});
    line-height: normal;
    min-width: 0%; /* @note: allows truncation/ellipsis for [data-element=text] */

    &[is-strong] [data-element=text] {
      font-weight: var(--arc-font-weight-bold);

      [data-element=subtext] {
        font-weight: var(--arc-font-weight-normal);
      }
    }

    [data-element=text] {
      flex: 1;
      min-width: 0;
      display: flex;
      flex-direction: column;
      gap: var(${Ft});
      text-align: start;
    }

    [data-element=subtext] {
      font-size: var(${Nt}•font•size);

      /* 61.2% is the opacity equivalent of the secondary-text color token's gray value. */
      color: color-mix(in srgb, currentcolor 61.2%, transparent);
    }

    /* Single-line truncation. line-height:1 keeps the flex gap (--text-gap) exact.
       Clip only the inline axis for the ellipsis; leave the block axis visible so
       descenders paint past the short line box in every browser (Safari ignores
       overflow-clip-margin, so relying on it would trim descenders there). */
    :where([data-element=title], [data-element=subtext]) {
      line-height: 1;
      overflow-x: clip;
      overflow-y: visible;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }

}
`,jw=({children:r,text:e,iconAvatar:a={},subtext:t,size:o,isStrong:n,...c})=>{const l=a.variant??Io.variant,u=l==="custom"?void 0:_d(a.labels)[l],h=r??e??u;return(0,i.jsxs)("span",{...c,"arc-icon-avatar-text":"","is-strong":n?"":void 0,children:[(0,i.jsx)(ng,{...a,size:o}),(0,i.jsxs)("span",{"data-element":"text",children:[(0,i.jsx)("span",{"data-element":"title",children:h}),t!=null&&(0,i.jsx)("small",{"data-element":"subtext",children:t})]})]})};Cr("ArcIconAvatarText",Rw);const cg=({size:r="md",layout:e="icon",variant:a="common",hierarchy:t="tertiary",...o})=>(0,i.jsx)(Lr,{...o,"arc-input-action":"",size:r,layout:e,variant:a,hierarchy:t}),Ni=d`--arc•link`,Ma=d`${Ni}•fg`,Un=d`${Ma}•hover`,Gn=d`${Ma}•disabled`,Td=d`${Ni}•outline`,ig=d`${Td}•size`,Id=d`${Td}•offset`,Lw=d`${Ni}•cursor`,Kn=d`${Ni}•focus•color`,Mw=d`
@layer arc-components {
${Pf}

[arc-link] {

  /* VARIANTS ------------------------------------------------------• */

  &[data-variant=inherit] { /* @default */
    ${Ma}: currentcolor;
    ${Un}: color-mix(in srgb, currentcolor, transparent 38.75%);
    ${Gn}: color-mix(in srgb, currentcolor, transparent 70%);

    ${Kn}: var(--arc-color-border-focus);
  }

  &[data-variant=primary] {
    ${Ma}: var(--arc-color-fg-primary);
    ${Un}: var(--arc-color-fg-secondary);
    ${Gn}: var(--arc-color-fg-disabled);
    ${Kn}: var(--arc-color-border-focus);
  }

  &[data-variant=secondary] {
    ${Ma}: var(--arc-color-fg-secondary);
    ${Un}: var(--arc-color-fg-primary);
    ${Gn}: var(--arc-color-fg-disabled);
    ${Kn}: var(--arc-color-border-focus);
  }

  /* @deprecated */
  &[data-variant=inverse] {
    ${Ma}: var(--arc-color-fg-on-mono-inverse);
    ${Un}: var(--arc-link-fg-hover-inverse);
    ${Gn}: var(--arc-link-fg-disabled-inverse);
    ${Kn}: var(--arc-link-focus-disabled-inverse);
  }

  & {
    ${ig}: 0.125em; /* 2px */
    ${Id}: 0.0625em; /* 1px */
  }


  /* STATES --------------------------------------------------------• */

  &:not([data-is-disabled]):hover {
    ${Ma}: var(--arc-link-color-hover, var(${Un}));
  }

  &:where(:focus, :focus-within):focus-visible {
    ${Td}: var(${ig}) solid var(--arc-link-color-focus, var(${Kn}));
    ${Id}: var(${Id});

    * {
      outline: none;
    }
  }

  &[data-is-disabled] {
    ${Ma}: var(--arc-link-color-disabled, var(${Gn}));
    ${Lw}: not-allowed;
  }


  & {

    /* Inter-Component Communication -------------------------------• */
    --arc-icon-color: var(--arc-link-color, var(${Ma}));  /** ArcIcon color */

  }

}


/* CORE STYLES ------------------------------------------------------ */

[arc-link] {
  color: var(--arc-link-color, var(${Ma}));
  border-radius: var(--arc-border-radius-sm); /* for focus outline */
  text-decoration: var(--arc-link-text-decoration, underline);

  [data-element=icon] {
    text-decoration: none;
  }

  [data-element=text] {
    text-decoration: var(--arc-link-text-decoration, underline);
    text-decoration-color: currentcolor;
  }
}

}
`,Dw=vr(Xr,["inherit","primary","secondary","inverse"]),Ow=({children:r,layout:e="gutter",size:a="inherit",variant:t="inherit",tag:o="a",href:n,icon:c,text:l,overflow:u,iconSize:h,gapSize:p,isFlipped:v,isDisabled:g,...f})=>(0,i.jsx)(o,{...f,href:g?void 0:n,"arc-link":"","data-variant":t,"aria-disabled":g,"data-is-disabled":g?"":void 0,children:r||(0,i.jsx)(le,{icon:c,text:l,overflow:u,iconSize:h,gapSize:p,size:a,layout:e,isFlipped:v})});Cr("ArcLink",Mw);const Nw=[...Ha],Bw=vr(Xr,["common"]),Fw=vr(Xr,["common","critical"]),Hw=vr(Xr,["common","brand","info","success","warning","error","processing"]),Vw=["auto","dark","light","none"],Uw=["auto","all","top-bottom","left-right","left-right-top","left-right-bottom","top-bottom-left","top-bottom-right","none"],Gw=vr(ve,["xl","lg","md","sm","custom","fullscreen"]),Kw=["cancel","escape","outside","button:dismiss","button:back","button:primary","button:secondary","button:tertiary","confirm:discard","confirm:cancel"],Pd=r=>r?.matches(":modal"),Rd=(r,e)=>e.target===r,Ww=(r,e)=>e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom,Wn=({modalRef:r,shouldConfirm:e,setIsConfirming:a,onCloseOverride:t=void 0})=>(o,n)=>c=>{if(c?.preventDefault?.(),c?.stopPropagation?.(),!r?.current){n?.(c);return}if(t){t(o,c,r.current),n?.(c);return}if(e&&o!=="confirm:discard"){a?.(!0);return}r.current?.close(o),a?.(!1),n?.(c)},jd=({modalRef:r,shouldConfirm:e,setIsConfirming:a,onClose:t,onToggle:o})=>{(0,s.useEffect)(()=>{const n=r.current;if(!n)return;const c=u=>{Pd(n)&&Rd(n,u)&&(e?(u.preventDefault(),u.stopPropagation(),a?.(!0)):t?.("outside",u))},l=u=>{Rd(n,u)&&(a?.(!1),t?.(n.returnValue,u),o?.(!1,u))};return n.addEventListener("close",l),n.addEventListener("cancel",c),()=>{n.removeEventListener("close",l),n.removeEventListener("cancel",c)}},[r,e,a,t,o])},Ld=({modalRef:r,isOpen:e,isTopLayer:a})=>{(0,s.useEffect)(()=>{const t=r.current;t&&(e&&!t.open&&(a?t.showModal():t.show()),!e&&t.open&&t.close())},[e,a])},Md=({modalRef:r,isOpen:e,autoFocusId:a})=>{(0,s.useEffect)(()=>{const t=r.current;if(!t||!a||!e)return;const o=t.querySelector(`#${a}`);if(!o||!(o instanceof HTMLElement))return;const n=setTimeout(()=>{o.focus()},0);return()=>clearTimeout(n)},[r,a,e])},sg=(r,e)=>(typeof r.composedPath=="function"?r.composedPath():[]).includes(e)||r.target instanceof Node&&e.contains(r.target),lg=({modalRef:r,isOpen:e=!1,closeOnBackdrop:a=!1,attemptCloseModal:t})=>{(0,s.useEffect)(()=>{const o=r.current;if(!o||!e||!a||!Pd(o))return;let n=!1;const c=u=>{n=sg(u,o)},l=u=>{if(n||sg(u,o))return;const h=o.getBoundingClientRect();Ww(h,u)&&t("outside")(u)};return document.documentElement?.addEventListener("pointerdown",c,{capture:!0}),document.documentElement?.addEventListener("click",l,{capture:!0}),()=>{document.documentElement?.removeEventListener("pointerdown",c,{capture:!0}),document.documentElement?.removeEventListener("click",l,{capture:!0})}},[r,t,e,a])},dg=({modalRef:r,isOpen:e=!1,closeOnEsc:a=!1,closedBy:t="closerequest",attemptCloseModal:o})=>{(0,s.useEffect)(()=>{const n=r.current;if(!n||!e||!a||!Pd(n))return;const c=l=>{if(l.key==="Escape"&&Rd(n,l)){if(t==="none"){l.stopPropagation(),l.preventDefault();return}o("escape")(l)}};return document.addEventListener("keydown",c),()=>document.removeEventListener("keydown",c)},[r,o,e,a,t])},Dd=r=>(0,i.jsx)(Lr,{"aria-label":"Dismiss",text:"Dismiss",...r,variant:"common",hierarchy:"tertiary",icon:"fa-regular fa-xmark-large",layout:"icon",shape:"square",size:"md"}),Xw=r=>(0,i.jsx)(Lr,{"arc-modal-go-back":"","aria-label":"Go Back",text:"Go Back",...r,variant:"common",hierarchy:"secondary",icon:"fa-regular fa-arrow-left",layout:"icon",shape:"square",size:"md"}),Bi=(0,s.forwardRef)(({inert:r,...e},a)=>(0,i.jsx)("div",{...e,ref:a,"arc-modal-content":"",inert:r}));Bi.displayName="ModalContent";const ug=({showDivider:r,...e})=>(0,i.jsx)("header",{...e,"arc-modal-header":"","has-divider":r?"":void 0}),qw=({glyph:r,variant:e="common"})=>(0,i.jsx)(i.Fragment,{children:r&&(0,i.jsx)(zr,{icon:r,"arc-modal-glyph":"","arc-icon-status":e})}),Od=r=>{const{titleContent:e,TitleElement:a="h2",...t}=r;return(0,i.jsx)(i.Fragment,{children:e&&(0,i.jsx)(a,{...t,"arc-modal-title":"",children:typeof e=="string"?e:(0,i.jsx)(le,{...e})})})},Yw=({message:r,...e})=>(0,i.jsx)(i.Fragment,{children:r&&(0,i.jsx)("p",{...e,"arc-modal-message":"",children:r})}),Nd=({tag:r="section",padding:e,...a})=>(0,i.jsx)(r,{...a,"arc-modal-body":"","data-padding":e==="auto"?void 0:e}),Bd=({showDivider:r,...e})=>(0,i.jsx)("footer",{...e,"arc-modal-footer":"","has-divider":r?"":void 0}),Zw=r=>e=>{if(e.key==="Escape"){if(r==="none"){e.stopPropagation(),e.preventDefault();return}return"escape"}},xr=d`--arc•modal`,Xn=d`${xr}•layout`,Jw=d`${xr}•header`,Fi=d`${xr}•body`,qn=d`${xr}•footer`,hg=d`${xr}•fg`,Hi=d`${xr}•bg`,Da=d`${xr}•backdrop`,vt=d`${xr}•scale`,Po=d`${Jw}•padding`,Qr=d`${Fi}•padding`,ft=d`${qn}•padding`,Qw=d`
  ${xr}•font•size: var(${m}•14);
  ${xr}•gap: var(${j}•16);

  ${Xn}•rows: auto 1fr auto;
  ${Xn}•columns: auto;

  &:not(:has([arc-modal-footer])):has([arc-modal-header]) {
    ${Xn}•rows: auto 1fr;
  }

  &:not(:has([arc-modal-header])):has([arc-modal-footer]) {
    ${Xn}•rows: 1fr auto;
  }

  &:not(:has([arc-modal-header])):not(:has([arc-modal-footer])) {
    ${Xn}•rows: auto;
  }

  ${hg}: var(--arc-color-fg-primary);
  ${Hi}: var(--arc-color-bg-primary);
  ${xr}•border: none;
  ${xr}•border•radius: var(--arc-border-radius-lg);
  ${xr}•divider: var(${m}•1) solid var(--arc-color-border-mid);

  ${xr}•max•width: calc(100vw - var(${j}•32));
  ${xr}•min•width: unset;
  ${xr}•width: auto;

  ${xr}•max•height: calc(100vh - var(${j}•32));
  ${xr}•min•height: unset;
  ${xr}•height: max-content;

  ${vt}: 1;
  ${vt}•start: 0.95;

  ${Fi}•text•align: unset;
  ${qn}•justify•content: flex-end;

  ${Da}•bg: var(--arc-color-overlay-stark);
  ${Da}•pointer•events: none;
  ${Da}•cursor: default;

  &:where([is-backdrop=light]) {
    ${Da}•bg: var(--arc-color-overlay-subtle);
  }

  &:where([is-backdrop=dark]) {
    ${Da}•bg: var(--arc-color-overlay-stark);
  }

  &:where([is-backdrop=none]) {
    ${Da}•bg: transparent;
  }
`,rk=d`
  &[data-size=sm] {
    ${xr}•width: 28em;
  }

  &[data-size=md] {
    ${xr}•width: 40em;
  }

  &[data-size=lg] {
    ${xr}•width: 50em;
  }

  &[data-size=xl] {
    ${xr}•width: 64em;
  }

  &[data-size=custom] {
    ${xr}•width: auto;
    ${xr}•height: max-content;
  }

  &[data-size=fullscreen] {
    ${xr}•width: 100vw;
    ${xr}•height: 100vh;
    ${xr}•min•width: 100vw;
    ${xr}•min•height: 100vh;
    ${xr}•max•width: 100vw;
    ${xr}•max•height: 100vh;
    ${xr}•border•radius: var(--arc-border-radius-none);

    ${vt}: 1;
    ${vt}•start: 1.125;
  }
`,ek=d`
  &[is-confirm] {
    ${qn}•justify•content: flex-end;

    &[is-confirm=critical] [arc-modal-title] {
      --arc-icon-text-icon-color: var(--arc-color-fg-critical-mid);
    }
  }

  &[is-alert] {
    ${Fi}•text•align: center;
    ${qn}•justify•content: center;

    ${Qr}•block•start: var(${j}•40);
    ${Qr}•block•end: var(${j}•20);

    ${ft}•block•start: var(${j}•12);
    ${ft}•block•end: var(${j}•40);

    ${xr}•glyph•size: var(${m}•48);

    [arc-modal-spinner] {
      --arc-spinner-size: var(${xr}•glyph•size);
    }

    [arc-modal-glyph] {
      --arc-icon-display: flex;
      --arc-icon-size: var(${xr}•glyph•size);
      --arc-icon-height: var(--arc-icon-size);
      --arc-icon-max-height: var(--arc-icon-size);
    }

    [arc-modal-body] {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: var(${j}•12);
    }

    [arc-modal-footer] {
      --arc-button-bar-flex: none;
    }
  }

  &:not([is-top-layer]) {
    z-index: var(--arc-modal-z-index, 1000);
  }
`,ak=d`
  [arc-modal-content] {
    &:has([arc-modal-header]) {
      ${Qr}•block•start: var(${j}•10);
    }

    &:has([arc-modal-footer]) {
      ${Qr}•block•end: var(${j}•10);
    }

    &:has([arc-modal-header][has-divider]) {
      ${Po}•block•end: var(${j}•20);
      ${Qr}•block•start: var(${j}•20);
    }

    &:has([arc-modal-footer][has-divider]) {
      ${Qr}•block•end: var(${j}•20);
      ${ft}•block•start: var(${j}•12);
      ${ft}•block•end: var(${j}•12);
    }

    &:has([arc-modal-body][data-padding=top-bottom]) {
      ${Qr}•inline•start: 0;
      ${Qr}•inline•end: 0;
    }

    &:has([arc-modal-body][data-padding=left-right]) {
      ${Qr}•block•start: 0;
      ${Qr}•block•end: 0;
    }

    &:has([arc-modal-body][data-padding=left-right-top]) {
      ${Qr}•block•end: 0;
    }

    &:has([arc-modal-body][data-padding=left-right-bottom]) {
      ${Qr}•block•start: 0;
    }

    &:has([arc-modal-body][data-padding=top-bottom-left]) {
      ${Qr}•inline•end: 0;
    }

    &:has([arc-modal-body][data-padding=top-bottom-right]) {
      ${Qr}•inline•start: 0;
    }

    &:has([arc-modal-body][data-padding=all]) {
      ${Qr}•block•start: var(${j}•20);
      ${Qr}•inline•end: var(${j}•24);
      ${Qr}•block•end: var(${j}•20);
      ${Qr}•inline•start: var(${j}•24);
    }

    &:has([arc-modal-go-back]) {
      ${Po}•inline•start: var(${j}•20);
    }

    ${Po}:
      var(${j}•20)
      var(${j}•24)
      var(${Po}•block•end, var(${j}•10))
      var(${Po}•inline•start, var(${j}•24));

    ${Qr}:
      var(${Qr}•block•start, var(${j}•20))
      var(${Qr}•inline•end, var(${j}•24))
      var(${Qr}•block•end, var(${j}•20))
      var(${Qr}•inline•start, var(${j}•24));

    ${ft}:
      var(${ft}•block•start, var(${j}•10))
      var(${j}•24)
      var(${ft}•block•end, var(${j}•20))
      var(${j}•24);

    &:has([arc-modal-body][data-padding=none]) {
      ${Qr}: 0;
    }
  }
`,tk=d`
  [arc-modal] {
    transition-behavior: allow-discrete, smooth;
    transition-duration: var(--arc-modal-transition-duration, 240ms);
    transition-property: display, opacity, scale;
    transition-timing-function: ease-out;

    &::after {
      transition: inherit;
    }

    &::backdrop {
      transition: inherit;
    }
  }

  @supports (overlay: auto) {
    [arc-modal] {
      transition-behavior: allow-discrete;
      transition-property: display, overlay, opacity, scale;
    }
  }
`,ok=d`
  [arc-modal] {
    opacity: 0;
    scale: var(--arc-modal-scale, var(${vt}));

    &::after {
      opacity: 0;
    }

    &::backdrop {
      opacity: 0;
    }

    &[open] {
      display: flex;
      flex-direction: column;
      opacity: 1;
    }

    &[open]::after {
      opacity: 1;
    }

    &[open]::backdrop {
      opacity: 1;
    }
  }

  @starting-style {
    [arc-modal][open] {
      opacity: 0;
      scale: var(--arc-modal-scale-start, var(${vt}•start));
    }

    [arc-modal][open]::after {
      opacity: 0;
    }

    [arc-modal][open]::backdrop {
      opacity: 0;
    }
  }
`,Fd=d`
@layer arc-components {

  /* SETUP ---------------------------------------------------------• */

  [arc-modal] {
    ${Qw}
    ${rk}
    ${ek}
    ${ak}
  }

  /* REDUCED MOTION ------------------------------------------------• */

  @media (prefers-reduced-motion: reduce) {
    [arc-modal] {
      ${vt}: 1;
      ${vt}•start: 1;
    }
  }

  /* CORE ----------------------------------------------------------• */

  [arc-modal] {
    will-change: opacity, scale;
    contain: layout style paint;

    inset: var(--arc-modal-inset, 0);
    translate: var(--arc-modal-translate, none);
    margin: var(--arc-modal-margin, auto);

    padding: 0;
    color: var(--arc-modal-color, var(${hg}));
    background: var(--arc-modal-background, var(${Hi}));
    border: var(--arc-modal-border, var(${xr}•border));
    border-radius: var(--arc-modal-border-radius, var(${xr}•border•radius));
    box-shadow: var(--arc-modal-box-shadow, var(--arc-shadow-lg));
    outline: var(--arc-modal-outline, none);

    width: var(--arc-modal-width, var(${xr}•width));
    height: var(--arc-modal-height, var(${xr}•height));
    min-width: var(--arc-modal-min-width, var(${xr}•min•width));
    min-height: var(--arc-modal-min-height, var(${xr}•min•height));
    max-width: var(--arc-modal-max-width, var(${xr}•max•width));
    max-height: var(--arc-modal-max-height, var(${xr}•max•height));

    &::backdrop {
      will-change: opacity;
      contain: layout style paint;

      background: var(--arc-modal-backdrop-background, var(${Da}•bg));
      pointer-events: var(${Da}•pointer•events, none);
      cursor: var(${Da}•cursor, default);
    }

    [arc-modal-content] {
      font-size: var(--arc-modal-font-size, var(${xr}•font•size));
      flex: 1 1 min-content;
      display: flex;
      flex-direction: column;
      overflow: hidden;
      position: relative;
      z-index: 1;

      /* Force remove margin from controlled title and message elements */
      :is([arc-modal-title], [arc-modal-message]) { margin: 0 !important; }
    }

    [arc-modal-header] {
      flex: none;
      position: relative;
      z-index: 1;

      display: flex;
      align-items: var(--arc-modal-header-align-items, unset);
      justify-content: space-between;
      gap: var(--arc-modal-header-gap, var(${xr}•gap));

      padding: var(${Po});
      background: var(--arc-modal-header-background, var(${Hi}));
      max-width: 100%;

      &:where([has-divider]) {
        border-bottom: var(--arc-modal-header-divider, var(${xr}•divider));
      }

      :where([header-slot]) {
        display: flex;
        align-items: inherit;
        gap: inherit;
      }

      :where([header-slot=content]) {
        flex: 1;
        align-self: flex-start;
      }

      :where([header-slot=dismiss]) {
        margin: var(${j}•4m) var(${j}•8m) var(${j}•4m) var(${j}•4m);
      }

      :where([header-slot=go-back]) {
        margin: var(${j}•4m) 0 var(${j}•4m) var(${j}•4m);
      }
    }

    [arc-modal-title] {
      --arc-icon-text-gap: var(${j}•8);

      [data-element=subtext] {
        font-family: var(--arc-font-family-body);
        font-weight: var(--arc-font-weight-body);
        font-size: var(--arc-font-size-body-md);
        color: inherit;
        margin-top: var(${j}•4);
      }
    }

    [arc-modal-body] {
      flex: 1;
      padding: var(${Qr});
      overflow: auto;
      overscroll-behavior: var(--arc-modal-overscroll-behavior, contain);
      min-height: var(--arc-modal-body-min-height, 3em);
      text-align: var(--arc-modal-body-text-align, var(${Fi}•text•align));
    }

    [arc-modal-footer] {
      flex: none;
      position: relative;
      z-index: 1;

      display: flex;
      flex-direction: var(--arc-modal-footer-flex-direction, unset);
      align-items: var(--arc-modal-footer-align-items, center);
      justify-content: var(--arc-modal-footer-justify-content, var(${qn}•justify•content));
      gap: var(--arc-modal-footer-gap, var(${xr}•gap));

      background: var(--arc-modal-footer-background, var(${Hi}));
      padding: var(--arc-modal-footer-padding, var(${ft}));
      max-width: 100%;

      &[has-divider] {
        border-top: var(--arc-modal-footer-divider, var(${xr}•divider));
      }

      [footer-slot=content] {
        flex: var(--arc-modal-footer-content-flex, none);
        display: var(--arc-modal-footer-content-display, flex);
        gap: inherit;
      }
    }

    [arc-modal-dismiss] {
      position: var(--arc-modal-dismiss-position, absolute);
      inset: var(--arc-modal-dismiss-inset, var(${j}•16) var(${j}•16) auto auto);
      width: var(--arc-modal-dismiss-width, auto);
      overflow: visible;
      z-index: 2;
    }

    /* Nested confirm modal */
    &:not([is-top-layer]):has([arc-modal][is-confirm][open])::after {
      content: '';
      position: absolute;
      inset: 0;
      background: var(--arc-modal-backdrop-background, var(${Da}•bg));
      z-index: var(--arc-modal-confirm-z-index, 2);
    }

    /* Nested modals */
    [arc-modal] {
      --arc-modal-min-width: var(--arc-modal-nested-min-width, none);
      --arc-modal-min-height: var(--arc-modal-nested-min-height, none);
    }

    [arc-modal][is-alert] {
      --arc-modal-min-width: var(--arc-modal-nested-alert-min-width, none);
      --arc-modal-min-height: var(--arc-modal-nested-alert-min-height, none);
    }

    [arc-modal][is-confirm] {
      --arc-modal-width: var(--arc-modal-confirm-width, 25em);
      --arc-modal-height: var(--arc-modal-confirm-height, max-content);
      --arc-modal-min-width: var(--arc-modal-confirm-min-width, none);
      --arc-modal-min-height: var(--arc-modal-confirm-min-height, none);
      --arc-modal-max-width: var(--arc-modal-confirm-max-width, calc(100% - var(${j}•32)));
      --arc-button-bar-flex: none;

      z-index: var(--arc-modal-confirm-z-index, 3);

      inset: var(--arc-modal-confirm-inset, 0);
      translate: var(--arc-modal-confirm-translate, none);
      margin: var(--arc-modal-confirm-margin, auto);
    }
  }

  ${tk}
  ${ok}
`,mt={variant:"common",backdropColor:"auto",message:"You have unsaved changes. Discard them?",onCloseOverride:void 0,isTopLayer:!0,isInverse:!1,scheme:"auto"},pg=({children:r,headerProps:e,bodyProps:a,footerProps:t,...o})=>{const n=(0,s.useRef)(null),{isOpen:c,autoFocusId:l,isTopLayer:u=mt.isTopLayer,isInverse:h=mt.isInverse,scheme:p=mt.scheme,backdropColor:v=mt.backdropColor,variant:g=mt.variant,message:f=mt.message,onCloseOverride:b=mt.onCloseOverride,onConfirmDiscard:$,onConfirmCancel:x,contentRef:A,...y}=o,{slotStart:k,TitleElement:w,titleContent:E,slotEnd:_,...I}=e||{},{primaryButton:C,secondaryButton:S,...T}=t||{},D=!!(E||k||_),N=p==="auto"?void 0:p,H=!!b,J=F=>H?b?.("confirm:discard",F,n.current??void 0):$?.("confirm:discard",F),R=F=>H?b?.("confirm:cancel",F,n.current??void 0):x?.("confirm:cancel",F);jd({modalRef:n,onClose:b}),Ld({modalRef:n,isOpen:c,isTopLayer:u}),Md({modalRef:n,isOpen:c,autoFocusId:l});const M=F=>{R(F),S?.onClick?.(F)},P=F=>{J(F),C?.onClick?.(F)};return(0,i.jsx)("dialog",{...y,ref:n,"arc-modal":"","arc-scheme":h?"inverse":N,"is-confirm":g||"","is-inverse":h?"":void 0,"is-top-layer":u?"":void 0,"is-backdrop":v==="auto"?void 0:v,"data-size":"sm",closedby:"none",onKeyDown:Zw("none"),children:(0,i.jsxs)(Bi,{ref:A,children:[D&&(0,i.jsxs)(ug,{...I,children:[k&&(0,i.jsx)("div",{"header-slot":"start",children:k}),(0,i.jsx)("div",{"header-slot":"content",children:(0,i.jsx)(Od,{TitleElement:w,titleContent:E})}),_&&(0,i.jsx)("div",{"header-slot":"end",children:_})]}),(0,i.jsx)(Nd,{...a,children:r||f&&(0,i.jsx)("p",{style:{margin:0},children:f})}),(0,i.jsx)(Bd,{...T,children:(0,i.jsxs)(jt,{children:[(0,i.jsx)(Lr,{...S,text:S?.text||"Cancel",variant:"common",hierarchy:"secondary",isInverse:h,onClick:M}),(0,i.jsx)(Lr,{...C,text:C?.text||"Discard",variant:g??"common",hierarchy:"primary",isInverse:h,onClick:P})]})})]})})};Cr("ArcModalConfirm",Fd);const He={size:"md",variant:"common",backdropColor:"auto",isTopLayer:!0,isInverse:!1,scheme:"auto",showDismiss:!0,closeOnEsc:!0,closeOnBackdrop:!1,hasConfirmFlow:!1,hasUnsavedChanges:!1,onCloseOverride:void 0,bypassConfirmWhen:{didPressEscapeKey:!1,didClickBackdrop:!1,didClickGoBackButton:!1,didClickDismissButton:!1,didClickPrimaryButton:!1,didClickSecondaryButton:!1,didClickTertiaryButton:!1},headerProps:{showDivider:!1},bodyProps:{padding:"auto"},footerProps:{showDivider:!1}},nk=({children:r,confirmProps:e,headerProps:a,bodyProps:t,dismissProps:o,footerProps:n,...c})=>{const l=(0,s.useRef)(null),[u,h]=(0,s.useState)(!1),{isOpen:p,autoFocusId:v,isTopLayer:g=He.isTopLayer,isInverse:f=He.isInverse,scheme:b=He.scheme,backdropColor:$=He.backdropColor,hasConfirmFlow:x=He.hasConfirmFlow,hasUnsavedChanges:A=He.hasUnsavedChanges,onCloseOverride:y=He.onCloseOverride,bypassConfirmWhen:k=He.bypassConfirmWhen??{},size:w=He.size,closeOnBackdrop:E=He.closeOnBackdrop,closeOnEsc:_=He.closeOnEsc,showDismiss:I=He.showDismiss,onActionError:C,onClose:S,onToggle:T,width:D,height:N,style:H,contentRef:J,...R}=c,{showGoBack:M,goBackProps:P,slotStart:F,TitleElement:or,titleContent:gr,slotEnd:L,showDivider:X=He.headerProps?.showDivider,...sr}=a??{},{slotStart:mr,primaryButton:rr,secondaryButton:ur,tertiaryButton:yr,showDivider:lr=He.footerProps?.showDivider,...wr}=n??{},V=!!(M||gr||F||L),K=!!(rr||ur||yr),er=!!(K||mr),O=!!(x&&A),cr=_?"closerequest":"none",br=b==="auto"?void 0:b,{didPressEscapeKey:$r,didClickBackdrop:U,didClickGoBackButton:W,didClickDismissButton:Y,didClickPrimaryButton:kr,didClickSecondaryButton:ir,didClickTertiaryButton:dr}=k,q=Wn({modalRef:l,shouldConfirm:O,setIsConfirming:h,onCloseOverride:y});jd({modalRef:l,shouldConfirm:O,setIsConfirming:h,onClose:S,onToggle:T}),Ld({modalRef:l,isOpen:p,isTopLayer:g}),Md({modalRef:l,isOpen:p,autoFocusId:v}),lg({modalRef:l,isOpen:p,closeOnBackdrop:E,attemptCloseModal:U?Wn({modalRef:l,shouldConfirm:O&&!U,setIsConfirming:h}):q}),dg({modalRef:l,isOpen:p,closeOnEsc:_,closedBy:cr,attemptCloseModal:$r?Wn({modalRef:l,shouldConfirm:O&&!$r,setIsConfirming:h}):q});const pr=()=>h(!1),Rr=(Sr,Gr)=>q(Sr)(Gr),Ir=(Sr,Gr,Fr)=>async Hr=>{Hr?.preventDefault?.(),Hr?.stopPropagation?.();const Ve=()=>Gr?Wn({modalRef:l,shouldConfirm:O&&!Gr,setIsConfirming:h})(Sr,Fr?.onCloseCallback)(Hr):q(Sr,Fr?.onCloseCallback)(Hr);try{await Fr?.onClick?.(Hr),Ve()}catch(ee){C?.(ee,{reason:Sr,event:Hr})}};return(0,i.jsxs)("dialog",{...R,ref:l,"arc-modal":"","arc-scheme":f?"inverse":br,"is-inverse":f?"":void 0,"is-top-layer":g?"":void 0,"is-backdrop":$==="auto"?void 0:$,"data-size":w,closedby:cr,style:{"--arc-modal-width":D??"","--arc-modal-height":N??"",...H},children:[!V&&I&&(0,i.jsx)("div",{"arc-modal-dismiss":"",children:(0,i.jsx)(Dd,{...o,isInverse:f,onClick:Ir("button:dismiss",Y,o)})}),(0,i.jsxs)(Bi,{ref:J,inert:u?"":void 0,children:[V&&(0,i.jsxs)(ug,{...sr,showDivider:X,children:[M&&(0,i.jsx)("div",{"header-slot":"go-back",children:(0,i.jsx)(Xw,{...P,isInverse:f,onClick:Ir("button:back",W,P)})}),F&&(0,i.jsx)("div",{"header-slot":"start",children:F}),(0,i.jsx)("div",{"header-slot":"content",children:(0,i.jsx)(Od,{TitleElement:or,titleContent:gr})}),L&&(0,i.jsx)("div",{"header-slot":"end",children:L}),I&&(0,i.jsx)("div",{"header-slot":"dismiss",children:(0,i.jsx)(Dd,{...o,isInverse:f,onClick:Ir("button:dismiss",Y,o)})})]}),(0,i.jsx)(Nd,{...t,children:r}),er&&(0,i.jsxs)(Bd,{...wr,showDivider:lr,children:[mr&&(0,i.jsx)("div",{"footer-slot":"content",children:mr}),K&&(0,i.jsxs)(jt,{children:[yr&&(0,i.jsx)(Lr,{...yr,text:yr?.text||"Button",isInverse:f,variant:"common",hierarchy:"tertiary",onClick:Ir("button:tertiary",dr,yr)}),ur&&(0,i.jsx)(Lr,{...ur,text:ur?.text||"Cancel",isInverse:f,variant:"common",hierarchy:"secondary",onClick:Ir("button:secondary",ir,ur)}),rr&&(0,i.jsx)(Lr,{...rr,text:rr?.text||"Action",isInverse:f,variant:"common",hierarchy:"primary",onClick:Ir("button:primary",kr,rr)})]})]})]}),x&&(0,i.jsx)(pg,{isOpen:u,isInverse:f,isTopLayer:g,backdropColor:$,...e,onConfirmDiscard:Rr,onConfirmCancel:pr})]})};Cr("ArcModal",Fd);const Qa={variant:"common",backdropColor:"auto",showDismiss:!0,closeOnBackdrop:!1,closeOnEsc:!0,onCloseOverride:void 0,isTopLayer:!0,isInverse:!1,scheme:"auto"},ck={common:"fa-solid fa-cat-space",brand:"fa-kit fa-articulate",success:"fa-solid fa-badge-check",warning:"fa-solid fa-triangle-exclamation",error:"fa-solid fa-do-not-enter",info:"fa-solid fa-circle-info",processing:(0,i.jsx)(Ac,{"arc-modal-spinner":""})},ik=({children:r,dismissProps:e,bodyProps:a,footerProps:t,...o})=>{const n=(0,s.useRef)(null),{isOpen:c,autoFocusId:l,isTopLayer:u=Qa.isTopLayer,isInverse:h=Qa.isInverse,scheme:p=Qa.scheme,backdropColor:v=Qa.backdropColor,closeOnBackdrop:g=Qa.closeOnBackdrop,closeOnEsc:f=Qa.closeOnEsc,variant:b=Qa.variant,icon:$,TitleElement:x,titleContent:A,message:y,showDismiss:k,onCloseOverride:w=Qa.onCloseOverride,onClose:E,onToggle:_,contentRef:I,...C}=o,{primaryButton:S,secondaryButton:T,...D}=t??{},N=$||ck[b],H=f?"closerequest":"none",J=p==="auto"?void 0:p,R=Wn({modalRef:n,onCloseOverride:w});return jd({modalRef:n,onClose:E,onToggle:_}),Ld({modalRef:n,isOpen:c,isTopLayer:u}),Md({modalRef:n,isOpen:c,autoFocusId:l}),lg({modalRef:n,isOpen:c,closeOnBackdrop:g,attemptCloseModal:R}),dg({modalRef:n,isOpen:c,closeOnEsc:f,closedBy:H,attemptCloseModal:R}),(0,i.jsxs)("dialog",{...C,ref:n,"arc-modal":"","arc-scheme":h?"inverse":J,"is-alert":b||"","is-inverse":h?"":void 0,"is-top-layer":u?"":void 0,"is-backdrop":v==="auto"?void 0:v,"data-size":"sm",closedby:H,children:[k&&(0,i.jsx)("div",{"arc-modal-dismiss":"",children:(0,i.jsx)(Dd,{...e,isInverse:h,onClick:R("button:dismiss",e?.onClick)})}),(0,i.jsxs)(Bi,{ref:I,children:[(0,i.jsx)(Nd,{...a,children:r||(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(qw,{glyph:N,variant:b}),(0,i.jsx)(Od,{TitleElement:x,titleContent:A}),(0,i.jsx)(Yw,{message:y})]})}),(0,i.jsx)(Bd,{...D,children:(0,i.jsxs)(jt,{children:[T&&(0,i.jsx)(Lr,{...T,text:T.text||"Cancel",variant:"common",hierarchy:"secondary",isInverse:h,onClick:R("button:secondary",T.onClick)}),(0,i.jsx)(Lr,{...S,text:S?.text||"Close",variant:"common",hierarchy:"primary",isInverse:h,onClick:R("button:primary",S?.onClick)})]})})]})]})};Cr("ArcModalAlert",Fd);const sk=d`--arc•nav`,re=d`${sk}•item`,lk=d`
@layer arc-components {

  [arc-nav-list] {
    &[data-hierarchy=primary] {
      ${re}•fg: var(--arc-color-fg-primary);
      ${re}•fg•active: var(--arc-color-fg-brand-heavy);
      ${re}•bg•active: var(--arc-color-bg-selected-default);
      ${re}•bg•hover: var(--arc-color-bg-hover-subtle);
      ${re}•fg•disabled: var(--arc-color-fg-disabled);
      ${re}•bg•disabled: var(--arc-color-bg-disabled);
      ${re}•edge•disabled: transparent;
    }

    &[data-hierarchy=secondary] {
      ${re}•fg: var(--arc-color-fg-secondary);
      ${re}•fg•active: var(--arc-color-fg-primary);
      ${re}•bg•active: var(--arc-color-bg-secondary);
      ${re}•bg•hover: var(--arc-color-bg-hover-subtle);
      ${re}•fg•disabled: var(--arc-color-fg-disabled);
      ${re}•bg•disabled: var(--arc-color-bg-disabled);
      ${re}•edge•disabled: var(--arc-color-border-disabled);
    }

    /* Inter-Component Communication • ArcButton/ArcIconText -------• */
    &[data-hierarchy=primary] [arc-button-bar-item]:not(:has([is-selected], [is-disabled])) {
      --arc-icon-text-icon-color: var(--arc-color-fg-secondary);
    }

    &:not([data-hierarchy=primary]) [arc-button-bar-item]:not([data-rollup-trigger]) {
      [arc-icon-text] {
        --arc-icon-text-overflow: visible;
      }
    }

    [arc-button-bar-item] {
      /* Inter-Component Communication • ArcMenu -------------------• */
      --arc-menu-item-background: transparent;

      /* Inter-Component Communication • ArcIcon -------------------• */
      [arc-icon-text] {
        --arc-icon-align-self: center;
      }

      /* Inter-Component Communication • ArcButton -----------------• */
      --arc-button-font-weight: var(--arc-font-weight-500);
      --arc-button-label-display: contents;
      --arc-button-content-gap: var(${j}•8);
      --arc-button-inline-spacing: 0;
      --arc-button-overflow: hidden;

      &:not(:has([is-selected], [is-disabled])) {
        --arc-button-color: var(${re}•fg);

        [arc-button]:hover {
          --arc-button-background: var(${re}•bg•hover);
        }
      }

      [is-selected] {
        --arc-button-font-weight: var(--arc-font-weight-600);
        --arc-button-color: var(${re}•fg•active);
        --arc-button-background: var(${re}•bg•active);

        &[is-disabled] {
          --arc-button-color: var(${re}•fg•disabled);
          --arc-button-background: var(${re}•bg•disabled);
          --arc-button-border: var(${m}•1) solid var(${re}•edge•disabled);
        }
      }
    }

    /* Roll-up synchronization -------------------------------------• */
    [arc-button-bar-rollup=menu] [arc-menu-item] {
      &:not(:has([is-disabled])) {
        --arc-button-color: var(${re}•fg);
      }

      &:not(:has([is-selected], [is-disabled])):hover {
        --arc-button-background: var(${re}•bg•hover);
      }

      &:has([is-selected]) {
        --arc-button-color: var(${re}•fg•active);
        --arc-button-background: var(${re}•bg•active);
      }
    }
  }
}
`,dk=Vr(Ua,["horizontal","vertical"]),uk=["auto",...Vr(bt,["compact","comfortable"])],M2=["auto",...Vr(Gt,["primary","secondary"])],hk=["auto",...Vr(Gt,["primary","secondary"])],pk=dk,gk=uk,vk=({items:r,canRollUp:e,maxVisible:a,rollUpLabel:t,density:o,hierarchy:n="auto",orientation:c="horizontal",isFlipped:l,isDisabled:u,isMinimized:h=!1,showIcons:p,missingIcon:v,...g})=>{const f=c==="vertical",$=n==="auto"?f?"primary":"secondary":n,x=h?!0:p,A=h?!1:void 0;return(0,i.jsx)("nav",{...g,"arc-nav-list":"","data-hierarchy":$,children:(0,i.jsx)(jt,{items:r,listRole:"list",selectedAttr:"aria-current",showIcons:x,showLabels:A,"is-minimized":h?"":void 0,missingIcon:v,canRollUp:f?!1:e,maxVisible:a,rollUpLabel:t,density:o,orientation:c,isFlipped:l,isDisabled:u})})};Cr("ArcNavList",lk);var gg=ia(57267),xe,ce,Aa,rt;function fk(r=!1){if(typeof r!="boolean")throw new Error("defaultValue must be `true` or `false`");const[e,a]=xe(r),t=ce(()=>{a(!0)},[]),o=ce(()=>{a(!1)},[]),n=ce(()=>{a(c=>!c)},[]);return{value:e,setValue:a,setTrue:t,setFalse:o,toggle:n}}var Ca=typeof window<"u"?s.useLayoutEffect:s.useEffect;function ca(r,e,a,t){const o=(0,s.useRef)(e);Ca(()=>{o.current=e},[e]),(0,s.useEffect)(()=>{const n=a?.current??window;if(!(n&&n.addEventListener))return;const c=l=>{o.current(l)};return n.addEventListener(r,c,t),()=>{n.removeEventListener(r,c,t)}},[r,a,t])}function D2(r){ca("click",e=>{r(e)})}function O2(){const[r,e]=xe(null),a=ce(async t=>{if(!navigator?.clipboard)return console.warn("Clipboard not supported"),!1;try{return await navigator.clipboard.writeText(t),e(t),!0}catch(o){return console.warn("Copy failed",o),e(null),!1}},[]);return[r,a]}function mk(r){const[e,a]=xe(r??0),t=ce(()=>{a(c=>c+1)},[]),o=ce(()=>{a(c=>c-1)},[]),n=ce(()=>{a(r??0)},[r]);return{count:e,increment:t,decrement:o,reset:n,setCount:a}}function bk(r,e){const a=Aa(r);Ca(()=>{a.current=r},[r]),rt(()=>{if(e===null)return;const t=setInterval(()=>{a.current()},e);return()=>{clearInterval(t)}},[e])}function N2({countStart:r,countStop:e=0,intervalMs:a=1e3,isIncrement:t=!1}){const{count:o,increment:n,decrement:c,reset:l}=mk(r),{value:u,setTrue:h,setFalse:p}=fk(!1),v=ce(()=>{p(),l()},[p,l]),g=ce(()=>{if(o===e){p();return}t?n():c()},[o,e,c,n,t,p]);return bk(g,u?a:null),[o,{startCountdown:h,stopCountdown:p,resetCountdown:v}]}function Vi(r){const e=(0,s.useRef)(()=>{throw new Error("Cannot call an event handler while rendering.")});return Ca(()=>{e.current=r},[r]),(0,s.useCallback)((...a)=>{var t;return(t=e.current)==null?void 0:t.call(e,...a)},[e])}var Hd=typeof window>"u";function Vd(r,e,a={}){const{initializeWithValue:t=!0}=a,o=(0,s.useCallback)(g=>a.serializer?a.serializer(g):JSON.stringify(g),[a]),n=(0,s.useCallback)(g=>{if(a.deserializer)return a.deserializer(g);if(g==="undefined")return;const f=e instanceof Function?e():e;let b;try{b=JSON.parse(g)}catch($){return console.error("Error parsing JSON:",$),f}return b},[a,e]),c=(0,s.useCallback)(()=>{const g=e instanceof Function?e():e;if(Hd)return g;try{const f=window.localStorage.getItem(r);return f?n(f):g}catch(f){return console.warn(`Error reading localStorage key \u201C${r}\u201D:`,f),g}},[e,r,n]),[l,u]=(0,s.useState)(()=>t?c():e instanceof Function?e():e),h=Vi(g=>{Hd&&console.warn(`Tried setting localStorage key \u201C${r}\u201D even though environment is not a client`);try{const f=g instanceof Function?g(c()):g;window.localStorage.setItem(r,o(f)),u(f),window.dispatchEvent(new StorageEvent("local-storage",{key:r}))}catch(f){console.warn(`Error setting localStorage key \u201C${r}\u201D:`,f)}}),p=Vi(()=>{Hd&&console.warn(`Tried removing localStorage key \u201C${r}\u201D even though environment is not a client`);const g=e instanceof Function?e():e;window.localStorage.removeItem(r),u(g),window.dispatchEvent(new StorageEvent("local-storage",{key:r}))});(0,s.useEffect)(()=>{u(c())},[r]);const v=(0,s.useCallback)(g=>{g.key&&g.key!==r||u(c())},[r,c]);return ca("storage",v),ca("local-storage",v),[l,h,p]}var $k=null;function vg(r,{defaultValue:e=!1,initializeWithValue:a=!0}={}){const t=l=>$k?e:window.matchMedia(l).matches,[o,n]=xe(()=>a?t(r):e);function c(){n(t(r))}return Ca(()=>{const l=window.matchMedia(r);return c(),l.addListener?l.addListener(c):l.addEventListener("change",c),()=>{l.removeListener?l.removeListener(c):l.removeEventListener("change",c)}},[r]),o}var yk="(prefers-color-scheme: dark)",xk="usehooks-ts-dark-mode";function B2(r={}){const{defaultValue:e,localStorageKey:a=xk,initializeWithValue:t=!0}=r,o=vg(yk,{initializeWithValue:t,defaultValue:e}),[n,c]=Vd(a,e??o??!1,{initializeWithValue:t});return Ca(()=>{o!==n&&c(o)},[o]),{isDarkMode:n,toggle:()=>{c(l=>!l)},enable:()=>{c(!0)},disable:()=>{c(!1)},set:l=>{c(l)}}}function fg(r){const e=(0,s.useRef)(r);e.current=r,(0,s.useEffect)(()=>()=>{e.current()},[])}function Ui(r,e=500,a){const t=(0,s.useRef)();fg(()=>{t.current&&t.current.cancel()});const o=(0,s.useMemo)(()=>{const n=gg(r,e,a),c=(...l)=>n(...l);return c.cancel=()=>{n.cancel()},c.isPending=()=>!!t.current,c.flush=()=>n.flush(),c},[r,e,a]);return(0,s.useEffect)(()=>{t.current=gg(r,e,a)},[r,e,a]),o}function F2(r,e,a){const t=a?.equalityFn??((h,p)=>h===p),o=r instanceof Function?r():r,[n,c]=xe(o),l=Aa(o),u=Ui(c,e,a);return t(l.current,o)||(u(o),l.current=o),[n,u]}function H2(r,e={}){const{preserveTitleOnUnmount:a=!0}=e,t=Aa(null);Ca(()=>{t.current=window.document.title},[]),Ca(()=>{window.document.title=r},[r]),fg(()=>{!a&&t.current&&(window.document.title=t.current)})}function V2(r){const[e,a]=xe(!1),t=()=>{a(!0)},o=()=>{a(!1)};return ca("mouseenter",t,r),ca("mouseleave",o,r),e}function U2({threshold:r=0,root:e=null,rootMargin:a="0%",freezeOnceVisible:t=!1,initialIsIntersecting:o=!1,onChange:n}={}){var c;const[l,u]=xe(null),[h,p]=xe(()=>({isIntersecting:o,entry:void 0})),v=Aa();v.current=n;const g=((c=h.entry)==null?void 0:c.isIntersecting)&&t;rt(()=>{if(!l||!("IntersectionObserver"in window)||g)return;let $;const x=new IntersectionObserver(A=>{const y=Array.isArray(x.thresholds)?x.thresholds:[x.thresholds];A.forEach(k=>{const w=k.isIntersecting&&y.some(E=>k.intersectionRatio>=E);p({isIntersecting:w,entry:k}),v.current&&v.current(w,k),w&&t&&$&&($(),$=void 0)})},{threshold:r,root:e,rootMargin:a});return x.observe(l),()=>{x.disconnect()}},[l,JSON.stringify(r),e,a,g,t]);const f=Aa(null);rt(()=>{var $;!l&&(($=h.entry)!=null&&$.target)&&!t&&!g&&f.current!==h.entry.target&&(f.current=h.entry.target,p({isIntersecting:o,entry:void 0}))},[l,h.entry,t,g,o]);const b=[u,!!h.isIntersecting,h.entry];return b.ref=b[0],b.isIntersecting=b[1],b.entry=b[2],b}function G2(){const[r,e]=xe(!1);return rt(()=>{e(!0)},[]),r}function wk(){const r=Aa(!1);return rt(()=>(r.current=!0,()=>{r.current=!1}),[]),ce(()=>r.current,[])}function K2(r=new Map){const[e,a]=xe(new Map(r)),t={set:ce((o,n)=>{a(c=>{const l=new Map(c);return l.set(o,n),l})},[]),setAll:ce(o=>{a(()=>new Map(o))},[]),remove:ce(o=>{a(n=>{const c=new Map(n);return c.delete(o),c})},[]),reset:ce(()=>{a(()=>new Map)},[])};return[e,t]}function W2(r,e,a="mousedown",t={}){ca(a,o=>{const n=o.target;if(!n||!n.isConnected)return;(Array.isArray(r)?r.filter(l=>!!l.current).every(l=>l.current&&!l.current.contains(n)):r.current&&!r.current.contains(n))&&e(o)},void 0,t)}var mg=null;function X2(r,e={}){let{initializeWithValue:a=!0}=e;mg&&(a=!1);const t=ce(u=>{if(e.deserializer)return e.deserializer(u);if(u==="undefined")return;let h;try{h=JSON.parse(u)}catch(p){return console.error("Error parsing JSON:",p),null}return h},[e]),o=ce(()=>{if(mg)return null;try{const u=window.localStorage.getItem(r);return u?t(u):null}catch(u){return console.warn(`Error reading localStorage key \u201C${r}\u201D:`,u),null}},[r,t]),[n,c]=xe(()=>{if(a)return o()});rt(()=>{c(o())},[r]);const l=ce(u=>{u.key&&u.key!==r||c(o())},[r,o]);return ca("storage",l),ca("local-storage",l),n}var bg=null;function q2(r){const{ref:e,box:a="content-box"}=r,[{width:t,height:o},n]=xe(bg),c=wk(),l=Aa({...bg}),u=Aa(void 0);return u.current=r.onResize,rt(()=>{if(!e.current||typeof window>"u"||!("ResizeObserver"in window))return;const h=new ResizeObserver(([p])=>{const v=a==="border-box"?"borderBoxSize":a==="device-pixel-content-box"?"devicePixelContentBoxSize":"contentBoxSize",g=$g(p,v,"inlineSize"),f=$g(p,v,"blockSize");if(l.current.width!==g||l.current.height!==f){const $={width:g,height:f};l.current.width=g,l.current.height=f,u.current?u.current($):c()&&n($)}});return h.observe(e.current,{box:a}),()=>{h.disconnect()}},[a,e,c]),{width:t,height:o}}function $g(r,e,a){return r[e]?Array.isArray(r[e])?r[e][0][a]:r[e][a]:e==="contentBoxSize"?r.contentRect[a==="inlineSize"?"width":"height"]:void 0}var yg=null;function Y2(r={}){let{initializeWithValue:e=!0}=r;yg&&(e=!1);const a=()=>{if(!yg)return window.screen},[t,o]=xe(()=>{if(e)return a()}),n=Ui(o,r.debounceDelay);function c(){const l=a(),u=r.debounceDelay?n:o;if(l){const{width:h,height:p,availHeight:v,availWidth:g,colorDepth:f,orientation:b,pixelDepth:$}=l;u({width:h,height:p,availHeight:v,availWidth:g,colorDepth:f,orientation:b,pixelDepth:$})}}return ca("resize",c),Ca(()=>{c()},[]),t}var Gi=null;function kk(r){const e=document.querySelector(`script[src="${r}"]`),a=e?.getAttribute("data-status");return{node:e,status:a}}function Z2(r,e){const[a,t]=xe(()=>!r||e?.shouldPreventLoad?"idle":typeof window>"u"?"loading":Gi.get(r)??"loading");return rt(()=>{if(!r||e?.shouldPreventLoad)return;const o=Gi.get(r);if(o==="ready"||o==="error"){t(o);return}const n=kk(r);let c=n.node;if(c)t(n.status??o??"loading");else{c=document.createElement("script"),c.src=r,c.async=!0,e?.id&&(c.id=e.id),c.setAttribute("data-status","loading"),document.body.appendChild(c);const u=h=>{const p=h.type==="load"?"ready":"error";c?.setAttribute("data-status",p)};c.addEventListener("load",u),c.addEventListener("error",u)}const l=u=>{const h=u.type==="load"?"ready":"error";t(h),Gi.set(r,h)};return c.addEventListener("load",l),c.addEventListener("error",l),()=>{c&&(c.removeEventListener("load",l),c.removeEventListener("error",l)),c&&e?.removeOnUnmount&&(c.remove(),Gi.delete(r))}},[r,e?.shouldPreventLoad,e?.removeOnUnmount,e?.id]),a}var Ak=null;function J2(r={}){const{autoLock:e=!0,lockTarget:a,widthReflow:t=!0}=r,[o,n]=xe(!1),c=Aa(null),l=Aa(null),u=()=>{if(c.current){const{overflow:p,paddingRight:v}=c.current.style;if(l.current={overflow:p,paddingRight:v},t){const g=c.current===document.body?window.innerWidth:c.current.offsetWidth,f=parseInt(window.getComputedStyle(c.current).paddingRight,10)||0,b=g-c.current.scrollWidth;c.current.style.paddingRight=`${b+f}px`}c.current.style.overflow="hidden",n(!0)}},h=()=>{c.current&&l.current&&(c.current.style.overflow=l.current.overflow,t&&(c.current.style.paddingRight=l.current.paddingRight)),n(!1)};return Ca(()=>{if(!Ak)return a&&(c.current=typeof a=="string"?document.querySelector(a):a),c.current||(c.current=document.body),e&&u(),()=>{h()}},[e,a,t]),{isLocked:o,lock:u,unlock:h}}var Ud=typeof window>"u";function Ck(r,e,a={}){const{initializeWithValue:t=!0}=a,o=(0,s.useCallback)(g=>a.serializer?a.serializer(g):JSON.stringify(g),[a]),n=(0,s.useCallback)(g=>{if(a.deserializer)return a.deserializer(g);if(g==="undefined")return;const f=e instanceof Function?e():e;let b;try{b=JSON.parse(g)}catch($){return console.error("Error parsing JSON:",$),f}return b},[a,e]),c=(0,s.useCallback)(()=>{const g=e instanceof Function?e():e;if(Ud)return g;try{const f=window.sessionStorage.getItem(r);return f?n(f):g}catch(f){return console.warn(`Error reading sessionStorage key \u201C${r}\u201D:`,f),g}},[e,r,n]),[l,u]=(0,s.useState)(()=>t?c():e instanceof Function?e():e),h=Vi(g=>{Ud&&console.warn(`Tried setting sessionStorage key \u201C${r}\u201D even though environment is not a client`);try{const f=g instanceof Function?g(c()):g;window.sessionStorage.setItem(r,o(f)),u(f),window.dispatchEvent(new StorageEvent("session-storage",{key:r}))}catch(f){console.warn(`Error setting sessionStorage key \u201C${r}\u201D:`,f)}}),p=Vi(()=>{Ud&&console.warn(`Tried removing sessionStorage key \u201C${r}\u201D even though environment is not a client`);const g=e instanceof Function?e():e;window.sessionStorage.removeItem(r),u(g),window.dispatchEvent(new StorageEvent("session-storage",{key:r}))});(0,s.useEffect)(()=>{u(c())},[r]);const v=(0,s.useCallback)(g=>{g.key&&g.key!==r||u(c())},[r,c]);return ca("storage",v),ca("session-storage",v),[l,h,p]}function Q2(r){const[e,a]=xe(1),t=e+1<=r,o=e-1>0,n=ce(h=>{const p=h instanceof Function?h(e):h;if(p>=1&&p<=r){a(p);return}throw new Error("Step not valid")},[r,e]),c=ce(()=>{t&&a(h=>h+1)},[t]),l=ce(()=>{o&&a(h=>h-1)},[o]),u=ce(()=>{a(1)},[]);return[e,{goToNextStep:c,goToPrevStep:l,canGoToNextStep:t,canGoToPrevStep:o,setStep:n,reset:u}]}var Sk="(prefers-color-scheme: dark)",zk="usehooks-ts-ternary-dark-mode";function rA({defaultValue:r="system",localStorageKey:e=zk,initializeWithValue:a=!0}={}){const t=vg(Sk,{initializeWithValue:a}),[o,n]=Vd(e,r,{initializeWithValue:a});return{isDarkMode:o==="dark"||o==="system"&&t,ternaryDarkMode:o,setTernaryDarkMode:n,toggleTernaryDarkMode:()=>{const u=["light","system","dark"];n(h=>{const p=(u.indexOf(h)+1)%u.length;return u[p]})}}}function eA(r,e){const a=Aa(r);Ca(()=>{a.current=r},[r]),rt(()=>{if(!e&&e!==0)return;const t=setTimeout(()=>{a.current()},e);return()=>{clearTimeout(t)}},[e])}function aA(r){const[e,a]=xe(!!r),t=ce(()=>{a(o=>!o)},[]);return[e,t,a]}var Ek=null;function tA(r={}){let{initializeWithValue:e=!0}=r;Ek&&(e=!1);const[a,t]=xe(()=>e?{width:window.innerWidth,height:window.innerHeight}:{width:void 0,height:void 0}),o=Ui(t,r.debounceDelay);function n(){(r.debounceDelay?o:t)({width:window.innerWidth,height:window.innerHeight})}return ca("resize",n),Ca(()=>{n()},[]),a}const _k=(r,e)=>{const a=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"value")?.set;a?a.call(r,e):r.value=e,r.dispatchEvent(new Event("input",{bubbles:!0}))},Tk=({defaultValue:r="",value:e,debounceMs:a,inputElementRef:t,onClear:o,onKeyDown:n,onSearch:c})=>{const l=e!==void 0,u=c!==void 0&&a!==void 0,[h,p]=(0,s.useState)(r),v=l?e??"":h,g=(0,s.useRef)(!1),f=Ui(y=>{c?.(y)},a??0),b=(0,s.useCallback)(()=>{f.cancel()},[f]),$=(0,s.useCallback)(y=>{l||p(y)},[l]);(0,s.useEffect)(()=>b,[b]),(0,s.useEffect)(()=>{if(u){if(!g.current){g.current=!0;return}b(),f(v)}},[b,f,v,u]);const x=(0,s.useCallback)(()=>{b();const y=t.current;if(y){_k(y,""),o?.(),y.focus();return}l||p(""),o?.()},[b,t,l,o]),A=(0,s.useCallback)(y=>{n?.(y),!(y.defaultPrevented||y.key!=="Enter"||!c)&&(b(),c(v))},[b,n,c,v]);return{resolvedValue:v,handleValueChange:$,handleClear:x,handleKeyDown:A}},Ik=Ri,Pk=ji,Rk=vr(cd,["outline","solid"]),xg="Search",jk="Clear search",Gd={layout:"hug",size:"inherit",variant:"outline"},Lk=({canClear:r,isDisabled:e,onClear:a})=>{if(r)return(0,i.jsx)(cg,{"aria-label":jk,disabled:e,icon:"fa-regular fa-xmark",onClick:a})},Mk=({ariaLabel:r,ariaLabelledBy:e,headerLabel:a})=>r??(!a&&!e?xg:void 0),wg=(0,s.forwardRef)(({debounceMs:r,inputProps:e,layout:a=Gd.layout,onClear:t,onSearch:o,size:n=Gd.size,variant:c=Gd.variant,headerLabel:l,headerSlot:u,footerCaption:h,footerSlot:p,onChange:v,...g},f)=>{const{id:b,value:$,defaultValue:x="",onChange:A,onKeyDown:y,placeholder:k=xg,disabled:w,readOnly:E,required:_,"aria-label":I,"aria-labelledby":C,...S}=e,T=Nr(b,"arc-search"),D=(0,s.useRef)(null),{resolvedValue:N,handleValueChange:H,handleClear:J,handleKeyDown:R}=Tk({defaultValue:x,value:$,debounceMs:r,inputElementRef:D,onClear:t,onKeyDown:y,onSearch:o}),M=!w&&!E&&N.length>0,P=Mk({ariaLabel:I,ariaLabelledBy:C,headerLabel:l}),F=Lk({canClear:M,isDisabled:w,onClear:J}),or=L=>{D.current=L,Ce(f,L)},gr=(L,X)=>{H(X.target.value),A?.(L,X)};return(0,i.jsx)(zo,{...g,"arc-search":"",layout:a,size:n,variant:c,ref:or,onChange:v,headerLabel:l,headerSlot:u,inputPrefix:(0,i.jsx)(zr,{icon:"fa-regular fa-search"}),inputAction:F,footerCaption:h,footerSlot:p,inputProps:{...S,id:T,value:N,disabled:w,placeholder:k,readOnly:E,required:_,onChange:gr,onKeyDown:R,"aria-disabled":w||void 0,"aria-label":P,"aria-labelledby":C,"aria-readonly":E||void 0,"aria-required":_||void 0}})});wg.displayName="ArcSearch";const Dk=Ri,Ok=ji,Nk=vr(Xr,["outline","solid","plain"]),kg=()=>typeof globalThis?.CSS?.supports=="function"&&globalThis.CSS.supports("appearance","base-select"),Ki=r=>Array.isArray(r.options),Ro=r=>{const e=r?.variant;return e!=="divider"&&e!=="section-label"},Ag=r=>r?.variant==="section-label"&&!!(r.text||r.icon),Cg=r=>{},Sg=(r=[])=>r.flatMap(e=>Ki(e)?e.options:[e]).some(e=>Ro(e)&&e.value===""),zg=r=>{const e=o=>typeof o=="string"&&o.trim().length>0,a=o=>{if(typeof o!="object"||o===null)return;const{name:n}=o;return e(n)?n:void 0};return[r?.text,a(r?.avatar),r?.["aria-label"]].find(e)??"Anonymous"},Yn=d`--arc•select`,Xe=d`${Yn}•picker`,Eg=d`${Xe}•fg`,_g=d`${Xe}•bg`,Kd=d`${Yn}•option`,Zn=d`${Kd}•fg`,Jn=d`${Kd}•bg`,Ht=d`${Kd}•icon`,Bk=d`
  ${Eg}: currentcolor;
  ${_g}: var(--arc-color-bg-mono);
  ${Yn}•placeholder•fg: var(--arc-select-placeholder-color, var(--arc-color-fg-secondary));

  ${Xe}•width: auto;
  ${Xe}•min•width: 3em;
  ${Xe}•border•radius: var(--arc-border-radius-lg);
  ${Xe}•shadow: var(--arc-shadow-lg);

  ${Zn}: currentcolor;
  ${Jn}: transparent;

  ${Ht}•display: none;
  ${Ht}•color: var(${Zn});
`,Fk=d`
  &[data-layout=fill] {
    ${Xe}•width: 100%; /* fallback */
    ${Xe}•width: anchor-size(inline);
  }
`,Hk=d`
  [arc-select] ::picker(select) {
    transition-behavior: allow-discrete, smooth;
    transition-duration: var(--arc-select-transition-duration, 240ms);
    transition-property: display, opacity;
    transition-timing-function: ease-out;
  }

  @supports (overlay: auto) {
    [arc-select] ::picker(select) {
      transition-behavior: allow-discrete;
      transition-property: display, overlay, opacity;
    }
  }
`,Vk=d`
  [arc-select] {
    ::picker(select) {
      opacity: 0;
    }

    ::picker(select):popover-open {
      opacity: 1;
    }
  }

  @starting-style {
    [arc-select] ::picker(select):popover-open {
      opacity: 0;
    }
  }
`,Uk=d`
@layer arc-components {

  /* SETUP ---------------------------------------------------------• */

  [arc-select] {
    ${Bk}
    ${Fk}
  }

  /* CORE ----------------------------------------------------------• */

  [arc-select] {
    select,
    ::picker(select) {
      appearance: base-select;
    }

    ::picker(select) {
      flex: 1;
      display: var(${Xe}•display, none);
      flex-direction: column;
      gap: var(${j}•4);
      border: none;
      color: var(${Eg});
      width: var(--arc-select-picker-width, var(${Xe}•width));
      min-width: var(--arc-select-picker-min-width, var(${Xe}•min•width));
      margin: var(--arc-select-picker-margin, var(${j}•4) 0);
      padding: var(--arc-select-picker-padding, var(${j}•4));
      background: var(--arc-select-picker-background, var(${_g}));
      border-radius: var(--arc-select-picker-border-radius, var(${Xe}•border•radius));
      box-shadow: var(--arc-select-picker-shadow, var(${Xe}•shadow));
    }

    ::picker(select):popover-open {
      ${Xe}•display: flex;
    }

    /* Hide default picker icon */
    ::picker-icon {
      display: none;
    }

    select {
      cursor: inherit;
      flex: 1;
      align-items: center;
      font: inherit;
      color: inherit;
      background: transparent;
      border: none;
      padding: 0;
      margin: 0;
      outline: none;
      padding-inline: var(${m}•12);
      max-width: var(--arc-select-max-width, var(--js•max•width, none));
    }

    [arc-select-button] {
      display: flex;
      align-items: center;
      gap: var(${j}•8);
      width: 100%;
    }

    [arc-select-placeholder] {
      flex: 1;
      color: var(${Yn}•placeholder•fg);
    }

    selectedcontent {
      /* Inter-Component Communication -----------------------------• */
      --arc-icon-text-font-weight: normal;
      --arc-icon-text-subtext-display: none;
      --arc-avatar-text-font-weight: normal;
      --arc-avatar-subtext-display: none;
      --arc-avatar-size: var(${m}•24);
      --arc-avatar-initial-font-size: var(${m}•12);

      flex: 1;
      display: flex;
      align-items: center;
      width: 100%;
      min-width: 0;

      [arc-select-icon=selected] {
        display: none;
      }
    }

    /* Hide the cloned <selectedcontent> when the placeholder span drives the trigger. */
    select[data-placeholder] selectedcontent {
      display: none;
    }

    [arc-select-option-group-legend] {
      font-size: var(${m}•12);
      font-weight: var(--arc-font-weight-600);
      color: var(--arc-select-legend-color, var(--arc-color-fg-secondary));
      padding: var(--arc-select-legend-padding, var(${j}•8));
      cursor: default;
    }

    /* Separator above each legend after the first optgroup. */
    optgroup ~ optgroup [arc-select-option-group-legend] {
      border-top: var(${m}•1) solid var(--arc-color-border-mid);
      margin-top: var(${j}•4);
    }

    [arc-select-option] {
      flex: none;
      display: grid;
      grid-template-columns: 1fr auto;
      align-items: center;
      gap: var(${j}•8);
      width: 100%;
      min-width: 0;
      color: var(${Zn});
      background: var(--arc-select-option-background, var(${Jn}));
      border-radius: var(--arc-select-option-border-radius, var(--arc-border-radius-md));
      padding: var(--arc-select-option-padding, var(${j}•8));

      &::checkmark {
        display: none;
      }

      &:disabled {
        ${Zn}: var(--arc-color-fg-disabled);
        ${Jn}: transparent;
        ${Ht}•display: none;
        cursor: var(--arc-select-disabled-cursor, not-allowed);
      }

      &:not(:disabled):hover {
        ${Jn}: var(--arc-color-bg-hover-default);
      }

      &:not(:disabled):checked {
        ${Jn}: var(--arc-color-bg-selected-default);
        ${Ht}•display: flex;
        ${Ht}•color: var(--arc-select-option-selected-icon-color, var(${Zn}));
      }

      [arc-select-icon=selected] {
        display: var(${Ht}•display, none);
        color: var(${Ht}•color, currentcolor);
      }
    }

    @supports not (appearance: base-select) {
      select {
        appearance: none;
        background: transparent;
        outline: none;

        /* caret */
        background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 11'><polyline points='1 1 10 10 19 1' fill='none' stroke='%23000000' stroke-width='2.5' stroke-linecap='round' /></svg>");
        background-repeat: no-repeat;
        background-size: 0.75em;
        background-origin: padding-box;
        background-position: calc(100% - 1em) center;
        padding-inline-end: 3em;
      }

      select[data-placeholder] {
        color: var(${Yn}•placeholder•fg);
      }
    }
  }

  ${Hk}
  ${Vk}

}
`,Gk=(0,s.forwardRef)(({layout:r="hug",size:e="inherit",variant:a="outline",tag:t="span",items:o,placeholder:n,renderItem:c,headerLabel:l,headerSlot:u,footerCaption:h,footerSlot:p,id:v,value:g,defaultValue:f,required:b,disabled:$,readOnly:x,maxWidth:A,inputProps:y,...k},w)=>{const{name:E,onBlur:_,onChange:I,onFocus:C,onInput:S,"aria-describedby":T,"aria-label":D,"aria-labelledby":N,...H}=k,J=Nr(v,"arc-select"),R=a==="plain"&&r==="fill"?"hug":r,M=$||void 0,P=x||void 0,F=b||void 0,or=kg(),gr=a!=="plain"&&!!(l||u),L=a!=="plain"&&!!(h||p),X=typeof n=="string"&&n.length>0&&!Sg(o),sr=f??(X?"":void 0),mr=g??sr,rr=X&&mr==="",ur=or&&X&&mr==="",yr=P&&mr!=null?String(mr):void 0,lr=o.flatMap(O=>Ki(O)?O.options.filter(Ro):Ro(O)?[O]:(Cg(O),[])),wr=new Map(lr.map((O,cr)=>[O,cr])),V=O=>{const{itemId:cr,...br}=O,$r=kh(uo(O));return(0,i.jsx)($r,{...br})},K=O=>{const cr=wr.get(O)??0,br=O["aria-disabled"]===!0||O.disabled===!0,$r=typeof O.itemId=="string"&&O.itemId.length>0?O.itemId:cr,U=String(O?.value??O?.itemId??cr);return(0,i.jsx)("option",{value:U,disabled:br||yr!==void 0&&U!==yr||void 0,"arc-select-option":"",children:or?(0,i.jsxs)(i.Fragment,{children:[c?c(O,cr):V(O),(0,i.jsx)("span",{"arc-select-icon":"selected","aria-hidden":!0,children:(0,i.jsx)(zr,{icon:"fa-regular fa-check arc-fw"})})]}):zg(O)},$r)},er=(O,cr)=>{const br=O.options.filter(Ro);if(br.length===0)return null;const $r=O.options.find(Ag);return(0,i.jsxs)("optgroup",{label:O.label,disabled:O.disabled||void 0,children:[or&&$r&&(0,i.jsx)("legend",{"arc-select-option-group-legend":"",children:V($r)}),br.map(K)]},O.itemId??`${O.label}-${cr}`)};return(0,i.jsxs)(t,{...H,"arc-select":"","arc-input":"select","data-layout":R,"data-size":e,"data-variant":a,children:[gr&&(0,i.jsxs)(Pr.Header,{children:[(0,i.jsx)(Pr.HeaderLabel,{htmlFor:J,children:l}),!!u&&(0,i.jsx)(Pr.Spacer,{}),(0,i.jsx)(Pr.HeaderSlot,{children:u})]}),(0,i.jsx)(Pr.InputBody,{children:(0,i.jsxs)("select",{...y,name:y?.name??E,onBlur:y?.onBlur??_,onChange:y?.onChange??I,onFocus:y?.onFocus??C,onInput:y?.onInput??S,"aria-describedby":y?.["aria-describedby"]??T,"aria-label":y?.["aria-label"]??D,"aria-labelledby":y?.["aria-labelledby"]??N,value:g,defaultValue:g==null?sr:void 0,required:b,disabled:$,ref:w,id:J,"aria-disabled":M,"aria-required":F,"data-readonly":P,"data-placeholder":rr||void 0,style:{...A?{"--js\u2022max\u2022width":A}:{},...y?.style},children:[(0,i.jsxs)("button",{"arc-select-button":"",children:[ur&&(0,i.jsx)(le,{"arc-select-placeholder":"",text:n,overflow:"truncate"}),(0,i.jsx)("selectedcontent",{}),(0,i.jsx)("span",{"aria-hidden":!0,children:(0,i.jsx)(zr,{icon:"fa-regular fa-angle-down arc-fw"})})]}),X&&(0,i.jsx)("option",{value:"",disabled:!0,hidden:!0,children:n}),o.map((O,cr)=>Ki(O)?er(O,cr):Ro(O)?K(O):null)]})}),L&&(0,i.jsxs)(Pr.Footer,{children:[(0,i.jsx)(Pr.FooterCaption,{children:h}),!!p&&(0,i.jsx)(Pr.Spacer,{}),(0,i.jsx)(Pr.FooterSlot,{children:p})]})]})});Cr("ArcSelect",Uk);const Kk=vr(ve,["inherit","md","sm"]),we={On:"on",Off:"off"},jo={Before:"before",After:"after"},Wk=({disabled:r,id:e,name:a,size:t="md",value:o,labelOff:n,labelOn:c,onChange:l,...u})=>{const h=Nr(a,"arc-switch-name"),p=Nr(e?`${e}-off`:void 0,"arc-switch-off"),v=Nr(e?`${e}-on`:void 0,"arc-switch-on"),g=y=>{if(y.code==="Space"){y.preventDefault(),y.stopPropagation();const k=o===we.On?we.Off:we.On;l?.({value:k},y)}},f=y=>{const k={on:Zt(c),off:Zt(n)};return k?.on&&k?.off?k[y]:!k?.on&&k?.off?`${k?.off}: ${y}`:k?.on&&!k?.off?`${k?.on}: ${y}`:k[y]},b=(0,i.jsxs)(Jc,{type:"switch",onKeyDown:g,children:[(0,i.jsx)(mn,{type:"switch",name:h,id:p,value:we.Off,checked:o===we.Off,disabled:r,"aria-label":f(we.Off)?.trim(),onChange:l}),(0,i.jsx)(mn,{type:"switch",name:h,id:v,value:we.On,checked:o===we.On,disabled:r,"aria-label":f(we.On)?.trim(),onChange:l}),(0,i.jsx)("span",{"data-element":"mask"})]}),$=!c&&o===we.Off?v:p,x=!n&&o===we.On?p:v,A=!!(c||n)&&(0,i.jsxs)(i.Fragment,{children:[!!n&&(0,i.jsx)(Et,{htmlFor:$,"arc-switch-label":c?we.Off:"",children:(0,i.jsx)(_t,{children:n})}),b,!!c&&(0,i.jsx)(Et,{htmlFor:x,"arc-switch-label":n?we.On:"",children:(0,i.jsx)(_t,{children:c})})]});return(0,i.jsx)("span",{...u,"arc-switch":"","data-state":o,"data-size":t,role:"radiogroup",children:A||b})},ge=d`--arc•switch`,Wr=d`${ge}•knob`,Xk=d`
@layer arc-components {

  [arc-switch] {
    ${ge}•background: var(--arc-color-alpha-white-100);
    ${Wr}•shadow: var(--arc-shadow-md);

    &:has(:disabled) {
      ${ge}•background: var(--arc-color-alpha-white-70);
      ${Wr}•shadow: var(--arc-shadow-none);

      [arc-switch-label] {
        --arc-label-cursor: not-allowed;
        --arc-label-opacity: var(--arc-alpha-60);
      }
    }

    /* Uses Neutral-ish Colors */
    &[data-state=off] {
      ${Z}•background: var(--arc-color-bg-neutral-subtle);
      ${Z}•border•color: var(--arc-color-border-stark);
      ${Wr}•border•color: var(--arc-color-border-on-stark);
      ${Wr}•color: var(--arc-color-fg-on-heavy);

      &:not(:has(:disabled)):hover {
        ${Z}•border•color: var(--arc-color-border-heavy);
        ${Wr}•border•color: var(--arc-color-border-heavy);
      }

      &:has(:disabled) {
        ${Z}•background: var(--arc-color-bg-disabled);
        ${Z}•border•color: var(--arc-color-border-disabled);
        ${Wr}•border•color: var(--arc-color-border-on-stark);
        ${Wr}•color: var(--arc-color-bg-tertiary);
      }
    }

    /* Uses Theme Colors */
    &[data-state=on] {
      ${Z}•background: var(--arc-color-bg-theme-heavy);
      ${Z}•border•color: var(--arc-color-border-theme-heavy);
      ${Wr}•border•color: var(--arc-color-border-theme-heavy);
      ${Wr}•color: var(--arc-color-fg-on-theme-heavy);

      &:not(:has(:disabled)):hover {
        ${Z}•opacity: var(--arc-alpha-60);
      }

      &:has(:disabled) {
        ${Z}•opacity: var(--arc-alpha-30);
      }
    }

    /* SIZES  ------------------------------------------------------• */
    &[data-size=inherit] {
      ${ge}•font•size: 1em;
      ${ge}•width: 2.5em;
      ${ge}•height: 1.5em;
      ${ge}•gap: 0.5em;
      ${Wr}•size: 1.5em;
      ${Wr}•x•shift: 0.25em;
    }

    &[data-size=md] { /* @default */
      ${ge}•font•size: var(${m}•14);
      ${ge}•width: var(${m}•40);
      ${ge}•height: var(${m}•24);
      ${ge}•gap: var(${m}•8);
      ${Wr}•x•shift: var(${m}•4);
      ${Wr}•size: var(${m}•24);
    }

    &[data-size=sm] {
      ${ge}•font•size: var(${m}•12);
      ${ge}•width: var(${m}•30);
      ${ge}•height: var(${m}•14);
      ${ge}•gap: var(${m}•8);
      ${Wr}•x•shift: var(${m}•1);
      ${Wr}•size: var(${m}•16);
    }

    /* Inter-Component Communication -------------------------------• */
    /* for: Setup defaults for ArcBooleanInputMask */
    ${Z}•border•radius: var(--arc-border-radius-pill);
    ${Z}•width: var(${ge}•width);
    ${Z}•height: var(${ge}•height);
    ${Z}•x•shift: var(${Wr}•x•shift);
    ${Z}•size: var(${Wr}•size);

    /* for: ArcLabel */
    --arc-label-align-items: stretch; /* ArcLabel • this allows the mask to
                                                    stay inline with the label text
                                                    regardless of applied line-height */

    /* KNOB PLACEMENT ----------------------------------------------• */
    &[data-state=off] {
      ${Wr}•translate: calc(-100% + var(${Wr}•x•shift)) -50%;
    }

    &[data-state=on] {
      ${Wr}•translate: calc(0% - var(${Wr}•x•shift)) -50%;
    }
  }

  /* CORE STYLES ---------------------------------------------------• */
  [arc-switch]:not([hidden]) {
    font-size: var(--arc-switch-font-size, var(${ge}•font•size));
    display: var(--arc-switch-display, inline-flex);
    align-items:  var(--arc-switch-align-items, center);
    gap: var(--arc-switch-gap, var(${ge}•gap));
    user-select: none;

    [arc-switch-label] {
      font-size: inherit;
      hyphens: auto;
    }

    [arc-input-type=switch]:where(:not(:checked)) {
      ${Z}•z•index: 1;
    }

    [arc-input-mask-wrapper] {
      height: 1.25em;
    }

    /* the knob */
    [data-element=mask] {
      position: absolute;
      top: 50%;
      left: 50%;
      translate: var(${Wr}•translate);

      display: inline-flex;
      width: var(${Wr}•size);
      height: var(${Wr}•size);

      transition-duration: 100ms;
      transition-behavior: allow-discrete;
      transition-timing-function: ease-in-out;
      transition-property:
        opacity,
        background,
        color,
        border-color,
        outline,
        translate;

      background: var(${Wr}•color);
      box-shadow: var(${Wr}•shadow);
      border: var(${Z}•border•width) solid var(${Wr}•border•color);
      border-radius: var(--arc-border-radius-circle);
      pointer-events: none;
    }
  }

}
`,qk=({disabled:r,id:e,name:a,size:t="md",value:o,label:n,labelPosition:c=jo.After,onChange:l,labelOff:u,labelOn:h,...p})=>{const v=Nr(a,"arc-switch-name"),g=Nr(e,"arc-switch"),f=(x,A)=>{const y=x.checked?we.On:we.Off;l?.({...x,value:y},A)};!n&&(h||u)&&(n=h||u,c=h?jo.After:jo.Before);const b=(0,i.jsxs)(Jc,{type:"checkbox",children:[(0,i.jsx)(mn,{type:"checkbox",name:v,id:g,checked:o===we.On,disabled:r,role:"switch","aria-checked":o===we.On,"aria-label":n?void 0:"Toggle switch",tabIndex:0,onChange:f}),(0,i.jsx)("span",{"data-element":"mask","aria-hidden":"true",tabIndex:-1})]}),$=(0,i.jsx)(Et,{htmlFor:g,"arc-switch-label":c,children:(0,i.jsx)(_t,{children:n})});return u&&h?(0,i.jsx)(Wk,{...p,disabled:r,id:e,name:a,labelOff:u,labelOn:h,size:t,value:o,onChange:l}):(0,i.jsxs)("span",{...p,"arc-switch":"","data-state":o,"data-size":t,"data-label-position":c,role:"presentation","aria-live":"off",children:[n&&c===jo.Before&&$,b,n&&c===jo.After&&$]})};Cr("ArcSwitch",Xk);const Yk=["title","heading","subheading","body"],Tg=["h1","h2","h3","h4","h5","h6"],Ig=["code","div","li","p","pre","span"],Pg=[...Tg,...Ig],Zk=[...Ha],Jk=["title-inherit","title-lg","title-md","title-sm"],Qk=["heading-inherit","heading-lg","heading-md","heading-sm"],r2=["subheading-inherit","subheading-lg","subheading-md","subheading-sm"],e2=vr(Xr,["inherit","primary","primary-inverse"]),a2=["body-inherit","body-lg","body-md","body-sm","body-xs"],t2=Vr(Xr,["inherit","primary","secondary","primary-inverse","secondary-inverse","critical","warning","success","info"]),o2=vr(ic,["inherit","start","center","justify","end"]),n2=vr(sc,["inherit","loose","standard","tight"]),c2={h1:"title",h2:"heading",h3:"heading",h4:"subheading",h5:"subheading",h6:"subheading",p:"body",span:"body",div:"body",code:"body",pre:"body",li:"body"},i2=r=>{const{align:e,lineHeight:a,size:t,variant:o,scheme:n="auto",isMonospace:c,tag:l,...u}=r,h=c2?.[l]??"body",p=t?.includes("inherit")?t?.split("-")?.[0]:t,v=o?.endsWith("-inverse");let g;return n!=="auto"?g=n:v&&(g=void 0),{...u,"arc-text":p||h,"arc-scheme":g,"data-is-monospace":c?"":void 0,"data-align":e?.includes("inherit")?void 0:e,"data-variant":o?.includes("inherit")?void 0:o,"data-line-height":a?.includes("inherit")?void 0:a}},et=d`--arc•text`,Wd=d`${et}•font`,Lo=d`${et}•align`,Oa=d`${et}fg`,Rg=d`${et}•flex`,jg=d`${et}•hyphens`,Qn=d`${et}•letterspacing`,Na=d`${et}•lineheight`,Lg=d`${et}•opacity`,Mg=d`${et}•whitespace`,Vt=d`${Wd}•family`,he=d`${Wd}•size`,Mo=d`${Wd}•weight`,s2=d`
@layer arc-components {

[arc-text] {
  /* SETUP ---------------------------------------------------------• */
  ${Lo}: unset;
  ${Oa}: unset;
  ${Rg}: unset;
  ${jg}: auto;
  ${Qn}: unset;
  ${Na}: unset;
  ${Lg}: unset;
  ${Mg}: unset;

  ${Vt}: unset;
  ${he}: unset;
  ${Mo}: unset;

  /* LINE HEIGHT ---------------------------------------------------• */

  &[data-line-height=standard] {
    ${Na}: var(--arc-line-height-standard);
  }

  &[data-line-height=loose] {
    ${Na}: var(--arc-line-height-loose);
  }

  &[data-line-height=tight] {
    ${Na}: var(--arc-line-height-tight);
  }

  /* ALIGNMENT -----------------------------------------------------• */

  &[data-align=start] {
    ${Lo}: start;
  }

  &[data-align=center] {
    ${Lo}: center;
  }

  &[data-align=justify] {
    ${Lo}: justify;
  }

  &[data-align=end] {
    ${Lo}: end;
  }

  /* VARIANTS ------------------------------------------------------• */

  &[data-variant=primary] {
    ${Oa}: var(--arc-color-fg-primary);
  }

  /* @deprecated */
  &[data-variant=primary-inverse] {
    ${Oa}: var(--arc-color-fg-on-mono-inverse);
  }

  &[data-variant=secondary] {
    ${Oa}: var(--arc-color-fg-secondary);
  }

  /* @deprecated - 61.2% is the opacity equivalent of the secondary-text color token's gray value. */
  &[data-variant=secondary-inverse] {
    ${Oa}: color-mix(in srgb, var(--arc-color-fg-on-mono-inverse) 61.2%, transparent);
  }

  &[data-variant=critical] {
    ${Oa}: var(--arc-color-fg-critical-mid);
  }

  &[data-variant=warning] {
    ${Oa}: var(--arc-color-fg-warning-stark);
  }

  &[data-variant=success] {
    ${Oa}: var(--arc-color-fg-success-stark);
  }

  &[data-variant=info] {
    ${Oa}: var(--arc-color-fg-info-stark);
  }

}

/* FONT PROPERTIES -------------------------------------------------• */

[arc-text^=title] {
  ${Vt}: var(--arc-font-family-title);
  ${Mo}: var(--arc-font-weight-title);
  ${Qn}: var(--arc-letter-spacing-title);
  ${Na}: var(--arc-line-height-title);

  ${he}: 2em; /* @default title • 32÷16*1em • same as 'title-md' @ 100% */

  &:where([arc-text*=-lg]) {
    ${he}: var(--arc-font-size-title-lg);
  }

  &:where([arc-text*=-md]) {
    ${he}: var(--arc-font-size-title-md);
  }

  &:where([arc-text*=-sm]) {
    ${he}: var(--arc-font-size-title-sm);
  }
}

[arc-text^=heading] {
  ${Vt}: var(--arc-font-family-heading);
  ${Mo}: var(--arc-font-weight-heading);
  ${Qn}: var(--arc-letter-spacing-heading);
  ${Na}: var(--arc-line-height-heading);

  ${he}: 1.25em; /* @default heading • 20÷16*1em • same as 'heading-md' @ 100% */

  &:where([arc-text*=-lg]) {
    ${he}: var(--arc-font-size-heading-lg);
  }

  &:where([arc-text*=-md]) {
    ${he}: var(--arc-font-size-heading-md);
  }

  &:where([arc-text*=-sm]) {
    ${he}: var(--arc-font-size-heading-sm);
  }
}

[arc-text^=subheading] {
  ${Vt}: var(--arc-font-family-subheading);
  ${Mo}: var(--arc-font-weight-subheading);
  ${Qn}: unset;
  ${Na}: var(--arc-line-height-subheading);

  ${he}: 0.875em; /* @default subheading • 14÷16*1em • same as 'subheading-md' @ 100% */

  &:where([arc-text*=-lg]) {
    ${he}: var(--arc-font-size-subheading-lg);
  }

  &:where([arc-text*=-md]) {
    ${he}: var(--arc-font-size-subheading-md);
  }

  &:where([arc-text*=-sm]) {
    ${he}: var(--arc-font-size-subheading-sm);
  }
}

[arc-text^=body] {
  ${Vt}: var(--arc-font-family-body);
  ${Mo}: var(--arc-font-weight-body);
  ${Na}: var(--arc-line-height-body);
  ${he}: 0.875em; /* @default body • 14÷16*1em • same as 'body-md' @ 100% */

  &:where([arc-text*=-lg]) {
    ${he}: var(--arc-font-size-body-lg);
  }

  &:where([arc-text*=-md]) {
    ${he}: var(--arc-font-size-body-md);
  }

  &:where([arc-text*=-sm]) {
    ${he}: var(--arc-font-size-body-sm);
  }

  &:where([arc-text*=-xs]) {
    ${he}: var(--arc-font-size-body-xs);
  }
}

[arc-text]:where(pre, code) {
  ${he}: 1em;
}

[arc-text]:where(pre, code, [data-is-monospace]) {
  ${Vt}: var(--arc-font-family-mono);
  ${Na}: var(--arc-line-height-mono);
}


/* CORE STYLES -----------------------------------------------------• */

[arc-text] {
  /* conveniences for element properties */
  flex: var(--arc-text-flex, var(${Rg}));
  hyphens: var(--arc-text-hyphens, var(${jg})); /* not unset as fallback so text-breaks by default */
  opacity: var(--arc-text-opacity, var(${Lg}));
  text-align: var(--arc-text-align, var(${Lo}));
  white-space: var(--arc-text-white-space, var(${Mg}));

  color: var(--arc-text-color, var(${Oa}));

  font-size: var(--arc-text-font-size, var(${he}));
  font-family: var(--arc-text-font-family, var(${Vt}));
  font-weight: var(--arc-text-font-weight, var(${Mo}));
  line-height: var(--arc-text-line-height, var(${Na}));
  letter-spacing: var(--arc-text-letter-spacing, var(${Qn}));

  font-variation-settings: var(--arc-font-variation-settings, var(--arc-internal-font-vs));
}

}
`,l2=r=>(0,s.forwardRef)((e,a)=>(0,s.createElement)(r,{...i2({...e,tag:r}),ref:a})),d2=[...Pg].reduce((r,e)=>({...r,[e]:l2(e)}),{});Cr("Arc",s2);const u2=vr(Xr,["common","ai","critical"]),Dg=[...Ha],Og=["default","success","warning","error"],Ng=vr(ve,["inherit","md"]),Bg=vr(Xr,["common"]),Fg=[...Bo],h2=[...tt],Hg=["top-left","top-center","top-right","center","bottom-left","bottom-center","bottom-right"],p2=u2.filter(r=>r!=="critical"),Vg={size:Ng[1],variant:Bg[0],scheme:Dg[2],popover:Fg[2],placement:Hg[4],severity:Og[0],showDismiss:!0},Ug=(r,e="toggle")=>{const a=document.getElementById(r);({toggle:()=>a?.togglePopover(),show:()=>a?.showPopover(),hide:()=>a?.hidePopover()})[e]()},Gg=d`--arc•progress`,g2=d`${Gg}•bar`,v2=d`${Gg}•value`,Kg=d`${g2}•bg`,rc=d`${v2}•bg`,f2=d`
@layer arc-components {

  /* Shared defaults from _Internal/Components.css.js */
  ${jf}

  [arc-progress-bar] {
    ${Kg}: var(--arc-color-alpha-subtle);
    ${rc}: var(--arc-color-bg-brand-stark);

    &[data-variant=ai] {
      ${rc}: var(--arc-progress-bar-gradient-ai-200);
    }

    &[data-variant=critical] {
      ${rc}: var(--arc-color-bg-critical-mid);
    }
  }

  [arc-progress-bar] {
    appearance: none;
    width: 100%;
    height: var(${m}•8);

    /* firefox needs these at this level, other browsers can use these too */
    background: var(--arc-progress-bar-background, var(${Kg}));
    border-radius: var(--arc-border-radius-pill);
    border: none;

    /* turn off the default bar background for other browsers */
    &::-webkit-progress-bar { background: none; }

    /* firefox's progress-value bar */
    &::-moz-progress-bar {
      border-radius: var(--arc-border-radius-pill);
      background: var(--arc-progress-bar-value-background, var(${rc}));
    }

    /* all the others' progress-value bar */
    &::-webkit-progress-value {
      border-radius: var(--arc-border-radius-pill);
      background: var(--arc-progress-bar-value-background, var(${rc}));
    }
  }

}
`,m2=({progress:r=0,variant:e="common",...a})=>(0,i.jsxs)("progress",{...a,"arc-progress-bar":"","data-variant":e,value:r,max:a.max||100,"aria-valuenow":r,"aria-valuemax":a.max||100,children:[r,"% "]});Cr("ArcProgressBar",f2);const Ba=d`--arc•toast`,Wi=d`${Ba}•content`,Wg=d`${Ba}•color`,Xg=d`${Ba}•background`,ec=d`${Ba}•icon•color`,ac=d`${Ba}•transition`,b2=d`
@layer arc-components {

  [arc-toast] {
    ${Wi}•gap: var(${j}•2);
    ${ac}•duration: 300ms;
    ${ec}: currentcolor;

    /* SIZES -------------------------------------------------------• */
    &[data-size=md] { /* @default */
      ${Ba}•font•size: var(${m}•16);
      ${Wi}•font•size: var(${m}•14);
    }

    &[data-size=inherit] {
      ${Ba}•font•size: 1em;
      ${Wi}•font•size: 0.875em;
    }

    /* STATES ------------------------------------------------------• */
    &[data-severity=error] {
      ${ec}: var(--arc-color-fg-critical-mid);
    }

    &[data-severity=success] {
      ${ec}: var(--arc-color-fg-success-mid);
    }

    &[data-severity=warning] {
      ${ec}: var(--arc-color-fg-warning-mid);
    }

    /* VARIANTS ----------------------------------------------------• */
    &[data-variant=common] { /* @default */
      ${Xg}: var(--arc-color-bg-mono);
      ${Wg}: var(--arc-color-fg-primary);
    }

    /* PLACEMENTS --------------------------------------------------• */
    &[data-placement*=top-] { inset-block-start: var(--arc-toast-inset-block-start, 0); }
    &[data-placement*=bottom-] { inset-block-end: var(--arc-toast-inset-block-end, 0); }
    &[data-placement*=-left] { inset-inline-start: var(--arc-toast-inset-inline-start, 0); }
    &[data-placement*=-right] { inset-inline-end: var(--arc-toast-inset-inline-end, 0); }
    &[data-placement*=-center] { inset-inline-start: var(--arc-toast-inset-inline-start, 50%); translate: -50% 0; }
    &[data-placement=center] { inset: var(--arc-toast-inset, 0); margin: var(--arc-toast-offset, auto); }
  }

  /* CORE STYLES ---------------------------------------------------• */
  [arc-toast] {
    inset: var(--arc-toast-inset, auto);
    margin: var(--arc-toast-offset, var(${j}•16)); /* @note: '-offset' here is legacy variable name */
    align-items: center;

    font-size: var(${Ba}•font•size); /* @note: see [arc-toast-content] for actual font-size via the [data-size] attribute */

    color: var(--arc-toast-color, var(${Wg}));
    background-color: var(--arc-toast-background, var(${Xg}));
    border-radius: var(--arc-toast-border-radius, var(--arc-border-radius-lg));
    padding: var(--arc-toast-padding, var(${j}•12) var(${j}•12) var(${j}•12) var(${j}•16));
    box-shadow: var(--arc-shadow-lg);
    border: none;

    max-width: var(--arc-toast-max-width, 40em);
    min-width: var(--arc-toast-min-width, 12em);
    min-height: var(--arc-toast-min-height, var(${Ba}•min•height, 3.5em));

    &:has([arc-toast-heading] + [arc-toast-subtext]) {
      ${Ba}•min•height: 5em;
    }

    [arc-toast-content-grid] {
      flex: 1;
      display: grid;
      grid-template-columns: 1fr auto;
      gap: var(${j}•8) var(${j}•16);
    }

    [arc-toast-body] {
      display: flex;
      align-items: baseline;
      gap: var(${j}•8);
      padding: var(${j}•4) 0; /* vertical padding to align with action button text */
      min-width: 14em;

      p {
        margin: 0;
      }
    }

    [arc-toast-icon] {
      --arc-icon-color: var(--arc-toast-icon-color, var(${ec}));

      height: 1lh;
      padding: 0 var(${j}•2);
    }

    [arc-toast-content] {
      flex: 1;

      font-size: var(--arc-toast-font-size, var(${Wi}•font•size));
      line-height: var(--arc-line-height-loose);
      hyphens: auto;

      display: block;

      &:has([arc-toast-heading] + [arc-toast-subtext]) {
        display: flex;
        flex-direction: column;
        gap: var(${j}•2);
      }
    }

    [arc-toast-actions] {
      align-self: baseline;

      display: flex;
      align-items: center;
      gap: 0.5em;
    }

    [arc-toast-progress-bar] {
      grid-column: 1 / -1;
    }
  }

  /* POPOVER + state -----------------------------------------------• */

  [arc-toast] {
    opacity: 0;
    content-visibility: hidden;
    transition:
      display var(${ac}•duration) allow-discrete,
      overlay var(${ac}•duration) allow-discrete,
      content-visibility var(${ac}•duration) allow-discrete,
      opacity var(${ac}•duration);
  }

  [arc-toast]:popover-open {
    display: flex;
    opacity: 1;
    content-visibility: visible;
  }

  @starting-style {
    [arc-toast]:popover-open {
      opacity: 0;
      content-visibility: hidden;
    }
  }
}
`,qg=({id:r,children:e,icon:a,heading:t,subtext:o,dismissProps:n,showDismiss:c=!0,onClose:l,actionSlot:u,size:h="md",variant:p="common",scheme:v=Vg.scheme,placement:g="bottom-left",getToastId:f,progressBarProps:b,severity:$,...x})=>{const A=()=>{l?.()},y=v==="auto"?void 0:v,k=!!u||c,w=Nr(r,"arc-toast"),{variant:E,hierarchy:_,...I}=n||{};(0,s.useEffect)(()=>{f?.(w)},[f,w]);const C=gs(a);return(0,i.jsx)("div",{...x,"arc-toast":"","arc-scheme":y,"data-size":h,"data-variant":p,"data-placement":g,"data-severity":$||void 0,id:w,children:(0,i.jsxs)("div",{"arc-toast-content-grid":"",children:[(0,i.jsxs)("div",{"arc-toast-body":"",children:[a&&(0,i.jsx)(zr,{icon:C,"arc-toast-icon":""}),(0,i.jsx)("div",{"arc-toast-content":"",children:e||(0,i.jsxs)(i.Fragment,{children:[t&&(0,i.jsx)("header",{"arc-toast-heading":"",children:(0,i.jsx)("strong",{children:t})}),o&&(0,i.jsx)("p",{"arc-toast-subtext":"",children:o})]})})]}),k&&(0,i.jsxs)("div",{"arc-toast-actions":"",children:[u,c&&(0,i.jsx)(Lr,{icon:"fa-regular fa-xmark-large",layout:"icon",variant:"common",hierarchy:"tertiary",size:"md",shape:"square","aria-label":"Dismiss",...I,popoverTarget:w,onClick:A})]}),b&&(0,i.jsx)(m2,{...b,variant:$==="error"?"critical":b.variant,"arc-toast-progress-bar":""})]})})};qg.handleToast=Ug,Cr("ArcToast",b2);var tc;(function(r){r.None="none",r.Persistent="localStorage",r.Temporary="sessionStorage"})(tc||(tc={}));const $2=(r,e,a)=>{const[t,o]=(0,s.useState)(e),[n,c]=Ck(r,e),[l,u]=Vd(r,e);return a===tc.Temporary?[n,c]:a===tc.Persistent?[l,u]:[t,o]},y2=["auto","hex","hexa","rgb","hsl","oklch"],x2=()=>typeof DOMRect<"u"?new DOMRect:{x:0,y:0,width:0,height:0,top:0,right:0,bottom:0,left:0,toJSON:()=>({x:0,y:0,width:0,height:0,top:0,right:0,bottom:0,left:0})}}}]);

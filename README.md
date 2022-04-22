# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's Take Over mode by following these steps:

1. Run `Extensions: Show Built-in Extensions` from VS Code's command palette, look for `TypeScript and JavaScript Language Features`, then right click and select `Disable (Workspace)`. By default, Take Over mode will enable itself if the default TypeScript extension is disabled.
2. Reload the VS Code window by running `Developer: Reload Window` from the command palette.

You can learn more about Take Over mode [here](https://github.com/johnsoncodehk/volar/discussions/471).

---

### 建置
1. 套件安裝用 yarn 為主，不要混用 npm
2. 用​ vite 建置 vue3 (建置過程請選擇 typescript 的)
3. vscode 插件推薦使用 volar (不要用 vetur 會衝突)，Eslint, Prettier
4. 配置 EsLint Prettier 
- 需達成即時於 vscode 顯示錯誤，script 和 template 都要能糾錯
- 儲存時能自動修正簡單錯誤
- 儲存時自動完成排版
5. 配置 tailwindcss (官方有 vite vue3 的配置方式)
6. 配置 Pinia
7. 安裝 VueUse

### 練習項目
1. 只能用 Composition API 進行開發，vue 實體使用 <script setup lang="ts"> 
2. 利用 VueUse 的相關功能，製作一個懸浮可拖拉的小方塊，小方塊的懸浮樣式請用 tailwindcss
3. 小方塊內容需顯示方塊的即時位置 (x, y 值，基準點隨意)
4. 將小方塊即時位置資訊更新至 pinia 的 store state 中
5. 即時顯示 pinia state 的更新位置在首頁裡頭

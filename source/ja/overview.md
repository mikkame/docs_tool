# 概要

## 動作環境、必要ランタイム等

### 編集ツール(Windows)

Windows7 SP1以降のPC

もし起動しない場合は下記のリンクからD3DCompiler_47.dllをインストールしてください。

[D3DCompiler_47.dll](https://support.microsoft.com/ja-jp/help/4020302/the-net-framework-4-7-installation-is-blocked-on-windows-7-windows-ser)

### 編集ツール(macOS)

macOS Sierra以降のPC

もし起動しない場合は下記のリンクからmonoをインストールしてください。

[mono](https://www.mono-project.com/)

### ランタイム

*   DirectX9(ShaderModel2.0以上)
*   DirectX11(ShaderModel2.0以上)
*   OpenGL 4.1以上
*   OpenGL ES2.0以上

## インストール、アンインストール

編集ツールは「Tool/」に存在します。レジストリ等の操作は一切しておりません。直接起動するか任意のディレクトリにコピーしてください。  
アンインストールする場合はディレクトリごと削除してください。  

ゲーム中でエフェクトを再生する場合はランタイム、Unity、DXライブラリといった別途パッケージをダウンロードするようお願いします。  

連番画像等の画像としてエフェクトを再生する場合は、[録画](ToolReference/record)を参照してください。

## ライセンス

ランタイムのライセンスはMITライセンスとなっております。 また、[DirectX Tool Kit](https://directxtk.codeplex.com/)を使用しております。

テクスチャ及びエフェクトのデータはCC-0です。ご自由にお使いください。

## 免責事項

本ソフトウェア及びランタイムを使用した際のトラブル等には一切責任を負いかねます。

## 連絡先

effekseer(at)gmail.com

## 開発者

### プログラム

*   S.Sawada
*   うえした
*   らいどっと
*   Masa
*   いも
*   kou_yeung
*   lltcggie
*   Javel
*   kage3
*   Tiffanyx

### 翻訳

*   AndrewFM
*   wisteria
*   kou_yeung

### 素材提供

*   S.Sawada
*   Agate
*   project弾幕Girls
*   BirdStrike
*   Neetpia
*   BrokenDesk
*   日陰者ピエール
*   鈴木克史
*   AndrewFM
*   tktk

## 著作権表示

### ライセンス(ランタイム)

<pre>
The MIT License (MIT)

Copyright (c) 2011 Effekseer Project

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

DirectX Tool Kit
https://directxtk.codeplex.com/
Microsoft Public License (Ms-PL)

</pre>

### ライセンス(ツール)

<pre>
The MIT License (MIT)

Copyright (c) 2011 Effekseer Project

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

DirectX Tool Kit
https://directxtk.codeplex.com/
Microsoft Public License (Ms-PL)

Lumix Engine is licensed under the MIT License
Copyright (c) 2013-2016 Mikulas Florek

imgui is licensed under the MIT License
Copyright (c) 2014-2018 Omar Cornut

Boxer is licensed under the MIT License
Copyright (c) 2014 Aaron Jacobs

GD Graphics Library

Credits and license terms:

In order to resolve any possible confusion regarding the authorship of
gd, the following copyright statement covers all of the authors who
have required such a statement. If you are aware of any oversights in
this copyright notice, please contact Pierre-A. Joye who will be
pleased to correct them.

   Portions copyright 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001,
   2002, 2003, 2004 by Cold Spring Harbor Laboratory. Funded under
   Grant P41-RR02188 by the National Institutes of Health.

   Portions copyright 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003,
   2004 by Boutell.Com, Inc.

   Portions relating to GD2 format copyright 1999, 2000, 2001, 2002,
   2003, 2004 Philip Warner.

   Portions relating to PNG copyright 1999, 2000, 2001, 2002, 2003,
   2004 Greg Roelofs.

   Portions relating to gdttf.c copyright 1999, 2000, 2001, 2002,
   2003, 2004 John Ellson (ellson@graphviz.org).

   Portions relating to gdft.c copyright 2001, 2002, 2003, 2004 John
   Ellson (ellson@graphviz.org).

   Portions copyright 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007
   Pierre-Alain Joye (pierre@libgd.org).

   Portions relating to JPEG and to color quantization copyright
   2000, 2001, 2002, 2003, 2004, Doug Becker and copyright (C) 1994,
   1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004 Thomas
   G. Lane. This software is based in part on the work of the
   Independent JPEG Group. See the file README-JPEG.TXT for more
   information.

   Portions relating to GIF compression copyright 1989 by Jef
   Poskanzer and David Rowley, with modifications for thread safety
   by Thomas Boutell.

   Portions relating to GIF decompression copyright 1990, 1991, 1993
   by David Koblas, with modifications for thread safety by Thomas
   Boutell.

   Portions relating to WBMP copyright 2000, 2001, 2002, 2003, 2004
   Maurice Szmurlo and Johan Van den Brande.

   Portions relating to GIF animations copyright 2004 Jaakko Hyvätti
   (jaakko.hyvatti@iki.fi)

Permission has been granted to copy, distribute and modify gd in
any context without fee, including a commercial application,
provided that this notice is present in user-accessible supporting
documentation.

This does not affect your ownership of the derived work itself,
and the intent is to assure proper credit for the authors of gd,
not to interfere with your productive use of gd. If you have
questions, ask. "Derived works" includes all programs that utilize
the library. Credit must be given in user-accessible
documentation.

This software is provided "AS IS." The copyright holders disclaim
all warranties, either express or implied, including but not
limited to implied warranties of merchantability and fitness for a
particular purpose, with respect to this code and accompanying
documentation.

Although their code does not appear in the current release, the
authors also wish to thank Hutchison Avenue Software Corporation
for their prior contributions.

Native File Dialog

This software is provided 'as-is', without any express or implied
warranty.  In no event will the authors be held liable for any damages
arising from the use of this software.

Permission is granted to anyone to use this software for any purpose,
including commercial applications, and to alter it and redistribute it
freely, subject to the following restrictions:

1\. The origin of this software must not be misrepresented; you must not
   claim that you wrote the original software. If you use this software
   in a product, an acknowledgment in the product documentation would be
   appreciated but is not required.
2\. Altered source versions must be plainly marked as such, and must not be
   misrepresented as being the original software.
3\. This notice may not be removed or altered from any source distribution.

-- 源真ゴシック --

This Font Software is licensed under the SIL Open Font License, Version 1.1.
This license is copied below, and is also available with a FAQ at:
http://scripts.sil.org/OFL

-----------------------------------------------------------
SIL OPEN FONT LICENSE Version 1.1 - 26 February 2007
-----------------------------------------------------------

PREAMBLE
The goals of the Open Font License (OFL) are to stimulate worldwide
development of collaborative font projects, to support the font creation
efforts of academic and linguistic communities, and to provide a free and
open framework in which fonts may be shared and improved in partnership
with others.

The OFL allows the licensed fonts to be used, studied, modified and
redistributed freely as long as they are not sold by themselves. The
fonts, including any derivative works, can be bundled, embedded, 
redistributed and/or sold with any software provided that any reserved
names are not used by derivative works. The fonts and derivatives,
however, cannot be released under any other type of license. The
requirement for fonts to remain under this license does not apply
to any document created using the fonts or their derivatives.

DEFINITIONS
"Font Software" refers to the set of files released by the Copyright
Holder(s) under this license and clearly marked as such. This may
include source files, build scripts and documentation.

"Reserved Font Name" refers to any names specified as such after the
copyright statement(s).

"Original Version" refers to the collection of Font Software components as
distributed by the Copyright Holder(s).

"Modified Version" refers to any derivative made by adding to, deleting,
or substituting -- in part or in whole -- any of the components of the
Original Version, by changing formats or by porting the Font Software to a
new environment.

"Author" refers to any designer, engineer, programmer, technical
writer or other person who contributed to the Font Software.

PERMISSION & CONDITIONS
Permission is hereby granted, free of charge, to any person obtaining
a copy of the Font Software, to use, study, copy, merge, embed, modify,
redistribute, and sell modified and unmodified copies of the Font
Software, subject to the following conditions:

1) Neither the Font Software nor any of its individual components,
in Original or Modified Versions, may be sold by itself.

2) Original or Modified Versions of the Font Software may be bundled,
redistributed and/or sold with any software, provided that each copy
contains the above copyright notice and this license. These can be
included either as stand-alone text files, human-readable headers or
in the appropriate machine-readable metadata fields within text or
binary files as long as those fields can be easily viewed by the user.

3) No Modified Version of the Font Software may use the Reserved Font
Name(s) unless explicit written permission is granted by the corresponding
Copyright Holder. This restriction only applies to the primary font name as
presented to the users.

4) The name(s) of the Copyright Holder(s) or the Author(s) of the Font
Software shall not be used to promote, endorse or advertise any
Modified Version, except to acknowledge the contribution(s) of the
Copyright Holder(s) and the Author(s) or with their explicit written
permission.

5) The Font Software, modified or unmodified, in part or in whole,
must be distributed entirely under this license, and must not be
distributed under any other license. The requirement for fonts to
remain under this license does not apply to any document created
using the Font Software.

TERMINATION
This license becomes null and void if any of the above conditions are
not met.

DISCLAIMER
THE FONT SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT
OF COPYRIGHT, PATENT, TRADEMARK, OR OTHER RIGHT. IN NO EVENT SHALL THE
COPYRIGHT HOLDER BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
INCLUDING ANY GENERAL, SPECIAL, INDIRECT, INCIDENTAL, OR CONSEQUENTIAL
DAMAGES, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF THE USE OR INABILITY TO USE THE FONT SOFTWARE OR FROM
OTHER DEALINGS IN THE FONT SOFTWARE.

</pre>

## 更新履歴

### 1.5x（19/xx/xx）

*   視点操作に様々な機能の追加*   録画に振る舞いが適用されるように変更*   ポストエフェクト機能の追加*   スプレッドシートとして録画すると余分なフレームが録画される不具合を修正*   ユーザー名に日本語や中国語が含まれているとFBXを読み込めない不具合を修正(Windows)*   ヨーロッパ環境でファイルを読み込めない不具合を修正*   乱数がオーバーフローしていた不具合を修正(ランダムの振る舞いが変わる可能性があります)

### 1.43c（19/05/13）

*   ユーザー名が日本語の時にモデルファイルの読み込みに失敗する不具合の修正(Win)

### 1.43b（19/03/12）

*   ファイルを開いた後に画面サイズを変えるとアイコンの画像が消える不具合の修正(Mac)

### 1.43（19/03/02）

*   0フレーム目に生成された軌跡とリボンの挙動がおかしい不具合の修正*   SSEのバッファオーバーランでクラッシュする不具合の修正*   色のイージングを指定したときにAndroidでクラッシュする不具合の修正*   沢山のネットワーク機能の不具合の修正

### 1.42f（19/01/19）

*   録画した画像のアスペクト比がおかしい不具合を修正

### 1.42e（19/01/08）

*   デバッグモードでビルドされていた不具合を修正

### 1.42d（19/01/06）

*   HSVカラーの編集の不具合を修正*   macOS 10.14 Mojave をサポート

### 1.42c（18/10/14）

*   Fカーブのキーが整数に合うように修正*   日本語が含まれるパスでアプリケーションを起動すると文字化けする不具合を修正*   閉じるボタンを複数回クリックすると複数ウインドウが表示される不具合を修正*   他のアプリケーションで開いているファイルに対して録画しようとすると落ちる不具合を修正*   Macでの録画の不具合を修正

### 1.42b（18/09/25）

*   不具合修正：コマンドラインに関する様々な不具合の修正

### 1.42a（18/09/16）

*   不具合修正：ピッチを変更すると落ちる不具合修正

### 1.42（18/09/16）

*   不具合修正：展開していないノードツリービューのノードを選択できない不具合を修正*   不具合修正：振る舞い、カリング、全体に関する様々な不具合を修正

### 1.41（18/09/13）

*   不具合修正：UIの表示が崩れる不具合の修正(Mac)*   不具合修正：ドックパネルの挙動がおかしい不具合の修正*   不具合修正：ノードの貼り付けで落ちる不具合の修正

### 1.40（18/09/12）

*   ツール：UIの一新*   ツール：FBXローダーの改良。アニメーションありFBXを読み込めるように*   ツール：深度に関するパラメーターの追加*   ツール：ランダムに関するパラメーターの追加*   ツール：軌跡とリボンをスムーズにするパラメーターの追加*   ツール：自己歪みの追加*   ランタイム：スマートフォン上のパフォーマンス改善*   ランタイム：全環境上でのパフォーマンス改善*   不具合修正：1フレーム、パーティクルの生成が遅れる不具合の修正

### 1.32（17/11/21）

*   不具合修正：FBXコンバーターの不具合を修正

### 1.31（17/11/04）

*   不具合修正：翻訳のミスを修正

### 1.30（17/11/01）

*   ツール：アイコンを追加*   ツール：ファイルビューアを追加*   ツール：FBX と mqo 読み込みを追加*   ツール：Fカーブエディタを改良*   ツール：UV Fカーブを追加*   ランタイム：軌跡に拡大率が適用されるように変更*   不具合修正：リボンと軌跡のUVがずれる不具合を修正*   不具合修正：リボンの歪みが適用されない不具合を修正*   不具合修正：関数名のスペルミスを修正(Destory -> Destroy)*   不具合修正：振る舞いがファイル読み込み時に初期化されない不具合を修正*   不具合修正：回転(軸)に関する不具合を修正*   不具合修正：歪み(モデル)に関する不具合を修正*   不具合修正：ノードのコピーに関する不具合を修正*   仕様変更：パーティクルが生成されてから0フレームで子のパーティクルを生成するように変更*   仕様変更：歪みのコールバックの戻り値をboolに変更*   仕様変更：ノードの最大個数を廃止*   仕様変更：生成位置の名称を生成方法に変更*   仕様変更：歪み方法。Effekseerのエフェクトが歪みにより歪まなくなりました。(1.4以降に自己歪みを追加する予定です。)

### 1.22（16/08/21）

*   ツール：リボンと軌跡がUVのスクロールに対応*   不具合修正：コピー貼り付けの誤動作を修正

### 1.20（16/06/24）

*   ツール：透明度の自動推定を実装*   ツール：動画出力機能を実装*   ツール：ショートカットを変更*   不具合修正：歪みの描画がおかしくなる不具合を修正

### 1.10（16/02/28）

*   ツール：カラースペースの変更を実装*   ツール：英語版を実装*   不具合修正：メモリリークを修正*   不具合修正：回転と移動の値が異なっていた不具合の修正

### 1.01（15/08/26）

*   ツール：ターゲット位置の変更が反映されるように修正*   不具合修正：引力処理でターゲット位置に原点を指定すると描画されない問題を修正*   不具合修正：外輪・内輪の設定を、"位置・速度・加速度"としたとき、位置のyの値が入力した値によらず、位置のxの値と同じになる不具合の修正*   不具合修正：生成位置の円の設定で、分割数n、位置種類をランダムにした場合、n番目の位置にノードが生成されない不具合の修正*   不具合修正：StopRootを使用した後、エフェクトを大量に表示すると表示がおかしくなる不具合の修正

### 1.00（15/07/15）

*   ツール：プロジェクトのファイルサイズを削減*   ツール：録画機能を一新*   ランタイム：カリング機能の追加*   ランタイム：引力機能の追加*   ランタイム：高速化*   ランタイム：生成時間のランダムの実装(1つのノードの子ノードの最大個数が16に変更)*   ランタイム：libpng16.16.dylibが不要になるように変更*   不具合修正：ウインドウ位置の初期化でウインドウ位置が正しく初期化されない*   不具合修正：ツール複数起動時、ツール間のコピーでテクスチャのパスがおかしくなる*   不具合修正：最小化して終了した時、次起動するとエラー*   不具合修正：ステート復帰が不完全*   不具合修正：メモリリーク

### 0.610（14/07/16）

*   ランタイム：D3DX及びDirectXTexを不必要になるよう変更

### 0.602（14/06/27）

*   バグ：ランタイムからエフェクトの回転が適用されない不具合を修正*   バグ：リングが左手座標系に対応していなかった不具合を修正*   バグ：リロード時、マテリアルへのパスが適用されなかった不具合を修正*   バグ：Matrix43の乗算が特定条件下で失敗する不具合を修正*   バグ：オーディオデバイスが存在しない時ツールがクラッシュする不具合を修正

### 0.601（14/03/22）

*   バグ：一部のエフェクトファイルを読み込めなかった不具合を修正

### 0.60（14/03/01）

*   ランタイム：生成位置に円を追加*   ランタイム：複数のManagerで一部設定を共有できるように*   ランタイム：Windows版OpenGL描画でGLEWが不必要に*   ランタイム：Rendererのネームスペースの変更(EffekseerRenderer→EffekseerRenderer(DX9/DX11/GL))*   ランタイム：UnityPluginバージョンアップ*   バグ：OpenGL(Linux)でモデルが描画できなかった不具合を修正*   バグ：日本語のテクスチャファイルを読み込めなかった不具合を修正

### 0.54（14/01/03）

*   バグ：DXライブラリと組み合わせた際に表示がおかしくなる不具合を修正*   バグ：DirectXとOpenGLの互換性を向上(アルファブレンド)*   ランタイム：SetRestorationOfStatesFlagを追加

### 0.53（13/11/23）

*   バグ：オプション設定ファイルの保存先が間違っていた不具合を修正*   サンプル：Neetpiaより提供のエフェクトを追加*   ヘルプ：組込み関数の一覧を追加

### 0.50.2（13/11/09）

*   ツール：オプションの保存方法を変更

### 0.50.1（13/11/04）

*   ランタイム：Unityを最新バージョンに対応*   ランタイム：DirectX最新バージョンに対応*   ランタイム：UpdateHandleを追加*   ランタイム：cmakeに対応*   サンプル：project弾幕Girlsより提供のエフェクトを追加

### 0.50（13/09/23）

*   両方：軌跡レンダラーの追加*   ツール：エフェクトの振る舞い(編集中にツール上で大量に表示等を再現)の追加*   ツール：背景画像の切り替え追加*   ツール：マウスでの回転方向の向きを変更(オプションパネルで変更可能)*   ランタイム：DirectX11対応*   ランタイム：読み込み時に拡大率を設定できるよう引数を追加*   ランタイム：デバイスロスト対応を強化(DXライブラリでのフルスクリーン切り替えに対応)*   両方：バグ修正

### 0.40（13/04/20）

*   3Dオブジェクトの表示機能
*   Fカーブ編集の追加
*   モデルエミッター
*   アプリケーション起動中のツールからのTCP/IP経由による動的エフェクト書き換え
*   グリッドの色変更機能
*   ツールのGUI改善(ノードツリー)

### 0.32（13/01/05）

*   エフェクト作成時に素材ロードの基準パスを指定できるように変更
*   更新・描画の高速化
*   Unityプラグイン対応
*   様々な不具合を修正

### 0.31.2（12/11/03）

*   様々な不具合を修正

### 0.31.1（12/08/19）

*   深度テストと深度書き込みのフラグが入れ替わっていた不具合を修正
*   リボンの頂点ロックの数が正しくない不具合を修正
*   描画速度の最適化

### 0.31（12/08/18）

*   編集中のノードの色が変更されるように
*   深度テスト、深度書き込みの設定追加
*   単一拡大、単一拡大イージング、任意軸回転、任意軸回転イージングの追加
*   描画速度の最適化

### 0.30.1（12/08/04）

*   録画時に不正終了する不具合の修正
*   一部の値が初期化されておらず、動作が不安定になってしまう不具合の修正
*   寿命により削除をチェックしていない時、寿命を過ぎると子が生成されない不具合の修正
*   標準形式による出力の際、拡大がおかしかった不具合の修正
*   減算合成の不具合の修正
*   BaseMatrix機能が動作しない不具合の修正
*   GUIの改善

### 0.30（12/07/10）

*   HSV色空間への対応
*   マルチスレッドへの対応(UpdateとDrawを別スレッドで実行可能)
*   ツールのGUI改善(高速化、ホイールで値の変更機能追加)
*   オプションパネルの追加(ツールのウインドウのメニューから表示可能、グリッドのサイズ等を変更可)
*   可変FPSに対応(Updateに60fpsを基準として、進んだフレーム数を指定可能)
*   様々なバグフィクス

### 0.20（12/06/16）

*   UV機能の追加
*   色のフェードイン・フェードアウトの追加
*   描画の一部項目を描画共通に移動
*   UVの改良
*   最適化
*   様々なバグフィクス

### 0.18（11/11/27）

*   音機能の追加
*   レンダリング方法にリングの追加
*   Z軸回転ビルボードの計算方法の変更
*   **への影響に、なし(Root依存)を追加
*   最適化
*   様々なバグフィクス

### 0.17（11/11/05）

*   Effekseerのツールのコマンドライン上での機能の追加
*   GUIの配置を変更
*   ::Effekseer::Manager::Drawの引数を不要に変更
*   様々なバグフィクス

### 0.16（11/10/22）

*   様々な更新
*   β版公開

### 0.15（11/06/11）

*   ランタイムにインスタンス破棄時のコールバック機能追加
*   ツールにコマンドラインによる出力追加
*   Z軸回転ビルボードの追加

### 0.14（11/03/31）

*   大量のバグ修正

### 0.13（11/03/28）

*   ストライプ描画追加

### 0.12（11/03/22）

*   バグ修正
*   スプライトに頂点色及び頂点位置パラメータを追加

### 0.11（11/03/21）

*   内部コード整理
*   録画機能拡張（Ortho表示拡大率、透過するかどうか？設定追加）

### 0.10（11/03/20）

*   とりあえず使用可能


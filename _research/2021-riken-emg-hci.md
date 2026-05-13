---
title: "EMG-Based Human-Machine Interaction Research"
title_zh: "基于肌电的人机交互研究"
collection: research
date: 2021-12-01
venue: "Man-Machine Collaboration Research Team, RIKEN"
venue_zh: "RIKEN 人机协作研究团队"
excerpt: "Real-time EMG-based motion intention prediction and assistive interaction research in RIKEN's Man-Machine Collaboration Research Team."
excerpt_zh: "在 RIKEN 人机协作研究团队开展的实时肌电动作意图预测与辅助型人机交互研究。"
demo_video: /videos/riken-demo.mp4
demo_poster:
---

<div data-lang-block="en" markdown="1">

My work at RIKEN is conducted in the [Man-Machine Collaboration Research Team](https://grp.riken.jp/labs/man_machine_collab/) of the Guardian Robot Project. The team studies how assistive robots can infer human movement intention and provide subtle, adaptive support without reducing a user's sense of agency. Its research directions include assistive robots, exoskeleton systems, motor control, motion estimation and prediction, machine learning, and biosignal analysis.

Within this context, my research focuses on **EMG-based motion intention prediction for assistive human-machine interaction**. I work on sit-to-stand and stand-to-sit transitions because these motions are common in daily life, safety-critical for older adults and rehabilitation users, and technically challenging: the system must identify the user's intent before the visible motion fully develops.

## Research Role

- Build EMG acquisition and preprocessing pipelines for lower-limb movement experiments.
- Model muscle activation and motion-state transitions with machine learning and deep time-series methods.
- Predict current and upcoming movement phases in real time for sit-to-stand and stand-to-sit assistance.
- Integrate EMG, motion capture, and system-state signals to support closed-loop evaluation.
- Translate offline models into online inference pipelines suitable for assistive devices.

## Technical Approach

The core problem is to turn noisy, user-dependent physiological signals into timely and reliable interaction cues. I combine signal filtering, feature extraction, temporal modeling, and online decision logic to estimate whether the user is preparing to stand, standing up, preparing to sit, or sitting down. The long-term goal is to make power-assist systems respond earlier and more smoothly while keeping the human user in control.

This work connects directly with the team's broader goal of adaptive and unobtrusive motion assistance: predicting human intention from biosignals, validating it against motion measurements, and using the prediction as an interface between the human body and assistive hardware.

## Related Outputs

- Integrated motion state prediction for sit-to-stand and stand-to-sit motions toward effective power assist control.
- Practical motion classification and forecasting toward safe assists of sit-to-stand and stand-to-sit motions.
- A unified anticipatory prediction framework for sit-to-stand and stand-to-sit transitions.

</div>

<div data-lang-block="zh" markdown="1">

我在 RIKEN 的研究依托于 Guardian Robot Project 下的 [人机协作研究团队](https://grp.riken.jp/labs/man_machine_collab/)。该团队关注如何让辅助机器人感知人的运动意图，并在不削弱使用者主体感的前提下提供自然、适应性的运动支持。官方研究方向包括辅助机器人、外骨骼系统、运动控制、动作估计与预测、机器学习以及生体信号分析。

在这一背景下，我的研究聚焦于**基于肌电信号的动作意图预测与辅助型人机交互**。我重点研究坐站转换和站坐转换，因为这类动作在日常生活中非常常见，对老年人、康复用户和辅助设备使用者具有安全意义，同时也具有较高技术难度：系统需要在明显动作完全发生之前识别使用者的真实意图。

## 研究职责

- 构建用于下肢动作实验的肌电采集与预处理流程。
- 使用机器学习和深度时序模型描述肌肉激活与动作状态转换。
- 面向坐站和站坐辅助任务，实时预测当前和即将发生的运动阶段。
- 融合肌电、运动捕捉和系统状态信号，用于闭环实验评估。
- 将离线训练模型转化为可用于辅助设备的在线推理流程。

## 技术路线

核心问题是将噪声较强、个体差异明显的生理信号转化为及时、可靠的人机交互线索。我结合信号滤波、特征提取、时间序列建模和在线判定逻辑，估计使用者是否正在准备站起、正在站起、准备坐下或正在坐下。长期目标是让助力系统更早、更平滑地响应，同时保持人对动作的主导权。

这项工作与团队“自适应、自然、不打扰的运动辅助”目标直接相关：从生体信号中预测人的意图，用运动测量进行验证，并将预测结果作为人体与辅助硬件之间的交互接口。

## 相关成果

- 面向有效助力控制的坐站与站坐综合运动状态预测。
- 面向安全辅助的坐站与站坐动作实用分类和预测。
- 用于坐站和站坐转换提前预测的统一框架。

</div>

{% if page.demo_video %}
<figure class="research-demo">
  <video controls preload="metadata"{% if page.demo_poster %} poster="{{ page.demo_poster | relative_url }}"{% endif %}>
    <source src="{{ page.demo_video | relative_url }}" type="video/mp4">
  </video>
  <figcaption>
    <span data-lang-block="en">Demo video of the EMG-based motion intention prediction and assistive interaction pipeline.</span><span data-lang-block="zh">基于肌电的动作意图预测与辅助型人机交互流程 DEMO。</span>
  </figcaption>
</figure>
{% endif %}

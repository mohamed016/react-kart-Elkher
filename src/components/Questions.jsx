import { ArrowDown, X } from "@phosphor-icons/react";
import React, { useState } from "react";

function Questions() {
  const [showAnswer, setShowAnswer] = useState(false);
  return (
    <section className="questions">
      <div className="container">
        <h2>الأسئلة الشائعة</h2>
        <div className="question">
          <span>01</span>
          <div>
            <div className="questionBox">
              <h3>هل يجب أن أشعر بالألم أثناء زيارة طبيب الأسنان؟</h3>
              <span
                style={{
                  backgroundColor: showAnswer ? "black" : "",
                  color: showAnswer ? "white" : "",
                }}
                onClick={() => setShowAnswer(!showAnswer)}
              >
                {showAnswer ? <X size={20} /> : <ArrowDown size={20} />}
              </span>
            </div>
            <p
              style={{
                display: showAnswer ? "block" : "none",
              }}
            >
              عادةً لا، مع وجود تقنيات التخدير الحديثة، ينبغي أن تكون الزيارة
              غير مؤلمة، خاصة إذا كنت في حاجة إلى علاج أسنان معقد مثل الحشوات أو
              الجراحة.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Questions;

import React from 'react'

const About = () => {
    return (
      <section className="about">
        <div className="container">
          <h2>ابتسامتك تبدأ من هنا: نصائح وطرق للعناية بأسنانك</h2>
          <p>
            في هذا الفيديو، نستعرض أهم العوامل التي تساهم في صحة الفم والأسنان. من العناية اليومية إلى التقنيات
            الحديثة في علاج الأسنان، نقدم لك نصائح قيمة للمحافظة على ابتسامتك وصحة فمك. كما سنتعرف على أبرز
            الإجراءات المتقدمة مثل تقويم الأسنان، زرع الأسنان، وعلاج اللثة. لا تفوت فرصة التعرف على كيفية الحفاظ
            على أسنانك بصحة جيدة وتحقيق ابتسامة مثالية!
          </p>
          <div className="video-container">
            <video controls width="100%">
              <source src="/assets/videos/movie.mp4" type="video/mp4" />
              <source src="/assets/videos/movie.ogg" type="video/ogg" />
              متصفحك لا يدعم تشغيل الفيديو.
            </video>
          </div>
        </div>
      </section>
    );
  };
  
  export default About;
  


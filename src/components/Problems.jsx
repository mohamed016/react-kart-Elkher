import React from 'react'
const dentalProblems = [
    {
      id: 1,
      title: "التسوس",
      prevention: "العناية اليومية بالأسنان عبر تنظيفها بالفرشاة والمعجون المحتوي على الفلورايد، واستخدام خيط الأسنان.",
      treatment: "إذا كان التسوس قد وصل إلى طبقة الأسنان الداخلية، يتطلب الأمر حشو الأسنان لتغطية المنطقة المتضررة.",
      nutrition: "تقليل تناول السكريات والمواد الحمضية.",
      price: "75 جنية"
    },
    {
      id: 2,
      title: "التهاب اللثة",
      prevention: "تنظيف الأسنان مرتين يومياً واستخدام غسول الفم المضاد للبكتيريا.",
      treatment: "يمكن علاج الحالات البسيطة بتنظيف عميق، ولكن الحالات المتقدمة قد تحتاج إلى جراحة لثة.",
      nutrition: "تناول أطعمة غنية بفيتامين C للحفاظ على صحة اللثة.",
      price: "85 جنية"
    },
    {
      id: 3,
      title: "حساسية الأسنان",
      prevention: "استخدام معجون الأسنان المخصص للأسنان الحساسة وتجنب الأطعمة الباردة أو الساخنة جداً.",
      treatment: "علاج السبب الأساسي مثل التسوس أو انحسار اللثة، واستخدام الفلورايد لتقليل الحساسية.",
      nutrition: "تجنب المشروبات الغازية والأطعمة الحمضية.",
      price: "90 جنية"
    },
    {
      id: 4,
      title: "تآكل الأسنان",
      prevention: "تجنب الإفراط في تناول المشروبات الحمضية، واستخدام واقي للأسنان أثناء النوم.",
      treatment: "قد يحتاج إلى حشوات تجميلية أو تلبيسات لحماية الأسنان المتآكلة.",
      nutrition: "الإكثار من شرب الماء وتناول الأطعمة الغنية بالكالسيوم.",
      price: "100 جنية"
    },
    {
      id: 5,
      title: "تقرحات الفم",
      prevention: "تجنب الأطعمة الحارة والمشروبات الحمضية، والحفاظ على نظافة الفم.",
      treatment: "استخدام غسول الفم المطهر أو جل طبي لتخفيف الألم والتئام التقرحات.",
      nutrition: "تناول أطعمة غنية بالحديد وفيتامين B12.",
      price: "70 جنية"
    },
    {
      id: 6,
      title: "رائحة الفم الكريهة",
      prevention: "تنظيف اللسان يومياً، واستخدام غسول الفم بانتظام.",
      treatment: "علاج مشاكل اللثة أو الأسنان المسوسة، والتأكد من ترطيب الفم.",
      nutrition: "الإكثار من شرب الماء وتناول الأطعمة الغنية بالبروبيوتيك.",
      price: "65 جنية"
    },
    {
      id: 7,
      title: "اصفرار الأسنان",
      prevention: "تقليل استهلاك القهوة والشاي والتدخين، وتنظيف الأسنان بانتظام.",
      treatment: "إجراء تبييض للأسنان باستخدام الليزر أو التبييض المنزلي.",
      nutrition: "تناول الفراولة والتفاح لتحفيز تنظيف الأسنان طبيعياً.",
      price: "120 جنية"
    },
    {
      id: 8,
      title: "تشققات الأسنان",
      prevention: "تجنب قضم الأظافر أو مضغ الأطعمة الصلبة مثل الثلج.",
      treatment: "قد يحتاج إلى حشوات أو تيجان لحماية الأسنان من الكسر.",
      nutrition: "تناول الأطعمة الغنية بالكالسيوم للحفاظ على قوة الأسنان.",
      price: "150 جنية"
    }
  ];
  
function Problems() {
    const newData=dentalProblems
  return (
    <section className="problems">
      <h2 className='my-5 text-center'>مشاكل الأسنان وحلولها</h2>
    <div className="container">
        <div className="row">
            {newData.map((problem,i)=>(
                <ProblemCard key={i} problemObj={problem} />
            ))}
            
        </div>
    </div>

</section>
  )
}
function ProblemCard({problemObj}){
    return<>
     <div className="col-md-6 col-lg-6 col-12">
                <article className='h-100'>
                    <span></span>
                    <h3>{problemObj.title}</h3>
                    <ul>
                        <li><b>الوقاية:</b>{problemObj.prevention}</li>
                        <li><b>العلاج:</b> {problemObj.treatment}</li>
                        <li><b>التغذية:</b>{problemObj.nutrition}</li>
                    </ul>
                    <div className="book_box">
                        <b>سعر الكشف :{problemObj.price}</b>
                        <a href="#">حجز </a>
                    </div>
                </article>
            </div>
    </>
}
export default Problems
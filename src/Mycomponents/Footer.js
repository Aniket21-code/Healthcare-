import React,{useState} from 'react'

export default function Footer(props) {
  // let mystyle={
  //   color:'white',
  //   backgroundColor:'black',
  //   margin:'1px 1px'
  // }
  
return (
<>
<div >
<div class="accordion mx-5 my-4"  id="accordionExample "  >
     <div class="accordion-item"  >
		<h2 class="accordion-header"  id="headingOne">
		<button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
		<b><h3>How does an online doctor consultation work?</h3></b>
		</button>
		</h2>
		<div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
			<div class="accordion-body" >
				<div className="left " >
				<img src="https://dg0qqklufr26k.cloudfront.net/wp-content/uploads/2021/06/specility.png" className="iconDetails" />
				</div> 
				<div className="right">
					<h3><u>1.Choose a speciality </u></h3>
					<p>Choose a specialty based on the medical condition you have. If you are unsure, you can consult with a general physician to guide you through your health condition. For COVID-19 consults, you can chat with a pulmonologist to analyse your Antibody test, RT-PCR test results, or help you with a COVID-19 treatment plan.
					</p>
				</div>
			<div className="left" >
			<img src="https://dg0qqklufr26k.cloudfront.net/wp-content/uploads/2021/06/choosedoc-1.png" className="iconDetails" style={{float:"right"}} />
			</div>  
			<div className="right" style={{marginLeft:'12%'}} >
			<h3><u>2.Choose your doctor</u></h3>
			<p>Choose your doctor based on your preferences. Few parameters you can consider are the years of experience, qualification, languages they speak, hospitals they work in, and the location they are based out of.
			</p>
			</div>
			<div className="left" >
			<img src="https://dg0qqklufr26k.cloudfront.net/wp-content/uploads/2021/06/doc-online1.png" className="iconDetails" />
			</div>  
			<div className="right" >
			<h3><u>3.Talk to a doctor online</u></h3>
			<p>Consult a doctor online either through chat, audio call, or video call and address your health problems. Apart from medical advice, the doctor will also give lifestyle tips for your condition, guidelines on COVID-19 Home care, or guidelines on COVID-19 treatment and share a prescription.
			</p>
			</div>
			<div className="left" >
			<img src="https://dg0qqklufr26k.cloudfront.net/wp-content/uploads/2021/06/book-lab-test-1.png" className="iconDetails" style={{float:"right"}} />
			</div>  
			<div className="right" style={{marginLeft:'12%'}} >
			<h3><u>4.Book Lab Tests online</u></h3>
			<p>Get any lab test done, from the safety &#038; comfort of your home. Your lab reports will be available to you on the app and a top doctor will analyse them, for free.
			</p>
			</div>
			<div className="left">
			<img src="https://dg0qqklufr26k.cloudfront.net/wp-content/uploads/2021/06/buy-medicine.png" className="iconDetails" />
			</div>  
			<div className="right">
			<h3><u>Buy medicines online</u></h3>
			<p>You can buy medicines online through our app and get them delivered to your doorstep on the same day, all without you having to step out of home.</p>
			</div>
		</div>
	</div>
	 <div class="accordion-item-2">
			<h2 class="accordion-header" id="headingTwo">
			<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
				<b><h3>Why do I need a health checkup?</h3></b>
			</button>
			</h2>
		  <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
			<div class="accordion-body">
			<p>A timely medical checkup helps in ensuring that your health is in track and detect any early signs of medical conditions that may be life-threatening in the long run. Early diagnosis through a full body checkup increases your chances of effective treatment and cure. It also helps in reducing heavy medical expenses in the future. </p>
			</div>
		 </div>
	 </div>
	 <div>
	   < div class="accordion-item -3">
			<h2 class="accordion-header" id="headingThree">
			<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
			<b><h3>How often should I get a health checkup?</h3></b>
			</button>
			</h2>
		    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
			<div class="accordion-body">
			<p>In general, it is best to opt for a full body checkup every year after you’ve crossed the age of 30. You can also take up a full body exam if you are currently having a stressful or hectic day-to-day routine and exhibit early symptoms of various lifestyle diseases. A medical checkup will help assess hereditary illnesses and the development of any pre-existing disease. </p>
			</div>
		    </div>
	  </div>
	</div>
	{/* style={{backgroundColor: props.mode==='dark'?'black':'white'}} */}
	<div>
	  <div class="accordion-item-4 " >
				<h2 class="accordion-header" id="headingFour">
				<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
				<b><h3>How do regular health checkups benefit me?</h3></b>
				</button>
				</h2>
			<div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
				<div class="accordion-body">
					<p>Apart from the relief that you are in the pink of health, regular full body tests offer the following benefits:</p>
						<ul>
						<li  ><b>Early diagnosis of diseases:</b><span> With heart attacks and cancer being a few of the common causes of death in individuals, it is always better to opt for preventive health checkups on an annual basis. Not only will this increase the chances for survival for the individual, but it will also help in reducing the course of treatment.&nbsp;</span></li>
						<li  ><b>Subsidized medical costs: </b><span >&nbsp;A shorter duration of treatment due to the early diagnosis of a disease will automatically contribute to subsidized medical expenses. A regular health screening will also offer the incomparable benefit of knowing you are in sound health – which is priceless.</span></li>
						<li ><b>Variety of tests included:</b><span > A health screening or full body checkup includes a variety of blood tests that check for a plethora of diseases. From </span><span  >diabetes</span><span> </span><span  >cancer</span><span  > and </span><span  >anemia</span><span  > to </span><span  >high blood pressure</span><span  > and other cardiovascular diseases, you will be checked for all conditions.&nbsp;</span></li>
						<li  ><b>Functioning of body organs:</b><span  > A regular health screening or annual doctor checkup also ensures the sound functioning of vital body organs including the </span>heart<span  >, </span>lungs<span  >, </span><span  >thyroid</span><span  > and </span><span  >liver</span><span  >.</span></li>
					</ul>
			    </div>
		  </div>
	   </div>
	</div>
	</div>
	</div>

</div>

</>
)
}

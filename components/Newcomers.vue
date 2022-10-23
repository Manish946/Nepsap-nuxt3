<script lang="ts">
export default{
  data: () => ({
      isActive: false,
    }),
  name: 'Newcomers-Component',
  methods: {},
  components: {},
  mounted() {},
}
</script>

<template>
  <div class="newcomers">
    <div class="newcomers-header">
      <h1 class="header">Information For New Comers</h1>
      <h2 class="sub-header">
        As a new-comer, following information can be very valuable.
      </h2>
    </div>

 <v-lazy
      v-model="isActive"
      :options="{
        threshold: .5
      }"
      min-height="200"
      transition="fade-transition"
    >
    <div class="information-box">
      <div class="information-container-wrapper">
        <div class="information-container">
          <div class="information-header">
            <div class="information-container-logo">
              <img
                height="50"
                width="50"
                src="/assets/logos/cpr-t.svg"
                alt=""
              />
              <p class="information-container-text">CPR</p>
            </div>
            <div class="information-container-title">
              <h1 class="information-container-sub-text">
                Central Person Register
              </h1>
            </div>
          </div>
          <div class="information-content">
            <div class="cpr-text-wrapper">
              <p class="cpr-text">
                Everyone who lives in Denmark is required to have a civil
                registration number called a CPR number. You need to register it
                in the Kommune you will be living. You need it to open a bank
                account, access your health insurance, borrow books from the
                library, pay tax, receive a salary and so on. It must be a valid
                address, meaning that you have the right to register your
                address in the CPR system. You are not able to register for your
                CPR until you actually live at your residence.
              </p>
            </div>
          </div>

          <div class="information-buttons">
            <a
              href="https://ihcph.kk.dk/registration"
              target="_blank"
              class="register-button"
              >Register</a
            >
            <a
              href="https://goo.gl/maps/rwrCoQrypMFBeqys8"
              target="_blank"
              class="location-button"
            >
              Contact</a
            >
          </div>
        </div>
      </div>
    </div>
 </v-lazy>



  <v-lazy
      v-model="isActive"
      :options="{
        threshold: .5
      }"
      min-height="200"
      transition="fade-transition"
    >
    <div class="information-box">
      <div class="information-container-wrapper student-housing-secondary">
        <div class="information-container">
          <div class="information-header">
            <div
              class="
                information-container-logo
                student-housing-secondary-background
              "
            >
              <img
                height="50"
                width="50"
                src="/assets/logos/studentsvg.svg"
                alt=""
              />
              <p class="information-container-text student-housing-primary">
                Student
              </p>
            </div>
            <div class="information-container-title">
              <h1
                class="information-container-sub-text student-housing-primary"
              >
                Accomodation - Student Housing
              </h1>
            </div>
          </div>
          <div class="information-content">
            <div class="cpr-text-wrapper">
              <p class="cpr-text student-housing-primary">
                Many students prefer to live in the student housing. This is
                because it is cheap and to get to know other students by living
                with them. Applying is done through Kollegiernes Kontor in
                København (KKIK). It’s free to apply but you do need to upload
                valid student documentation in your application upon applying.
              </p>
            </div>
          </div>

          <div class="information-buttons">
            <a
              href="https://www.kollegierneskontor.dk/default.aspx?lang=GB"
              target="_blank"
              class="register-button student-housing-primary-background"
              >Signup</a
            >
          </div>
          <div class="information-content">
            <div class="cpr-text-wrapper">
              <p class="cpr-text student-housing-primary">
                If you don’t upload valid documentation as soon as you make your
                application, your application will be deleted. To make the
                waiting list as realistic as possible, all users of the system
                must log on at least every month to renew their application and
                through this keep their place on the waiting list.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
 </v-lazy>


  <v-lazy
      v-model="isActive"
      :options="{
        threshold: .5
      }"
      min-height="200"
      transition="fade-transition"
    >
    <div class="information-box">
      <div class="information-container-wrapper rental-background">
        <div class="information-container">
          <div class="information-header">
            <div class="information-container-logo rental-sub-background">
              <img
                height="50"
                width="50"
                src="/assets/logos/rental.svg"
                alt=""
              />
              <p class="information-container-text rental-text-color">Rental</p>
            </div>
            <div class="information-container-title">
              <h1 class="information-container-sub-text rental-text-color">
                Accomodation - Rental Housing
              </h1>
            </div>
          </div>
          <div class="information-content">
            <div class="cpr-text-wrapper">
              <p class="cpr-text bolder-text rental-sub-text-color">
                Get signed up on waiting list of rental companies: FSB, AAB,
                KAB, DBA, etc. When renting a home, please make sure you get a
                rental contract, and check the following before you sign it:
              </p>
              <div class="rental-list">
                <p class="rental-item rental-sub-text-color">
                  1. Read the terms carefully and make sure it describes the
                  specific terms and conditions clearly. A standard contract has
                  been issued by the Danish Ministry of Social Affairs and
                  Integration.
                </p>
                <p class="rental-item rental-sub-text-color">
                  2. You will typically have up to three months’ notice to
                  terminate the lease, which applies to both the letter and
                  yourself as a tenant.
                </p>
                <p class="rental-item rental-sub-text-color">
                  3. A deposit is usually required. Normally one month’s deposit
                  for a room and three months’ deposit for a flat. Whether you
                  get the full deposit back depends on the condition of the flat
                  when you move out.
                </p>
                <p class="rental-item rental-sub-text-color">
                  4. Do not pay any deposit in advance without having a
                  contract.
                </p>
                <p class="rental-item rental-sub-text-color">
                  5. Normally, utilities such as heating, water, and gas are not
                  included in the rent. If they are, it will be specified.
                </p>
                <p class="rental-item rental-sub-text-color">
                  6. Check the room/flat personally before signing the rental
                  contract.
                </p>
                <p class="rental-item rental-sub-text-color">
                  7. You must report any defects in the flat no later than 14
                  days after you have taken it over. Otherwise you may have to
                  pay for the defects yourself.
                </p>
              </div>
            </div>
          </div>

          <div class="information-buttons">
            <a
              href="https://www.retshjaelpen.dk/front-page"
              target="_blank"
              class="register-button rental-button-background"
              >Free Legal</a
            >
          </div>
        </div>
      </div>
    </div>
  </v-lazy>



  <v-lazy
      v-model="isActive"
      :options="{
        threshold: .5
      }"
      min-height="200"
      transition="fade-transition"
    >
    <div class="information-box">
      <div class="information-container-wrapper work-background">
        <div class="information-container">
          <div class="information-header">
            <div
              class="
                information-container-logo
                work-sub-background
              "
            >
              <img
                height="50"
                width="50"
                src="/assets/logos/work.svg"
                alt=""
              />
              <p class="information-container-text work-text-color">
                Work
              </p>
            </div>
            <div class="information-container-title">
              <h1
                class="information-container-sub-text work-text-color"
              >
                Work
              </h1>
            </div>
          </div>
          <div class="information-content">
            <div class="cpr-text-wrapper">
              <p class="cpr-text work-text-color bolder-text">
                Overview of Work in Denmark.
              </p>
              <div class="rental-list">
                <p class="rental-item work-sub-text-color">
                  1. Students are allowed to work 20 hours/week,
                  June/July/August full time.
                </p>
                <p class="rental-item work-sub-text-color">
                  2. Try to look for student job in
                  college/university/library/etc.
                </p>
                <p class="rental-item work-sub-text-color">
                  3. Utilize the opportunity to do the internship in Danish
                  company. This helps to find full time job after completing
                  studies and expand the network.
                </p>
                <p class="rental-item work-sub-text-color">
                  4. As a student, you can join a trade union and receive advice
                  on job-related issues, such as the minimum wage for your type
                  of job, as stated in collective agreements. If you are a
                  member of a trade union, it is always a good idea to let union
                  specialists check your contract before you sign it. Most
                  student jobs are based on an hourly wage rate.
                </p>
                <p class="rental-item work-sub-text-color">
                  5. Some of the trade union offers free membership for student:
                  <a href="https://krifa.dk/" target="_blank" class="work-link-color">Krifa</a>,
                  <a href="https://www.ase.dk/" target="_blank" class="work-link-color">Ase</a>,
                  <a href="https://www.frie.dk/fagforening" target="_blank" class="work-link-color"
                    >Frie</a
                  >,
                  <a href="https://www.detfagligehus.dk/" target="_blank" class="work-link-color"
                    >Detfagligehus</a
                  >,
                  <a href="https://www.businessdanmark.dk/" target="_blank" class="work-link-color"
                    >Businessdanmark</a
                  >
                </p>
                <p class="rental-item work-sub-text-color">
                  6. Job and internship portals:
                  <a href="https://thehub.io/" target="_blank" class="work-link-color">thehub</a>,
                  <a href="https://studerendeonline.dk/" target="_blank" class="work-link-color"
                    >studerendeonline</a
                  >,
                  <a href="https://www.workindenmark.dk" target="_blank" class="work-link-color"
                    >workindenmark</a
                  >,
                  <a href="https://job.jobnet.dk/CV/frontpage" target="_blank" class="work-link-color"
                    >jobnet</a
                  >,
                </p>
              </div>
            </div>
          </div>

          <div class="information-buttons">
            <a
              href="https://www.retshjaelpen.dk/front-page"
              target="_blank"
              class="register-button work-button-background"
              >Free Legal</a
            >
          </div>
        </div>
      </div>
    </div>
  </v-lazy>



  <v-lazy
      v-model="isActive"
      :options="{
        threshold: .5
      }"
      min-height="200"
      transition="fade-transition"
    >
    <div class="information-box">
      <div class="information-container-wrapper transport-background">
        <div class="information-container">
          <div class="information-header">
            <div class="information-container-logo transport-sub-background">
              <img
                height="50"
                width="50"
                src="/assets/logos/transport.svg"
                alt=""
              />
              <p class="information-container-text transport-text-color">Transportation</p>
            </div>
            <div class="information-container-title">
              <h1 class="information-container-sub-text transport-text-color">Transportation</h1>
            </div>
          </div>
          <div class="information-content">
            <div class="cpr-text-wrapper">
              <p class="cpr-text transport-text-color">
                The best way to get around Copenhagen is by bicycle especially
                if the weather is cooperating. To travel longer distance: train
                (s-tog), Metro and bus (Movia) are best option.
              </p>
              <br />

              <p class="cpr-text transport-text-color">
                Public transport discount for all 16-19-year-olds, for students
                on a youth education programme and for students in higher
                education. Apply: ungdomskort.dk
              </p>
              <br />
              <p class="cpr-text transport-text-color">
                If you have more than 24 km to and from work (that is more than
                12 km each way), you are entitled to a deduction for transport
                between home and work no matter the means of transport (car,
                train, bus, bike, etc.).
              </p>
            </div>
          </div>

          <div class="information-buttons">
            <a
              href="https://www.ungdomskort.dk/"
              target="_blank"
              class="register-button transport-button-background"
              >Ungdomskort</a
            >
          </div>
        </div>
      </div>
    </div>
  </v-lazy>


  <v-lazy
      v-model="isActive"
      :options="{
        threshold: .5
      }"
      min-height="200"
      transition="fade-transition"
    >
    <div class="information-box">
      <div class="information-container-wrapper tax-background">
        <div class="information-container">
          <div class="information-header">
            <div
              class="
                information-container-logo
                tax-sub-background
              "
            >
              <img
                height="50"
                width="50"
                src="/assets/logos/skat.svg"
                alt=""
              />
              <p class="information-container-text tax-text-color">
                Tax
              </p>
            </div>
            <div class="information-container-title">
              <h1
                class="information-container-sub-text tax-text-color"
              >
                Tax in Denmark
              </h1>
            </div>
          </div>
          <div class="information-content">
            <div class="cpr-text-wrapper">
              <p class="cpr-text tax-sub-text-color">
                Any person living in Denmark must pay tax in Denmark - full tax
                liability.
              </p>
              <br />
              <p class="cpr-text tax-sub-text-color">
                You have to send copy of your letter of employment. You will
                receive a preliminary tax assessment from SKAT right away when
                getting a CPR-nummer (civil registration no.).
              </p>
              <br />
              <p class="cpr-text tax-sub-text-color">
                Whenever you submit corrections to SKAT during the year about
                your current income you will receive a new preliminary tax
                assessment. In November you will automatically get a preliminary
                assessment for next year.
              </p>
              <br />
            </div>
          </div>

          <div class="information-buttons">
            <a
              href="https://skat.dk/"
              target="_blank"
              class="register-button tax-button-background"
              >Skat</a
            >
          </div>
        </div>
      </div>
    </div>
  </v-lazy>



  <v-lazy
      v-model="isActive"
      :options="{
        threshold: .5
      }"
      min-height="200"
      transition="fade-transition"
    >
    <div class="information-box">
      <div class="information-container-wrapper danish-background">
        <div class="information-container">
          <div class="information-header">
            <div class="information-container-logo danish-sub-background">
              <img
                height="50"
                width="50"
                src="/assets/logos/danish.svg"
                alt=""
              />
              <p class="information-container-text danish-text-color">Danish</p>
            </div>
            <div class="information-container-title">
              <h1 class="information-container-sub-text danish-text-color">Danish Language</h1>
            </div>
          </div>
          <div class="information-content">
            <div class="cpr-text-wrapper">
              <p class="cpr-text bolder-text danish-text-color">
                Language is very important for the following reasons:
              </p>
              <div class="rental-list">
                <p class="rental-item danish-sub-text-color">1. More job opportunities.</p>
                <p class="rental-item danish-sub-text-color">
                  2. Helps in being more social in Danish culture.
                </p>
                <p class="rental-item danish-sub-text-color">
                  3. One of the requirements to obtain long term residency
                  (Permanent resident).
                </p>
              </div>
              <p class="cpr-text bolder-text danish-text-color">Language schools:</p>
              <br />
              <div class="information-buttons">
                <a
                  href="https://ucplus.dk/"
                  target="_blank"
                  class="register-button danish-button-background"
                  >UCPlus</a
                >
                <a
                  href="https://www.clavis.org/"
                  target="_blank"
                  class="register-button danish-button-background"
                >
                Clavis</a
                >
                <a
                  href="https://www.studieskolen.dk/da/dansk/koebenhavns-sprogcenter"
                  target="_blank"
                  class="register-button danish-button-background"
                >
                KBH SC</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </v-lazy>


  <v-lazy
      v-model="isActive"
      :options="{
        threshold: .5
      }"
      min-height="200"
      transition="fade-transition"
    >
    <div class="information-box">
      <div class="information-container-wrapper sociallife-background">
        <div class="information-container">
          <div class="information-header">
            <div
              class="
                information-container-logo
                sociallife-sub-background
              "
            >
              <img
                height="50"
                width="50"
                src="/assets/logos/sociallife.svg"
                alt=""
              />
              <p class="information-container-text sociallife-text-color">
                Social life
              </p>
            </div>
            <div class="information-container-title">
              <h1
                class="information-container-sub-text sociallife-text-color"
              >
                Social life
              </h1>
            </div>
          </div>
          <div class="nepalese-social-links">
              <a
              href="https://dk.nepalembassy.gov.np/"
              target="_blank"
              class="links-item-button sociallife-button-background"
              >Embassy of Nepal</a
            >
            <a
              href="https://www.facebook.com/NCCDENMRK2017"
              target="_blank"
              class="links-item-button sociallife-button-background"
              >NRNA Denmark</a
            >
             <a
              href="https://www.facebook.com/nepalicophagen"
              target="_blank"
              class="links-item-button sociallife-button-background"
              >Ne-Co Events</a
            >
            <!-- <a
              href="https://www.facebook.com/groups/NepSAPDenmark"
              target="_blank"
              class="links-item-button sociallife-button-background"
              >NEPSAP</a
            > -->
             <a
              href="https://bit.ly/37klSwC"
              target="_blank"
              class="links-item-button sociallife-button-background"
              >Nepali Pathsala Copenhagen</a
            >
             <a
              href="https://www.facebook.com/CreativeNepaleseWomenInDenmark"
              target="_blank"
              class="links-item-button sociallife-button-background"
              >Creative Nepalese Women in Denmark </a
            >
             <a
              href="https://www.facebook.com/Bellahojclassic"
              target="_blank"
              class="links-item-button sociallife-button-background"
              >Bellahøj Classic Sports Club</a
            >
             <a
              href="https://www.facebook.com/groups/405917069594915"
              target="_blank"
              class="links-item-button sociallife-button-background"
              >Nepalese Volleyball Group</a
            >
             <a
              href="https://www.facebook.com/groups/288433634864049"
              target="_blank"
              class="links-item-button sociallife-button-background"
              >Nepali Badminton Club</a
            >
             <a
              href="https://www.facebook.com/people/Copenhagen-Green-Badminton-Club/100020513726450/"
              target="_blank"
              class="links-item-button sociallife-button-background"
              >Copenhagen Green Badminton Club</a
            >

            <a
              href="https://www.facebook.com/groups/1741818719455355"
              target="_blank"
              class="links-item-button sociallife-button-background"
              >Nepali Fishing Team in Copenhagen</a
            >
          </div>

          <div class="information-buttons">

          </div>
        </div>
      </div>
    </div>

  </v-lazy>
  </div>
</template>


<style>

.links-item-button {
  background-color: #7349f2;
  padding: 15px;
  color: white;
  border-radius: 5px;
  font-size: 20px;
  flex:1 1 400px;
  

}

.nepalese-social-links{
 display: flex;
  flex-wrap: wrap;
  column-gap: 10px;
  row-gap: 10px;
}

.work-link-color{
  color: red;
}



.bolder-text {
  font-weight: 500 !important;
}

.rental-item {
  border-radius: 0.75rem;
  border: 1px solid #ded8fd;
  padding: 0.5rem;
  color: #7349f2;
  margin: 10px 0;
  font-size: 21px;
  font-weight: 300;
}

.rental-list {
  display: flex;
  flex-direction: column;
}

.information-buttons {
  margin: 1rem 0%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
}

.location-button {
  background-color: #ffefa1;
  color: #443ee3;
  padding: 13px;
  border-radius: 5px;
  font-size: 20px;
  margin-top: 1rem;
  border: 2px solid #443ee3;
}

.cpr-text-wrapper {
  border-radius: 0.75rem;
  margin: 2rem 0;
}

.cpr-text {
  color: #7349f2;
  font-size: 24px;
  margin: 0;
  border-radius: 0.75rem;
  font-weight: 300;
}

.information-content {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  width: 100%;
}

.register-button {
  background-color: #7349f2;
  color: white;
  padding: 15px;
  border-radius: 5px;
  font-size: 20px;
  margin-top: auto;
}

.information-container {
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
}

.information-container-sub-text {
  font-size: 34px;
  font-weight: 600;
  color: #7349f2;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0%;
}

.information-container-text {
  font-size: 18px;
  line-height: 25px;
  margin-left: 10px;
  font-weight: 600;
  color: #7349f2;
}

.information-container-logo {
  align-self: flex-start;
  background-color: #efecfe;
  border-radius: 1.25rem;
  color: rgb(115 73 242);
  display: inline-flex;
  -moz-box-align: center;
  align-items: center;
  margin-bottom: 1.25rem;
  padding: 0.4rem 0.9rem;
  justify-content: center;
}

.information-box {
  margin: 3rem 0%;
}

.information-container-wrapper {
  background-color: #f7f5fe;
  padding: 1.5rem 2.5rem;
  box-sizing: content-box;
  max-width: 70rem;
  margin: 0 auto;
  border-radius: 25px;
}

.student-housing-theme {
  background-color: #f5fafe;
}

.student-housing-primary {
  color: #3d89f5;
}

.student-housing-primary-background {
  background-color: #3d89f5;
}

.student-housing-secondary {
  background-color: #f5fafe;
}

.student-housing-secondary-background {
  background-color: #ecf5fe;
}

.rental-background{
  background-color: #f0f2f7;
}

.rental-sub-background{
  background-color: #dfe3eb;
}

.rental-button-background{
  background-color: #677185;
}

.rental-text-color{
  color: #6a7387;
}

.rental-sub-text-color{
  color: #0f0f11;
}

.work-background{
  background-color: #fff8f2;
}

.work-sub-background{
  background-color: #fff2e5;
}

.work-button-background{
  background-color: #f28b24;
}

.work-text-color{
  color: #f37d07;
}

.work-sub-text-color{
  color: #ff8104;
}

.transport-background{
  background-color: #d8f3dc;
}

.transport-sub-background{
  background-color: #b7e4c7;
}

.transport-button-background{
  background-color: #40916c;
}

.transport-text-color{
  color: #40916c;
}

.transport-sub-text-color{
  color: #b7e4c7;
}

.tax-background{
  background-color: #a8dadc;
}

.tax-sub-background{
  background-color: #77abbd;
}

.tax-button-background{
  background-color: #31587a;
}

.tax-text-color{
  color: #31587a;
}

.tax-sub-text-color{
  color: #1d3557;
}


.danish-background{
  background-color: #fff0f3;
}

.danish-sub-background{
  background-color: #fae0e4;
}

.danish-button-background{
  background-color: #d80027;
}

.danish-text-color{
  color: #d80027;
}

.danish-sub-text-color{
  color: #ff4d6d;
}


.sociallife-background{
  background-color: #daffef;
}

.sociallife-sub-background{
  background-color: #c1f7ea;
}

.sociallife-button-background{
  background-color: #78e0db;
}

.sociallife-text-color{
  color: #78e0db;
}

.sociallife-sub-text-color{
  color: #78e0db;
}

.newcomers-header {
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.header {
  margin: 0%;
  color: #5aadec;
}

.sub-header {
  color: gray;
  font-weight: 500;
}

.newcomers {
  margin-top: 175px;
  padding: 0 2.5rem;
}

@media only screen and (max-width: 1180px) {
  /*
.information-left-container{
  flex-direction: row;
} */
  .information-container-sub-text {
    font-size: 23px;
  }

  .cpr-text {
    font-size: 18px;
  }

  .newcomers {
    margin-top: 175px;
    padding: 0 0.9rem;
  }

  .information-container-wrapper {
    padding: 1.2rem;
  }

  .header {
    font-size: 28px;
  }

  .sub-header {
    font-size: 20px;
  }

  .rental-item {
    font-size: 18px;
  }
}
</style>


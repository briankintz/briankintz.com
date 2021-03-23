<template>
  <div>
    <Header />
    <Hero />
    <SectionWork />
    <SectionPlain>
      <h3>Over the years I've had the chance to wear many hats.</h3>
      <h3>Some of my more interesting non-tech roles include:</h3>
      <Rolodex
        :items="[
          'Emergency Medical Technician',
          'Ski Instructor',
          'Bicycle Mechanic',
          'German Teaching Assistant',
          'Lifeguard',
        ]"
      />
    </SectionPlain>
    <SectionPlay />
    <Footer />
  </div>
</template>

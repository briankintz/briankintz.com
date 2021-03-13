<template>
  <div class="w-full py-32 xl:py-64 bg-blue text-gray-50">
    <div class="container mx-auto p-3 grid grid-cols-3 gap-10">
      <div class="col-span-3 lg:col-span-2">
        <h1 class="mb-8">Hey there!</h1>
        <p class="mb-4">
          I'm Brian, a software and devops engineer based in Germany.
        </p>
        <p class="mb-4">
          Professionally I cover the whole technology stack: from servers,
          microcontrollers, virtualization and database design up through
          application and UI design and development. The best projects involve
          automating and integrating many different layers together...for
          example an
          <a href="https://github.com/elmugrat/led_cube">LED cube</a> or
          <a href="https://github.com/elmugrat/smart_mirror">smart mirror</a>.
        </p>
        <p class="mb-4">
          I'm known for my expertise in system infrastructure design,
          containerization and orchestration, and for spreading my knowledge on
          fun topics like CI/CD, Docker and Kubernetes.
        </p>
        <p>
          Away from the computer I'm a ski instructor and EMT and love to
          sail/swim/bike, cook, and just relax and enjoy life.
        </p>
      </div>
      <img
        data-src="~/assets/img/bk.jpg"
        class="col-span-3 lg:col-span-1 place-self-center lg:justify-self-end rounded-full lazyload"
        alt="Brian Kintz"
      />

      <hr class="col-span-3 border-4 border-blue-light rounded-full" />

      <div class="col-span-3 text-center lg:text-left">
        <SocialLink
          fa-icon="instagram"
          href="https://www.instagram.com/daslebendesbrian/"
        />
        <SocialLink
          fa-icon="linkedin"
          href="https://www.linkedin.com/in/bkintz"
        />
        <SocialLink fa-icon="gitlab" href="https://gitlab.com/bkintz" />
        <SocialLink
          fa-icon="stack-overflow"
          href="http://stackoverflow.com/users/362922/brian-kintz"
        />
      </div>
    </div>
  </div>
</template>

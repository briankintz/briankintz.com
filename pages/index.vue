<template>
  <div class="w-full min-h-screen">
    <WorkItem
      company="B.USnow"
      role="DevOps Engineer"
      href="https://busnow.com"
      :logo="`${require('~/assets/img/logos/busnow.png')}`"
      :tags="[
        {
          faFamily: 'fal',
          faIcon: 'terminal',
          text: 'Kubernetes, GitLab, Docker, Prometheus',
        },
        {
          faFamily: 'fal',
          faIcon: 'code',
          text: 'Ansible, Helm, Bash, Python',
        },
      ]"
    >
      <ul>
        <li>
          Designed and deployed infrastructure for a cloud-native mobility
          solution
        </li>
        <li>
          Enabled rapid development and fast time to market via automation
        </li>
        <li>
          Collaborated with IT operations to implement modern infrastructure
          solutions company-wide
        </li>
      </ul>
    </WorkItem>

    <WorkItem
      company="Delivery of Things World"
      role="Guest Speaker"
      href="https://www.deliveryofthingsworld.com"
      :logo="`${require('~/assets/img/logos/dot.png')}`"
      :tags="[
        {
          faFamily: 'fal',
          faIcon: 'star',
          text: 'DevOps, Agile, Strategy, Success Story',
        },
      ]"
    >
      <ul>
        <li>
          How we moved from a static waterfall process to automated agile
          development
        </li>
        <li>Reducing overhead and time to delivery while increasing quality</li>
        <li>Doing the above without breaking the bank</li>
      </ul>
    </WorkItem>

    <WorkItem
      company="IAV GmbH"
      role="Software Engineer"
      href="https://www.iav.com"
      :logo="`${require('~/assets/img/logos/iav.gif')}`"
      :tags="[
        {
          faFamily: 'fal',
          faIcon: 'terminal',
          text:
            'Linux, Kubernetes, GitLab, Jira, Ansible, Docker, Sonarqube, Prometheus, Grafana',
        },
        {
          faFamily: 'fal',
          faIcon: 'code',
          text: 'C#, Java, C/C++, JavaScript, Python, Oracle, MySQL',
        },
      ]"
    >
      <ul>
        <li>
          Drastically increased system reliability by eliminating bottlenecks
          and decoupling dependent services
        </li>
        <li>
          Implemented time-series monitoring of core systems to aid in
          development and business decisions
        </li>
        <li>
          Continuously improved development processes to increase quality,
          efficiency and developer morale
        </li>
        <li>
          Managed the agile development of multiple business-critical
          applications
        </li>
        <li>
          Developed software tools for the evaluation and calibration of engine
          diagnostics
        </li>
      </ul>
    </WorkItem>

    <WorkItem
      company="MTV Gifhorn Ski/Snowboard"
      role="Web Developer"
      href="https://www.mtv-gifhorn-ski.de"
      :logo="`${require('~/assets/img/logos/mtv-gifhorn.png')}`"
      :tags="[
        {
          faFamily: 'fal',
          faIcon: 'terminal',
          text: 'TypeScript, Angular, Bootstrap, MySQL',
        },
      ]"
    >
      <ul>
        <li>
          Designed and developed a modern, reponsive web application for
          managing course bookings
        </li>
        <li>
          Measurably improved user experience by simplifying information flow
          and communication
        </li>
        <li>
          Significantly decreased time spent for management tasks via automation
          and smart tooling
        </li>
      </ul>
    </WorkItem>

    <WorkItem
      company="University of Rhode Island"
      role="System Administrator"
      href="https://web.uri.edu/ecc/"
      :logo="`${require('~/assets/img/logos/uri.png')}`"
      :tags="[
        {
          faFamily: 'fal',
          faIcon: 'terminal',
          text: 'Linux, LDAP, DNS/Networking, Samba, Apache, Sendmail',
        },
        {
          faFamily: 'fal',
          faIcon: 'code',
          text: 'Perl, Bash, HTML/CSS',
        },
      ]"
    >
      <ul>
        <li>Modernized aging IT infrastructure</li>
        <li>Migrated existing systems to a unified, managed domain</li>
        <li>Maintained and optimized widespread computing facilities</li>
      </ul>
    </WorkItem>
  </div>
</template>

<style lang="postcss" scoped>
ul {
  @apply list-disc list-inside;

  & li {
    @apply mb-2;
  }
}
</style>

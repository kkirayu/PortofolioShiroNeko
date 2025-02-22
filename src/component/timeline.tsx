"use client";
import { Timeline } from "flowbite-react";
import { HiCalendar } from "react-icons/hi";

export function Time() {
  return (
    <div className="container mx-auto mt-20 px-4 flex justify-center">
      <div className="w-full max-w-3xl">
        <Timeline>
          <Timeline.Item>
            <Timeline.Point icon={HiCalendar} />
            <Timeline.Content>
              <Timeline.Time>April 2023</Timeline.Time>
              <Timeline.Title>PT Javan Cipta Solusi Backend Team</Timeline.Title>
              <Timeline.Body>
                As a website developer based on PHP Laravel and API using Postman.
              </Timeline.Body>
            </Timeline.Content>
          </Timeline.Item>
          <Timeline.Item>
            <Timeline.Point icon={HiCalendar} />
            <Timeline.Content>
              <Timeline.Time>June 2023</Timeline.Time>
              <Timeline.Title>PT Javan Cipta Solusi Fullstack Team</Timeline.Title>
              <Timeline.Body>
                As a website developer based on PHP Laravel and API using Postman and frontend development using TypeScript.
              </Timeline.Body>
            </Timeline.Content>
          </Timeline.Item>
          <Timeline.Item>
            <Timeline.Point icon={HiCalendar} />
            <Timeline.Content>
              <Timeline.Time>August 2023</Timeline.Time>
              <Timeline.Title>PT Javan Cipta Solusi QA Team</Timeline.Title>
              <Timeline.Body>
                Conducting manual tests on the websites of the Corruption Eradication Commission, XL-Axiata, and Komdigi.
              </Timeline.Body>
            </Timeline.Content>
          </Timeline.Item>
          <Timeline.Item>
            <Timeline.Point icon={HiCalendar} />
            <Timeline.Content>
              <Timeline.Time>January 2024</Timeline.Time>
              <Timeline.Title>Fullstack Website Programmer TEFA SMKN4 Payakumbuh</Timeline.Title>
              <Timeline.Body>
                As a website developer based on PHP Laravel and API using Postman and frontend development using TypeScript.
              </Timeline.Body>
            </Timeline.Content>
          </Timeline.Item>
          <Timeline.Item>
            <Timeline.Point icon={HiCalendar} />
            <Timeline.Content>
              <Timeline.Time>March 2024</Timeline.Time>
              <Timeline.Title>Frontend Developer Freelance for Beaudent</Timeline.Title>
              <Timeline.Body>
                As a website developer based on PHP Laravel and API using Postman and frontend development using TypeScript.
              </Timeline.Body>
            </Timeline.Content>
          </Timeline.Item>
          <Timeline.Item>
            <Timeline.Point icon={HiCalendar} />
            <Timeline.Content>
              <Timeline.Time>May 2024</Timeline.Time>
              <Timeline.Title>Quality Assurance, Programmer, and Analyst for International SMK EXPO Sumatra Barat</Timeline.Title>
              <Timeline.Body>
                As a website developer based on PHP Laravel and API using Postman and frontend development using TypeScript. Also working in QA.
              </Timeline.Body>
            </Timeline.Content>
          </Timeline.Item>
          <Timeline.Item>
            <Timeline.Point icon={HiCalendar} />
            <Timeline.Content>
              <Timeline.Time>August 2024 - Now</Timeline.Time>
              <Timeline.Title>Student of Amikom University Yogyakarta</Timeline.Title>
              <Timeline.Body>
                Open to Freelance
              </Timeline.Body>
            </Timeline.Content>
          </Timeline.Item>
        </Timeline>
      </div>
    </div>
  );
}

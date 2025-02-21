"use client";
import { Timeline } from "flowbite-react";
import { HiCalendar } from "react-icons/hi";

export function Time() {
  return (
    <div className="container mt-20 mx-auto flex justify-center">
      <Timeline>
        <Timeline.Item>
          <Timeline.Point icon={HiCalendar} />
          <Timeline.Content>
            <Timeline.Time>April 2023</Timeline.Time>
            <Timeline.Title>PT Javan Cipta Solusi Backend Team</Timeline.Title>
            <Timeline.Body>
            As a website developer based on php laravel and API using Postman
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Point icon={HiCalendar} />
          <Timeline.Content>
            <Timeline.Time>June 2023</Timeline.Time>
            <Timeline.Title>PT Javan Cipta Solusi Fullstack Team</Timeline.Title>
            <Timeline.Body>
            As a website developer based on php laravel and API using Postman and frontend development using typescript.
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Point icon={HiCalendar} />
          <Timeline.Content>
            <Timeline.Time>August 2023</Timeline.Time>
            <Timeline.Title>PT Javan Cipta Solusi QA Team</Timeline.Title>
            <Timeline.Body>
            Conducting manual tests on the websites of the corruption eradication commission, XL-Axiata and komdigi.
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Point icon={HiCalendar} />
          <Timeline.Content>
            <Timeline.Time>January 2024</Timeline.Time>
            <Timeline.Title>Fullstack Website Programmer TEFA SMKN4 Payakumbuh</Timeline.Title>
            <Timeline.Body>
            As a website developer based on php laravel and API using Postman and frontend development using typescript.
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Point icon={HiCalendar} />
          <Timeline.Content>
            <Timeline.Time>March 2024</Timeline.Time>
            <Timeline.Title>Frontend Developer Freelance for Beaudent</Timeline.Title>
            <Timeline.Body>
            As a website developer based on php laravel and API using Postman and frontend development using typescript.
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Point icon={HiCalendar} />
          <Timeline.Content>
            <Timeline.Time>MAY 2024</Timeline.Time>
            <Timeline.Title>Quliaty Assurance, Programmer, and Analys for International SMK EXPO Sumatra Barat</Timeline.Title>
            <Timeline.Body>
            As a website developer based on php laravel and API using Postman and frontend development using typescript. and QA
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
        <Timeline.Item>
          <Timeline.Point icon={HiCalendar} />
          <Timeline.Content>
            <Timeline.Time>August 2024 - Now</Timeline.Time>
            <Timeline.Title>Students of Amikom University Yogyakarta</Timeline.Title>
            <Timeline.Body>
           Open to Freelance
            </Timeline.Body>
          </Timeline.Content>
        </Timeline.Item>
      </Timeline>
    </div>
  );
}

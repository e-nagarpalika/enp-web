/** @format */

import React from "react";
import {
  Header,
  SVGIMAGE,
  ActionButton,
  H1,
  P,
  HeaderMin,
  HeroSection,
  DivHead,
  Logo,
  A,
  Footer,
  FooterText,
} from "./styles";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import IssueStatus from "../../modules/dashboard/components/IssueStatusCard/IssueStatus";
import { Link } from "react-router-dom";

const LandingPageNew = () => {
  const dataByDate = [
    {
      date: "Jan 2021",
      total: 4000,
      progress: 2400,
      resolved: 1600,
    },
    {
      date: "Feb 2021",
      total: 3000,
      progress: 1398,
      resolved: 1602,
    },
    {
      date: "Mar 2021",
      total: 2000,
      progress: 1800,
      resolved: 200,
    },
    {
      date: "Apr 2021",
      total: 2780,
      progress: 1908,
      resolved: 872,
    },
    {
      date: "May 2021",
      total: 1890,
      progress: 400,
      resolved: 1490,
    },
    {
      date: "June 2021",
      total: 2390,
      progress: 1800,
      resolved: 590,
    },
    {
      date: "Jul 2021",
      total: 3490,
      progress: 300,
      resolved: 3190,
    },
  ];
  return (
    <DivHead className="container-fluid">
      <div className="row">
        <div className="col-4">
          <Logo src="https://firebasestorage.googleapis.com/v0/b/e-nagar-palika.appspot.com/o/images%2FEnagrPalika1-PixTeller%20(3).png?alt=media&token=a935a8ae-260e-41a4-bb0b-e674976d2e2e" />
        </div>
        <div className="col-4" />
        <div className="col-4">
          <A
            onClick={() => {
              window.scrollTo({
                behavior: "smooth",
                top: window.innerHeight,
              });
            }}
          >
            Issue Tracker
          </A>
        </div>
      </div>
      <HeroSection className="container-fluid">
        {/*<Logo src="https://firebasestorage.googleapis.com/v0/b/e-nagar-palika.appspot.com/o/images%2FEnagrPalika1-PixTeller%20(3).png?alt=media&token=a935a8ae-260e-41a4-bb0b-e674976d2e2e"/>*/}
        {/*    <A onClick={() => {*/}
        {/*        window.scrollTo({*/}
        {/*            behavior: "smooth",*/}
        {/*            top: window.innerHeight,*/}
        {/*        });*/}
        {/*    }}>Issue Tracker</A>*/}
        <Header className="container">
          <HeaderMin className="row">
            <div className="col-md-6">
              <SVGIMAGE
                id="e206c98e-a062-454f-98a1-36dd7d468c34"
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                width="897.0589"
                height="606.13"
                viewBox="0 0 897.0589 606.13"
              >
                <path
                  d="M1039.79947,146.935h-607a8.72734,8.72734,0,0,0-8.71972,8.72v219.41h146.8999a15.01828,15.01828,0,0,1,15,15v185.63h453.81982a8.71245,8.71245,0,0,0,6.63037-3.06,2.0439,2.0439,0,0,0,.18994-.24,8.16642,8.16642,0,0,0,1.25-2.11005,8.507,8.507,0,0,0,.65967-3.31V155.655A8.72954,8.72954,0,0,0,1039.79947,146.935Z"
                  transform="translate(-151.47055 -146.935)"
                  fill="#f2f2f2"
                />
                <rect
                  x="273.84973"
                  y="34.95117"
                  width="621.95676"
                  height="2.49281"
                  fill="#ccc"
                />
                <circle cx="295.03863" cy="18.69806" r="7.47844" fill="#ccc" />
                <circle cx="316.53914" cy="18.69806" r="7.47844" fill="#ccc" />
                <circle cx="338.03965" cy="18.69806" r="7.47844" fill="#ccc" />
                <path
                  d="M892.29947,236.315h-312a13,13,0,0,0,0,26h312a13,13,0,0,0,0-26Zm0,24h-312a11,11,0,0,1,0-22h312a11,11,0,0,1,0,22Z"
                  transform="translate(-151.47055 -146.935)"
                  fill="#ccc"
                />
                <path
                  d="M987.76969,339.885h-312a13,13,0,0,0,0,26h312a13,13,0,0,0,0-26Z"
                  transform="translate(-151.47055 -146.935)"
                  fill="#fff"
                />
                <path
                  d="M987.76969,387.885h-312a13,13,0,0,0,0,26h312a13,13,0,0,0,0-26Z"
                  transform="translate(-151.47055 -146.935)"
                  fill="#fff"
                />
                <path
                  d="M987.76969,435.885h-312a13,13,0,0,0,0,26h312a13,13,0,0,0,0-26Z"
                  transform="translate(-151.47055 -146.935)"
                  fill="#fff"
                />
                <path
                  d="M625.34976,318.385h-142.02a11.50392,11.50392,0,0,0-11.49024,11.49v45.19h2v-45.19a9.50457,9.50457,0,0,1,9.49024-9.49h142.02a9.49788,9.49788,0,0,1,9.48975,9.49v142.02a9.49788,9.49788,0,0,1-9.48975,9.49H585.97965v2h39.37011a11.49727,11.49727,0,0,0,11.48975-11.49V329.875A11.49723,11.49723,0,0,0,625.34976,318.385Z"
                  transform="translate(-151.47055 -146.935)"
                  fill="#ccc"
                />
                <path
                  d="M257.0941,464.50258c-.50236.02033-21.91024-1.464-22.45679-1.48242l1.9231-19.19727,12.19336-.36718,23.3-43.15528c-3.23157-6.162.745-14.33826,7.60026-15.59852,13.81387-3.13979,18.55923,18.59332,4.70321,21.48524l-19.27222,52.7334A8.54966,8.54966,0,0,1,257.0941,464.50258Z"
                  transform="translate(-151.47055 -146.935)"
                  fill="#ffb8b8"
                />
                <path
                  d="M200.65489,474.39028c-20.3716.05-22.15993-30.73767-1.74315-32.90723,53.9884-3.26208,47.15636-16.82179,51.25631,23.17516a4.5045,4.5045,0,0,1-3.9946,4.95375l-43.75025,4.68359A16.63489,16.63489,0,0,1,200.65489,474.39028Z"
                  transform="translate(-151.47055 -146.935)"
                  fill="#6c63ff"
                />
                <path
                  d="M196.00552,377.0499c28.06453,15.96985,5.02494,58.10625-23.56276,43.10183C144.37912,404.18242,167.41871,362.046,196.00552,377.0499Z"
                  transform="translate(-151.47055 -146.935)"
                  fill="#ffb8b8"
                />
                <polygon
                  points="70.049 592.823 82.308 592.822 88.141 545.534 70.047 545.535 70.049 592.823"
                  fill="#ffb8b8"
                />
                <path
                  d="M218.89263,751.14218l38.53073-.00176c-.14718-19.88089-25.9182-14.15221-38.53141-14.88512Z"
                  transform="translate(-151.47055 -146.935)"
                  fill="#2f2e41"
                />
                <polygon
                  points="17.049 592.823 29.308 592.822 35.141 545.534 17.047 545.535 17.049 592.823"
                  fill="#ffb8b8"
                />
                <path
                  d="M165.89263,751.14218l38.53073-.00176c-.14718-19.88089-25.9182-14.15221-38.53141-14.88512Z"
                  transform="translate(-151.47055 -146.935)"
                  fill="#2f2e41"
                />
                <path
                  d="M182.4525,723.24282c-2.963-.81313-19.06382,1.646-20.964-1.582-6.636-66.51114-5.16091-131.60265,9.56972-167.37011l50.6482-3.10059c11.32584,20.6755,37.36026,157.87463,21.6559,166.21643l-20.19448.7201a5.01824,5.01824,0,0,1-5.0393-3.82618l-16.89478-96.11718c-4.20722-5.881-12.4773,101.22422-13.843,100.82371A4.97808,4.97808,0,0,1,182.4525,723.24282Z"
                  transform="translate(-151.47055 -146.935)"
                  fill="#2f2e41"
                />
                <path
                  d="M169.44957,562.69789c-25.57159-26.75341-9.26039-98.47865-10.08593-96.95311.07006-1.757,5.862-28.816,20.84448-33.25691,11.8867-3.92293,25.04321,7.81175,26.66606,19.68051l17.80635,105.15331a3.69838,3.69838,0,0,1-1.01367,3.18C224.54239,563.22778,170.70142,562.15165,169.44957,562.69789Z"
                  transform="translate(-151.47055 -146.935)"
                  fill="#6c63ff"
                />
                <path
                  d="M177.74856,395.86826c2.24569-1.41969,3.35253-3.8545,4.65967-6.07256,6.88544-3.92419,14.80077,5.56884,22.08344,2.026,20.59268-19.76915-.57431-25.60141-19.54049-26.64389-4.48038-.55218-8.29173,1.03713-11.6791,3.66209-37.88569-2.89341-19.71625,47.48278,4.19421,54.13638,4.22161,1.84908,7.38845-1.8935,3.66551-5.29548C175.98091,412.28066,169.60018,401.41075,177.74856,395.86826Z"
                  transform="translate(-151.47055 -146.935)"
                  fill="#2f2e41"
                />
                <path
                  d="M570.97965,373.065h-274a17.02411,17.02411,0,0,0-17,17v346a17.0241,17.0241,0,0,0,17,17h274a17.02411,17.02411,0,0,0,17-17v-346A17.02412,17.02412,0,0,0,570.97965,373.065Zm15,363a15.01828,15.01828,0,0,1-15,15h-274a15.01828,15.01828,0,0,1-15-15v-346a15.01828,15.01828,0,0,1,15-15h274a15.01828,15.01828,0,0,1,15,15Z"
                  transform="translate(-151.47055 -146.935)"
                  fill="#3f3d56"
                />
                <path
                  d="M219.77721,518.66274c-9.0306,1.02306-12.99534-19.99215-16.448-25.34668l17.98486-6.9834,5.85205,10.70312,49.02808,1.21875a10.67752,10.67752,0,0,1,.95239-1.12011h0c9.72314-10.18066,25.55743,5.07331,15.87108,15.2321a11.03583,11.03583,0,0,1-16.49657-.47722C275.31032,511.97567,220.96126,518.69451,219.77721,518.66274Z"
                  transform="translate(-151.47055 -146.935)"
                  fill="#ffb8b8"
                />
                <path
                  d="M206.45836,508.63149c-3.0069,2.89718-26.09073-37.77326-27.77718-38.92289-11.66432-18.12981,15.79569-36.02983,27.661-17.99809l23.99705,36.879a4.50461,4.50461,0,0,1-1.31738,6.22558C227.92818,495.32714,207.23017,509.73279,206.45836,508.63149Z"
                  transform="translate(-151.47055 -146.935)"
                  fill="#6c63ff"
                />
                <path
                  d="M516.98006,612.565h-166c-16.957-.08167-17.0275-25.9115.00084-26l165.99916,0C533.92512,586.64438,534.01695,612.47622,516.98006,612.565Z"
                  transform="translate(-151.47055 -146.935)"
                  fill="#ccc"
                />
                <path
                  d="M516.98006,660.565h-166c-16.957-.08167-17.0275-25.9115.00084-26l165.99916,0C533.92512,634.64438,534.01695,660.47622,516.98006,660.565Z"
                  transform="translate(-151.47055 -146.935)"
                  fill="#ccc"
                />
                <path
                  d="M516.98006,708.565h-166c-16.957-.08167-17.0275-25.9115.00084-26l165.99916,0C533.92512,682.64438,534.01695,708.47622,516.98006,708.565Z"
                  transform="translate(-151.47055 -146.935)"
                  fill="#ccc"
                />
                <path
                  d="M578.97965,405.065a26,26,0,1,1,26-26A26.02947,26.02947,0,0,1,578.97965,405.065Z"
                  transform="translate(-151.47055 -146.935)"
                  fill="#6c63ff"
                />
                <path
                  d="M590.97965,378.065h-11v-12.5a1,1,0,0,0-2,0v12.5h-11a1,1,0,0,0,0,2h11v12.5a1,1,0,1,0,2,0v-12.5h11a1,1,0,0,0,0-2Z"
                  transform="translate(-151.47055 -146.935)"
                  fill="#fff"
                />
                <path
                  d="M513.97965,555.36481h-160a16.51867,16.51867,0,0,1-16.5-16.5V449.2652a16.51866,16.51866,0,0,1,16.5-16.5h160a16.51867,16.51867,0,0,1,16.5,16.5v89.59961A16.51868,16.51868,0,0,1,513.97965,555.36481Z"
                  transform="translate(-151.47055 -146.935)"
                  fill="#6c63ff"
                />
              </SVGIMAGE>
            </div>
            <div className="col-md-6">
              <H1>Your one stop solution to grievance management</H1>

              <P>
                e-Nagarpalika re-imagines the way we file our grievances. You
                have a voice, and it needs to be heard. File your grievances and
                get a hasslefree resolution.
              </P>
              <Link to="/login">
                <ActionButton type="button">Login/Register</ActionButton>
              </Link>
            </div>
          </HeaderMin>
        </Header>
      </HeroSection>
      <div className="container">
        <h1 className="text-center text-dark">Progress Tracker</h1>
        <IssueStatus />
        <hr />
        <H1 className="text-center ">Monthly Issue Distribution</H1>
        <hr />
        <div className="card text-center shadow" style={{ height: "600px" }}>
          <div className="card-body text-center">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                width={500}
                height={300}
                data={dataByDate}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="total"
                  stroke="#607d8b"
                  activeDot={{ r: 8 }}
                />
                <Line type="monotone" dataKey="progress" stroke="#ff9800" />
                <Line type="monotone" dataKey="resolved" stroke="#4caf50" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      <hr />
      <div className="card-footer bg-secondary">
        <Footer id="media">
          <FooterText>&copy; eNagarpalika 2021</FooterText>
        </Footer>
      </div>
    </DivHead>
  );
};
export default LandingPageNew;

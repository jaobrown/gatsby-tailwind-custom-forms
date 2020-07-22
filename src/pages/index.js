import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../styles/main.scss"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1 className={`font-serif font-bold text-3xl mb-2`}>Hi people</h1>
    <div>
      <label className="block">
        <span className="text-gray-700">Name</span>
        <input
          className="block w-full mt-1 form-input"
          placeholder="Jane Doe"
        />
      </label>
      <div className="mt-4">
        <span className="text-gray-700">Account Type</span>
        <div className="mt-2">
          <label className="inline-flex items-center">
            <input
              type="radio"
              className="form-radio"
              name="accountType"
              defaultValue="personal"
            />
            <span className="ml-2">Personal</span>
          </label>
          <label className="inline-flex items-center ml-6">
            <input
              type="radio"
              className="form-radio"
              name="accountType"
              defaultValue="busines"
            />
            <span className="ml-2">Business</span>
          </label>
        </div>
      </div>
      <label className="block mt-4">
        <span className="text-gray-700">Requested Limit</span>
        <select className="block w-full mt-1 form-select">
          <option>$1,000</option>
          <option>$5,000</option>
          <option>$10,000</option>
          <option>$25,000</option>
        </select>
      </label>
      <div className="flex mt-6">
        <label className="flex items-center">
          <input type="checkbox" className="form-checkbox" />
          <span className="ml-2">
            I agree to the <span className="underline">privacy policy</span>
          </span>
        </label>
      </div>
    </div>
    <Link to="/page-2/" className={`mb-4`}>
      Go to page 2
    </Link>{" "}
  </Layout>
)

export default IndexPage

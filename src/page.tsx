import React, {ReactNode} from "react";
import Head from "next/head";
import Script from "next/script";
import {Breadcrumb, lookup, Sitemap} from "./sitemap";
import { dirname } from "path";

export function SmallMenu() {
    return (
        <div className="contain-to-grid show-for-small">
            <nav className="top-bar" data-options="">
                <ul className="title-area">
                    <li className="name">
                        <h1>
                            <a className="active" href="/" rel="home" title="bikejc Home">bikejc</a>
                        </h1>
                    </li>
                    <li className="toggle-topbar menu-icon">
                        <a href="#">
                            <span>Menu</span>
                        </a>
                    </li>
                </ul>
                <section className="top-bar-section">
                    <ul className="main-nav left" id="main-menu">
                        <li className="first expanded has-dropdown about not-click">
                            <a className="about" href="/about">About</a>
                            <ul className="dropdown">
                                <li className="title back js-generated">
                                    <h5>
                                        <a href="#">Back</a>
                                    </h5>
                                </li>
                                <li className="first expanded show-for-small">
                                    <a className="about" href="/about">About</a>
                                </li>
                                <li className="first leaf history">
                                    <a className="history" href="/about/history">History</a>
                                </li>
                                <li className="leaf">
                                    <a href="/about/founding">Founding</a>
                                </li>
                                <li className="leaf about board-members">
                                    <a className="about board-members" href="/about/board-members">Board Members</a>
                                </li>
                                <li className="last leaf non-profit">
                                    <a className="non-profit" href="/about/non-profit-information">Non-Profit Information</a>
                                </li>
                            </ul>
                        </li>
                        <li className="expanded has-dropdown projects not-click">
                            <a className="projects" href="/projects">Projects</a>
                            <ul className="dropdown">
                                <li className="title back js-generated">
                                    <h5>
                                        <a href="#">Back</a>
                                    </h5>
                                </li>
                                <li className="expanded show-for-small">
                                    <a className="projects" href="/projects">Projects</a>
                                </li>
                                <li className="first leaf bike-lanes projects">
                                    <a className="bike-lanes projects" href="/projects/bike-lanes">Bike Lanes</a>
                                </li>
                                <li className="leaf projects bike-share">
                                    <a className="projects bike-share" href="/projects/bike-share">Bike Share</a>
                                </li>
                                <li className="leaf projects bike-racks">
                                    <a className="projects bike-racks" href="/projects/bike-racks">Bike Racks</a>
                                </li>
                                <li className="leaf projects revised-zoning">
                                    <a className="projects revised-zoning" href="/projects/revised-zoning">Revised Zoning</a>
                                </li>
                                <li className="last leaf">
                                    <a href="/projects/gsv">Grand Street Vision</a>
                                </li>
                            </ul>
                        </li>
                        <li className="expanded has-dropdown events not-click">
                            <a className="events" href="/events">Events</a>
                            <ul className="dropdown">
                                <li className="title back js-generated">
                                    <h5>
                                        <a href="#">Back</a>
                                    </h5>
                                </li>
                                <li className="expanded show-for-small">
                                    <a className="events" href="/events">Events</a>
                                </li>
                                <li className="first expanded has-dropdown ward-tour not-click"
                                    title="Jersey City Ward Tour">
                                    <a className="ward-tour" href="/events/jersey-city-ward-tour"
                                       title="Jersey City Ward Tour">Jersey City Ward Tour</a>
                                    <ul className="dropdown">
                                        <li className="title back js-generated">
                                            <h5>
                                                <a href="#">Back</a>
                                            </h5>
                                        </li>
                                        <li className="first expanded show-for-small">
                                            <a className="ward-tour" href="/events/jersey-city-ward-tour"
                                               title="Jersey City Ward Tour">Jersey City Ward Tour</a>
                                        </li>
                                        <li className="first expanded has-dropdown ward-tour not-click"
                                            title="Ward Tour Waiver">
                                            <a className="ward-tour" href="/events/jersey-city-ward-tour/ward-tour-registration"
                                               title="Ward Tour Waiver">Ward Tour Registration</a>
                                            <ul className="dropdown">
                                                <li className="title back js-generated">
                                                    <h5>
                                                        <a href="#">Back</a>
                                                    </h5>
                                                </li>
                                                <li className="first expanded show-for-small">
                                                    <a className="ward-tour" href="/events/jersey-city-ward-tour/ward-tour-registration"
                                                       title="Ward Tour Waiver">Ward Tour Registration</a>
                                                </li>
                                                <li className="first leaf">
                                                    <a href="/events/jersey-city-ward-tour/ward-tour-registration/15-mile-route-registration-form">15
                                                        Mile Route Registration Form</a>
                                                </li>
                                                <li className="last leaf">
                                                    <a href="/events/jersey-city-ward-tour/ward-tour-registration/register-25-mile-ride">25
                                                        Mile Route Registration Form</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="leaf ward-tour">
                                            <a className="ward-tour" href="/ward-tour/volunteer">Volunteer for
                                                the Ward Tour</a>
                                        </li>
                                        <li className="leaf">
                                            <a href="/events/jersey-city-ward-tour/ward-tour-route">Ward Tour Route</a>
                                        </li>
                                        <li className="leaf">
                                            <a href="/events/jersey-city-ward-tour/finish-line-festival">Finish Line Festival</a>
                                        </li>
                                        <li className="leaf">
                                            <a href="/events/jersey-city-ward-tour/ward-tour-sponsors">Ward Tour Sponsors</a>
                                        </li>
                                        <li className="last leaf">
                                            <a href="/events/jersey-city-ward-tour/ward-tour-faqs">Ward Tour FAQs</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="expanded has-dropdown not-click">
                                    <a href="/events/bike-jcast">Bike JCast</a>
                                    <ul className="dropdown">
                                        <li className="title back js-generated">
                                            <h5>
                                                <a href="#">Back</a>
                                            </h5>
                                        </li>
                                        <li className="expanded show-for-small">
                                            <a href="/events/bike-jcast">Bike JCast</a>
                                        </li>
                                        <li className="first last leaf">
                                            <a href="/events/bike-jcast/bike-jcast-2017">Bike JCast 2017</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="leaf">
                                    <a href="/events/neighborhood-cleanup">Neighborhood Cleanup</a>
                                </li>
                                <li className="last leaf calendar">
                                    <a className="calendar" href="/events/calendar">Calendar</a>
                                </li>
                            </ul>
                        </li>
                        <li className="expanded has-dropdown news not-click">
                            <a className="news" href="/news">News</a>
                            <ul className="dropdown">
                                <li className="title back js-generated">
                                    <h5>
                                        <a href="#">Back</a>
                                    </h5>
                                </li>
                                <li className="expanded show-for-small">
                                    <a className="news" href="/news">News</a>
                                </li>
                                <li className="first expanded has-dropdown articles news not-click">
                                    <a className="articles news" href="/news/articles">Articles and Press Releases</a>
                                    <ul className="dropdown">
                                        <li className="title back js-generated">
                                            <h5>
                                                <a href="#">Back</a>
                                            </h5>
                                        </li>
                                        <li className="first expanded show-for-small">
                                            <a className="articles news" href="/news/articles">Articles and Press Releases</a>
                                        </li>
                                        <li className="first leaf">
                                            <a href="/news/articles/2016-ward-tour-press-release">2016 Ward Tour Press Release</a>
                                        </li>
                                        <li className="leaf">
                                            <a href="/news/articles-and-press-releases/grand-street-vision-protected-bike-lane-petition">Grand
                                                Street Vision - Protected Bike Lane Petition</a>
                                        </li>
                                        <li className="leaf">
                                            <a href="/news/articles/job-posting-contract-grant-writer">Job Posting: Contract Grant
                                                Writer</a>
                                        </li>
                                        <li className="leaf">
                                            <a href="/news/articles/design-bike-jcs-7th-annual-ward-tour-poster">Design Bike JC's 7th
                                                Annual Ward Tour Poster</a>
                                        </li>
                                        <li className="leaf">
                                            <a href="/news/articles/jersey-citys-first-permanent-bike-lane">Jersey City's First
                                                Permanent Bike Lane</a>
                                        </li>
                                        <li className="leaf">
                                            <a href="/news/articles/installation-jersey-citys-new-bike-racks-underway">New Bike Rack
                                                Installation Underway</a>
                                        </li>
                                        <li className="leaf">
                                            <a href="/news/articles/bike-jc-awarded-jersey-city-green-award">Bike JC Awarded 'Jersey
                                                City Green Award'</a>
                                        </li>
                                        <li className="last leaf">
                                            <a href="/news/articles/footbridge-liberty-state-park-arrives">Footbridge to Liberty State
                                                Park Arrives</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="last leaf media-coverage news">
                                    <a className="media-coverage news" href="/news/media-coverage">Media Coverage</a>
                                </li>
                            </ul>
                        </li>
                        <li className="expanded has-dropdown support not-click">
                            <a className="support" href="/support">Support</a>
                            <ul className="dropdown">
                                <li className="title back js-generated">
                                    <h5>
                                        <a href="#">Back</a>
                                    </h5>
                                </li>
                                <li className="expanded show-for-small">
                                    <a className="support" href="/support">Support</a>
                                </li>
                                <li className="first leaf sponsors">
                                    <a className="sponsors" href="/support/sponsors">Sponsors</a>
                                </li>
                                <li className="leaf">
                                    <a href="/support/volunteer">Volunteer</a>
                                </li>
                                <li className="leaf donate">
                                    <a className="donate" href="/support/donate">Donate</a>
                                </li>
                                <li className="last leaf merchandise">
                                    <a className="merchandise" href="/support/cool-swag-cool-bikers">Cool Swag for Cool Bikers!</a>
                                </li>
                            </ul>
                        </li>
                        <li className="expanded has-dropdown resources not-click">
                            <a className="resources" href="/resources">Resources</a>
                            <ul className="dropdown">
                                <li className="title back js-generated">
                                    <h5>
                                        <a href="#">Back</a>
                                    </h5>
                                </li>
                                <li className="expanded show-for-small">
                                    <a className="resources" href="/resources">Resources</a>
                                </li>
                                <li className="first leaf">
                                    <a href="/citi-bike-usage-jersey-city-2018">Citi Bike Usage 2018</a>
                                </li>
                                <li className="leaf road-rules">
                                    <a className="road-rules" href="/resources/rules-road">Rules of the Road</a>
                                </li>
                                <li className="leaf bike-maps">
                                    <a className="bike-maps" href="/resources/bike-maps">Bike Maps</a>
                                </li>
                                <li className="leaf">
                                    <a href="/resources/national-bike-registry">National Bike Registry</a>
                                </li>
                                <li className="leaf">
                                    <a href="/resources/speed-hump-requests">Speed Hump Requests</a>
                                </li>
                                <li className="leaf">
                                    <a href="/resources/bike-racks-businesses">Bike Racks for Businesses</a>
                                </li>
                                <li className="last leaf useful-links">
                                    <a className="useful-links" href="/resources/useful-links">Useful Links</a>
                                </li>
                            </ul>
                        </li>
                        <li className="last leaf contact">
                            <a className="contact" href="/contact-us">Contact</a>
                        </li>
                    </ul>
                </section>
            </nav>
        </div>
    )
}

export function BigMenu() {
    return (
        <section className="row main-menu-wrapper hide-for-small">
            <div className="logo-container">
                <a className="active" href="/" rel="home" title="bikejc Home">
                    <img alt="bikejc logo" className="logo" src="/files/logo.png" title="bikejc Home"
                         typeof="foaf:Image"></img>
                </a>
                <div className="element-invisible" id="site-name">
                    <strong>
                        <a href="/" rel="home" title="Home">
                            <span>bikejc</span>
                        </a>
                    </strong>
                </div>
            </div>
            <nav className="navigation" id="main-menu" role="navigation">
                <h2 className="element-invisible">Main menu</h2>
                <ul className="links inline-list clearfix" id="main-menu-links">
                    <li className="menu-398 first">
                        <a className="about" href="/about">About</a>
                    </li>
                    <li className="menu-1045">
                        <a className="projects" href="/projects">Projects</a>
                    </li>
                    <li className="menu-1047">
                        <a className="events" href="/events">Events</a>
                    </li>
                    <li className="menu-1048">
                        <a className="news" href="/news">News</a>
                    </li>
                    <li className="menu-1049">
                        <a className="support" href="/support">Support</a>
                    </li>
                    <li className="menu-1050">
                        <a className="resources" href="/resources">Resources</a>
                    </li>
                    <li className="menu-3531 last">
                        <a className="contact" href="/contact-us">Contact</a>
                    </li>
                </ul>
            </nav>
        </section>
    )
}

export function Slider({ srcs }: { srcs: string[] }) {
    return (
        <section className="l-header-region row">
            <div className="large-12 columns home-splash-image">
                <section className="block block-nivo-slider block-nivo-slider-nivo-slider header">
                    <div className="slider-wrapper theme-light">
                        <div className="ribbon"></div>
                        <div className="nivoSlider" id="slider">{
                            srcs.map((src, idx) =>
                                <img
                                    id={`slide-${idx}`} key={`${idx}`} data-thumb={src} src={src}
                                    alt="" title="" typeof="foaf:Image" data-transition="" className="slide"
                                />
                            )
                        }</div>
                    </div>
                </section>
            </div>
        </section>
    )
}

export function Banner({ src }: { src: string }) {
    return (
        <section className="l-header-region row">
            <div className="large-12 columns">
                <section className="block block-views page-header-banner block-views-page-header-image-view-block header">
                    <div className="view view-page-header-image-view view-id-page_header_image_view view-display-id-block">
                        <div className="view-content">
                            <div className="views-row views-row-1 views-row-odd views-row-first views-row-last">
                                <div className="views-field views-field-field-page-header-image">
                                    <div className="field-content">
                                        <img alt="" height="200" src={src} typeof="foaf:Image" width="1000"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    )
}

export function Header({ banners }: { banners: string[] }) {
    return (
        <header className="l-header" role="banner">
            <SmallMenu />
            <BigMenu />
            {
                banners.length > 1
                    ? <Slider srcs={banners} />
                    : <Banner src={banners[0]} />
            }
        </header>
    )
}

type SectionMenu = {
    title: string
    activePath?: string
    breadcrumbs: Breadcrumb[]
}

export function SectionMenu({ title, activePath, breadcrumbs }: SectionMenu) {
    const numBreadcrumbs = breadcrumbs.length
    return (
        <>
            <h2 className="block-title">{title}</h2>
            <div className="menu-block-wrapper menu-block-1 menu-name-main-menu parent-mlid-0 menu-level-2">
                <ul className="menu">{
                    breadcrumbs.map(({ href, text }, idx) => {
                        let classes = []
                        let linkClasses = []
                        if (idx == 0) {
                            classes.push("first")
                        }
                        classes.push("leaf")
                        if (activePath && href == activePath) {
                            classes.push("active")
                            classes.push("active-trail")
                            linkClasses.push("active")
                            linkClasses.push("active-trail")
                        }
                        if (idx + 1 == numBreadcrumbs) {
                            classes.push("last")
                        }
                        return (
                            <li key={text} className={classes.join(" ")}>
                                <a href={href} className={linkClasses.join(" ")}>{text}</a>
                            </li>
                        )
                    })
                }</ul>
            </div>
        </>
    )
}

export function Aside({ sectionMenu }: { sectionMenu?: SectionMenu }) {
    return (
        <aside className="large-4 sidebar-second columns sidebar columns" role="complementary">
            <section className="block block-block social-media block-block-6 block-odd clearfix">
                <h2 className="block-title">Follow Us</h2>
                <div>
                    <a className="twitter" href="http://www.twitter.com/bikejc" target="_blank"></a>
                </div>
                <div>
                    <a className="facebook" href="https://www.facebook.com/bikeJC" target="_blank"></a>
                </div>
                <div>
                    <a className="instagram" href="http://www.instagram.com/bikejcgram" target="_blank"></a>
                </div>
            </section>
            <section className="block block-menu-block block-menu-block-1 block-even clearfix">{
                sectionMenu
                    ? <SectionMenu {...sectionMenu} />
                    : null
            }</section>
            <section className="block block-block block-block-13 block-even clearfix">
                <h2 className="block-title">Ward Tour 2022</h2>
                <p>
                    <a href="/events/jersey-city-ward-tour">
                        <strong>
                            PLEASE NOTE: Following 2 years of cancellations due to COVID-19, we are currently hoping to
                            bring back our Jersey City Ward Tour and other spring events for 2022, if public health and
                            logistics considerations allow it. We will let you know here and through all our other channels,
                            including social media and email to members. If held, the Ward Tour would be Sunday, June 5 (always
                            the first Sunday in June).
                        </strong>
                    </a>
                </p>
            </section>
            <section className="block block-block block-block-14 block-odd clearfix">
                <h2 className="block-title">Cool Swag!</h2>
                <p></p>
                <p>
                    <a href="/support/cool-swag-cool-bikers">
                        <img src="/files/Retro Banner.jpg"></img>
                    </a>
                    <br></br>
                </p>
                <div className="center">
                    <p>
                        <strong>Support BikeJC's important work through a tax deductible donation and receive cool
                            swag!</strong>
                    </p>
                </div>
            </section>
            <section className="block block-views block-views-recent-articles-block block-even clearfix">
                <h2 className="block-title">News</h2>
                <div
                    className="view view-recent-articles view-id-recent_articles view-display-id-block view-dom-id-acd3cb830a5b1917a9ac85220fb80447">
                    <div className="view-content">
                        <div className="item-list">
                            <ul>
                                <li className="views-row views-row-1 views-row-odd views-row-first views-row-last">
                                    <article about="/news/articles/citi-bike-jc-rebalancing"
                                             className="node node-article node-teaser" id="node-77"
                                             typeof="sioc:Item foaf:Document">
                                        <h2 className="node-title">
                                            <a href="/news/articles/citi-bike-jc-rebalancing">Citi Bike JC Rebalancing</a>
                                        </h2>
                                        <span className="rdf-meta element-hidden"
                                              property="dc:title"></span>
                                        <span className="rdf-meta element-hidden" datatype="xsd:integer"
                                              property="sioc:num_replies"></span>
                                        <div
                                            className="field field-name-body field-type-text-with-summary field-label-hidden field-wrapper body text-secondary">
                                            <p>Bike JC is very sorry </p>
                                        </div>
                                        <ul className="links inline">
                                            <li className="node-readmore first">
                                                <a href="/news/articles/citi-bike-jc-rebalancing" rel="tag"
                                                   title="Citi Bike JC Rebalancing">Read more<span className="element-invisible"> about Citi Bike JC Rebalancing</span>
                                                </a>
                                            </li>
                                            <li className="comment_forbidden last">
                              <span>
                                <a href="/user/login?destination=/news/articles/citi-bike-jc-rebalancing%23comment-form">Log in</a> to post comments</span>
                                            </li>
                                        </ul>
                                    </article>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section className="block block-block donate block-block-8 block-odd clearfix">
                <h4>
                    Donate to Bike JC</h4>
                <a className="button small radius"
                   href="http://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&amp;hosted_button_id=BMJXSWD8HGWXW">Make a
                    Paypal Donation</a>
            </section>
        </aside>
    )
}

export function Breadcrumbs({ breadcrumbs }: { breadcrumbs: Breadcrumb[] }) {
    return (
        breadcrumbs.length ? (
            <>
                <h2 className="element-invisible">You are here</h2>
                <ul className="breadcrumbs">{
                    breadcrumbs.map(
                        ( { href, text }, idx) => {
                            return (
                                <li key={href} className={idx + 1 == breadcrumbs.length ? "current" : ""}>
                                    <a href={href}>{text}</a>
                                </li>
                            )
                        }
                    )
                }</ul>
            </>
        ) : null
    )
}

export function Main({ breadcrumbs, sectionMenu, children }: {
    sectionMenu?: SectionMenu
    breadcrumbs?: Breadcrumb[]
    children: ReactNode
}) {
    return (
        <main className="row l-main" role="main">
            <div className="large-8 main columns">
                <a id="main-content"></a>
                <Breadcrumbs breadcrumbs={breadcrumbs || []} />
                <article about="/home" className="node node-home-page view-mode-full" id="node-45"
                         typeof="sioc:Item foaf:Document">
                    {children}
                </article>
            </div>
            <Aside sectionMenu={sectionMenu} />
        </main>
    )
}

export function Triptych() {
    return (
        <section className="l-triptych row">
            <div className="triptych-first large-4 columns">
                <section className="block block-block promo-box first-box block-block-2">
                    <h4>Subscribe to Our Mailing List + Monthly Newsletter</h4>
                    <div id="mc_embed_signup">
                        <form
                            action="https://bikejc.us1.list-manage.com/subscribe/post?u=29e08864eb550bdd5c90dd362&amp;id=9fce58455b"
                            className="validate" id="mc-embedded-subscribe-form" method="post" name="mc-embedded-subscribe-form"
                            target="_blank">
                            <input className="email" id="mce-EMAIL" name="EMAIL" placeholder="email address"
                                   type="email" />
                            <div style={{ position: "absolute", left: "-5000px" }}>
                                <input name="b_29e08864eb550bdd5c90dd362_9fce58455b" tabIndex={-1} type="text" />
                            </div>
                            <div className="clear">
                                <input className="button" id="mc-embedded-subscribe" name="subscribe" type="submit"
                                       value="Subscribe" />
                            </div>
                        </form>
                    </div>
                </section>
            </div>
            <div className="triptych-middle large-4 columns">
                <section className="block block-block promo-box second-box block-block-3">
                    <h4>Follow Bike JC on Twitter</h4>
                    <p>Making Jersey City bike-friendly since 2009</p>
                    <p>Tweeting bike community news since 2010</p>
                    <p><a href="https://twitter.com/bikejc" target="_blank">Tweet @bikejc!</a></p>
                </section>
            </div>
            <div className="triptych-last large-4 columns">
                <section className="block block-block promo-box third-box block-block-4">
                    <h4>We're Now on Instagram</h4>
                    <p>Check out our official instagram account</p>
                    <p>Show us your photos of biking in JC at #bikejc!</p>
                    <p><a href="https://instagram.com/bikejcgram/" target="_blank">@bikejcgram/</a></p>
                </section>
            </div>
        </section>
    )
}

export function Footer() {
    return (
        <footer className="l-footer panel row" role="contentinfo">
            <div className="footer large-12 columns">
                <section className="block block-menu-block block-menu-block-2">
                    <div className="menu-block-wrapper menu-block-2 menu-name-menu-footer-main parent-mlid-0 menu-level-1">
                        <ul className="menu">
                            <li className="first leaf menu-mlid-4368">
                                <a href="/about">about</a>
                            </li>
                            <li className="leaf menu-mlid-4369">
                                <a href="/projects">projects</a>
                            </li>
                            <li className="leaf menu-mlid-4370">
                                <a href="/events">events</a>
                            </li>
                            <li className="leaf menu-mlid-4371">
                                <a href="/news">news</a>
                            </li>
                            <li className="leaf menu-mlid-4372">
                                <a href="/support">support</a>
                            </li>
                            <li className="leaf menu-mlid-4373">
                                <a href="/resources">resources</a>
                            </li>
                            <li className="last leaf menu-mlid-4374">
                                <a href="/contact-us">contact</a>
                            </li>
                        </ul>
                    </div>
                </section>
                <section className="block block-block site-info block-block-7">
                    <div className="site-credits">
                        site by <a href="http://www.designsprawl.com/" target="blank">design sprawl</a>
                    </div>
                </section>
            </div>
            <div className="copyright large-12 columns">
                <span> © 2022 bikejc Information likes to be shared.</span>
            </div>
        </footer>
    )
}

export function Page({ path, banners, children, }: {
    path: string
    banners: string[]
    children: ReactNode
}) {
    const root = path == '/'
    const pieces = root ? [""] : path.split('/')

    const { breadcrumbs, name, sitemap } = lookup(path)

    let sectionMenu: SectionMenu | undefined = undefined
    if (!root) {
        const sectionPath = (typeof sitemap === 'string') ? dirname(path) : path
        const { name: sectionName, sitemap: sectionMap } = lookup(sectionPath)
        const sectionMenuItems: Breadcrumb[] = []
        Object.entries(sectionMap).forEach(([ piece, map ]) => {
            if (piece == "") return
            const href = `${sectionPath}/${piece}`
            const text = (typeof map === 'string') ? map : (map[""] as any as string)
            sectionMenuItems.push({ href, text, })
        })
        sectionMenu = {
            title: sectionName,
            activePath: path,
            breadcrumbs: sectionMenuItems
        }
    }

    // const name: string = (typeof sitemap === 'string') ? sitemap : (sitemap[""] as any as string)
    const title = `bikejc | ${name}`
    return (
        <>
            <meta content="width=device-width, maximum-scale = 1.0" name="viewport"></meta>
            <Script src="/files/drupal.js"></Script>
            <Script src="/files/foundation-init.js"></Script>
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8"/>
                <link rel="icon" href="/misc/favicon.ico" type="image/x-icon"/>
            </Head>
            <div className="skip-link">
                <a href="#main-content" className="element-invisible element-focusable">Skip to main content</a>
            </div>

            <div className="page home" role="document">
                <Header banners={banners} />
                <Main
                    sectionMenu={sectionMenu}
                    breadcrumbs={root ? [] : breadcrumbs}
                >{
                    children
                }</Main>
                <Triptych />
                <Footer />
            </div>
        </>
    )
}
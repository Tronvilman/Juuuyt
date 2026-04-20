import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ArrowRight, CheckCircle2, Zap, Users, TrendingUp, Globe, Video, CheckCheck, Briefcase, Shield, Download } from "lucide-react"
import Link from "next/link"

export default function EnglishHome() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 border-b border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <Link href="/en">
              <div className="flex items-center gap-3">
                <span className="text-2xl lg:text-3xl font-black text-foreground tracking-tight">Tekijäpuoti</span>
                <span className="text-xs lg:text-sm text-secondary font-semibold uppercase tracking-wider">Growth Management</span>
              </div>
            </Link>
            <div className="flex items-center gap-4">
              <Link href="/">
                <Button variant="ghost" size="sm">
                  FI
                </Button>
              </Link>
              <Link href="#contact">
                <Button className="gap-2">
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Brand Image - Top */}
      <section className="pt-20 lg:pt-24 bg-muted/30">
        <div className="w-full max-w-5xl mx-auto px-4">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/file_000000006070720a928f6e16a15267e7-rAzjmANlJUKlLJVQujV2vNeYIzKxaN.png"
            alt="Tekijäpuoti - Growth Management"
            className="w-full h-auto rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-secondary font-semibold uppercase tracking-wider mb-4">Free Audit</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-6 text-balance">
              Digital, efficient and controlled.
            </h1>
            <p className="text-xl text-muted-foreground mb-6 max-w-3xl mx-auto text-pretty leading-relaxed">
              We show you new markets, growing sales, new customers and ideas - so everything grows! Absolutely everything.
            </p>
            <p className="text-lg font-medium mb-8 text-secondary">
              Tekijäpuoti executes, produces and scales with you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="#contact">
                <Button size="lg" className="gap-2 w-full sm:w-auto bg-primary text-primary-foreground">
                  Start your growth here
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="#services">
                <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent">
                  Explore services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Showcase */}
      <section className="py-12 lg:py-16 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260104-WA0010-mmyJuAEyv5l0QvIeKemhmo7Wer1hrP.jpg"
                alt="Tekijäpuoti branded materials workspace"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260102-WA0005-sFE1VYiqKeSdDPySPMaq5ZY3kqS4T7.jpg"
                alt="Tarjouskone - automatic quote calculator"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260104-WA0013-SDuGGoib6pDYC7UDFUkxn4tHqOYH3M.jpg"
                alt="Tekijäpuoti business card"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Satisfaction Guarantee */}
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Shield className="w-16 h-16 mx-auto mb-6 text-secondary-foreground" />
            <h2 className="text-3xl lg:text-5xl font-black text-secondary-foreground mb-6 text-balance">
              Growth & Satisfaction Guarantee
            </h2>
            <p className="text-xl text-secondary-foreground/90 mb-8 leading-relaxed max-w-3xl mx-auto">
              If there is anything in our work, efficiency, or anything at all that you are not satisfied with - 
              <span className="font-bold"> we will refund your money.</span>
            </p>
            <p className="text-lg text-secondary-foreground/80 leading-relaxed max-w-2xl mx-auto">
              We strongly believe in our work and results. That is why we offer a full satisfaction guarantee for all our services.
            </p>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-5xl font-black text-foreground mb-4 text-balance">Why choose us?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
                From outsourcing to personalized solutions - we have a model for you.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              <Card className="border-2 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                    <CheckCheck className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Full control through collaboration</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    All content is approved by you before publication. You make the decisions, we execute. Collaboration
                    is seamless and transparent.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                    <Video className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Professional content</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    We produce high-quality content that tells your company's story the right way. From videos to images
                    - everything represents your brand in the best possible way.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 md:col-span-2 bg-accent/30 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8 lg:p-12 text-center">
                  <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mb-6 mx-auto">
                    <Briefcase className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">More time for core business</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                    When digital marketing is under control, you can focus on what you do best - serving your customers
                    and growing your business.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Growth Philosophy */}
      <section className="py-20 lg:py-32 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl lg:text-5xl font-black text-foreground mb-6 text-balance">
              Growth is the sum of its parts
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              We show you new markets, growing sales, new customers and ideas - so everything grows! 
              The whole is served in a growth model.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/business-transformation-from-physical-to-digital-il.jpg"
                alt="Transformation from physical business materials to digital"
                className="w-full h-auto"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/professional-nordic-office-meeting-room-with-green.jpg"
                alt="Professional meeting room with green plants"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <Globe className="w-10 h-10 text-primary mb-4" />
                <p className="text-muted-foreground leading-relaxed">
                  We manage your online and digital image on your behalf.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <TrendingUp className="w-10 h-10 text-primary mb-4" />
                <p className="text-muted-foreground leading-relaxed">
                  Personalized solutions and CRM enhancement and optimization for sales growth.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <CheckCircle2 className="w-10 h-10 text-primary mb-4" />
                <p className="text-muted-foreground leading-relaxed">
                  All websites we produce are SEO-optimized by default in the best way.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Free Guide Download CTA */}
      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Download className="w-16 h-16 mx-auto mb-6 text-secondary" />
            <h2 className="text-3xl lg:text-5xl font-black mb-6 text-balance">
              Awesome! Let&apos;s get started.
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8 leading-relaxed max-w-2xl mx-auto">
              Download the free guide and that is where it starts. You will get concrete tips on growth management and process optimization.
            </p>
            <Link href="#contact">
              <Button size="lg" className="gap-2 bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold text-lg px-8">
                Download free guide
                <Download className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-black text-foreground mb-4 text-balance">Turnkey services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              Choose the package that suits your needs. All our services include full support and transparent
              collaboration.
            </p>
          </div>

          {/* One-time Offer */}
          <div className="max-w-4xl mx-auto mb-16">
            <Card className="border-2 border-dashed border-primary/50 bg-primary/5 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8 lg:p-12">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                  <div>
                    <span className="inline-block bg-primary/10 text-primary text-sm font-medium px-3 py-1 rounded-full mb-4">
                      One-time payment - no commitment
                    </span>
                    <h3 className="text-2xl font-bold text-foreground mb-2">Landing page or monthly social content</h3>
                    <p className="text-muted-foreground leading-relaxed mb-4">
                      You can request just a website and social media channel creation with a one-time payment, without other services.
                      Instagram and Facebook including 4 posts per platform.
                    </p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold text-primary">€249</span>
                      <span className="text-muted-foreground">one-time</span>
                    </div>
                  </div>
                  <Link href="#contact">
                    <Button size="lg" className="gap-2 whitespace-nowrap">
                      Order now
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Package 1 */}
            <Card className="relative hover:shadow-xl transition-all duration-300 border-2">
              <CardContent className="p-8">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2">Professional</h3>
                  <p className="text-sm text-muted-foreground mb-4">Corporate communication & image</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-primary">€800</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">Corporate communication management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">Brand building</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">Content production</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">Social media management</span>
                  </li>
                </ul>
                <Link href="#contact">
                  <Button className="w-full bg-transparent" variant="outline">
                    Start here
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Package 2 - Dominator */}
            <Card className="relative hover:shadow-xl transition-all duration-300 border-4 border-secondary bg-background shadow-2xl scale-105">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-secondary text-secondary-foreground px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider">
                Most Popular
              </div>
              <CardContent className="p-8">
                <div className="mb-6">
                  <h3 className="text-2xl font-black text-foreground mb-2">Dominator</h3>
                  <p className="text-sm text-muted-foreground mb-4">Growth Management</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-black text-secondary">€1300</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">Lead cultivation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">Business strategy & growth management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">Offer automation & system integration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">Cost calculative market strategy</span>
                  </li>
                </ul>
                <Link href="#contact">
                  <Button className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold">Start here</Button>
                </Link>
              </CardContent>
            </Card>

            {/* Package 3 */}
            <Card className="relative hover:shadow-xl transition-all duration-300 border-2">
              <CardContent className="p-8">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-foreground mb-2">Full Digital</h3>
                  <p className="text-sm text-muted-foreground mb-4">Comprehensive solution</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-primary">€1799</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">All Dominator tier benefits</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">Full digital overhaul</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">Adaptation plan</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">Growth strategy implementation</span>
                  </li>
                </ul>
                <Link href="#contact">
                  <Button className="w-full bg-transparent" variant="outline">
                    Start here
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-20 lg:py-32 bg-muted/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4 text-balance">Our Services</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              Company growth happens with foresight and consideration. We provide solutions that support your goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Social media management</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We manage your social media channels professionally. We create strategies, content, and reporting that
                  grow your brand.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Content production and management</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We bring out your message and values, and the content serves the whole while creating new value for
                  it.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <Globe className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Digital presence optimization</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We sharpen your digital presence. We clarify your communication into a unified whole across all
                  channels.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="max-w-4xl mx-auto mt-16">
            <Card className="border-2 border-primary/30 bg-primary/5">
              <CardContent className="p-8 lg:p-10">
                <div className="text-center">
                  <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                    Need just a website or social media channel setup?
                  </h3>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed max-w-2xl mx-auto">
                    If you prefer, you can request just a website and social media channel creation as a one-time
                    payment, without ongoing monthly fees or additional services. We'll contact you to discuss the
                    project details.
                  </p>
                  <Link href="#contact">
                    <Button size="lg" variant="outline" className="gap-2 bg-transparent">
                      Request quote for one-time project
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-32 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
                Everything you need to know about our services and process
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-background rounded-lg border px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold text-foreground">How quickly will I see results?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Results are visible from the first days. Our projects are launched so that short-term goals are
                  achieved within 3-6 weeks and long-term goals at 3-6 month milestones. We work systematically to
                  ensure visible progress at every stage.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-background rounded-lg border px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold text-foreground">What is included in the service packages?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  All packages include professional content production, social media management, and full support.
                  Higher tiers add multi-channel strategies, digital presence optimization, CRM enhancements, and
                  comprehensive growth strategy implementation.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-background rounded-lg border px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold text-foreground">
                    Do I need to approve content before it's published?
                  </span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Yes, absolutely. All posts and publications are approved by you well in advance. We modify content
                  based on your feedback to ensure it perfectly represents your brand and message.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-background rounded-lg border px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold text-foreground">What makes your approach different?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  We focus on controlled, sustainable growth tailored to your company's specific needs and resources.
                  Whether you want rapid scaling or steady development, we adapt our strategy to match your goals and
                  capacity.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-background rounded-lg border px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold text-foreground">Are your websites SEO-optimized?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Yes, all websites we produce are SEO-optimized by default using best practices. This ensures your site
                  ranks well in search engines and reaches your target audience effectively.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="bg-background rounded-lg border px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold text-foreground">What is the free digital audit?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  We analyze your current digital presence, social media channels, website, and overall online strategy.
                  We then provide recommendations on how to improve and grow your digital footprint to better serve your
                  business goals.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7" className="bg-background rounded-lg border px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold text-foreground">Can I change my package later?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Absolutely. As your business grows and needs evolve, you can upgrade or adjust your service package.
                  We're flexible and work with you to ensure the services align with your current goals and resources.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 lg:py-32 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <TrendingUp className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-balance">Start collaboration today</h2>
            <p className="text-lg mb-8 opacity-90 leading-relaxed text-pretty">
              Request a free digital audit and find out how we can help your business grow in the digital world.
            </p>
            <div className="bg-background rounded-2xl p-8 lg:p-12 text-left">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="First Last"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                      Company *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="Your company name"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="email@company.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="+358 40 123 4567"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                    placeholder="Tell us briefly about your company and needs..."
                  ></textarea>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground gap-2"
                >
                  Request free audit
                  <ArrowRight className="w-4 h-4" />
                </Button>
                <p className="text-center text-sm text-muted-foreground mt-4">
                  The audit is completely free and non-binding
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Brand Image */}
      <section className="bg-muted/30 py-12">
        <div className="w-full max-w-5xl mx-auto px-4">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/file_000000006070720a928f6e16a15267e7-rAzjmANlJUKlLJVQujV2vNeYIzKxaN.png"
            alt="Tekijäpuoti - Growth Management"
            className="w-full h-auto rounded-xl shadow-lg"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted border-t border-border py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-black text-foreground mb-2">Tekijäpuoti</h3>
              <p className="text-sm text-secondary font-semibold uppercase tracking-wider mb-4">Growth Management</p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Controlled growth, process optimization, and results.
              </p>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Contact</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>Helsinki, Finland</p>
                <p>
                  <a 
                    href="https://maps.google.com/?q=Helsinki,Finland" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-foreground transition-colors underline"
                  >
                    View location on Google Maps
                  </a>
                </p>
                <p>Email: info@tekijapuoti.fi</p>
                <p>
                  <a href="tel:+358469055427" className="hover:text-foreground transition-colors">
                    Phone: +358 46 905 5427
                  </a>
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Follow us</h4>
              <div className="flex flex-col gap-2 text-sm">
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  LinkedIn
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Instagram
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Facebook
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Twitter / X
                </a>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-border">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
              <p>© {new Date().getFullYear()} Tekijäpuoti. All rights reserved.</p>
              <div className="flex gap-6">
                <a href="#" className="hover:text-foreground transition-colors">
                  Privacy
                </a>
                <a href="#" className="hover:text-foreground transition-colors">
                  Terms
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

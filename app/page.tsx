"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, CheckCircle2, Zap, Users, Globe, TrendingUp, Shield, Download, CheckCheck, Video, Briefcase } from "lucide-react"
import Link from "next/link"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { OnboardingModal } from "@/components/onboarding-modal"
import { useState } from "react"

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <div className="min-h-screen">
      <OnboardingModal open={isModalOpen} onOpenChange={setIsModalOpen} />

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 border-b border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <Link href="/">
              <div className="flex items-center gap-3">
                <span className="text-2xl lg:text-3xl font-black text-foreground tracking-tight">Tekijäpuoti</span>
                <span className="text-xs lg:text-sm text-secondary font-semibold uppercase tracking-wider">Kasvun hallinta</span>
              </div>
            </Link>
            <div className="flex items-center gap-4">
              <Link href="/en">
                <Button variant="ghost" size="sm">
                  EN
                </Button>
              </Link>
              <Button className="gap-2 bg-secondary text-secondary-foreground hover:bg-secondary/90" onClick={() => setIsModalOpen(true)}>
                Ilmainen auditointi
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Brand Image - Top */}
      <section className="pt-20 lg:pt-24">
        <div className="w-full">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/file_000000006070720a928f6e16a15267e7-rAzjmANlJUKlLJVQujV2vNeYIzKxaN.png"
            alt="Tekijäpuoti - Kasvun hallinta"
            className="w-full h-auto"
          />
        </div>
      </section>

      {/* Hero Section - Full Impact */}
      <section className="bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8 py-16 lg:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-secondary font-semibold uppercase tracking-wider mb-4">Ilmainen auditointi</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 text-balance leading-tight">
              Digitaalista, tehokasta ja hallittua.
            </h1>
            <p className="text-xl text-primary-foreground/80 mb-6 leading-relaxed max-w-3xl mx-auto">
              Näytämme uusia markkinoita, kehittyvä myynti, uudet asiakkaat ja ideat - niin kaikki kasvaa! Ihan kaikki.
            </p>
            <p className="text-lg font-medium mb-8 text-secondary">
              Tekijäpuoti toteuttaa, tuottaa ja skaalautuu mukanasi.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="gap-2 bg-secondary text-secondary-foreground hover:bg-secondary/90" onClick={() => setIsModalOpen(true)}>
                Aloita tästä
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Link href="#pricing">
                <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  Katso hinnat
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Showcase - 4 Images Grid */}
      <section className="py-16 lg:py-24 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-black text-foreground mb-4">Brändi joka näkyy</h2>
            <p className="text-lg text-muted-foreground">Ammattimaisuutta jokaisessa kosketuspisteessä</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 max-w-6xl mx-auto">
            <div className="rounded-xl overflow-hidden shadow-lg aspect-square bg-background">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260104-WA0010-mmyJuAEyv5l0QvIeKemhmo7Wer1hrP.jpg"
                alt="Tekijäpuoti brändimateriaalit"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg aspect-square bg-background">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20260104-WA0013-SDuGGoib6pDYC7UDFUkxn4tHqOYH3M.jpg"
                alt="Tekijäpuoti käyntikortti"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg aspect-square bg-background">
              <img
                src="/professional-nordic-office-workspace-in-helsinki-w.jpg"
                alt="Pohjoismainen toimisto"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg aspect-square bg-background">
              <img
                src="/professional-nordic-office-meeting-room-with-green.jpg"
                alt="Ammattimainen kokoustila"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
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
              Kasvu- ja tyytyväisyystakuu
            </h2>
            <p className="text-xl text-secondary-foreground/90 mb-8 leading-relaxed max-w-3xl mx-auto">
              Jos meidän työn jäljessä tehokkuudessa tai missään ylipäätään on jotain mihin et ole tyytyväinen - 
              <span className="font-bold"> palautamme rahanne.</span>
            </p>
            <p className="text-lg text-secondary-foreground/80 leading-relaxed max-w-2xl mx-auto">
              Uskomme vahvasti työhömme ja tuloksiin. Siksi tarjoamme täyden tyytyväisyystakuun kaikille palveluillemme.
            </p>
          </div>
        </div>
      </section>

      {/* Key Benefits - Expanded */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-5xl font-black text-foreground mb-4 text-balance">Miksi Tekijäpuoti?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
                Ulkoistamisesta personoituun ratkaisuun - meillä on malli teille.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              <Card className="border-2 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center mb-6">
                    <CheckCheck className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Täysi hallinta yhteistyön kautta</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Kaikki sisältö hyväksytetään sinulla ennen julkaisua. Sinä päätät, me toteutamme. 
                    Yhteistyö on saumatonta ja läpinäkyvää.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center mb-6">
                    <Video className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Ammattimainen sisältö</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Tuotamme laadukasta sisältöä, joka kertoo yrityksesi tarinan oikealla tavalla. 
                    Videoista kuviin - kaikki edustaa brändiäsi parhaalla mahdollisella tavalla.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 md:col-span-2 bg-primary text-primary-foreground hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8 lg:p-12 text-center">
                  <div className="w-16 h-16 rounded-lg bg-secondary/20 flex items-center justify-center mb-6 mx-auto">
                    <Briefcase className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold mb-4">Enemmän aikaa ydintoiminnalle</h3>
                  <p className="text-lg text-primary-foreground/80 leading-relaxed max-w-2xl mx-auto">
                    Kun markkinointi on hallinnassa, voit keskittyä siihen mitä osaat parhaiten - 
                    asiakkaiden palvelemiseen ja liiketoiminnan kasvattamiseen.
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
              Kasvu on tekijöiden summa
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              Näytämme uusia markkinoita, kehittyvä myynti, uudet asiakkaat ja ideat - niin kaikki kasvaa! 
              Kokonaisuus palvellaan kasvumalliin.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/professional-nordic-office-workspace-in-helsinki-w.jpg"
                alt="Pohjoismainen toimistotila"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/professional-nordic-office-meeting-room-with-green.jpg"
                alt="Ammattimainen kokoustila"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <Globe className="w-10 h-10 text-secondary mb-4" />
                <p className="text-muted-foreground leading-relaxed">
                  Hallitsemme verkko- ja digitaalista imagoasi puolestasi.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <TrendingUp className="w-10 h-10 text-secondary mb-4" />
                <p className="text-muted-foreground leading-relaxed">
                  Personoidut ratkaisut ja CRM-tehostus myyntikasvuun.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <CheckCircle2 className="w-10 h-10 text-secondary mb-4" />
                <p className="text-muted-foreground leading-relaxed">
                  Kaikki verkkosivut SEO-optimoituja parhaalla mahdollisella tavalla.
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
              Mahtavaa! Aloitetaan.
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8 leading-relaxed max-w-2xl mx-auto">
              Lataa ilmainen opas ja siitä se lähtee. Saat konkreettisia vinkkejä kasvun hallintaan ja prosessien tehostamiseen.
            </p>
            <Button size="lg" className="gap-2 bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold text-lg px-8" onClick={() => setIsModalOpen(true)}>
              Lataa ilmainen opas
              <Download className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>



      {/* Pricing Section */}
      <section id="pricing" className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-black mb-4">
              Hinnat
            </h2>
            <p className="text-lg text-primary-foreground/70 max-w-xl mx-auto">
              Avaimet käteen. Valitse tarpeisiisi sopiva paketti.
            </p>
          </div>

          {/* One-time Offer */}
          <div className="max-w-3xl mx-auto mb-12">
            <Card className="border-2 border-secondary bg-primary-foreground">
              <CardContent className="p-6 lg:p-8">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-1">Laskeutumissivu tai kuukauden some</h3>
                    <p className="text-sm text-muted-foreground">
                      Instagram ja Facebook, 4 postausta per alusta. Kertamaksu.
                    </p>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-3xl font-bold text-secondary">249€</span>
                    <Button className="gap-2 bg-secondary text-secondary-foreground hover:bg-secondary/90" onClick={() => setIsModalOpen(true)}>
                      Tilaa
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Package 1 */}
            <Card className="relative hover:shadow-xl transition-all duration-300 border-0 bg-primary-foreground">
              <CardContent className="p-8">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-primary mb-2">Professional</h3>
                  <p className="text-sm text-muted-foreground mb-4">Yritysviestintä ja imago</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-secondary">800€</span>
                    <span className="text-muted-foreground">/kk</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">Yritysviestinnän hallinta</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">Imagon rakentaminen</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">Sisällöntuotto</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">Sosiaalisen median managerointi</span>
                  </li>
                </ul>
                <Button className="w-full" variant="outline" onClick={() => setIsModalOpen(true)}>
                  Aloita tästä
                </Button>
              </CardContent>
            </Card>

            {/* Package 2 - Dominator */}
            <Card className="relative hover:shadow-xl transition-all duration-300 border-4 border-secondary bg-primary-foreground shadow-2xl scale-105">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-secondary text-secondary-foreground px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider">
                Suosituin
              </div>
              <CardContent className="p-8">
                <div className="mb-6">
                  <h3 className="text-2xl font-black text-primary mb-2">Dominator</h3>
                  <p className="text-sm text-muted-foreground mb-4">Kasvun hallinta</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-black text-secondary">1300€</span>
                    <span className="text-muted-foreground">/kk</span>
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
                <Button className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold" onClick={() => setIsModalOpen(true)}>
                  Aloita tästä
                </Button>
              </CardContent>
            </Card>

            {/* Package 3 */}
            <Card className="relative hover:shadow-xl transition-all duration-300 border-0 bg-primary-foreground">
              <CardContent className="p-8">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-primary mb-2">Full Digital</h3>
                  <p className="text-sm text-muted-foreground mb-4">Kokonaisvaltainen ratkaisu</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-secondary">1799€</span>
                    <span className="text-muted-foreground">/kk</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">Kaikki Dominator-tason edut</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">Full digital overhaul</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">Adaptation plan</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">Kasvustrategian toteutus</span>
                  </li>
                </ul>
                <Button className="w-full" variant="outline" onClick={() => setIsModalOpen(true)}>
                  Aloita tästä
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">Usein kysyttyä</h2>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-background rounded-lg border px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold text-foreground">Kuinka nopeasti näen tuloksia?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Tuloksia näkyy jo ensimmäisistä päivistä lähtien. Projektimme käynnistyvät niin, että lyhyen tähtäimen
                  tavoitteet saavutetaan 3-6 viikon aikana ja pitkän tähtäimen tavoitteet 3-6 kuukauden kohdilla.
                  Työskentelemme järjestelmällisesti varmistaaksemme näkyvää edistymistä jokaisessa vaiheessa.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-background rounded-lg border px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold text-foreground">Mitä palvelupaketit sisältävät?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Kaikki paketit sisältävät ammattimaisen sisällöntuoton, sosiaalisen median manageroinnin ja täyden
                  tuen. Korkeammat tasot sisältävät monikanavaisen strategian, digitaalisen presenssin optimoinnin,
                  CRM-tehostuksen ja kattavan kasvustrategian toteutuksen.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-background rounded-lg border px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold text-foreground">Pitääkö minun hyväksyä sisältö ennen julkaisua?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Kyllä, ehdottomasti. Kaikki postaukset ja julkaisut hyväksytetään sinulla hyvissä ajoin. Muokkaamme
                  sisältöä palautteesi perusteella, jotta se edustaa täydellisesti brändiäsi ja viestiäsi.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-background rounded-lg border px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold text-foreground">Mikä erottaa teidän lähestymistapanne?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Keskitymme hallittuun, kestävään kasvuun, joka on räätälöity yrityksesi erityistarpeisiin ja
                  resursseihin. Halusitpa nopeaa skaalautumista tai tasaista kehitystä, mukautamme strategiamme
                  vastaamaan tavoitteitasi ja kapasiteettiasi.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-background rounded-lg border px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold text-foreground">Ovatko verkkosivustonne SEO-optimoituja?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Kyllä, kaikki tuottamamme verkkosivustot ovat vakiona SEO-optimoituja parhaita käytäntöjä noudattaen.
                  Tämä varmistaa, että sivustosi sijoittuu hyvin hakukoneissa ja tavoittaa kohdeyleisösi tehokkaasti.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="bg-background rounded-lg border px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold text-foreground">Mitä ilmainen digitaalinen auditointi sisältää?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Analysoimme nykyisen digitaalisen läsnäolosi, sosiaalisen median kanavat, verkkosivuston ja yleisen
                  online-strategian. Annamme sitten suosituksia siitä, miten parantaa ja kasvattaa digitaalista
                  jalanjälkeäsi palvelemaan paremmin liiketoimintatavoitteitasi.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7" className="bg-background rounded-lg border px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold text-foreground">Voinko vaihtaa pakettia myöhemmin?</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  Ehdottomasti. Kun yrityksesi kasvaa ja tarpeet kehittyvät, voit päivittää tai mukauttaa
                  palvelupakettisi. Olemme joustavia ja työskentelemme kanssasi varmistaaksemme, että palvelut vastaavat
                  nykyisiä tavoitteitasi ja resurssejasi.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section id="services" className="py-20 lg:py-32 bg-muted/50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-black text-foreground mb-4 text-balance">Palvelumme</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              Yrityksen kasvu tapahtuu ennakoinnilla ja harkinnalla. Tarjoamme ratkaisut jotka tukevat tavoitteitasi.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center mb-6 group-hover:bg-secondary/30 transition-colors">
                  <Users className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Some-managerointi</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Hallitsemme sosiaalisen median kanavanne ammattimaisesti. Luomme strategiat, sisällöt ja raportoinnin joka kasvattaa brändiäsi.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center mb-6 group-hover:bg-secondary/30 transition-colors">
                  <Zap className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Sisällöntuotto ja hallinta</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Tuomme esiin sanomasi ja arvomaailmasi, ja sisältö palvelee kokonaisuutta luoden sille uutta arvoa.
                </p>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-lg bg-secondary/20 flex items-center justify-center mb-6 group-hover:bg-secondary/30 transition-colors">
                  <TrendingUp className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">Kasvun hallinta</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Prosessien tehostaminen, strateginen suunnittelu ja resurssien optimointi kasvun varmistamiseksi.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="max-w-4xl mx-auto mt-16">
            <Card className="border-2 border-secondary/30 bg-secondary/5">
              <CardContent className="p-8 lg:p-10">
                <div className="text-center">
                  <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                    Tarvitsetko vain verkkosivut tai some-kanavan pystytyksen?
                  </h3>
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed max-w-2xl mx-auto">
                    Halutessasi voit tilata pelkän verkkosivuston ja sosiaalisen median kanavien luonnin kertamaksulla, 
                    ilman kuukausimaksuja tai lisäpalveluita. Otamme yhteyttä ja keskustelemme projektin yksityiskohdista.
                  </p>
                  <Button size="lg" variant="outline" className="gap-2 bg-transparent" onClick={() => setIsModalOpen(true)}>
                    Pyydä tarjous kertaprojektille
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 lg:py-32 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <TrendingUp className="w-16 h-16 mx-auto mb-6 text-secondary" />
            <h2 className="text-3xl lg:text-5xl font-black mb-6 text-balance">Aloita yhteistyö tänään</h2>
            <p className="text-lg mb-8 text-primary-foreground/80 leading-relaxed text-pretty">
              Pyydä ilmainen auditointi ja selvitä miten voimme auttaa yrityksesi kasvua.
            </p>
            <div className="bg-background rounded-2xl p-8 lg:p-12 text-left">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Nimi *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="Etunimi Sukunimi"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                      Yritys *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="Yrityksesi nimi"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Sähköposti *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="email@yritys.fi"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Puhelin
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
                    Viesti
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                    placeholder="Kerro meille lyhyesti yrityksestäsi ja tarpeistasi..."
                  ></textarea>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground gap-2 font-bold"
                  onClick={() => setIsModalOpen(true)}
                >
                  Pyydä ilmainen auditointi
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Brand Image */}
      <section>
        <div className="w-full">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/file_000000006070720a928f6e16a15267e7-rAzjmANlJUKlLJVQujV2vNeYIzKxaN.png"
            alt="Tekijäpuoti - Kasvun hallinta"
            className="w-full h-auto"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12 lg:py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-12">
            {/* Company Info */}
            <div>
              <h3 className="text-2xl font-black mb-2">Tekijäpuoti</h3>
              <p className="text-sm text-secondary font-semibold uppercase tracking-wider mb-4">Kasvun hallinta</p>
              <p className="text-sm text-primary-foreground/70 leading-relaxed">
                Hallittua kasvua, prosessien tehostamista ja tuloksia.
              </p>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold mb-4">Yhteystiedot</h4>
              <div className="space-y-2 text-sm text-primary-foreground/70">
                <p>Helsinki, Finland</p>
                <p>
                  <a 
                    href="https://maps.google.com/?q=Helsinki,Finland" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-secondary transition-colors underline"
                  >
                    Google Maps
                  </a>
                </p>
                <p>info@tekijapuoti.fi</p>
                <p>
                  <a href="tel:+358469055427" className="hover:text-secondary transition-colors">
                    046 905 5427
                  </a>
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold mb-4">Seuraa</h4>
              <div className="flex gap-4 text-sm">
                <a href="#" className="text-primary-foreground/70 hover:text-secondary transition-colors">LinkedIn</a>
                <a href="#" className="text-primary-foreground/70 hover:text-secondary transition-colors">Instagram</a>
                <a href="#" className="text-primary-foreground/70 hover:text-secondary transition-colors">Facebook</a>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-primary-foreground/20">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/50">
              <p>© {new Date().getFullYear()} Tekijäpuoti. Kaikki oikeudet pidätetään.</p>
              <div className="flex gap-6">
                <a href="#" className="hover:text-secondary transition-colors">Tietosuoja</a>
                <a href="#" className="hover:text-secondary transition-colors">Käyttöehdot</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

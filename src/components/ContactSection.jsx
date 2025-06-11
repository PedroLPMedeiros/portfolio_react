import { Mail, Phone, MapPin, Linkedin, Instagram, Send } from "lucide-react";
import { cn } from '@/lib/utils'


export const ContactSection = () => {
    return <section 
            id="contact"
            className="py-24 px-4 relative bg-secondary-30"
            >
                <div className="container mx-auto max-w-5xl">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Entre em <span className="text-primary">Contato</span>
                    </h2>

                    <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                        Tem algum projeto em mente ou gostaria de colaborar? Fique à vontade para entrar em contato &#128521;
                        Estou sempre aberto à novas oportunidades. 
                    </p>

                    <div className="container mx-auto max-x-5xl">
                        <div className="space-y-8">
                            <h3 className="text-2xl font-semibold mb-6">Contato</h3>
                            <div className="space-y-6 justify-center">
                                <div className="flex items-start space-x-4">
                                    <div className="p-3 rounded-full bg-primary/10">
                                        <Mail className="h-6 w-6 text-primary"/>
                                    </div>
                                    <div>
                                        <h4 className="font-medium">Email</h4>
                                        <a href="mailto:pedrolucaspmedeiros@gmail.com"
                                           target="_blank"
                                           className="text-muted-foreground hover:text-primary transition-colors">
                                            pedrolucaspmedeiros@gmail.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="p-3 rounded-full bg-primary/10">
                                        <Phone className="h-6 w-6 text-primary"/>
                                    </div>
                                    <div>
                                        <h4 className="font-medium">WhatsApp</h4>
                                        <a href="https://wa.me/5584981051856"
                                           target="_blank"
                                           className="text-muted-foreground hover:text-primary transition-colors">
                                            Envie mensagem por aqui 
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="p-3 rounded-full bg-primary/10">
                                        <MapPin className="h-6 w-6 text-primary"/>
                                    </div>
                                    <div>
                                        <h4 className="font-medium">Localização</h4>
                                        <a href="https://maps.app.goo.gl/qRFgMYfbFq6M7cGE7"
                                           target="_blank"
                                           className="text-muted-foreground hover:text-primary transition-colors">
                                            Natal, RN, Brasil
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-8">
                                <h4 className="font-medium mb-4">Conecte-se comigo</h4>
                                <div className="flex space-x-4 justify-center">
                                    <a href="https://www.linkedin.com/in/pedrolpm/"
                                       target="_blank">
                                        <Linkedin/>
                                    </a>
                                    <a href="https://www.instagram.com/lux_lapis_/"
                                       target="_blank">
                                        <Instagram/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    </section>
};
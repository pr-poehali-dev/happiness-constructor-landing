import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <section className="container mx-auto px-4 py-16 md:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          <div className="space-y-8 animate-fade-in">
            <Badge variant="outline" className="text-sm tracking-wide">
              ПРАКТИЧЕСКИЙ ОНЛАЙН-КУРС ИРИНЫ ХАКАМАДА
            </Badge>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl leading-tight text-foreground">
              Научитесь управлять своим состоянием и жизненными решениями — в любой точке неопределённости
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
              О том, как сохранять ясность, устойчивость и внутренний баланс в реальной жизни, а не в теории
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={() => scrollToSection('price')}
              >
                Начать конструировать своё счастье
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-6"
                onClick={() => scrollToSection('for-whom')}
              >
                Посмотреть, как это работает
              </Button>
            </div>
          </div>
          
          <div className="relative animate-fade-in">
            <div className="aspect-[3/4] rounded-sm overflow-hidden">
              <img 
                src="https://cdn.poehali.dev/projects/d4613738-f67f-488d-8d6d-123764ed368a/files/26003228-8f5b-437c-9b98-a2a8647f4c0c.jpg"
                alt="Ирина Хакамада"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="for-whom" className="bg-muted py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl md:text-5xl text-center mb-16">
            Этот курс для вас, если вы
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-none bg-background">
              <CardContent className="p-8 space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon name="Check" className="text-primary" size={24} />
                </div>
                <h3 className="text-2xl">Стремитесь к осознанности</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Хотите глубже понимать себя, свои реакции и мотивы, принимать решения из точки внутреннего спокойствия
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-none bg-background">
              <CardContent className="p-8 space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon name="Check" className="text-primary" size={24} />
                </div>
                <h3 className="text-2xl">Ищете внутреннюю опору</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Чувствуете неопределённость, нуждаетесь в инструментах для построения эмоциональной устойчивости
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-none bg-background">
              <CardContent className="p-8 space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon name="Check" className="text-primary" size={24} />
                </div>
                <h3 className="text-2xl">Готовы к глубокой работе</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Цените интеллектуальный подход, готовы инвестировать время в саморазвитие и практическое применение знаний
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-none bg-background">
              <CardContent className="p-8 space-y-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon name="Check" className="text-primary" size={24} />
                </div>
                <h3 className="text-2xl">Хотите найти смысл</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Ищете способы создавать личную значимость и смысл даже в сложные периоды жизни
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 p-8 bg-background rounded-sm">
            <h3 className="text-2xl mb-4 flex items-center gap-2">
              <Icon name="X" className="text-destructive" size={24} />
              Этот курс не для вас, если
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Вы ищете быстрые решения без глубокого анализа, предпочитаете мотивационные техники вместо системной работы, или не готовы выделить время на регулярную практику и рефлексию
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl md:text-5xl text-center mb-16">
            Какие проблемы решает курс
          </h2>

          <div className="space-y-12">
            <div className="grid md:grid-cols-[1fr,2fr] gap-6 items-start">
              <div className="flex items-center gap-3">
                <Icon name="CircleAlert" className="text-primary flex-shrink-0" size={32} />
                <h3 className="text-2xl">Тревога и неопределённость</h3>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Научитесь создавать внутреннюю стабильность независимо от внешних обстоятельств. Получите инструменты для работы с тревогой и страхом будущего
              </p>
            </div>

            <Separator />

            <div className="grid md:grid-cols-[1fr,2fr] gap-6 items-start">
              <div className="flex items-center gap-3">
                <Icon name="CircleAlert" className="text-primary flex-shrink-0" size={32} />
                <h3 className="text-2xl">Сложность выбора</h3>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Разработаете личную систему принятия решений, основанную на ваших ценностях и глубинных потребностях, а не на внешних ожиданиях
              </p>
            </div>

            <Separator />

            <div className="grid md:grid-cols-[1fr,2fr] gap-6 items-start">
              <div className="flex items-center gap-3">
                <Icon name="CircleAlert" className="text-primary flex-shrink-0" size={32} />
                <h3 className="text-2xl">Потеря смысла</h3>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Освоите методы создания личной значимости и нахождения смысла в текущем моменте, даже когда внешние ориентиры размыты
              </p>
            </div>

            <Separator />

            <div className="grid md:grid-cols-[1fr,2fr] gap-6 items-start">
              <div className="flex items-center gap-3">
                <Icon name="CircleAlert" className="text-primary flex-shrink-0" size={32} />
                <h3 className="text-2xl">Эмоциональная усталость</h3>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Построите практики восстановления ресурса, научитесь устанавливать здоровые границы и поддерживать эмоциональный баланс
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary text-secondary-foreground py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-5xl text-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl">Результаты выпускников</h2>
            
            <div className="grid md:grid-cols-3 gap-12 pt-8">
              <div className="space-y-2">
                <div className="text-5xl md:text-6xl font-bold text-primary-foreground">4 200+</div>
                <p className="text-lg text-secondary-foreground/80">участников прошли курс</p>
              </div>
              
              <div className="space-y-2">
                <div className="text-5xl md:text-6xl font-bold text-primary-foreground">92%</div>
                <p className="text-lg text-secondary-foreground/80">отмечают рост осознанности</p>
              </div>
              
              <div className="space-y-2">
                <div className="text-5xl md:text-6xl font-bold text-primary-foreground">4.9/5</div>
                <p className="text-lg text-secondary-foreground/80">средняя оценка курса</p>
              </div>
            </div>

            <div className="pt-8 max-w-3xl mx-auto space-y-6">
              <div className="flex items-start gap-4 text-left bg-background/10 p-6 rounded-sm">
                <Icon name="Quote" className="text-primary-foreground flex-shrink-0" size={32} />
                <div className="space-y-2">
                  <p className="text-lg leading-relaxed text-secondary-foreground/90">
                    «Впервые за долгое время почувствовала, что могу опираться на себя. Методика глубокая, требует работы, но результаты того стоят»
                  </p>
                  <p className="text-sm text-secondary-foreground/70">— Мария, 38 лет, руководитель проектов</p>
                </div>
              </div>

              <div className="flex items-start gap-4 text-left bg-background/10 p-6 rounded-sm">
                <Icon name="Quote" className="text-primary-foreground flex-shrink-0" size={32} />
                <div className="space-y-2">
                  <p className="text-lg leading-relaxed text-secondary-foreground/90">
                    «Курс научил меня принимать решения осознанно, не поддаваясь импульсам и страхам. Это изменило качество моей жизни»
                  </p>
                  <p className="text-sm text-secondary-foreground/70">— Алексей, 45 лет, предприниматель</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-4xl md:text-5xl text-center mb-16">
            Формат и структура курса
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <Icon name="Video" className="text-primary" size={20} />
                </div>
                <div>
                  <h3 className="text-xl mb-2">8 модулей видео-уроков</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    По 60-90 минут каждый. Доступ к материалам навсегда
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <Icon name="BookOpen" className="text-primary" size={20} />
                </div>
                <div>
                  <h3 className="text-xl mb-2">Практические упражнения</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Рабочая тетрадь с заданиями для самостоятельной работы
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <Icon name="Users" className="text-primary" size={20} />
                </div>
                <div>
                  <h3 className="text-xl mb-2">Закрытое сообщество</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Поддержка единомышленников и обмен опытом
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <Icon name="MessageCircle" className="text-primary" size={20} />
                </div>
                <div>
                  <h3 className="text-xl mb-2">Еженедельные вебинары Q&A</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Разбор ваших вопросов и сложных кейсов
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <Icon name="FileText" className="text-primary" size={20} />
                </div>
                <div>
                  <h3 className="text-xl mb-2">Дополнительные материалы</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Статьи, исследования, рекомендации по теме курса
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                  <Icon name="Award" className="text-primary" size={20} />
                </div>
                <div>
                  <h3 className="text-xl mb-2">Сертификат о прохождении</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    После завершения всех модулей и практических заданий
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="price" className="bg-muted py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center space-y-8">
            <h2 className="text-4xl md:text-5xl">
              Начните путь к внутренней ясности
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              8 недель глубокой работы над собой под руководством эксперта. Старт нового потока — 3 февраля 2026
            </p>

            <div className="bg-background p-8 md:p-12 rounded-sm max-w-md mx-auto space-y-6">
              <div className="space-y-2">
                <div className="text-sm text-muted-foreground uppercase tracking-wide">Инвестиция в себя</div>
                <div className="text-5xl font-bold">47 000 ₽</div>
                <div className="text-muted-foreground">
                  Рассрочка 4 платежа по 12 000 ₽
                </div>
              </div>

              <Separator />

              <ul className="space-y-3 text-left text-muted-foreground">
                <li className="flex items-start gap-3">
                  <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span>8 модулей с практическими заданиями</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span>Доступ к материалам навсегда</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span>8 живых вебинаров с разбором вопросов</span>
                </li>
                <li className="flex items-start gap-3">
                  <Icon name="Check" className="text-primary flex-shrink-0 mt-1" size={20} />
                  <span>Закрытое сообщество участников</span>
                </li>
              </ul>

              <Button 
                size="lg" 
                className="w-full text-lg py-6 bg-primary hover:bg-primary/90"
              >
                Записаться на курс
              </Button>

              <p className="text-sm text-muted-foreground">
                Гарантия возврата средств в течение 14 дней
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t py-12">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>© 2026 Конструктор счастья. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

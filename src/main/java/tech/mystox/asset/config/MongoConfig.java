package tech.mystox.asset.config;

import org.springframework.beans.factory.BeanFactory;
import org.springframework.beans.factory.NoSuchBeanDefinitionException;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.mongodb.MongoDbFactory;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.SimpleMongoClientDbFactory;
import org.springframework.data.mongodb.core.convert.*;
import org.springframework.data.mongodb.core.mapping.MongoMappingContext;

import java.net.UnknownHostException;

/**
 * Created by mystoxlol on 2018/8/1, 14:57.
 * company: kongtrolink
 * description:
 * update record: 2.0+版本
 */
@Configuration
public class MongoConfig {
    @Value("${mongodb.uri}")
    private String uri;

    @Bean
    public MongoTemplate mongoTemplate(MongoDbFactory mongoDbFactory, MappingMongoConverter converter) throws Exception {

        //额外连接参数设置
        return new MongoTemplate(mongoDbFactory, converter);
    }

    @Bean
    MongoDbFactory mongoDbFactory() throws UnknownHostException {
        SimpleMongoClientDbFactory simpleMongoDbFactory = new SimpleMongoClientDbFactory(this.uri);
        return simpleMongoDbFactory;
    }

//    @Bean
//    MappingMongoConverter mappingMongoConverter(MongoDbFactory factory) {
//        DbRefResolver dbRefResolver = new DefaultDbRefResolver(factory);
//        return  new MappingMongoConverter(dbRefResolver, new MongoMappingContext());
//    }
//

    @Bean
    public MongoMappingContext mappingContext() {
        return new MongoMappingContext();
    }

    @Bean
    public MappingMongoConverter mappingMongoConverter(MongoDbFactory mongoDbFactory, MongoMappingContext mappingContext, BeanFactory beanFactory) {
        DbRefResolver dbRefResolver = new DefaultDbRefResolver(mongoDbFactory);
        MappingMongoConverter mappingConverter = new MappingMongoConverter(dbRefResolver, mappingContext);
        try {
            mappingConverter.setCustomConversions(beanFactory.getBean(MongoCustomConversions.class));
            mappingConverter.setTypeMapper(new DefaultMongoTypeMapper(null));
        } catch (NoSuchBeanDefinitionException ignore) {
            ignore.printStackTrace();
        }
        return mappingConverter;
    }

}

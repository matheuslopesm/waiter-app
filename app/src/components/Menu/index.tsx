import { FlatList } from 'react-native';
import { Text } from '../Text';

import { products } from '../../mocks/products';

import { Product, ProductImage, ProductDetails, Separator, AddToCartButton } from './styles';
import { formatCurrency } from '../../utils/formatCurrency';
import { PlusCircle } from '../Icons/PlusCircle';

export function Menu() {
    return (
        <FlatList
            data={products}
            style={{ marginTop: 32 }}
            contentContainerStyle={{ paddingHorizontal: 24 }}
            keyExtractor={product => product._id}
            ItemSeparatorComponent={Separator}
            renderItem={({ item: product }) => (
                <Product>
                    <ProductImage
                        source={{
                            uri: `http://192.168.2.102:3003/uploads/${product.imagePath}`,
                        }}
                    />

                    <ProductDetails>
                        <Text weight='600'>{product.name}</Text>
                        <Text size={14} color="#666" style={{ marginVertical: 8 }}>
                            {product.description}
                        </Text>
                        <Text size={14} weight='600'>{formatCurrency(product.price)}</Text>
                    </ProductDetails>

                    <AddToCartButton>
                        <PlusCircle />
                    </AddToCartButton>
                </Product>
            )}
        >
        </FlatList>
    );
}
